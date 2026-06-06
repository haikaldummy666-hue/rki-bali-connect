import heroImg from "@/assets/Foto Bangunan/Picture4.webp";
import programTpq from "@/assets/Foto Kegiatan TPQ RKI/Picture10.webp";
import programIbu from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture38.webp";
import programBapak from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture39.webp";

import previewTentang from "@/assets/Foto Bangunan/Picture2.webp";
import previewProgram from "@/assets/Foto Kegiatan TPQ RKI/Picture10.webp";
import previewTransparansi from "@/assets/Foto Bangunan/Picture3.webp";
import previewGaleri from "@/assets/Foto Kegiatan TPQ RKI/Picture15.webp";
import previewDonasi from "@/assets/Foto Bangunan/Picture4.webp";
import logoImg from "@/assets/logo.png";

// New TPQ photos
import tpqAnakPengajian from "@/assets/Foto Kegiatan TPQ RKI/anak_anak_pengajian.jpeg";
import tpqBaru from "@/assets/Foto Kegiatan TPQ RKI/kegiatan_tpq_rki_baru.jpeg";
import tpqBaru1 from "@/assets/Foto Kegiatan TPQ RKI/kegiatan_tpq_rki_baru1.jpeg";

// Hafalan videos
import hafalanVideo from "@/assets/Hafalan/hafalan1.mp4";

// Pengajian Anak-Anak
import pengajianFoto from "@/assets/Pengajian Anak-Anak/kegiatan_mengaji.jpeg";
import pengajianVideo1 from "@/assets/Pengajian Anak-Anak/kegiatan_mengaji1.mp4";
import pengajianVideo2 from "@/assets/Pengajian Anak-Anak/kegiatan_mengaji2.mp4";

// Praktik Sholat
import praktikSholatFoto1 from "@/assets/Praktik Sholat/praktik_sholat.jpeg";
import praktikSholatFoto2 from "@/assets/Praktik Sholat/praktik_sholat2.jpeg";
import praktikSholatVideo1 from "@/assets/Praktik Sholat/praktik_sholat1.mp4";

export const ORG = {
  name: "Rumah Kajian Islami Bali",
  short: "RKI Bali",
  parent: "Yayasan Dian Amal Insani (DAI)",
  founded: "13 September 2014",
  city: "Denpasar, Bali",
  whatsapp: "6285737215321",
  whatsappDisplay: "+62 857-3721-5321",
  email: "rkibali@yayasandai.org",
  bank: {
    name: "Bank Mandiri",
    number: "1450013372913",
    holder: "Mery Lusiana / Ledy Yuliawati",
  },
};

export const ASSETS = {
  hero: heroImg,
  logo: logoImg,
  programs: { tpq: programTpq, ibu: programIbu, bapak: programBapak },
  gallery: [
    // TPQ (existing webp photos + new jpeg photos)
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan TPQ RKI/*.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'tpq', type: 'image' as const })),
    { src: tpqAnakPengajian, cat: 'tpq', type: 'image' as const },
    { src: tpqBaru, cat: 'tpq', type: 'image' as const },
    { src: tpqBaru1, cat: 'tpq', type: 'image' as const },
    // Majelis Ibu
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture{37,38}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'ibu', type: 'image' as const })),
    // Majelis Bapak
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture{39,40}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'bapak', type: 'image' as const })),
    // Bangunan
    ...(Object.values(import.meta.glob('@/assets/Foto Bangunan/Picture{2,3,4}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'bangunan', type: 'image' as const })),
    // Hafalan (videos)
    { src: hafalanVideo, cat: 'hafalan', type: 'video' as const },
    // Pengajian Anak-Anak
    { src: pengajianFoto, cat: 'pengajian', type: 'image' as const },
    { src: pengajianVideo1, cat: 'pengajian', type: 'video' as const },
    { src: pengajianVideo2, cat: 'pengajian', type: 'video' as const },
    // Praktik Sholat
    { src: praktikSholatFoto1, cat: 'praktik-sholat', type: 'image' as const },
    { src: praktikSholatFoto2, cat: 'praktik-sholat', type: 'image' as const },
    { src: praktikSholatVideo1, cat: 'praktik-sholat', type: 'video' as const },
  ],
  preview: {
    "/tentang-kami": previewTentang,
    "/program": previewProgram,
    "/transparansi": previewTransparansi,
    "/galeri": previewGaleri,
    "/donasi": previewDonasi,
  } as Record<string, string>,
};

export const STATS = [
  { value: "150+", label: "Santri TPQ" },
  { value: "3", label: "Cabang RKI" },
  { value: "120+", label: "Jamaah Aktif" },
  { value: "Sejak 2014", label: "Berkhidmat" },
];

export const PROGRAMS = [
  {
    slug: "tpq",
    title: "TPQ Anak",
    short: "Pendidikan Al-Qur'an untuk anak-anak dhuafa & muallaf.",
    description:
      "Belajar membaca Al-Qur'an, hafalan juz 'amma, akhlak, dan adab Islami bagi 150+ santri dari keluarga prasejahtera dan muallaf - gratis tanpa biaya.",
    schedule: "Senin – Jumat · 15.30 – 17.00 WITA",
    image: programTpq,
    count: "150+ santri",
  },
  {
    slug: "ibu",
    title: "Majelis Taklim Ibu",
    short: "Pembinaan keimanan untuk para ibu, khususnya muallaf.",
    description:
      "Kajian tematik, tahsin Al-Qur'an, dan pembinaan keluarga sakinah bagi 80+ ibu jamaah, termasuk para muallaf yang baru memeluk Islam.",
    schedule: "Setiap Sabtu · 09.00 – 11.00 WITA",
    image: programIbu,
    count: "80+ ibu",
  },
  {
    slug: "bapak",
    title: "Majelis Taklim Bapak",
    short: "Yasinan & kajian rutin untuk bapak-bapak.",
    description:
      "Pengajian rutin, Yasinan, kajian fiqih praktis, dan silaturahmi antar jamaah bapak dari tiga cabang RKI di Denpasar.",
    schedule: "Setiap Kamis Malam · 19.30 – 21.00 WITA",
    image: programBapak,
    count: "40+ bapak",
  },
];

export const DONOR_LIST = [
  { name: "Bapak A.R.", city: "Denpasar", amount: 500_000 },
  { name: "Ibu S.N.", city: "Sanur", amount: 250_000 },
  { name: "Hamba Allah", city: "Jakarta", amount: 1_000_000 },
  { name: "Keluarga H.M.", city: "Denpasar", amount: 300_000 },
  { name: "Bapak I.W.", city: "Kuta", amount: 200_000 },
  { name: "Ibu F.A.", city: "Surabaya", amount: 500_000 },
  { name: "Hamba Allah", city: "Bandung", amount: 150_000 },
  { name: "Bapak D.S.", city: "Denpasar", amount: 750_000 },
];

export const TIERS = [
  {
    amount: 50_000,
    title: "SAHABAT",
    benefit: "Menyediakan perlengkapan belajar untuk 1 santri (Iqro, buku tulis, dan alat tulis).",
  },
  {
    amount: 100_000,
    title: "PENGGERAK",
    benefit: "Mendukung kebutuhan operasional 1 santri selama 1 bulan.",
  },
  {
    amount: 250_000,
    title: "PEMBINA",
    benefit: "Mendukung pembinaan mingguan 1 majelis taklim.",
  },
  {
    amount: 500_000,
    title: "PENGASUH",
    benefit: "Mendukung honor pengajar dan operasional 1 kelas TPQ.",
  },
  {
    amount: 1_000_000,
    title: "DONATUR UTAMA",
    benefit: "Menjaga keberlangsungan 1 cabang RKI secara penuh.",
    featured: true,
  },
];

export const HISTORY = [
  {
    year: "Pra-2014",
    title: "Latar Belakang & Cikal Bakal",
    body: "Rumah Kajian Islami (RKI) Bali lahir dari inisiatif sosial keagamaan yang diprakarsai oleh dua karyawan Muslim Bank Mandiri Bali, yaitu Ibu Mery Lusiana (Bunda Mery) dan Ibu Diana (Mama Dian). Kepedulian mereka bermula dari kenyataan bahwa umat Islam di Bali merupakan kelompok minoritas, dengan karyawan Muslim yang tersebar di berbagai cabang sehingga sulit saling mengenal dan bertemu. Menjawab kondisi tersebut, keduanya membentuk Bapekis (Badan Kerohanian Islam) Bank Mandiri Bali sebagai wadah resmi untuk kegiatan pengajian, pembinaan rohani, dan penguatan silaturahmi antar-karyawan. Bunda Mery dipercaya sebagai bendahara dan seksi kegiatan, sedangkan Bu Diana berperan sebagai penasehat. Kegiatan Bapekis berlangsung secara konsisten hingga Bunda Mery memutuskan untuk mengakhiri masa kerjanya di Bank Mandiri pada 1 Juli 2014, sebuah momentum yang kemudian menjadi titik awal berdirinya RKI.",
  },
  {
    year: "1 Juli 2014",
    title: "Titik Tolak Pendirian",
    body: "Pasca-resign, Bu Diana menyampaikan amanah dari Bapekis pusat Jakarta berupa paket infaq Ramadan yang terdiri dari Al-Qur'an, mukena, sajadah, peci, dan sarung, untuk disalurkan kepada komunitas muslim prasejahtera. Meskipun telah tidak aktif di Bank Mandiri, Bunda Mery dipercaya kembali untuk melakukan penyaluran karena rekam jejaknya dalam distribusi bantuan. Pendampingan dilakukan menggunakan kendaraan dan supir yang difasilitasi, sehingga proses distribusi dapat menjangkau titik-titik yang lebih luas. Dari kegiatan inilah ditemukan sebuah pemukiman padat yang menjadi cikal bakal lokasi utama kegiatan RKI hingga saat ini.",
  },
  {
    year: "2014",
    title: "Pendirian TPQ Pertama",
    body: "Hasil asesmen lapangan menemukan kondisi yang memerlukan intervensi pendidikan agama secara segera: mayoritas anak-anak di kawasan tersebut belum pernah mendapatkan bimbingan mengaji, pembelajaran agama di sekolah formal hanya tersedia satu kali seminggu (dan sering tidak terlaksana karena ketidakhadiran guru), sebagian besar keluarga berasal dari latar belakang ekonomi prasejahtera, dan terdapat cukup banyak ibu yang berstatus mualaf atau berasal dari latar belakang budaya Bali. Merespon temuan tersebut, didirikanlah Taman Pendidikan Al-Qur'an (TPQ) pertama di sebuah kamar kos yang disewa, dengan 14 murid awal.",
  },
  {
    year: "2014",
    title: "Pelengkap: Majelis Taklim Ibu",
    body: "Pada periode yang sama, kawasan tersebut sebenarnya telah memiliki kegiatan pengajian berupa pembacaan Surat Yasin secara bersama. Namun, kegiatan tersebut belum memenuhi standar pembelajaran yang efektif karena tidak dibersamai oleh pengajar, tidak ada sesi tanya jawab, tidak ada kurikulum materi, dan kualitas bacaan belum dapat dijamin. Berdasarkan hasil observasi tersebut, RKI kemudian menambahkan program Majelis Taklim khusus untuk para ibu, khususnya ibu mualaf, dengan kurikulum, pengajar tetap, serta honorarium bulanan bagi para guru agar fokus mengajar dapat terjaga.",
  },
  {
    year: "2014 – 2016",
    title: "Model Pendanaan Awal",
    body: "Pada fase awal operasional, seluruh biaya kegiatan TPQ dan Majelis Taklim ditanggung secara swadaya oleh jejaring mantan anggota Bapekis Bank Mandiri Bali, melalui iuran bulanan sukarela dengan nominal bervariasi (Rp50.000 hingga Rp100.000 per bulan). Rekening pengelolaan dibuka atas nama Bunda Mery dengan mekanisme surat kuasa. Seiring berjalannya waktu, model pendanaan ini menghadapi tantangan berupa mobilitas donatur yang tinggi, banyak yang pindah tugas atau domisili, serta masa berlaku surat kuasa yang terbatas. Kondisi ini berdampak pada menurunnya basis donatur secara bertahap.",
  },
  {
    year: "2014 – Sekarang",
    title: "Portofolio Program & Kegiatan",
    body: "Hingga saat ini, RKI mengelola tiga unit TPQ untuk anak-anak dengan jadwal harian, dua Majelis Taklim khusus ibu dengan jadwal mingguan dan bulanan, serta satu Majelis Taklim Bapak-Bapak yang aktif setiap pekan. Program unggulan tahunan difokuskan pada peringatan Tahun Baru Hijriah melalui serangkaian lomba dan kegiatan tematik yang ditujukan untuk menanamkan identitas Islam sejak usia dini, sementara peringatan Idul Adha dilaksanakan dalam format sederhana berupa kegiatan kurban. Pendekatan ini dirancang agar beban biaya operasional tetap terkendali.",
  },
  {
    year: "2022",
    title: "Penguatan Kelembagaan",
    body: "RKI secara resmi bernaung di bawah Yayasan Dian Amal Insani (DAI) sebagai badan hukum payung. Status kelembagaan ini memberikan kepastian hukum, tata kelola organisasi yang terstruktur, serta mekanisme akuntabilitas dan transparansi atas seluruh penerimaan dan penyaluran dana. Setiap kontribusi donatur tercatat dan dapat dilaporkan secara periodik sesuai standar yayasan.",
  },
  {
    year: "Hari Ini",
    title: "Cakupan Layanan Saat Ini",
    body: "RKI saat ini melayani lebih dari 150 santri TPQ, 80 jamaah Majelis Taklim Ibu, dan 40 jamaah Majelis Taklim Bapak yang tersebar di tiga cabang di wilayah Denpasar. Seluruh layanan diberikan secara gratis dengan dukungan tenaga pengajar, sarana kegiatan, dan operasional yang berkelanjutan.",
  },
];

export const CHALLENGES = {
  title: "Tantangan Pendanaan Saat Ini",
  body: "Meskipun kegiatan semakin banyak dan berkembang, jumlah donatur saat ini hanya tersisa 7–8 orang (dari sebelumnya sekitar 30 orang). Akibatnya, RKI sering mengalami defisit setiap bulan. Biaya rutin untuk guru, sewa tempat, dan operasional kegiatan terus berjalan, sementara pemasukan semakin terbatas. Kami membutuhkan dukungan Anda - baik donasi rutin, dukungan operasional, maupun penyebaran informasi - agar RKI dapat terus berdiri untuk anak-anak dan ibu-ibu yang membutuhkan.",
};

export const NAV_LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/program", label: "Program" },
  { to: "/transparansi", label: "Dampak & Penyaluran" },
  { to: "/galeri", label: "Galeri" },
  { to: "/donasi", label: "Donasi" },
] as const;

export const FOOTER_PREVIEWS: Record<string, { title: string; description: string }> = {
  "/tentang-kami": {
    title: "Tentang Kami",
    description:
      "Sejak 2014, RKI Bali menghadirkan rumah belajar Al-Qur'an gratis untuk anak dhuafa dan ibu muallaf di Denpasar. Kini bernaung di bawah Yayasan Dian Amal Insani.",
  },
  "/program": {
    title: "Program Kegiatan",
    description:
      "Tiga program utama: TPQ Anak setiap hari kerja, Majelis Taklim Ibu setiap Sabtu, dan Yasinan Bapak setiap Kamis malam - di tiga cabang RKI.",
  },
  "/transparansi": {
    title: "Dampak & Penyaluran Donasi",
    description:
      "Lihat bagaimana kontribusi Anda memberikan dampak nyata untuk pendidikan Al-Qur'an dan pembinaan umat.",
  },
  "/galeri": {
    title: "Galeri Kegiatan",
    description:
      "Dokumentasi senyum santri, kajian para ibu, yasinan bapak, dan momen kebersamaan di tiga cabang RKI Bali.",
  },
  "/donasi": {
    title: "Donasi",
    description:
      "Jadi donatur tetap mulai dari Rp50.000/bulan. Donasi melalui Bank Mandiri a.n Mery Lusiana / Ledy Yuliawati - disalurkan amanah untuk para santri.",
  },
};

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
