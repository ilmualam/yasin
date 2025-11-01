 ======================================================================
    Surah Yasin Interactive Tool
    Hak Cipta Terpelihara (C) 2025 ilmualam.com
    
    Skrip ini tidak boleh disalin, diedar, atau diguna semula
    tanpa kebenaran bertulis daripada pemilik domain.
  ======================================================================
      
const LOCAL_YASIN_DATA = {"meta":{"surah":36},"data":[{"nIn":1,"nGlobal":3746,"ar":"آية 1 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 1."},{"nIn":2,"nGlobal":3747,"ar":"آية 2 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 2."},{"nIn":3,"nGlobal":3748,"ar":"آية 3 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 3."},{"nIn":4,"nGlobal":3749,"ar":"آية 4 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 4."},{"nIn":5,"nGlobal":3750,"ar":"آية 5 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 5."},{"nIn":6,"nGlobal":3751,"ar":"آية 6 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 6."},{"nIn":7,"nGlobal":3752,"ar":"آية 7 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 7."},{"nIn":8,"nGlobal":3753,"ar":"آية 8 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 8."},{"nIn":9,"nGlobal":3754,"ar":"آية 9 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 9."},{"nIn":10,"nGlobal":3755,"ar":"آية 10 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 10."},{"nIn":11,"nGlobal":3756,"ar":"آية 11 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 11."},{"nIn":12,"nGlobal":3757,"ar":"آية 12 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 12."},{"nIn":13,"nGlobal":3758,"ar":"آية 13 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 13."},{"nIn":14,"nGlobal":3759,"ar":"آية 14 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 14."},{"nIn":15,"nGlobal":3760,"ar":"آية 15 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 15."},{"nIn":16,"nGlobal":3761,"ar":"آية 16 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 16."},{"nIn":17,"nGlobal":3762,"ar":"آية 17 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 17."},{"nIn":18,"nGlobal":3763,"ar":"آية 18 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 18."},{"nIn":19,"nGlobal":3764,"ar":"آية 19 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 19."},{"nIn":20,"nGlobal":3765,"ar":"آية 20 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 20."},{"nIn":21,"nGlobal":3766,"ar":"آية 21 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 21."},{"nIn":22,"nGlobal":3767,"ar":"آية 22 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 22."},{"nIn":23,"nGlobal":3768,"ar":"آية 23 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 23."},{"nIn":24,"nGlobal":3769,"ar":"آية 24 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 24."},{"nIn":25,"nGlobal":3770,"ar":"آية 25 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 25."},{"nIn":26,"nGlobal":3771,"ar":"آية 26 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 26."},{"nIn":27,"nGlobal":3772,"ar":"آية 27 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 27."},{"nIn":28,"nGlobal":3773,"ar":"آية 28 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 28."},{"nIn":29,"nGlobal":3774,"ar":"آية 29 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 29."},{"nIn":30,"nGlobal":3775,"ar":"آية 30 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 30."},{"nIn":31,"nGlobal":3776,"ar":"آية 31 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 31."},{"nIn":32,"nGlobal":3777,"ar":"آية 32 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 32."},{"nIn":33,"nGlobal":3778,"ar":"آية 33 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 33."},{"nIn":34,"nGlobal":3779,"ar":"آية 34 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 34."},{"nIn":35,"nGlobal":3780,"ar":"آية 35 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 35."},{"nIn":36,"nGlobal":3781,"ar":"آية 36 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 36."},{"nIn":37,"nGlobal":3782,"ar":"آية 37 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 37."},{"nIn":38,"nGlobal":3783,"ar":"آية 38 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 38."},{"nIn":39,"nGlobal":3784,"ar":"آية 39 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 39."},{"nIn":40,"nGlobal":3785,"ar":"آية 40 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 40."},{"nIn":41,"nGlobal":3786,"ar":"آية 41 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 41."},{"nIn":42,"nGlobal":3787,"ar":"آية 42 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 42."},{"nIn":43,"nGlobal":3788,"ar":"آية 43 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 43."},{"nIn":44,"nGlobal":3789,"ar":"آية 44 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 44."},{"nIn":45,"nGlobal":3790,"ar":"آية 45 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 45."},{"nIn":46,"nGlobal":3791,"ar":"آية 46 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 46."},{"nIn":47,"nGlobal":3792,"ar":"آية 47 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 47."},{"nIn":48,"nGlobal":3793,"ar":"آية 48 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 48."},{"nIn":49,"nGlobal":3794,"ar":"آية 49 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 49."},{"nIn":50,"nGlobal":3795,"ar":"آية 50 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 50."},{"nIn":51,"nGlobal":3796,"ar":"آية 51 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 51."},{"nIn":52,"nGlobal":3797,"ar":"آية 52 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 52."},{"nIn":53,"nGlobal":3798,"ar":"آية 53 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 53."},{"nIn":54,"nGlobal":3799,"ar":"آية 54 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 54."},{"nIn":55,"nGlobal":3800,"ar":"آية 55 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 55."},{"nIn":56,"nGlobal":3801,"ar":"آية 56 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 56."},{"nIn":57,"nGlobal":3802,"ar":"آية 57 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 57."},{"nIn":58,"nGlobal":3803,"ar":"آية 58 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 58."},{"nIn":59,"nGlobal":3804,"ar":"آية 59 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 59."},{"nIn":60,"nGlobal":3805,"ar":"آية 60 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 60."},{"nIn":61,"nGlobal":3806,"ar":"آية 61 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 61."},{"nIn":62,"nGlobal":3807,"ar":"آية 62 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 62."},{"nIn":63,"nGlobal":3808,"ar":"آية 63 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 63."},{"nIn":64,"nGlobal":3809,"ar":"آية 64 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 64."},{"nIn":65,"nGlobal":3810,"ar":"آية 65 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 65."},{"nIn":66,"nGlobal":3811,"ar":"آية 66 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 66."},{"nIn":67,"nGlobal":3812,"ar":"آية 67 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 67."},{"nIn":68,"nGlobal":3813,"ar":"آية 68 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 68."},{"nIn":69,"nGlobal":3814,"ar":"آية 69 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 69."},{"nIn":70,"nGlobal":3815,"ar":"آية 70 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 70."},{"nIn":71,"nGlobal":3816,"ar":"آية 71 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 71."},{"nIn":72,"nGlobal":3817,"ar":"آية 72 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 72."},{"nIn":73,"nGlobal":3818,"ar":"آية 73 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 73."},{"nIn":74,"nGlobal":3819,"ar":"آية 74 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 74."},{"nIn":75,"nGlobal":3820,"ar":"آية 75 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 75."},{"nIn":76,"nGlobal":3821,"ar":"آية 76 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 76."},{"nIn":77,"nGlobal":3822,"ar":"آية 77 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 77."},{"nIn":78,"nGlobal":3823,"ar":"آية 78 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 78."},{"nIn":79,"nGlobal":3824,"ar":"آية 79 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 79."},{"nIn":80,"nGlobal":3825,"ar":"آية 80 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 80."},{"nIn":81,"nGlobal":3826,"ar":"آية 81 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 81."},{"nIn":82,"nGlobal":3827,"ar":"آية 82 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 82."},{"nIn":83,"nGlobal":3828,"ar":"آية 83 (Teks Arab sebenar akan diisi di sini)","bm":"Terjemahan Bahasa Melayu ayat 83."}]};
/* ====== CONFIG ====== */
const SURAH = 36;
const AR_EDITION = 'quran-uthmani';
const MS_EDITION = 'ms.basmeih';
const CDN_BITRATE = 128;
const RECITER = 'ar.alafasy';

/* ====== STATE ====== */
let AYAH = [], VIEW = [], cur = -1;

/* ====== DOM (diletakkan dalam DOMContentLoaded) ====== */
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('ys-list');
    const audio = document.getElementById('ys-audio');
    const now = document.getElementById('ys-now');
    const btnP = document.getElementById('ys-playPause');
    const btnN = document.getElementById('ys-next');
    const btnB = document.getElementById('ys-prev');
    const q = document.getElementById('ys-search');
    const auto = document.getElementById('ys-autoplay');
    const copyS = document.getElementById('ys-copySel');
    const sites = document.querySelectorAll('.ys-site-name');
    
    if (sites.length > 0) {
        sites.forEach(site => site.textContent = location.hostname || 'laman anda');
    }

    if (!list || !audio || !btnP) {
        console.error("Elemen Teras Tool Yasin tidak ditemui. Semak ID HTML.");
        if(list) list.innerHTML = `<article class="ayah">Ralat: Gagal memuatkan komponen tool.</article>`;
        return;
    }

    /* ====== HELPERS ====== */
    const cdn = (g) => `https://cdn.islamic.network/quran/audio/${CDN_BITRATE}/${RECITER}/${g}.mp3`;
    const $el = (t, a = {}, h) => { const e = document.createElement(t); for (const k in a) e.setAttribute(k, a[k]); if (h !== undefined) e.innerHTML = h; return e; };

    function render(items) {
        list.innerHTML = '';
        items.forEach((v, i) => {
            const card = $el('article', { 'class': 'ayah', 'data-idx': i });
            card.appendChild($el('span', { 'class': 'num' }, String(v.nIn)));
            const ar = $el('div', { 'class': 'ar', dir: 'rtl', lang: 'ar' }); ar.textContent = v.arab;
            const bm = $el('div', { 'class': 'bm', lang: 'ms' }); bm.textContent = v.bm;
            const row = $el('div', { 'class': 'row' });
            
            const bP = $el('button', { 'class': 'play', 'data-idx': i }, '▶ Play Ayat Ini');
            const bC = $el('button', { 'class': 'play', 'data-copy': `${v.arab}\n\n${v.bm}` }, 'Copy');
            
            row.appendChild(bP); 
            row.appendChild(bC);
            
            card.appendChild(ar); card.appendChild(bm); card.appendChild(row);
            list.appendChild(card);
        });

        addAyahEventListeners(items);
    }

    function addAyahEventListeners(items) {
        list.querySelectorAll('.play').forEach(b => {
            const idx = parseInt(b.dataset.idx, 10);
            
            if (b.dataset.idx !== undefined) {
                b.addEventListener('click', () => playAt(idx));
            } else if (b.dataset.copy) {
                b.addEventListener('click', () => copyText(b, b.dataset.copy + `\n\n- (Dipetik dari ${location.hostname})`));
            }
        });
    }

    async function copyText(button, text) {
        try {
            await navigator.clipboard.writeText(text);
            button.textContent = 'Disalin ✓';
            setTimeout(() => button.textContent = 'Copy', 1200);
        } catch (e) { 
            try {
                const textArea = $el('textarea', {}, text);
                textArea.style.position = 'fixed'; textArea.style.top = 0; textArea.style.left = 0; textArea.style.opacity = 0;
                document.body.appendChild(textArea);
                textArea.focus(); textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                button.textContent = 'Disalin ✓';
                setTimeout(()=> button.textContent='Copy', 1200);
            } catch(err) {
                button.textContent = 'Gagal Copy';
                setTimeout(()=> button.textContent='Copy', 1200);
            }
        }
    }

    function highlight(i) {
        list.querySelectorAll('.ayah').forEach(x => x.classList.remove('active'));
        const n = list.querySelector(`.ayah[data-idx="${i}"]`);
        if (n) { n.classList.add('active'); n.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    }

    function status(i) {
        const v = VIEW[i];
        // [DIBETULKAN] Menggunakan hyphen '-' biasa untuk keselamatan maksimum
        now.textContent = v ? `Ayat ${v.nIn} - Mishary (Al-Afasy)` : 'Sedia dimainkan — pilih mana-mana ayat';
    }

    function playAt(i) {
        if (i < 0 || i >= VIEW.length) return;
        cur = i;
        const v = VIEW[i];
        audio.src = cdn(v.nGlobal);
        audio.play().catch(() => { /* user gesture needed */ });
        btnP.textContent = '⏸';
        highlight(i);
        status(i);
    }

    function toggle() {
        if (!audio.src) { playAt(0); return; }
        if (audio.paused) { audio.play(); } 
        else { audio.pause(); }
    }

    function prev() { if (VIEW.length) playAt(Math.max(0, (cur | 0) - 1)); }
    function next() { if (VIEW.length) playAt(Math.min(VIEW.length - 1, (cur | 0) + 1)); }

    function applyFilter() {
        const t = q.value.trim().toLowerCase();
        VIEW = !t ? AYAH.slice()
            : AYAH.filter(v => v.arab.includes(t) || v.bm.toLowerCase().includes(t) || ('' + v.nIn) === t);
        render(VIEW);
        cur = -1;
        now.textContent = !t ? 'Sedia dimainkan — pilih mana-mana ayat' : `Ditapis: ${VIEW.length} ayat`;
    }

    async function fetchJSON(url, ms = 12000) {
        const ctrl = new AbortController();
        const id = setTimeout(() => ctrl.abort(), ms);
        try {
            const r = await fetch(url, { signal: ctrl.signal });
            if (!r.ok) throw new Error(`Network response not ok: ${r.statusText}`);
            return await r.json();
        } finally { clearTimeout(id); }
    }

    async function fromAPI() {
        now.textContent = 'Menyambung ke API...';
        const [ar, ms] = await Promise.all([
            fetchJSON(`https://api.alquran.cloud/v1/surah/${SURAH}/${AR_EDITION}`),
            fetchJSON(`https://api.alquran.cloud/v1/surah/${SURAH}/${MS_EDITION}`)
        ]);
        if ((ar?.code !== 200 && ar?.status !== 'OK') || (ms?.code !== 200 && ms?.status !== 'OK')) {
            throw new Error('API response not OK');
        }
        const A = ar.data.ayahs, M = ms.data.ayahs;
        AYAH = A.map((a, i) => ({ nIn: a.numberInSurah, nGlobal: a.number, arab: a.text, bm: (M[i]?.text || '') }));
    }

    /* [PENGUBAHSUAIAN PENTING]
      Fungsi ini kini membaca dari 'const' di atas, bukan dari tag <script>
    */
    function fromLocalConst() {
        try {
            if (Array.isArray(LOCAL_YASIN_DATA?.data) && LOCAL_YASIN_DATA.meta?.surah === 36) {
                console.log('Data const tempatan berjaya dimuatkan.');
                return LOCAL_YASIN_DATA;
            }
        } catch (e) {
            console.error('Gagal parse data const tempatan:', e);
        }
        return null;
    }

    async function boot() {
        try {
            const local = fromLocalConst(); // Panggil fungsi yang diubah suai
            if (local && local.data.length > 0) {
                AYAH = local.data.map(x => ({ nIn: x.nIn, nGlobal: x.nGlobal, arab: x.ar, bm: x.bm }));
                if (local.data.length <= 3) {
                     console.warn('Data JSON tempatan nampaknya tidak lengkap. Anda perlu menambah baki ayat.');
                }
            } else {
                console.warn('Data const tempatan tiada atau kosong. Cuba API...');
                await fromAPI();
            }
            VIEW = AYAH.slice();
            render(VIEW);
            status(-1);
        } catch (e) {
            console.error(e);
            list.innerHTML = `<article class="ayah" style="text-align:center; color:red;">Gagal memuat data Surah Yasin. Sila semak sambungan internet anda atau data const tempatan.</article>`;
            now.textContent = "Gagal memuatkan data.";
        }
    }
    
    // event listener utama
    btnP.addEventListener('click', toggle);
    btnB.addEventListener('click', prev);
    btnN.addEventListener('click', next);
    audio.addEventListener('ended', () => { if (auto.checked) next(); else btnP.textContent = '▶'; });
    audio.addEventListener('play', () => btnP.textContent = '⏸');
    audio.addEventListener('pause', () => btnP.textContent = '▶');
    q.addEventListener('input', applyFilter);
    copyS.addEventListener('click', async () => {
        const act = document.querySelector('#yasin-app-tool .ayah.active');
        if (!act) { 
            copyS.textContent = 'Tiada Ayat Aktif';
            setTimeout(()=> copyS.textContent='Copy Ayat Pilihan', 1500);
            return; 
        }
        const idx = parseInt(act.getAttribute('data-idx'), 10), v = VIEW[idx];
        copyText(copyS, `${v.nIn}. ${v.arab}\n${v.bm}\n\n- (Dipetik dari ${location.hostname})`);
    });

    // init
    boot();
});
