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
const LOCAL_YASIN_DATA = {
  "meta": {
    "surah": 36
  },
  "data": [
    {
      "nIn": 1,
      "nGlobal": 3746,
      "ar": "يسٓ",
      "bm": "Yaa Siin."
    },
    {
      "nIn": 2,
      "nGlobal": 3747,
      "ar": "وَٱلْqurْءَانِ ٱلْحَكِيمِ",
      "bm": "Demi Al-Quran yang mengandungi hikmat-hikmat."
    },
    {
      "nIn": 3,
      "nGlobal": 3748,
      "ar": "إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ",
      "bm": "Sesungguhnya engkau (wahai Muhammad) adalah seorang dari Rasul-rasul (yang diutuskan oleh) Allah."
    },
    {
      "nIn": 4,
      "nGlobal": 3749,
      "ar": "عَلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ",
      "bm": "Yang tetap di atas jalan yang lurus (ugama Islam)."
    },
    {
      "nIn": 5,
      "nGlobal": 3750,
      "ar": "تَنزِيلَ ٱلْعَزِيزِ ٱلرَّحِيمِ",
      "bm": "Al-Quran itu, diturunkan oleh Allah Yang Maha Kuasa, lagi Maha Mengasihani."
    },
    {
      "nIn": 6,
      "nGlobal": 3751,
      "ar": "لِتُنذِرَ قَوْmًا مَّآ أُنذِرَ ءَابَآؤُهُمْ فَهُمْ غَٰfılُونَ",
      "bm": "Supaya engkau memberi peringatan dan amaran kepada kaum yang datuk neneknya telah lama tidak diberikan peringatan dan amaran; sebab itulah mereka lalai."
    },
    {
      "nIn": 7,
      "nGlobal": 3752,
      "ar": "لَقَدْ حَقَّ ٱlْqَوْلُ عَلَىٰٓ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ",
      "bm": "Demi sesungguhnya, telah tetap hukuman seksa atas kebanyakan mereka, kerana mereka tidak mahu beriman."
    },
    {
      "nIn": 8,
      "nGlobal": 3753,
      "ar": "إِنَّا جَعَلْنَا فِىٓ أَعْنَٰqıhımْ أَغْلَٰلًا فَهِىَ إِلَى ٱlْأَذْqَانِ فَهُم مُّqْمَحُونَ",
      "bm": "Sesungguhnya Kami telah memasang di leher mereka belenggu-belenggu, lalu belenggu-belenggu itu mendongakkan kepala mereka, maka mendongaklah mereka."
    },
    {
      "nIn": 9,
      "nGlobal": 3754,
      "ar": "وَجَعَلْنَا مِنۢ بَيْنِ أَيْdīhımْ سَدًّا وَمِنْ خَلْfıhımْ سَدًّا فَأَغْشَيْنَٰhُمْ فَهُمْ لَا يُbْṣırُونَ",
      "bm": "Dan Kami adakan di hadapan mereka (sejenis) sekatan (dinding) dan di belakang mereka (sejenis) sekatan (dinding); lalu Kami tutup pandangan mereka; maka dengan itu mereka tidak dapat melihat (jalan yang benar)."
    },
    {
      "nIn": 10,
      "nGlobal": 3755,
      "ar": "وَسَوَآءٌ عَلَيْhımْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُnذِرْhُمْ لَا يُؤْمِنُونَ",
      "bm": "Dan sama sahaja kepada mereka, sama ada engkau beri amaran atau engkau tidak beri amaran kepadanya, mereka tidak akan beriman."
    },
    {
      "nIn": 11,
      "nGlobal": 3756,
      "ar": "إِنَّmَا تُnذِرُ مَنِ ٱtَّbَعَ ٱlذِّkْرَ وَخَشِىَ ٱlrَّḥْمَٰنَ بِٱlْgَيْbِ ۖ فَبَshِّrْhُ bıməgْfırَةٍ وَأَjْrٍ كَرِيمٍ",
      "bm": "Sesungguhnya peringatan dan amaranmu hanya berfaedah kepada orang yang mahu menurut peringatan Al-Quran serta ia takut (melanggar perintah) Allah Yang Maha Pemurah di masa Allah tidak dilihatnya; oleh itu berilah berita gembira kepadanya dengan keampunan dan pahala yang mulia."
    },
    {
      "nIn": 12,
      "nGlobal": 3757,
      "ar": "إِنَّا نَحْنُ نُḥْyِ ٱlْمَوْtَىٰ وَنَkْتُbُ مَا qədَّmُوا۟ وَءَاثَٰrَهُمْ ۚ وَكُلَّ شَىْءٍ أَḥْṣəynَٰhُ fīٓ إِمَامٍ مُّbīnٍ",
      "bm": "Sesungguhnya Kami menghidupkan orang-orang yang mati, dan Kami tuliskan segala yang mereka telah kerjakan serta segala kesan perkataan dan perbuatan yang mereka tinggalkan. Dan (ingatlah) tiap-tiap sesuatu kami catitkan satu persatu dalam Kitab (ibu Suratan) yang jelas nyata."
    },
    {
      "nIn": 13,
      "nGlobal": 3758,
      "ar": "وَٱḍْرِبْ لَهُم مَّثَلًا أَṣْḥَٰbَ ٱlْqَرْyətı إِذْ jāٓءَهَا ٱlْمُرْسَلُونَ",
      "bm": "Dan ceritakanlah kepada mereka (wahai Muhammad), satu perbandingan, iaitu perihal penduduk sebuah bandar (Antakiah), ketika mereka didatangi oleh utusan-utusan (Kami)."
    },
    {
      "nIn": 14,
      "nGlobal": 3759,
      "ar": "إِذْ أَرْsəlْنَآ إِلَيْhımu ٱthْنَيْنِ فَكَذَّbُوهُمَا فَعَzَّzْنَا bıthālıthٍ fəqālūٓا۟ إِنَّآ إِلَيْkُم مُّرْسَلُونَ",
      "bm": "Ketika Kami mengutuskan kepada mereka dua orang utusan, lalu mereka mendustakannya; kemudian Kami kuatkan (utusan yang berdua itu) dengan (utusan) yang ketiga, lalu utusan-utusan itu berkata: Sesungguhnya kami adalah orang-orang yang diutus kepada kamu."
    },
    {
      "nIn": 15,
      "nGlobal": 3760,
      "ar": "qālُوا۟ مَآ أَntُمْ إِلَّا bəshərٌ مِّthْلُنَا وَمَآ أَنzələ ٱlrَّḥْمَٰنُ مِن شَىْءٍ إِنْ أَntُمْ إِلَّا تَkْذِبُونَ",
      "bm": "Penduduk bandar itu berkata: Kamu ini tidak lain hanyalah manusia seperti kami juga, dan (Allah) Ar-Rahman tidak sekali-kali menurunkan sesuatupun; kamu ini tidak lain hanyalah berdusta."
    },
    {
      "nIn": 16,
      "nGlobal": 3761,
      "ar": "qālُوا۟ rəbُّnَا yəʿْلَمُ إِنَّآ إِلَيْkُمْ لَمُرْسَلُونَ",
      "bm": "Utusan-utusan itu berkata: Tuhan kami mengetahui bahawa sesungguhnya kami adalah utusan-utusanNya kepada kamu."
    },
    {
      "nIn": 17,
      "nGlobal": 3762,
      "ar": "وَمَا عَلَيْنَآ إِلَّا ٱlْbəlَٰgُ ٱlْمُbīnُ",
      "bm": "Dan tugas kami tidak lain hanyalah menyampaikan (perintah-perintah Allah) dengan cara yang jelas nyata."
    },
    {
      "nIn": 18,
      "nGlobal": 3763,
      "ar": "qālūٓا۟ إِنَّا تَطəyَّrْنَا bıkُمْ ۖ لَئِن lَّmْ تَntəhُوا۟ لَنَرْjُمَنَّkُمْ وَلَيَمَسَّnَّkُم مِّنَّا عَذَاbٌ أَلِيمٌ",
      "bm": "Penduduk bandar itu berkata pula: Sesungguhnya kami merasa nahas dan malang dengan sebab kamu. Demi sesungguhnya, kalau kamu tidak berhenti (dari menjalankan tugas yang kamu katakan itu), tentulah kami akan merejam kamu, dan sudah tentu kamu akan merasai dari pihak kami azab seksa yang tidak terperi sakitnya."
    },
    {
      "nIn": 19,
      "nGlobal": 3764,
      "ar": "qālُوا۟ طَٰٓئِرُkُم مَّعَkُمْ ۚ أَئِن ذُkِّrْتُم ۚ bəlْ أَntُمْ qَوْmٌ مُّsْرِfُونَ",
      "bm": "Utusan-utusan itu berkata: Bencana kamu adalah (berpunca) dari kamu sendiri. Patutkah (kamu merasa sial) kerana kamu diberi peringatan? (Bukan kami yang membawanya) bahkan kamu adalah kaum yang melampaui batas."
    },
    {
      "nIn": 20,
      "nGlobal": 3765,
      "ar": "وَjāٓءَ مِنْ أَqْṣَا ٱlْمədīnətı rəjülٌ yəsْعَىٰ qālə yَٰqَوْmِ ٱtَّbıʿُوا۟ ٱlْمُرْسَلِينَ",
      "bm": "Dan (semasa utusan-utusan itu diancam), datanglah seorang lelaki dari hujung bandar itu dengan berlari, lalu memberi nasihat dengan katanya: Wahai kaumku! Turutlah utusan-utusan itu."
    },
    {
      "nIn": 21,
      "nGlobal": 3766,
      "ar": "ٱtَّbıʿُوا۟ مَن لَّا yəsْـٔəlُkُمْ أَjْرًا وَhُم مُّhْتَدُونَ",
      "bm": "Turutlah orang-orang yang tidak meminta kapada kamu sesuatu balasan, sedang mereka adalah orang-orang yang mendapat hidayah petunjuk."
    },
    {
      "nIn": 22,
      "nGlobal": 3767,
      "ar": "وَمَا lıə لَآ أَعْبُdُ ٱlَّذī فَطərənī وَإِلَيْhı تُرْjəʿُونَ",
      "bm": "Dan (apabila ditanya: Sudahkah engkau menerima ugama mereka? Maka jawabnya): Mengapa aku tidak menyembah Tuhan yang menciptakan daku, dan yang kepadaNyalah (sahaja) kamu semua akan dikembalikan?"
    },
    {
      "nIn": 23,
      "nGlobal": 3768,
      "ar": "ءَأَتَّxıذُ مِن dūnıhīٓ ءَالِhətan إِن yúrıdْnı ٱlrَّḥْمَٰنُ bıḍürٍّ lَّā تُgْnı عَnِّī shəfَٰʿətُhُمْ شَيْـًٔا وَلَا yunqıżūnı",
      "bm": "Patutkah aku menyembah tuhan-tuhan yang lain dari Allah? (Sudah tentu tidak patut, kerana) jika Allah Yang Maha Pemurah hendak menimpakan daku dengan sesuatu bahaya, syairan-syafaat mereka tidak dapat memberi sebarang pertolongan kepadaku, dan mereka juga tidak dapat menyelamatkan daku."
    },
    {
      "nIn": 24,
      "nGlobal": 3769,
      "ar": "إِنِّىٓ إِذًا lَّfī ضَلَٰlٍ مُّbīnٍ",
      "bm": "Sesungguhnya aku (kalau berlaku demikian), tentulah aku pada ketika itu berada dalam kesesatan yang nyata."
    },
    {
      "nIn": 25,
      "nGlobal": 3770,
      "ar": "إِنِّىٓ ءَامَntُ bırəbِّkُمْ فَٱsْمَعُونِ",
      "bm": "Sesungguhnya aku telah beriman kepada Tuhan kamu, maka dengarlah (nasihatku)."
    },
    {
      "nIn": 26,
      "nGlobal": 3771,
      "ar": "qīlə ٱdْxülı ٱlْjənَّtə ۖ qālə yَٰləytə qَوْmī yəʿْلَمُونَ",
      "bm": "(Setelah ia mati) lalu dikatakan kepadanya: Masuklah ke dalam Syurga. Ia berkata: Alangkah baiknya kalau kaumku mengetahui."
    },
    {
      "nIn": 27,
      "nGlobal": 3772,
      "ar": "bımā gəfərə lī rəbِّī وَjəʿələnī mınə ٱlْمُkْرَمِينَ",
      "bm": "Tentang perkara yang menyebabkan Tuhanku mengampunkan dosaku, dan menjadikan daku dari orang-orang yang dimuliakan."
    },
    {
      "nIn": 28,
      "nGlobal": 3773,
      "ar": "وَمَآ أَنzəlْنَا عَلَىٰ qَوْmıhī mım bəʿْdıhī mın jündٍ مِّنَ ٱlssəmāٓءِ وَmā künَّā münstılīnə",
      "bm": "Dan Kami tidak menurunkan kepada kaumnya sesudah ia (mati) sebarang tentera dari langit (untuk membinasakan mereka), dan tidak perlu Kami menurunkannya."
    },
    {
      "nIn": 29,
      "nGlobal": 3774,
      "ar": "إِن kānətْ إِلَّا ṣəyْḥətan وَٰḥıdətan fəإِذَا hُمْ xَٰmıdُونَ",
      "bm": "Sebenarnya kebinasaan mereka hanyalah dengan satu pekikan (suara) yang dahsyat, lalu mereka serta-merta mati."
    },
    {
      "nIn": 30,
      "nGlobal": 3775,
      "ar": "yَٰḥəsْرَةً عَلَى ٱlْʿıbādı ۚ مَا yəʾْtīhım mِّn rَّsūlın إِلَّا kānُوا۟ bıhī yəsْتَهْzıءُونَ",
      "bm": "Alangkah besar rasa sesal dan kecewa yang menimpa hamba-hamba (yang ingkar itu)! Tidak datang kepada mereka seorang Rasul melainkan mereka sentiasa memperolok-olokkannya."
    },
    {
      "nIn": 31,
      "nGlobal": 3776,
      "ar": "أَلَمْ yərَوْa۟ kəmْ أَhْلَkْنَا qəbْلَهُم مِّنَ ٱlْqürūnı أَنَّhُمْ إِلَيْhımْ لَا yərْjıʿُونَ",
      "bm": "Tidakkah mereka menyedari berapa banyak umat-umat (yang ingkar) yang telah Kami binasakan sebelum mereka? Umat-umat yang telah binasa itu tidak kembali lagi kepada mereka (bahkan kembali kepada Kami, untuk menerima balasan)."
    },
    {
      "nIn": 32,
      "nGlobal": 3777,
      "ar": "وَإِن kûlٌّ lَّmَّā jəmīʿٌ lَّd Rövşənə muḥْḍərُونَ",
      "bm": "Dan tidak ada satu makhlukpun melainkan (sudah tetap) semuanya akan dibawa hadir (ke hadrat Kami) untuk dihisab."
    },
    {
      "nIn": 33,
      "nGlobal": 3778,
      "ar": "وَءَايَةٌ lَّhُمُ ٱlْأَرْḍü ٱlْمَيْتətu أَḥْyəynَٰhā وَأَxْrəjْنَا mınْhā ḥəbּًا fəınhü yəʾْkülُونَ",
      "bm": "Dan dalil yang terang untuk mereka (memahami kekuasaan dan kemurahan Kami), ialah bumi yang mati; Kami hidupkan dia serta Kami keluarkan daripadanya biji-bijian, maka daripada biji-bijian itu mereka makan."
    },
    {
      "nIn": 34,
      "nGlobal": 3779,
      "ar": "وَjəʿəlْنَا fīhā jənَّٰtٍ مِّن nَّxīlٍ وَأَʿْنəٰbٍ وَfəjَّrْنَا fīhā mınə ٱlْʿüyūnı",
      "bm": "Dan Kami jadikan di bumi itu kebun-kebun kurma dan anggur, dan Kami pancarkan padanya beberapa mata air."
    },
    {
      "nIn": 35,
      "nGlobal": 3780,
      "ar": "lıyəʾْkülُوا۟ مِن thəmərıhī وَmā ʿəmılətْhü أَيْdīhımْ ۖ أَfəlā yəshْkürُونَ",
      "bm": "Supaya mereka makan dari buah-buahannya dan dari apa yang dikerjakan oleh tangan mereka; maka patutkah mereka tidak bersyukur?"
    },
    {
      "nIn": 36,
      "nGlobal": 3781,
      "ar": "sübْḥَٰnə ٱlَّذī xələqə ٱlْأَzْwَٰjə kûlləhā mımَّā tümْbıtü ٱlْأَرْḍü وَmِنْ أَntüsıhımْ وَmımَّā lā yəʿْلَمُونَ",
      "bm": "Maha Suci Tuhan yang telah menciptakan makhluk-makhluk semuanya berpasangan; sama ada dari yang ditumbuhkan oleh bumi, atau dari diri mereka, ataupun dari apa yang mereka tidak mengetahuinya."
    },
    {
      "nIn": 37,
      "nGlobal": 3782,
      "ar": "وَءَايَةٌ lَّhُمُ ٱlَّyْلُ nəsْلَxü mınْhü ٱlnhārə fəإِذَا hُم mُّẓْlımُونَ",
      "bm": "Dan lagi dalil yang terang untuk mereka (berfikir) ialah malam; Kami hilangkan siang daripadanya, maka dengan serta-merta mereka berada dalam gelap-gelita."
    },
    {
      "nIn": 38,
      "nGlobal": 3783,
      "ar": "وَٱlshَّmْsü تَjْrī lımüstəqərٍّ lَّhā ۚ ذَٰlıkə təqْدīrü ٱlْʿəzīzı ٱlْʿəlīmı",
      "bm": "Dan (sebahagian dari dalil yang tersebut ialah) matahari; ia beredar ke tempat yang ditetapkan baginya; itu adalah takdir Tuhan yang Maha Kuasa, lagi Maha Mengetahui."
    },
    {
      "nIn": 39,
      "nGlobal": 3784,
      "ar": "وَٱlْqəmərə qədَّrْنَٰhü mənāzılə ḥətَّىٰ ʿādə kəٱlْʿürْjūnı ٱlْqədīmı",
      "bm": "Dan bulan pula Kami takdirkan dia beredar melalui beberapa peringkat, sehingga di akhir peredarannya kembalilah ia berbentuk seperti tandan yang kering."
    },
    {
      "nIn": 40,
      "nGlobal": 3785,
      "ar": "لَا ٱlshَّmْsü yəmْbəgī ləhāٓ أَن tüdْrıkə ٱlْqəmərə وَlَا ٱlَّyْلُ sābıqü ٱlnhārı ۚ وَkûlٌّ fī fələkٍ yəsْbəḥُونَ",
      "bm": "(Dengan ketentuan yang demikian), matahari tidak mudah baginya mengejar bulan, dan malam pula tidak dapat mendahului siang; kerana tiap-tiap satunya beredar terapung-apung di tempat edarannya masing-masing."
    },
    {
      "nIn": 41,
      "nGlobal": 3786,
      "ar": "وَءَايَةٌ lَّhُمْ أَنَّا ḥəməlْنَا ذürِّيَّtəhُمْ fī ٱlْfülْkı ٱlْمəshْḥūnı",
      "bm": "Dan satu dalil lagi untuk mereka (insaf) ialah, Kami bawa zuriat keturunan mereka dalam bahtera yang penuh sarat."
    },
    {
      "nIn": 42,
      "nGlobal": 3787,
      "ar": "وَxələqْنَا لَهُم مِّن مِّthْlıhī mā yərْkəbُونَ",
      "bm": "Dan Kami ciptakan untuk mereka, jenis-jenis kenderaan yang sama dengannya, yang mereka dapat mengenderainya."
    },
    {
      "nIn": 43,
      "nGlobal": 3788,
      "ar": "وَإِن nَّshəʾْ nügْrıqْhُمْ فَلَا صərīxə ləhُمْ وَlā hُمْ yunqəżُونَ",
      "bm": "Dan jika Kami kehendaki, Kami tenggelamkan mereka; (kiranya Kami lakukan yang demikian) maka tidak adakah yang dapat memberi pertolongan kepada mereka, dan mereka juga tidak dapat diselamatkan."
    },
    {
      "nIn": 44,
      "nGlobal": 3789,
      "ar": "إِلَّا rəḥْمَةً مِّنَّا وَmətَٰʿًا إِلَىٰ ḥīnٍ",
      "bm": "Kecuali dengan belas kasihan dari Kami, dan sebagai pemberian (kesenangan) untuk mereka menikmati (kehidupan) hingga ke suatu masa (yang ditetapkan)."
    },
    {
      "nIn": 45,
      "nGlobal": 3790,
      "ar": "وَإِذَا qīlə ləhُمُ ٱtَّqُوا۟ مَا bəynə أَيْdīkُمْ وَmā xəlْfəكُمْ ləʿəlَّkُمْ تُرْḥəmُونَ",
      "bm": "Dan apabila dikatakan kepada mereka: Berjaga-jagalah kamu akan apa yang ada di hadapan kamu (dari urusan akhirat) dan apa yang ada di belakang kamu (dari urusan dunia), supaya kamu beroleh rahmat."
    },
    {
      "nIn": 46,
      "nGlobal": 3791,
      "ar": "وَمَا تَأْتīhım mِّنْ ءَايَةٍ مِّنْ ءَايَٰtı rəbِّhımْ إِلَّا kānُوا۟ عَnْhā مُʿْرِḍِينَ",
      "bm": "Dan (itulah tabiat mereka) tidak ada sesuatu ayat dari ayat-ayat (menerangkan kebesaran) Tuhan, yang sampai kepada mereka, melainkan mereka sentiasa berpaling daripadanya (tidak mahu menerimanya)."
    },
    {
      "nIn": 47,
      "nGlobal": 3792,
      "ar": "وَإِذَا qīlə ləhُمْ أَنfıqُوا۟ mımَّā rəzəqəkُمُ ٱllāhü qālə ٱlَّذِينَ kəfərُوا۟ lılَّذِينَ ءَامَنُوٓا۟ أَنُṭْʿımü مَن lَّوْ yəshāٓءُ ٱllāhü أَṭْʿəməhūٓ إِنْ أَntُمْ إِلَّا fī ضَلَٰlٍ مُّbīnٍ",
      "bm": "Dan apabila dikatakan kepada mereka: Dermakanlah sebahagian dari rezeki yang dikurniakan Allah kepada kamu, berkatalah orang-orang yang kafr itu kepada orang-orang yang beriman (secara mengejek-ejek): Patutkah kami memberi makan kepada orang yang jika Allah kehendaki tentulah Ia akan memberinya makan? Kamu ini tidak lain hanyalah dalam kesesatan yang nyata."
    },
    {
      "nIn": 48,
      "nGlobal": 3793,
      "ar": "وَيَقُولُونَ mətَىٰ hَٰذَا ٱlْwəʿْdُ إِن künْtُمْ ṣəٰdıqīnə",
      "bm": "Dan (apabila diberi amaran) mereka berkata: Bilakah (datangnya) janji (hari kiamat) itu, jika betul kamu orang-orang yang benar?"
    },
    {
      "nIn": 49,
      "nGlobal": 3794,
      "ar": "مَا yənْẓürُونَ إِلَّا ṣəyْḥətan وَٰḥıdətan تَأْxüżühُمْ وَhُمْ yəxıṣِّmُونَ",
      "bm": "Mereka tidak menunggu melainkan satu pekikan (sahaja) yang akan membinasakan mereka semasa mereka dalam keadaan leka bertengkar (mengenai hal-hal dunia)."
    },
    {
      "nIn": 50,
      "nGlobal": 3795,
      "ar": "فَلَا yəsْtəṭīʿُونَ tَوْṣıyətan وَlَآ إِلَىٰٓ أَhْلıhımْ yərْjıʿُونَ",
      "bm": "Maka dengan itu, mereka tidak sempat membuat sebarang pesanan (wasiat), dan (juga) mereka tidak dapat kembali kepada kaum keluarganya."
    },
    {
      "nIn": 51,
      "nGlobal": 3796,
      "ar": "وَنُfıxə fī ٱlṣُّūrı fəإِذَا هُم مِّنَ ٱlْأَjْdāthı إِلَىٰ rəbِّhımْ yənْsılُونَ",
      "bm": "Dan sudah tentu akan ditiup sangkakala (menghidupkan orang-orang yang telah mati); maka dengan serta-merta mereka keluar dari kubur masing-masing dengan segera kepada Tuhan mereka."
    },
    {
      "nIn": 52,
      "nGlobal": 3797,
      "ar": "qālُوا۟ yَٰwəyْلənā məm bəʿəthənā مِن مَّrْqədınā ۜ ۗ hāżā mā wəʿədə ٱlrَّḥْمَٰنُ وَṣədəqə ٱlْمُرْسَلُونَ",
      "bm": "Mereka berkata: Aduhai celakanya kami! Siapakah yang membangkitkan kami dari kubur tempat tidur kami? (Lalu dikatakan kepada mereka): Inilah dia apa yang telah dijanjikan oleh Allah Yang Maha Pemurah, dan benarlah (apa yang telah disampaikan oleh) Rasul-rasul(Nya)."
    },
    {
      "nIn": 53,
      "nGlobal": 3798,
      "ar": "إِن kānətْ إِلَّا ṣəyْḥətan وَٰḥıdətan fəإِذَا hُمْ jəmīʿٌ lَّd Rövşənə muḥْḍərُونَ",
      "bm": "Hanyalah dengan berlakunya satu pekikan (tiupan sangkakala), maka dengan serta merta mereka semuanya dibawa hadir (ke hadrat Kami) untuk dihisab."
    },
    {
      "nIn": 54,
      "nGlobal": 3799,
      "ar": "fəٱlْyَوْmə لَا تُẓْلَمُ nəfْsٌ شَيْـًٔا وَlā tüğْzَوْnə إِلَّا mā künْtُمْ təʿْمَلُونَ",
      "bm": "Maka pada hari itu, tidak ada seseorang yang akan dianiaya sedikitpun, dan kamu pula tidak akan dibalas melainkan menurut apa yang kamu telah kerjakan."
    },
    {
      "nIn": 55,
      "nGlobal": 3800,
      "ar": "إِنَّ أَṣْḥَٰbَ ٱlْjənَّtı ٱlْyَوْmə fī shügülٍ فَٰkıhُونَ",
      "bm": "Sesungguhnya ahli Syurga pada hari itu bersukaria dalam segala nikmat yang mereka nikmati."
    },
    {
      "nIn": 56,
      "nGlobal": 3801,
      "ar": "hُمْ وَأَzْwَٰjühُمْ fī ẓılَٰlٍ عَلَى ٱlْأَرَآئِkı mütَّkıـُٔونَ",
      "bm": "Mereka dan isteri-isteri mereka berada dalam tempat yang teduh, berehat di atas pelamin-pelamin."
    },
    {
      "nIn": 57,
      "nGlobal": 3802,
      "ar": "لَهُمْ fīhā فَٰkıhəẗٌ وَلَهُم مَّا yədَّʿُونَ",
      "bm": "Mereka beroleh dalam Syurga itu pelbagai jenis buah-buahan, dan mereka beroleh apa sahaja yang mereka kehendaki."
    },
    {
      "nIn": 58,
      "nGlobal": 3803,
      "ar": "səlَٰmٌ qَوْlًا مِّن rَّbٍّ rَّḥīmٍ",
      "bm": "(Mereka juga beroleh) ucapan salam sejahtera dari Tuhan Yang Maha Mengasihani."
    },
    {
      "nIn": 59,
      "nGlobal": 3804,
      "ar": "وَٱmْtَٰzُوا۟ ٱlْyَوْmə أَيُّhā ٱlْمüjْrımُونَ",
      "bm": "Dan (dikatakan kepada orang-orang yang kafr): Berpisahlah kamu pada hari ini, hai orang-orang yang berdosa (dari kumpulan orang-orang yang beriman)!"
    },
    {
      "nIn": 60,
      "nGlobal": 3805,
      "ar": "أَلَمْ أَعْhədْ إِلَيْkُمْ yَٰbənīٓ ءَādəmə أَن lَّا təʿْبُdُوا۟ ٱlshَّyْṭəٰnə ۖ إِنَّhū ləkُمْ عَdüwٌّ مُّbīnٌ",
      "bm": "Bukankah Aku telah perintahkan kamu wahai anak-anak Adam, supaya kamu jangan menyembah Syaitan? Sesungguhnya ia musuh yang nyata terhadap kamu!"
    },
    {
      "nIn": 61,
      "nGlobal": 3806,
      "ar": "وَأَنِ ٱʿْبُdūnī ۚ hāżā ṣırَٰṭٌ مُّsْتَقِيمٌ",
      "bm": "Dan (Aku perintahkan): Hendaklah kamu menyembahKu; inilah jalan yang lurus."
    },
    {
      "nIn": 62,
      "nGlobal": 3807,
      "ar": "وَلَقَدْ أَḍəlَّ mınْkُمْ jıbılًّا kəthīrًا ۖ أَfələmْ təkūnُوا۟ təʿْqılُونَ",
      "bm": "Dan sesungguhnya Syaitan itu telah menyesatkan golongan yang ramai dari kamu; (setelah kamu mengetahuinya) maka mengapa kamu tidak mahu menggunakan akal (untuk memikirkannya)?"
    },
    {
      "nIn": 63,
      "nGlobal": 3808,
      "ar": "hَٰżıhī jəhənَّmü ٱlَّtī künْtُمْ tūʿədُونَ",
      "bm": "Inilah api Neraka Jahannam yang telah dijanjikan kepada kamu (akibat daripada kederhakaan kamu)."
    },
    {
      "nIn": 64,
      "nGlobal": 3809,
      "ar": "ٱṣْلَوْhā ٱlْyَوْmə bımā künْtُمْ تَkْfürُونَ",
      "bm": "Rasalah kamu bakaran apinya pada hari ini, disebabkan perbuatan kufur yang kamu telah lakukan!"
    },
    {
      "nIn": 65,
      "nGlobal": 3810,
      "ar": "ٱlْyَوْmə nəxْtımü عَلَىٰٓ أَfْwَٰhıhımْ وَtükəllımünَآ أَيْdīhımْ وَtəshْhədُ أَرْjülühüm bımā kānُوا۟ yəkْsıbُونَ",
      "bm": "Pada hari ini Kami meteraikan mulut mereka (sejurus); dan (memberi peluang kepada) tangan-tangan mereka memberitahu Kami (kesalahan masing-masing), dan kaki-kaki mereka pula menjadi saksi tentang apa yang mereka telah usahakan."
    },
    {
      "nIn": 66,
      "nGlobal": 3811,
      "ar": "وَلَوْ nَshāٓءُ لَطəməsْنَا عَلَىٰٓ أَʿْyünıhımْ فَٱsْتəbəqُوا۟ ٱlṣِّrəٰṭَ فَأَنَّىٰ يُbْṣırُونَ",
      "bm": "Dan sekiranya Kami kehendaki, nescaya Kami hapuskan pandangan mata mereka (menjadikannya buta), lalu mereka berlumba-lumba mencari jalan (yang biasa mereka lalui); maka (bagaimanakah) mereka dapat melihatnya?"
    },
    {
      "nIn": 67,
      "nGlobal": 3812,
      "ar": "وَلَوْ nَshāٓءُ لَمəsəxْنَٰhُمْ عَلَىٰ məkānətıhımْ fəmَا ٱsْتəṭَٰʿُوا۟ مُḍıyًّا وَlā yərْjıʿُونَ",
      "bm": "Dan sekiranya Kami kehendaki, nescaya Kami ubah bentuk kejadian mereka (menjadi kaku) di tempat yang mereka berada padanya; maka mereka tidak dapat maraan (ke hadapan) dan juga tidak dapat kembali (ke belakang)."
    },
    {
      "nIn": 68,
      "nGlobal": 3813,
      "ar": "وَمَن nُّʿəmِّrْhü nünəkkısْhü fī ٱlْxəlْqı ۖ أَfəlā yəʿْqılُونَ",
      "bm": "Dan (hendaklah mereka ingat bahawa) sesiapa yang Kami panjangkan umurnya, Kami balikkan kembali kejadiannya (kepada keadaan serba lemah); maka mengapa mereka tidak mahu memikirkannya?"
    },
    {
      "nIn": 69,
      "nGlobal": 3814,
      "ar": "وَمَا عَلَّmْنَٰhü ٱlshِّʿْرَ وَmā yəmْbəgī ləhūٓ ۚ إِنْ hūwə إِلَّا żıqْrٌ وَqurْءَانٌ مُّbīnٌ",
      "bm": "Dan (bukanlah Nabi Muhammad itu seorang penyair) dan Kami tidak mengajarnya syair, dan kepandaian bersyair itu pula tidak sesuai baginya. (Apa yang Kami wahyukan kepadanya itu) tidak lain hanyalah ajaran (nasihat) dan Kitab Suci Al-Quran yang memberi penjelasan."
    },
    {
      "nIn": 70,
      "nGlobal": 3815,
      "ar": "lıyunżırə مَن kānə ḥəyًّا وَyəḥıqqə ٱlْqَوْlُ عَلَى ٱlْkəٰfırīnə",
      "bm": "Supaya ia memberi peringatan dan amaran kepada orang yang hidup (hatinya) dan supaya nyata tetapnya hukuman (azab) terhadap orang-orang yang kafr."
    },
    {
      "nIn": 71,
      "nGlobal": 3816,
      "ar": "أَوَلَمْ yərَوْa۟ أَنَّا xələqْنَا لَهُم مِّمَّا ʿəmılətْ أَيْdīnَآ أَنْʿəٰmًا fəhُمْ لَهَا mālıkُونَ",
      "bm": "Dan tidakkah mereka melihat bahawa Kami telah menciptakan untuk mereka binatang-binatang ternak, dari jenis-jenis yang Kami ciptakan dengan kekuasaan Kami, lalu mereka memilikinya?"
    },
    {
      "nIn": 72,
      "nGlobal": 3817,
      "ar": "وَżəlَّlْنَٰhā ləhُمْ fəmınْhā rəkūbühُمْ وَmınْhā yəʾْkülُونَ",
      "bm": "Dan Kami jinakkan binatang-binatang ternak itu untuk kegunaan mereka; maka sebahagian di antaranya menjadi kenderaan mereka, dan sebahagian lagi mereka makan."
    },
    {
      "nIn": 73,
      "nGlobal": 3818,
      "ar": "وَلَهُمْ fīhā mənَٰfıʿü وَməshārıbü ۖ أَfəlā yəshْkürُونَ",
      "bm": "Dan mereka beroleh pelbagai faedah dan kegunaan pada binatang-binatang ternak itu, dan juga beroleh minuman; maka mengapa mereka tidak mahu bersyukur?"
    },
    {
      "nIn": 74,
      "nGlobal": 3819,
      "ar": "وَٱtَّxəżُوا۟ مِن dūnı ٱllāhı ءَالِhətan lَّʿəlَّhُمْ yunṣərُونَ",
      "bm": "Dan (tidaklah mereka bersyukur) bahkan mereka mengambil benda-benda yang lain dari Allah sebagai tuhan-tuhan, kononnya supaya mereka mendapat pertolongan."
    },
    {
      "nIn": 75,
      "nGlobal": 3820,
      "ar": "لَا yəsْtəṭīʿُونَ nəṣْرَهُمْ وَhُمْ ləhُمْ jündٌ مُّḥْḍərُونَ",
      "bm": "Benda-benda yang mereka sembah itu tidak dapat sama sekali menolong mereka, sedang mereka (pemuja-pemuja itu) menjadi tentera yang disiapkan (untuk menjaga dan membelanya) atau (sebaliknya) benda-benda itu akan dibawa hadir (pada hari kiamat) sebagai tentera (saksi) terhadap mereka."
    },
    {
      "nIn": 76,
      "nGlobal": 3821,
      "ar": "فَلَا yəḥْzünْkə qَوْlühُمْ ۘ إِنَّا nəʿْلَمُ mā yüsırrُونَ وَmā yuʿlınُونَ",
      "bm": "Maka janganlah engkau (wahai Muhammad) berdukacita disebabkan tuduhan-tuduhan mereka (terhadapmu). Sesungguhnya Kami sedia mengetahui apa yang mereka sembunyikan dan apa yang mereka nyatakan."
    },
    {
      "nIn": 77,
      "nGlobal": 3822,
      "ar": "أَوَلَمْ yərə ٱlْإınsَٰnü أَنَّا xələqْنَٰhü مِن nُّṭْfətan fəإِذَا hūwə xəṣīmٌ مُّbīnٌ",
      "bm": "Tidakkah manusia itu melihat dan mengetahui, bahawa Kami telah menciptakannya dari (setitis) air benih? Dalam pada itu (setelah ia sempurna kejadiannya), tiba-tiba ia menjadi seorang pembantah yang terang jelas bantahannya (mengenai kekuasaan Kami menghidupkannya semula)."
    },
    {
      "nIn": 78,
      "nGlobal": 3823,
      "ar": "وَضərəbə لَنَا مَثَلًا وَnəsıə xəlْqəhū ۖ qālə مَن yuhْyِ ٱlْʿıẓَٰmə وَhıə rəmīmٌ",
      "bm": "Serta ia mengemukakan satu misal perbandingan kepada Kami (tentang kekuasaan itu), dan ia pula lupakan keadaan Kami menciptakannya sambil ia bertanya: Siapakah yang dapat menghidupkan tulang-tulang yang telah hancur seperti debu?"
    },
    {
      "nIn": 79,
      "nGlobal": 3824,
      "ar": "qülْ yuḥْyīhā ٱlَّذīٓ أənshəأَهَآ أَwَّlə mərrötan ۖ وَhūwə bıküllı xəlْqın ʿəlīmٌ",
      "bm": "Katakanlah: Tulang-tulang yang hancur itu akan dihidupkan oleh Tuhan yang telah menciptakannya pada awal mula wujudnya; dan Ia Maha Mengetahui akan segala keadaan makhluk-makhluk (yang diciptakanNya)."
    },
    {
      "nIn": 80,
      "nGlobal": 3825,
      "ar": "ٱlَّذī jəʿələ ləkُم مِّنَ ٱlshَّjərı ٱlْأَxْḍərı nārًا fəإِذَآ أَntüm mِّnْhü tūqıdُونَ",
      "bm": "Tuhan yang telah menjadikan untuk kamu api dari pokok-pokok yang hijau, maka kamu pun sentiasa menyalakan api dari pokok-pokok itu."
    },
    {
      "nIn": 81,
      "nGlobal": 3826,
      "ar": "أَوَلَيْsə ٱlَّذī xələqə ٱlssəmَٰwəٰtı وَٱlْأَرْḍə bıqَٰdırın ʿəlَىٰٓ أَن yəxْlüqə mısْləhüm ۚ bəlَىٰ وَhūwə ٱlْxəlَّٰqü ٱlْʿəlīmü",
      "bm": "Tidakkah diakui dan tidakkah dipercayai bahawa Tuhan yang telah menciptakan langit dan bumi (yang demikian besarnya) - berkuasa menciptakan semula manusia sebagaimana Ia menciptakan mereka dahulu? Ya! Diakui dan dipercayai berkuasa! Dan Dia lah Pencipta yang tidak ada bandinganNya, lagi Yang Maha Mengetahui."
    },
    {
      "nIn": 82,
      "nGlobal": 3827,
      "ar": "إِنَّmāٓ أَmْرühūٓ إِذَآ أَرَادَ شَيْـًٔا أَن yəqūlə ləhū kün fəyəkūnü",
      "bm": "Sesungguhnya keadaan kekuasaanNya apabila Ia menghendaki adanya sesuatu, hanyalah Ia berfirman kepada (hakikat) benda itu: Jadilah engkau!. Maka ia terus menjadi."
    },
    {
      "nIn": 83,
      "nGlobal": 3828,
      "ar": "fəsübْḥَٰnə ٱlَّذī bıyıdıhī mələkūtü kûllı shəyْءٍ وَإِلَيْhı tūrْjəʿُونَ",
      "bm": "Oleh itu akuilah kesucian Allah (dengan mengucap: Subhaanallah!) - Tuhan yang memiliki dan menguasai tiap-tiap sesuatu, dan kepadaNyalah kamu semua dikembalikan."
    }
  ]
};

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

