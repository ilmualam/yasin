/*
  ======================================================================
    Surah Yasin Interactive Tool
    Hak Cipta Terpelihara (C) 2024 ilmualam.com
    
    Skrip ini tidak boleh disalin, diedar, atau diguna semula
    tanpa kebenaran bertulis daripada pemilik domain.
  ======================================================================
*/

/* [LANGKAH 1: DATA JSON LENGKAP (83 AYAT)]
  Data ini telah ditarik dari sumber API (quran-uthmani & ms.basmeih)
  dan diformat dengan betul.
*/
const LOCAL_YASIN_DATA = {"meta":{"surah":36},"data":[{"nIn":1,"nGlobal":3746,"ar":"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ يسٓ","bm":"Yaa, Siin."},{"nIn":2,"nGlobal":3747,"ar":"وَٱلْقُرْءَانِ ٱلْحَكِيمِ","bm":"Demi Al-Quran yang mengandungi hikmat-hikmat dan kebenaran yang tetap kukuh,"},{"nIn":3,"nGlobal":3748,"ar":"إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ","bm":"Sesungguhnya engkau (wahai Muhammad adalah seorang Rasul) dari Rasul-rasul yang telah diutus,"},{"nIn":4,"nGlobal":3749,"ar":"عَلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ","bm":"Yang tetap di atas jalan yang lurus (ugama Islam)."},{"nIn":5,"nGlobal":3750,"ar":"تَنزِيلَ ٱلْعَزِيزِ ٱلرَّحِيمِ","bm":"Al-Quran itu, diturunkan oleh Allah Yang Maha Kuasa, lagi Maha Mengasihani,"},{"nIn":6,"nGlobal":3751,"ar":"لِتُنذِرَ قَوْمًۭا مَّآ أُنذِرَ ءَابَآؤُهُمْ فَهُمْ غَٰفِلُونَ","bm":"Supaya engkau memberi peringatan dan amaran kepada kaum yang datuk neneknya telah lama tidak diberikan peringatan dan amaran; sebab itulah mereka lalai."},{"nIn":7,"nGlobal":3752,"ar":"لَقَدْ حَقَّ ٱلْقَوْلُ عَلَىٰٓ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ","bm":"Demi sesungguhnya, telah tetap hukuman seksa atas kebanyakan mereka, kerana mereka tidak mahu beriman."},{"nIn":8,"nGlobal":3753,"ar":"إِنَّا جَعَلْنَا فِىٓ أَعْنَٰقِهِمْ أَغْلَٰلًۭا فَهِىَ إِلَى ٱلْأَذْقَانِ فَهُم مُّقْمَحُونَ","bm":"Sesungguhnya Kami jadikan (kesombongan dan keengganan mereka tunduk kepada kebenaran sebagai) belenggu yang memberkas kedua tangan mereka ke batang leher mereka; (lebarnya belenggu itu) sampai (menongkatkan) dagu mereka lalu menjadilah mereka terdongak."},{"nIn":9,"nGlobal":3754,"ar":"وَجَعَلْنَا مِنۢ بَيْنِ أَيْدِيهِمْ سَدًّۭا وَمِنْ خَلْفِهِمْ سَدًّۭا فَأَغْشَيْنَٰهُمْ فَهُمْ لَا يُبْصِرُونَ","bm":"Dan Kami jadikan (sifat tamak dan gila mereka kepada harta benda dan pangkat itu sebagai) sekatan (yang menghalang mereka daripada memandang kepada keburukan dan kesingkatan masa dunia yang ada) di hadapan mereka, dan sekatan (yang menghalang mereka daripada memikirkan azab yang ada) di belakang mereka (pada hari kiamat). lalu Kami tutup pandangan mereka; maka dengan itu, mereka tidak dapat melihat (jalan yang benar)."},{"nIn":10,"nGlobal":3755,"ar":"وَسَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ","bm":"Dan (dengan sebab itu) sama sahaja kepada mereka, engkau beri amaran atau engkau tidak beri amaran kepadanya - mereka tidak akan beriman."},{"nIn":11,"nGlobal":3756,"ar":"إِنَّمَا تُنذِرُ مَنِ ٱتَّبَعَ ٱلذِّكْرَ وَخَشِىَ ٱلرَّحْمَٰنَ بِٱلْغَيْبِ ۖ فَبَشِّرْهُ بِمَغْفِرَةٍۢ وَأَجْرٍۢ كَرِيمٍ","bm":"Sesungguhnya peringatan dan amaran (yang berkesan dan mendatangkan faedah) hanyalah yang engkau berikan kepada orang yang sedia menurut ajaran Al-Quran serta ia takut (melanggar perintah Allah) Ar-Rahman semasa ia tidak dilihat orang dan semasa ia tidak melihat azab Tuhan. Oleh itu berilah kepadanya berita yang mengembirakan dengan keampunan dan pahala yang mulia."},{"nIn":12,"nGlobal":3757,"ar":"إِنَّا نَحْنُ نُحْىِ ٱلْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا۟ وَءَاثَٰرَهُمْ ۚ وَكُلَّ شَىْءٍ أَحْصَيْنَٰهُ فِىٓ إِمَامٍۢ مُّبِينٍۢ","bm":"Sesungguhnya Kami menghidupkan orang-orang yang mati, dan Kami tuliskan segala yang mereka telah kerjakan serta segala kesan perkataan dan perbuatan yang mereka tinggalkan. Dan (ingatlah) tiap-tiap sesuatu kami catitkan satu persatu dalam Kitab (ibu Suratan) yang jelas nyata."},{"nIn":13,"nGlobal":3758,"ar":"وَٱضْرِبْ لَهُم مَّثَلًا أَصْحَٰبَ ٱلْقَرْيَةِ إِذْ جَآءَهَا ٱلْمُرْسَلُونَ","bm":"Dan ceritakanlah kepada mereka satu keadaan yang ajaib mengenai kisah penduduk sebuah bandar (yang tertentu) iaitu ketika mereka didatangi Rasul-rasul (Kami),"},{"nIn":14,"nGlobal":3759,"ar":"إِذْ أَرْسَلْنَآ إِلَيْهِمُ ٱثْنَيْنِ فَكَذَّبُوهُمَا فَعَزَّزْنَا بِثَالِثٍۢ فَقَالُوٓا۟ إِنَّآ إِلَيْكُم مُّرْسَلُونَ","bm":"Ketika Kami mengutus kepada mereka dua orang Rasul lalu mereka mendustakannya; kemudian Kami kuatkan (kedua Rasul itu) dengan Rasul yang ketiga, lalu Rasul-rasul itu berkata: ` Sesungguhnya kami ini adalah diutuskan kepada kamu '."},{"nIn":15,"nGlobal":3760,"ar":"قَالُوا۟ مَآ أَنتُمْ إِلَّا بَشَرٌۭ مِّثْلُنَا وَمَآ أَنزَلَ ٱلرَّحْمَٰنُ مِن شَىْءٍ إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ","bm":"Penduduk bandar itu menjawab: \"Kamu ini tidak lain hanyalah manusia seperti kami juga, dan Tuhan Yang Maha Pemurah tidak menurunkan sesuatupun (tentang ugama yang kamu dakwakan); Kamu ini tidak lain hanyalah berdusta\"."},{"nIn":16,"nGlobal":3761,"ar":"قَالُوا۟ رَبُّنَا يَعْلَمُ إِنَّآ إِلَيْكُمْ لَمُرْسَلُونَ","bm":"Rasul-rasul berkata: Tuhan Kami mengetahui bahawa sesungguhnya Kami adalah Rasul-rasul yang diutus kepada kamu,"},{"nIn":17,"nGlobal":3762,"ar":"وَمَا عَلَيْنَآ إِلَّا ٱلْبَلَٰغُ ٱلْمُبِينُ","bm":"\"Dan tugas Kami hanyalah menyampaikan perintah-perintahNya dengan cara yang jelas nyata\"."},{"nIn":18,"nGlobal":3763,"ar":"قَالُوٓا۟ إِنَّا تَطَيَّرْنَا بِكُمْ ۖ لَئِن لَّمْ تَنتَهُوا۟ لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌۭ","bm":"Penduduk bandar itu berkata pula: \"Sesungguhnya kami merasa nahas dan malang dengan sebab kamu. Demi sesungguhnya, kalau kamu tidak berhenti (dari menjalankan tugas yang kamu katakan itu), tentulah kami akan merejam kamu dan sudah tentu kamu akan merasai dari pihak kami azab seksa yang tidak terperi sakitnya\"."},{"nIn":19,"nGlobal":3764,"ar":"قَالُوا۟ طَٰٓئِرُكُم مَّعَكُمْ ۚ أَئِن ذُكِّرْتُم ۚ بَلْ أَنتُمْ قَوْمٌۭ مُّسْرِفُونَ","bm":"Rasul-rasul itu menjawab: \"Nahas dan malang kamu itu adalah disebabkan (kekufuran) yang ada pada kamu. Patutkah kerana kamu diberi peringatan dan nasihat pengajaran (maka kamu mengancam kami dengan apa yang kamu katakan itu)? (Kamu bukanlah orang-orang yang mahu insaf) bahkan kamu adalah kaum pelampau\"."},{"nIn":20,"nGlobal":3765,"ar":"وَجَآءَ مِنْ أَقْصَا ٱلْمَدِينَةِ رَجُلٌۭ يَسْعَىٰ قَالَ يَٰقَوْمِ ٱتَّبِعُوا۟ ٱلْمُرْسَلِينَ","bm":"Dan (semasa Rasul-rasul itu diancam), datanglah seorang lelaki dari hujung bandar itu dengan berlari, lalu memberi nasihat dengan katanya:\" Wahai kaumku! Turutlah Rasul-rasul itu -"},{"nIn":21,"nGlobal":3766,"ar":"ٱتَّبِعُوا۟ مَن لَّا يَسْـَٔلُكُمْ أَجْرًۭا وَهُم مُّهْتَدُونَ","bm":"\"Turutlah orang-orang yang tidak meminta kapada kamu sesuatu balasan, sedang mereka adalah orang-orang mandapat hidayah petunjuk\"."},{"nIn":22,"nGlobal":3767,"ar":"وَمَا لِىَ لَآ أَعْبُدُ ٱلَّذِى فَطَرَنِى وَإِلَيْهِ تُرْجَعُونَ","bm":"Dan (apabila ditanya: Sudahkah engkau menerima ugama mereka? Maka jawabnya): \"Mengapa aku tidak menyembah Tuhan yang menciptakan daku, dan yang kepadaNyalah (aku dan) kamu semua akan dikembalikan?"},{"nIn":23,"nGlobal":3768,"ar":"ءَأَتَّخِذُ مِن دُونِهِۦٓ ءَالِهَةً إِن يُرِدْنِ ٱلرَّحْمَٰنُ بِضُرٍّۢ لَّا تُغْنِ عَنِّى شَفَٰعَتُهُمْ شَيْـًۭٔا وَلَا يُنقِذُونِ","bm":"\"Patutkah aku menyembah beberapa tuhan yang lain dari Allah? (Sudah tentu tidak patut, kerana) jika Allah yang Maha Pemurah hendak menimpakan daku dengan sesuatu bahaya, mereka tidak dapat memberikan sebarang syafaat kepadaku, dan mereka juga tidak dapat menyelamatkan daku."},{"nIn":24,"nGlobal":3769,"ar":"إِنِّىٓ إِذًۭا لَّفِى ضَلَٰلٍۢ مُّبِينٍ","bm":"\"Sesungguhnya aku (kalau melakukan syirik) tentulah aku pada ketika itu berada dalam kesesatan yang nyata."},{"nIn":25,"nGlobal":3770,"ar":"إِنِّىٓ ءَامَنتُ بِرَبِّكُمْ فَٱسْمَعُونِ","bm":"\"Sesungguhnya aku telah beriman kepada Tuhan kamu, maka dengarlah (nasihatku)\",."},{"nIn":26,"nGlobal":3771,"ar":"قِيلَ ٱدْخُلِ ٱلْجَنَّةَ ۖ قَالَ يَٰلَيْتَ قَوْمِى يَعْلَمُونَ","bm":"(Setelah ia mati) lalu dikatakan kepadanya: \"Masuklah ke dalam Syurga\". Ia berkata; \"Alangkah baiknya kalau kaumku mengetahui -"},{"nIn":27,"nGlobal":3772,"ar":"بِمَا غَفَرَ لِى رَبِّى وَجَعَلَنِى مِنَ ٱلْمُكْرَمِينَ","bm":"\"Tentang perkara yang menyebabkan daku diampunkan oleh Tuhanku, serta dijadikannya daku dari orang-orang yang dimuliakan\"."},{"nIn":28,"nGlobal":3773,"ar":"۞ وَمَآ أَنزَلْنَا عَلَىٰ قَوْمِهِۦ مِنۢ بَعْدِهِۦ مِن جُندٍۢ مِّنَ ٱلسَّمَآءِ وَمَا كُنَّا مُنزِلِينَ","bm":"Dan Kami tidak menurunkan kepada kaumnya sesudah ia (mati) sebarang pasukan tentera dari langit (untuk membinasakan mereka), dan tidak perlu Kami menurunkannya."},{"nIn":29,"nGlobal":3774,"ar":"إِن كَانَتْ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ فَإِذَا هُمْ خَٰمِدُونَ","bm":"(Kebinasaan mereka) hanyalah dilakukan dengan satu pekikan (yang dahsyat), maka dengan serta merta mereka semua sunyi-sepi tidak hidup lagi."},{"nIn":30,"nGlobal":3775,"ar":"يَٰحَسْرَةً عَلَى ٱلْعِبَادِ ۚ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ","bm":"Sungguh besar perasaan sesal dan kecewa yang menimpa hamba-hamba (yang mengingkari kebenaran)! Tidak datang kepada mereka seorang Rasul melainkan mereka mengejek-ejek dan memperolok-olokkannya."},{"nIn":31,"nGlobal":3776,"ar":"أَلَمْ يَرَوْا۟ كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ ٱلْقُرُونِ أَنَّهُمْ إِلَيْهِمْ لَا يَرْجِعُونَ","bm":"Tidakkah mereka mengetahui berapa banyak umat-umat yang telah Kami binasakan sebelum mereka? Umat-umat yang telah binasa itu tidak kembali lagi kepada mereka (bahkan kembali kepada Kami, untuk menerima balasan)."},{"nIn":32,"nGlobal":3777,"ar":"وَإِن كُلٌّۭ لَّمَّا جَمِيعٌۭ لَّدَيْنَا مُحْضَرُونَ","bm":"Dan tidak ada satu makhluk pun melainkan dihimpunkan ke tempat perbicaraan Kami, semuanya dibawa hadir (untuk menerima balasan)."},{"nIn":33,"nGlobal":3778,"ar":"وَءَايَةٌۭ لَّهُمُ ٱلْأَرْضُ ٱلْمَيْتَةُ أَحْيَيْنَٰهَا وَأَخْرَجْنَا مِنْهَا حَبًّۭا فَمِنْهُ يَأْكُلُونَ","bm":"Dan dalil yang terang untuk mereka (memahami kekuasaan dan kemurahan kami), ialah bumi yang mati; kami hidupkan dia serta kami keluarkan daripadanya biji-bijian, maka daripada biji-bijian itu mereka makan."},{"nIn":34,"nGlobal":3779,"ar":"وَجَعَلْنَا فِيهَا جَنَّٰتٍۢ مِّن نَّخِيلٍۢ وَأَعْنَٰبٍۢ وَفَجَّرْنَا فِيهَا مِنَ ٱلْعُيُونِ","bm":"Dan kami jadikan di bumi itu kebun-kebun kurma dan anggur, dan kami pancarkan padanya beberapa matair,"},{"nIn":35,"nGlobal":3780,"ar":"لِيَأْكُلُوا۟ مِن ثَمَرِهِۦ وَمَا عَمِلَتْهُ أَيْدِيهِمْ ۖ أَفَلَا يَشْكُرُونَ","bm":"Supaya mereka makan dari buah-buahannya dan dari apa yang dikerjakan oleh tangan mereka; maka patutkah mereka tidak bersyukur?"},{"nIn":36,"nGlobal":3781,"ar":"سُبْحَٰنَ ٱلَّذِى خَلَقَ ٱلْأَزْوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ","bm":"Maha Suci Tuhan yang telah menciptakan makhluk-makhluk semuanya berpasangan; sama ada dari yang ditumbuhkan oleh bumi, atau dari diri mereka, ataupun dari apa yang mereka tidak mengetahuinya."},{"nIn":37,"nGlobal":3782,"ar":"وَءَايَةٌۭ لَّهُمُ ٱلَّيْلُ نَسْلَخُ مِنْهُ ٱلنَّهَارَ فَإِذَا هُم مُّظْلِمُونَ","bm":"Dan lagi dalil yang terang untuk mereka (berfikir) ialah malam; Kami hilangkan siang daripadanya, maka dengan serta-merta mereka berada dalam gelap-gelita;"},{"nIn":38,"nGlobal":3783,"ar":"وَٱلشَّمْسُ تَجْرِى لِمُسْتَقَرٍّۢ لَّهَا ۚ ذَٰلِكَ تَقْدِيرُ ٱلْعَزِيزِ ٱلْعَلِيمِ","bm":"Dan (sebahagian dari dalil yang tersebut ialah) matahari; ia kelihatan beredar ke tempat yang ditetapkan baginya; itu adalah takdir Tuhan yang Maha Kuasa, lagi Maha Mengetahui;"},{"nIn":39,"nGlobal":3784,"ar":"وَٱلْقَمَرَ قَدَّرْنَٰهُ مَنَازِلَ حَتَّىٰ عَادَ كَٱلْعُرْجُونِ ٱلْقَدِيمِ","bm":"Dan bulan pula Kami takdirkan dia beredar melalui beberapa peringkat, sehingga di akhir peredarannya kelihatan kembalinya pula ke peringkat awalnya - (berbentuk melengkung) seperti tandan yang kering."},{"nIn":40,"nGlobal":3785,"ar":"لَا ٱلشَّمْسُ يَنۢبَغِى لَهَآ أَن تُدْرِكَ ٱلْقَمَرَ وَلَا ٱلَّيْلُ سَابِقُ ٱلنَّهَارِ ۚ وَكُلٌّۭ فِى فَلَكٍۢ يَسْبَحُونَ","bm":"(Dengan ketentuan yang demikian), matahari tidak mudah baginya mengejar bulan, dan malam pula tidak dapat mendahului siang; kerana tiap-tiap satunya beredar terapung-apung di tempat edarannya masing-masing."},{"nIn":41,"nGlobal":3786,"ar":"وَءَايَةٌۭ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِى ٱلْفُلْكِ ٱلْمَشْحُونِ","bm":"Dan satu dalil lagi untuk mereka (insaf) ialah, Kami membawa belayar jenis keluarga mereka dalam bahtera yang penuh sarat;"},{"nIn":42,"nGlobal":3787,"ar":"وَخَلَقْنَا لَهُم مِّن مِّثْلِهِۦ مَا يَرْكَبُونَ","bm":"Dan Kami ciptakan untuk mereka, jenis-jenis kenderaan yang sama dengannya, yang mereka dapat mengenderainya."},{"nIn":43,"nGlobal":3788,"ar":"وَإِن نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنقَذُونَ","bm":"Dan jika kami kehendaki, kami boleh tenggelamkan mereka; (kiranya Kami lakukan yang demikian) maka tidak ada yang dapat memberi pertolongan kepada mereka, dan mereka juga tidak dapat diselamatkan, -"},{"nIn":44,"nGlobal":3789,"ar":"إِلَّا رَحْمَةًۭ مِّنَّا وَمَتَٰعًا إِلَىٰ حِينٍۢ","bm":"Kecuali dengan kemurahan dari pihak Kami memberi rahmat dan kesenangan hidup kepada mereka hingga ke suatu masa."},{"nIn":45,"nGlobal":3790,"ar":"وَإِذَا قِيلَ لَهُمُ ٱتَّقُوا۟ مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ","bm":"Dan apabila dikatakan kepada mereka: \" berjaga-jagalah kamu akan apa yang ada di hadapan kamu (dari urusan-urusan hidup di dunia ini), dan apa yang ada di belakang kamu (dari huru-hara dan balasan akhirat), supaya kamu beroleh rahmat\", (mereka tidak mengindahkannya)."},{"nIn":46,"nGlobal":3791,"ar":"وَمَا تَأْتِيهِم مِّنْ ءَايَةٍۢ مِّنْ ءَايَٰتِ رَبِّهِمْ إِلَّا كَانُوا۟ عَنْهَا مُعْرِضِينَ","bm":"Dan (itulah tabiat mereka) tidak ada sesuatu keterangan yang sampai kepada mereka dari keterangan-keterangan tuhan mereka melainkan mereka selalu berpaling daripadanya (enggan menerimanya)."},{"nIn":47,"nGlobal":3792,"ar":"وَإِذَا قِيلَ لَهُمْ أَنفِقُوا۟ مِمَّا رَزَقَكُمُ ٱللَّهُ قَالَ ٱلَّذِينَ كَفَرُوا۟ لِلَّذِينَ ءَامَنُوٓا۟ أَنُطْعِمُ مَن لَّوْ يَشَآءُ ٱللَّهُ أَطْعَمَهُۥٓ إِنْ أَنتُمْ إِلَّا فِى ضَلَٰلٍۢ مُّبِينٍۢ","bm":"Dan apabila dikatakan kepada mereka:\" Dermakanlah sebahagian dari rezeki yang dikurniakan Allah kepada kamu\", berkatalah orang-orang yang kafir itu kepada orang-orang yang beriman (secara mengejek-ejek): \" Patutkah kami memberi makan kepada orang yang jika Allah kehendaki tentulah Ia akan memberinya makan? Kamu ini hanyalah berada dalam kesesatan yang nyata\"."},{"nIn":48,"nGlobal":3793,"ar":"وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ","bm":"Dan (apabila mereka diingatkan tentang huru-hara dan balasan akhirat) mereka bertanya (secara mempersenda): \" Bilakah datangnya (hari akhirat) yang dijanjikan itu? Jika betul kamu orang-orang yang benar (maka kami sedia menunggu)!\","},{"nIn":49,"nGlobal":3794,"ar":"مَا يَنظُرُونَ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ","bm":"Mereka tidak menunggu melainkan satu pekikan yang - (dengan secara mengejut) akan membinasakan mereka semasa mereka dalam keadaan leka bertengkar (merundingkan urusan dunia masing-masing)."},{"nIn":50,"nGlobal":3795,"ar":"فَلَا يَسْتَطِيعُونَ تَوْصِيَةًۭ وَلَآ إِلَىٰٓ أَهْلِهِمْ يَرْجِعُونَ","bm":"Maka dengan itu, mereka tidak berpeluang membuat sebarang pesanan (wasiat atau lainnya), dan (kalau mereka berada di luar) mereka tidak sempat kembali kepada keluarganya."},{"nIn":51,"nGlobal":3796,"ar":"وَنُفِخَ فِى ٱلصُّورِ فَإِذَا هُم مِّنَ ٱلْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ","bm":"Dan sudah tentu akan ditiupkan sangkakala (menghidupkan orang-orang yang telah mati; apabila berlaku yang demikian) maka semuanya segera bangkit keluar dari kubur masing-masing (untuk) mengadap Tuhannya."},{"nIn":52,"nGlobal":3797,"ar":"قَالُوا۟ يَٰوَيْلَنَا مَنۢ بَعَثَنَا مِن مَّرْقَدِنَا ۜ ۗ هَٰذَا مَا وَعَدَ ٱلرَّحْمَٰنُ وَصَدَقَ ٱلْمُرْسَلُونَ","bm":"(Pada ketika itu) orang-orang yang tidak percayakan hidup semula berkata: Aduhai celakanya kami! Siapakah yang membangkitkan kami dari kubur tempat tidur kami?,, (Lalu dikatakan kepada mereka): \" Inilah dia yang telah dijanjikan oleh Allah Yang Maha Pemurah dan benarlah berita yang disampaikan oleh Rasul-rasul!,"},{"nIn":53,"nGlobal":3798,"ar":"إِن كَانَتْ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ فَإِذَا هُمْ جَمِيعٌۭ لَّدَيْنَا مُحْضَرُونَ","bm":"Hanyalah dengan berlakunya satu pekikan sahaja, maka dengan serta merta mereka dihimpunkan ke tempat perbicaraan Kami, semuanya dibawa hadir (untuk menerima balasan)."},{"nIn":54,"nGlobal":3799,"ar":"فَٱلْيَوْمَ لَا تُظْلَمُ نَفْسٌۭ شَيْـًۭٔا وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ","bm":"Maka pada hari itu, tidak ada seseorang yang akan dianiaya sedikitpun, dan kamu pula tidak akan dibalas melainkan menurut amal yang kamu telah kerjakan."},{"nIn":55,"nGlobal":3800,"ar":"إِنَّ أَصْحَٰبَ ٱلْجَنَّةِ ٱلْيَوْمَ فِى شُغُلٍۢ فَٰكِهُونَ","bm":"Sesungguhnya penduduk Syurga pada hari itu, berada dalam keadaan sibuk leka menikmati kesenangan;"},{"nIn":56,"nGlobal":3801,"ar":"هُمْ وَأَزْوَٰجُهُمْ فِى ظِلَٰلٍ عَلَى ٱلْأَرَآئِكِ مُتَّكِـُٔونَ","bm":"Mereka dengan pasangan-pasangan mereka bersukaria di tempat yang teduh, sambil duduk berbaring di atas pelamin;"},{"nIn":57,"nGlobal":3802,"ar":"لَهُمْ فِيهَا فَٰكِهَةٌۭ وَلَهُم مَّا يَدَّعُونَ","bm":"Mereka beroleh dalam Syurga itu pelbagai jenis buah-buahan, dan mereka beroleh apa sahaja yang mereka kehendaki;"},{"nIn":58,"nGlobal":3803,"ar":"سَلَٰمٌۭ قَوْلًۭا مِّن رَّبٍّۢ رَّحِيمٍۢ","bm":"(Mereka juga beroleh) ucapan salam sejahtera dari Tuhan Yang Maha Mengasihani."},{"nIn":59,"nGlobal":3804,"ar":"وَٱمْتَٰزُوا۟ ٱلْيَوْمَ أَيُّهَا ٱلْمُجْرِمُونَ","bm":"Dan (sebaliknya dikatakan kepada orang-orang yang kafir): \"Berpisahlah kamu pada hari ini, hai orang-orang yang berdosa, (dari bercampur gaul dengan orang-orang yang beriman)."},{"nIn":60,"nGlobal":3805,"ar":"۞ أَلَمْ أَعْهَدْ إِلَيْكُمْ يَٰبَنِىٓ ءَادَمَ أَن لَّا تَعْبُدُوا۟ ٱلشَّيْطَٰنَ ۖ إِنَّهُۥ لَكُمْ عَدُوٌّۭ مُّبِينٌۭ","bm":"\"Bukankah Aku telah perintahkan kamu wahai anak-anak Adam, supaya kamu jangan menyembah Syaitan? Sesungguhnya ia musuh yang nyata terhadap kamu!"},{"nIn":61,"nGlobal":3806,"ar":"وَأَنِ ٱعْبُدُونِى ۚ هَٰذَا صِرَٰطٌۭ مُّسْتَقِيمٌۭ","bm":"\"Dan (Aku perintahkan): hendaklah kamu menyembahKu; inilah jalan yang lurus."},{"nIn":62,"nGlobal":3807,"ar":"وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّۭا كَثِيرًا ۖ أَفَلَمْ تَكُونُوا۟ تَعْقِلُونَ","bm":"\"Dan sesungguhnya Syaitan itu telah menyesatkan golongan yang ramai di antara kamu; (setelah kamu mengetahui akibat mereka) maka tidakkah sepatutnya kamu berfikir dan insaf?"},{"nIn":63,"nGlobal":3808,"ar":"هَٰذِهِۦ جَهَنَّمُ ٱلَّتِى كُنتُمْ تُوعَدُونَ","bm":"\"Yang kamu saksikan sekarang ialah neraka Jahannam, yang kamu selalu diancam memasukinya (kalau kamu tidak taatkan perintah Allah)."},{"nIn":64,"nGlobal":3809,"ar":"ٱصْلَوْهَا ٱلْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ","bm":"\"Rasalah kamu bakarannya pada hari ini, disebabkan perbuatan kufur yang kamu telah lakukan!\""},{"nIn":65,"nGlobal":3810,"ar":"ٱلْيَوْمَ نَخْتِمُ عَلَىٰٓ أَفْوَٰهِهِمْ وَتُكَلِّمُنَآ أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا۟ يَكْسِبُونَ","bm":"Pada waktu itu Kami meteraikan mulut mereka (sejurus); dan (memberi peluang kepada) tangan-tangan mereka memberitahu Kami (kesalahan masing-masing), dan kaki mereka pula menjadi saksi tentang apa yang mereka telah usahakan."},{"nIn":66,"nGlobal":3811,"ar":"وَلَوْ نَشَآءُ لَطَمَسْنَا عَلَىٰٓ أَعْيُنِهِمْ فَٱسْتَبَقُوا۟ ٱلصِّرَٰطَ فَأَنَّىٰ يُبْصِرُونَ","bm":"(Matahati orang-orang yang menderhaka itu rosak) dan kalau Kami kehendaki, Kami berkuasa menghapuskan bentuk dan biji mata kepala mereka menjadi rata, sehingga masing-masing menerpa mencari-cari jalan (yang biasa mereka lalui). (Kiranya dijadikan demikian) maka bagaimanakah mereka dapat melihatnya?"},{"nIn":67,"nGlobal":3812,"ar":"وَلَوْ نَشَآءُ لَمَسَخْنَٰهُمْ عَلَىٰ مَكَانَتِهِمْ فَمَا ٱسْتَطَٰعُوا۟ مُضِيًّۭا وَلَا يَرْجِعُونَ","bm":"(Kekuatan akal fikiran mereka juga tidak sihat) dan kalau kami kehendaki, kami berkuasa mangubahkan keadaan jasmani mereka (menjadi kaku beku) di tempat yang mereka berada padanya; maka dengan itu, mereka tidak dapat mara ke hadapan dan juga tidak dapat undur ke belakang."},{"nIn":68,"nGlobal":3813,"ar":"وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِى ٱلْخَلْقِ ۖ أَفَلَا يَعْقِلُونَ","bm":"Dan (hendaklah diingat bahawa) sesiapa yang Kami panjangkan umurnya, Kami balikkan kembali kejadiannya (kepada keadaan serba lemah; hakikat ini memang jelas) maka mengapa mereka tidak mahu memikirkannya?"},{"nIn":69,"nGlobal":3814,"ar":"وَمَا عَلَّمْنَٰهُ ٱلشِّعْرَ وَمَا يَنۢبَغِى لَهُۥٓ ۚ إِنْ هُوَ إِلَّا ذِكْرٌۭ وَقُرْءَانٌۭ مُّبِينٌۭ","bm":"(Nabi Muhammad bukanlah penyair) dan Kami tidak mengajarkan syair kepadanya, dan kepandaian bersyair itu pula tidak sesuai baginya. Yang Kami wahyukan kepadanya itu tidak lain melainkan nasihat pengajaran dan Kitab Suci yang memberi penerangan;"},{"nIn":70,"nGlobal":3815,"ar":"لِّيُنذِرَ مَن كَانَ حَيًّۭا وَيَحِقَّ ٱلْقَوْلُ عَلَى ٱلْكَٰفِرِينَ","bm":"Supaya ia memberi peringatan kepada orang yang sedia hidup (hatinya), dan supaya nyata tetapnya hukuman (azab) terhadap orang-orang yang kufur ingkar."},{"nIn":71,"nGlobal":3816,"ar":"أَوَلَمْ يَرَوْا۟ أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَآ أَنْعَٰمًۭا فَهُمْ لَهَا مَٰلِكُونَ","bm":"Tidakkah mereka melihat dan memikirkan, bahawa Kami telah menciptakan untuk mereka binatang-binatang ternak, di antara jenis-jenis makhluk yang telah Kami ciptakan dengan kekuasaan Kami lalu mereka memilikinya?"},{"nIn":72,"nGlobal":3817,"ar":"وَذَلَّلْنَٰهَا لَهُمْ فَمِنْهَا رَكُوبُهُمْ وَمِنْهَا يَأْكُلُونَ","bm":"Dan Kami jinakkan dia untuk kegunaan mereka; maka sebahagian di antaranya menjadi kenderaan mereka, dan sebahagian lagi mereka makan."},{"nIn":73,"nGlobal":3818,"ar":"وَلَهُمْ فِيهَا مَنَٰفِعُ وَمَشَارِبُ ۖ أَفَلَا يَشْكُرُونَ","bm":"Dan mereka beroleh berbagai faedah dan kegunaan pada binatang ternak itu dan juga beroleh minuman; maka mengapa mereka tidak mahu bersyukur?"},{"nIn":74,"nGlobal":3819,"ar":"وَٱتَّخَذُوا۟ مِن دُونِ ٱللَّهِ ءَالِهَةًۭ لَّعَلَّهُمْ يُنصَرُونَ","bm":"Dan tergamak mereka menyembah beberapa tuhan yang lain dari Allah, (dengan harapan semoga mereka mendapat pertolongan (dari makhluk-makhluk itu)."},{"nIn":75,"nGlobal":3820,"ar":"لَا يَسْتَطِيعُونَ نَصْرَهُمْ وَهُمْ لَهُمْ جُندٌۭ مُّحْضَرُونَ","bm":"Benda-benda yang mereka sembah itu tidak dapat sama sekali menolong mereka, sedang benda-benda itu sendiri menjadi tentera yang akan dibawa hadir (pada hari kiamat, untuk memberi azab seksa) kepada mereka."},{"nIn":76,"nGlobal":3821,"ar":"فَلَا يَحْزُنكَ قَوْلُهُمْ ۘ إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ","bm":"Maka janganlah engkau (wahai Muhammad) berdukacita disebabkan tuduhan-tuduhan mereka (terhadapmu). Sesungguhnya Kami sedia mengetahui apa yang mereka sembunyikan dan apa yang mereka nyatakan."},{"nIn":77,"nGlobal":3822,"ar":"أَوَلَمْ يَرَ ٱلْإِنسَٰنُ أَنَّا خَلَقْنَٰهُ مِن نُّطْفَةٍۢ فَإِذَا هُوَ خَصِيمٌۭ مُّبِينٌۭ","bm":"Tidakkah manusia itu melihat dan mengetahui, bahawa Kami telah menciptakan dia dari (setitis) air benih? Dalam pada itu (setelah Kami sempurnakan kejadiannya dan tenaga kekuatannya) maka dengan tidak semena-mena menjadilah ia seorang pembantah yang terang jelas bantahannya (mengenai kekuasaan Kami menghidupkan semula orang-orang yang mati),"},{"nIn":78,"nGlobal":3823,"ar":"وَضَرَبَ لَنَا مَثَلًۭا وَنَسِىَ خَلْقَهُۥ ۖ قَالَ مَن يُحْىِ ٱلْعِظَٰمَ وَهِىَ رَمِيمٌۭ","bm":"Serta ia mengemukakan satu misal perbandingan kepada Kami (tentang kekuasaan itu), dan ia pula lupakan keadaan Kami menciptakannya sambil ia bertanya: \"Siapakah yang dapat menghidupkan tulang-tulang yang telah hancur seperti debu?\""},{"nIn":79,"nGlobal":3824,"ar":"قُلْ يُحْيِيهَا ٱلَّذِىٓ أَنشَأَهَآ أَوَّلَ مَرَّةٍۢ ۖ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ","bm":"Katakanlah: \"Tulang-tulang yang hancur itu akan dihidupkan oleh Tuhan yang telah menciptakannya pada awal mula wujudnya; dan Ia Maha Mengetahui akan segala keadaan makhluk-makhluk (yang diciptakanNya);"},{"nIn":80,"nGlobal":3825,"ar":"ٱلَّذِى جَعَلَ لَكُم مِّنَ ٱلشَّجَرِ ٱلْأَخْضَرِ نَارًۭا فَإِذَآ أَنتُم مِّنْهُ تُوقِدُونَ","bm":"\"Tuhan yang telah menjadikan api (boleh didapati) dari pohon-pohon yang hijau basah untuk kegunaan kamu, maka kamu pun selalu menyalakan api dari pohon-pohon itu\"."},{"nIn":81,"nGlobal":3826,"ar":"أَوَلَيْسَ ٱلَّذِى خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ بِقَٰدِرٍ عَلَىٰٓ أَن يَخْلُقَ مِثْلَهُم ۚ بَلَىٰ وَهُوَ ٱلْخَلَّٰقُ ٱلْعَلِيمُ","bm":"Tidakkah diakui dan tidakkah dipercayai bahawa Tuhan yang telah menciptakan langit dan bumi (yang demikian besarnya) - berkuasa menciptakan semula manusia sebagaimana Ia menciptakan mereka dahulu? Ya! Diakui dan dipercayai berkuasa! Dan Dia lah Pencipta yang tidak ada bandinganNya, lagi Yang Maha Mengetahui."},{"nIn":82,"nGlobal":3827,"ar":"إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ","bm":"Sesungguhnya keadaan kekuasaanNya apabila Ia menghendaki adanya sesuatu, hanyalah Ia berfirman kepada (hakikat) benda itu: \" Jadilah engkau! \". Maka ia terus menjadi."},{"nIn":83,"nGlobal":3828,"ar":"فَسُبْحَٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ وَإِلَيْهِ تُرْجَعُونَ","bm":"Oleh itu akuilah kesucian Allah (dengan mengucap: Subhaanallah!) - Tuhan yang memiliki dan menguasai tiap-tiap sesuatu, dan kepadaNyalah kamu semua dikembalikan."}]};

/* [LANGKAH 2: SKRIP ENJIN (DIUBAH SUAI)]
  Skrip ini kini dimuatkan selepas DOM sedia.
*/

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
    : AYAH.filter(v =>
        (v.arab && v.arab.indexOf(t) !== -1) ||
        (v.bm && v.bm.toLowerCase().indexOf(t) !== -1) ||
        ('' + v.nIn) === t
      );
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
                if (local.data.length <= 3) { // Ini hanya amaran, tidak menghalang kod
                     console.warn('Data JSON tempatan nampaknya tidak lengkap (kurang dari 3 ayat). Anda perlu menambah baki ayat.');
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

