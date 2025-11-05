document.addEventListener('DOMContentLoaded', function() {
    // IIFE untuk elak konflik global
    (function() {
        const toolContainer = document.getElementById('surah-yasin-tool');
        if (!toolContainer) return; // Keluar jika alat tidak wujud

        const ayahListContainer = toolContainer.querySelector('#yasin-ayah-list');
        const audioPlayer = toolContainer.querySelector('#yasin-audio-player');
        const playPauseBtn = toolContainer.querySelector('#yasin-btn-play-pause');
        const prevBtn = toolContainer.querySelector('#yasin-btn-prev');
        const nextBtn = toolContainer.querySelector('#yasin-btn-next');
        const autoplayToggle = toolContainer.querySelector('#yasin-toggle-autoplay');
        const currentAyahDisplay = toolContainer.querySelector('#yasin-current-ayah-display');
        const searchInput = toolContainer.querySelector('#yasin-search-input');
        const copySelectedBtn = toolContainer.querySelector('#yasin-btn-copy-selected');
        const copyToast = toolContainer.querySelector('#yasin-copy-toast');

        const playIcon = '<svg><use href="#icon-play"></use></svg>';
        const pauseIcon = '<svg><use href="#icon-pause"></use></svg>';

        let surahData = [];
        let currentAyahIndex = 0;
        let isPlaying = false;
        let bookmarks = JSON.parse(localStorage.getItem('yasinBookmarks')) || [];

        // 1. Ambil Data
        async function fetchSurahData() {
            try {
                // Tambah 'en.transliteration' untuk padan dengan imej
                const response = await fetch('https://api.alquran.cloud/v1/surah/36/editions/ar.alafasy,ms.basmeih,en.transliteration');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                
                const arabicData = data.data[0].ayahs;
                const malayData = data.data[1].ayahs;
                const transData = data.data[2].ayahs; // Data transliterasi

                for (let i = 0; i < arabicData.length; i++) {
                    surahData.push({
                        number: arabicData[i].numberInSurah,
                        arabic: arabicData[i].text,
                        audio: arabicData[i].audio,
                        translation: malayData[i].text,
                        transliteration: transData[i].text 
                    });
                }
                renderAyahs();
                updateUI(); // Kemaskini UI dengan data ayat pertama
            } catch (error) {
                ayahListContainer.innerHTML = '<p style="color:red; text-align:center; padding:20px;">Maaf, gagal memuatkan data Surah Yasin.</p>';
                currentAyahDisplay.textContent = 'Gagal memuatkan data';
                console.error('Error fetching Surah Yasin data:', error);
            }
        }

        // 2. Papar Ayat
        function renderAyahs() {
            ayahListContainer.innerHTML = '';
            surahData.forEach((ayah, index) => {
                const ayahDiv = document.createElement('div');
                ayahDiv.className = 'yasin-ayah-card';
                ayahDiv.id = `yasin-ayah-card-${index}`;
                
                const isBookmarked = bookmarks.includes(ayah.number);

                ayahDiv.innerHTML = `
                    <div class="yasin-ayah-header">
                        <span class="yasin-ayah-number">${ayah.number}</span>
                    </div>
                    <p class="yasin-arabic">${ayah.arabic}</p>
                    <p class="yasin-transliteration">${ayah.transliteration}</p>
                    <p class="yasin-translation">${ayah.translation}</p>
                    <div class="yasin-ayah-actions">
                        <button class="yasin-ayah-btn play yasin-btn-play-ayah" data-index="${index}" aria-label="Mainkan Ayat ${ayah.number}">
                            <svg><use href="#icon-play"></use></svg>
                            <span>Play Ayat Ini</span>
                        </button>
                        <button class="yasin-ayah-btn yasin-btn-copy-ayah" data-index="${index}" aria-label="Salin Ayat ${ayah.number}">
                            <svg><use href="#icon-copy"></use></svg>
                            <span>Copy</span>
                        </button>
                        <button class="yasin-ayah-btn yasin-btn-share-ayah" data-index="${index}" aria-label="Kongsi Ayat ${ayah.number}">
                            <svg><use href="#icon-share"></use></svg>
                            <span>Share</span>
                        </button>
                        <button class="yasin-ayah-btn yasin-btn-bookmark-ayah ${isBookmarked ? 'bookmarked' : ''}" data-index="${index}" aria-label="Tanda Buku Ayat ${ayah.number}">
                            <svg><use href="${isBookmarked ? '#icon-bookmarked' : '#icon-bookmark'}"></use></svg>
                            <span>${isBookmarked ? 'Ditanda' : 'Bookmark'}</span>
                        </button>
                    </div>
                `;
                ayahListContainer.appendChild(ayahDiv);
            });
            
            // Tambah Event Listeners untuk butang dalam ayat
            toolContainer.querySelectorAll('.yasin-btn-play-ayah').forEach(btn => btn.addEventListener('click', handlePerAyahPlay));
            toolContainer.querySelectorAll('.yasin-btn-copy-ayah').forEach(btn => btn.addEventListener('click', handleCopy));
            toolContainer.querySelectorAll('.yasin-btn-share-ayah').forEach(btn => btn.addEventListener('click', handleShare));
            toolContainer.querySelectorAll('.yasin-btn-bookmark-ayah').forEach(btn => btn.addEventListener('click', handleBookmark));
        }

        // 3. Logik Pemain
        function playAyah(index) {
            if (index < 0 || index >= surahData.length) {
                stopPlayback();
                return;
            }
            
            currentAyahIndex = index;
            const ayahData = surahData[index];
            audioPlayer.src = ayahData.audio;
            audioPlayer.play().catch(e => console.warn("Audio play interrupted:", e));
            
            isPlaying = true;
            updateUI();
        }

        function pausePlayback() {
            audioPlayer.pause();
            isPlaying = false;
            updateUI();
        }

        function stopPlayback() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            isPlaying = false;
            currentAyahIndex = 0; // Balik ke ayat pertama
            updateUI();
        }

        // 4. Kemaskini UI
        function updateUI() {
            if (surahData.length === 0) return;

            const ayah = surahData[currentAyahIndex];
            
            // Pemain Utama
            playPauseBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
            playPauseBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Mainkan');
            currentAyahDisplay.textContent = `Ayat ${ayah.number} - Mishary (Al-Afasy)`;
            
            prevBtn.disabled = currentAyahIndex === 0;
            nextBtn.disabled = currentAyahIndex === surahData.length - 1;

            // Serlahkan Ayat
            toolContainer.querySelectorAll('.yasin-ayah-card').forEach((card, index) => {
                const playBtn = card.querySelector('.yasin-btn-play-ayah');
                const playBtnText = playBtn.querySelector('span');

                if (index === currentAyahIndex && isPlaying) {
                    card.classList.add('yasin-ayah-playing');
                    playBtn.innerHTML = `${pauseIcon} <span>Pause</span>`;
                    // Auto-scroll
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    card.classList.remove('yasin-ayah-playing');
                    playBtn.innerHTML = `${playIcon} <span>Play Ayat Ini</span>`;
                }
            });
        }

        // 5. Pengendali Acara (Event Handlers)
        
        // Pemain Utama
        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                pausePlayback();
            } else {
                playAyah(currentAyahIndex);
            }
        });

        nextBtn.addEventListener('click', () => {
            playAyah(currentAyahIndex + 1);
        });

        prevBtn.addEventListener('click', () => {
            playAyah(currentAyahIndex - 1);
        });

        audioPlayer.addEventListener('ended', () => {
            if (autoplayToggle.checked && currentAyahIndex < surahData.length - 1) {
                playAyah(currentAyahIndex + 1);
            } else {
                isPlaying = false;
                updateUI();
            }
        });
        
        // Butang per-ayat
        function handlePerAyahPlay(e) {
            const index = parseInt(e.currentTarget.dataset.index);
            if (index === currentAyahIndex && isPlaying) {
                pausePlayback();
            } else {
                playAyah(index);
            }
        }
        
        function getAyahTextForCopy(index) {
            const ayah = surahData[index];
            return `
Surah Yā-Sīn (Ayat ${ayah.number})

${ayah.arabic}

${ayah.transliteration}

"${ayah.translation}"

- Dipetik dari ilmualam.com
            `.trim();
        }

        function showCopyToast() {
            copyToast.classList.add('show');
            setTimeout(() => {
                copyToast.classList.remove('show');
            }, 2000);
        }

        function handleCopy(e) {
            const index = parseInt(e.currentTarget.dataset.index);
            const textToCopy = getAyahTextForCopy(index);
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyToast();
            }).catch(err => {
                console.error('Gagal menyalin:', err);
            });
        }
        
        copySelectedBtn.addEventListener('click', () => {
             const textToCopy = getAyahTextForCopy(currentAyahIndex);
             navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyToast();
            }).catch(err => {
                console.error('Gagal menyalin:', err);
            });
        });

        // --- FUNGSI BARU: SHARE ---
        function handleShare(e) {
            const index = parseInt(e.currentTarget.dataset.index);
            const ayah = surahData[index];
            const textToShare = getAyahTextForCopy(index);
            
            if (navigator.share) {
                navigator.share({
                    title: `Surah Yā-Sīn (Ayat ${ayah.number})`,
                    text: textToShare,
                    url: window.location.href // Kongsi URL halaman semasa
                }).catch(err => console.error('Error sharing:', err));
            } else {
                // Fallback untuk 'Share' - salin ke clipboard
                navigator.clipboard.writeText(textToShare).then(() => {
                    alert('Fungsi "Share" tidak disokong. Ayat telah disalin ke clipboard.');
                }).catch(err => {
                    console.error('Gagal menyalin:', err);
                });
            }
        }
        
        // --- FUNGSI BARU: BOOKMARK ---
        function handleBookmark(e) {
            const button = e.currentTarget;
            const index = parseInt(button.dataset.index);
            const ayahNumber = surahData[index].number;
            
            const bookmarkIcon = '<svg><use href="#icon-bookmark"></use></svg>';
            const bookmarkedIcon = '<svg><use href="#icon-bookmarked"></use></svg>';
            
            if (bookmarks.includes(ayahNumber)) {
                // Unbookmark
                bookmarks = bookmarks.filter(b => b !== ayahNumber);
                button.classList.remove('bookmarked');
                button.innerHTML = `${bookmarkIcon} <span>Bookmark</span>`;
            } else {
                // Bookmark
                bookmarks.push(ayahNumber);
                button.classList.add('bookmarked');
                button.innerHTML = `${bookmarkedIcon} <span>Ditanda</span>`;
            }
            // Simpan ke localStorage
            localStorage.setItem('yasinBookmarks', JSON.stringify(bookmarks));
        }

        // --- FUNGSI BARU: SEARCH ---
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            surahData.forEach((ayah, index) => {
                const card = toolContainer.querySelector(`#yasin-ayah-card-${index}`);
                if (!card) return;
                
                const translationMatch = ayah.translation.toLowerCase().includes(query);
                const numberMatch = ayah.number.toString() === query;
                const translitMatch = ayah.transliteration.toLowerCase().includes(query);
                
                if (translationMatch || numberMatch || translitMatch || query === '') {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });

        // 6. Mulakan
        fetchSurahData();

    })(); // Tamat IIFE
});
