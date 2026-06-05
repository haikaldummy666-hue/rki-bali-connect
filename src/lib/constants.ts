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
export const ORG = {
  name: "Rumah Kajian Islami Bali",
  short: "RKI Bali",
  parent: "Yayasan Dian Amal Insani (DAI)",
  founded: "13 September 2014",
  city: "Denpasar, Bali",
  whatsapp: "6288268317901",
  whatsappDisplay: "+62 882-6831-7901",
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
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan TPQ RKI/*.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'tpq' })),
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture{37,38}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'ibu' })),
    ...(Object.values(import.meta.glob('@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture{39,40}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'bapak' })),
    ...(Object.values(import.meta.glob('@/assets/Foto Bangunan/Picture{2,3,4}.webp', { eager: true, query: '?url', import: 'default' })) as string[]).map(src => ({ src, cat: 'bangunan' }))
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
    year: "Sebelum 2014",
    title: "Lahir dari Kepedulian: Bapekis Bank Mandiri Bali",
    body: "RKI bermula dari kepedulian dua ibu yang sama-sama bekerja di Bank Mandiri Bali - Bunda Mery dan Bu Diana (Mama Dian). Melihat kondisi umat Islam di Bali yang merupakan minoritas, dengan karyawan Muslim yang tersebar di berbagai cabang dan saling tidak mengenal, keduanya membentuk Bapekis (Badan Kerohanian Islam) Bank Mandiri Bali sebagai wadah berkumpul, pengajian, dan silaturahmi. Bunda Mery aktif sebagai bendahara sekaligus seksi kegiatan, sementara Bu Diana berperan sebagai penasehat. Kegiatan Bapekis berjalan cukup lama hingga Bunda Mery memutuskan resign pada 1 Juli 2014, yang bertepatan dengan bulan Ramadan.",
  },
  {
    year: "1 Juli 2014",
    title: "Momen Awal Mula RKI",
    body: "Setelah resign, Bu Diana menghubungi Bunda Mery dan menitipkan infaq Ramadan dari Bapekis pusat Jakarta berupa Al-Qur'an, mukena, sajadah, peci, dan sarung untuk disalurkan ke perkampungan muslim yang kurang mampu. Dengan diantar mobil dan supir, Bunda Mery 'blusuk-blusuk' mencari kampung-kampung yang membutuhkan, hingga sampailah di sebuah perkampungan kos-kosan pendatang di pinggir kali. Di sana ia melihat kondisi yang sangat memprihatinkan: anak-anak tidak ada yang mengaji sama sekali, pelajaran agama di sekolah hanya seminggu sekali (kadang gurunya tidak hadir), banyak ibu yang berasal dari Bali dan mualaf, keluarga hidup 'kerja hari ini untuk makan hari ini', tinggal di kamar kos sempit (1–2 anak per kamar), dan lingkungan yang tidak mendukung pendidikan agama. Bunda Mery melaporkan: 'Bu, ini anak-anak ini nggak ngaji loh Bu… anak-anak itu buta loh sama agama nih.' Bu Diana menjawab: 'Gimana kalau kita bikin ini di sana bikin TPQ?'",
  },
  {
    year: "2014",
    title: "Pendirian TPQ & Majelis Taklim",
    body: "Karena lokasinya adalah kawasan kos-kosan, TPQ pertama ditempatkan di kamar kos yang disewa. Awalnya hanya ada 14 murid. Bunda Mery juga melihat bahwa di kampung itu sebenarnya pernah ada pengajian - tetapi hanya berupa baca Yasin bersama tanpa ada ustadz/ustadzah yang memberikan ilmu, tanpa tanya jawab, tanpa materi, dan cara baca yang belum tentu benar. Karena itu, Bunda Mery mengusulkan agar selain TPQ untuk anak-anak, juga dibuat Majelis Taklim untuk ibu-ibu, agar ada ilmu yang benar-benar disampaikan. Sejak saat itu, TPQ dan Majelis Taklim mulai berjalan. Guru ngaji diberi honorarium setiap bulan agar tetap semangat mengajar dan tidak mencari pekerjaan lain. 'Guru ngaji kan juga manusia perlu uang. Kalau nggak dikasih honor ya dia kan mencari kerjaan lain…'",
  },
  {
    year: "2014 – 2016",
    title: "Sistem Pendanaan Awal",
    body: "Pada awal berdiri, biaya operasional TPQ dan Majelis Taklim ditanggung bersama oleh rekan-rekan mantan Bapekis Bank Mandiri. Setiap bulan mereka mengumpulkan iuran (ada yang Rp100.000, ada yang Rp50.000). Rekening dibuka atas nama Bunda Mery dengan surat kuasa. Seiring waktu, banyak donatur yang pindah kerja atau pindah domisili, dan surat kuasa yang hanya berlaku 6 bulan atau 1 tahun pun habis masa berlakunya. Dampaknya, jumlah donatur terus menyusut.",
  },
  {
    year: "2014 – Sekarang",
    title: "Perkembangan RKI",
    body: "Berkat ketekunan Bunda Mery dan Bu Diana, RKI terus berkembang hingga sekarang: 3 unit TPQ untuk anak-anak (kegiatan harian), 2 Majelis Taklim Ibu-Ibu (mingguan & bulanan), serta Majelis Taklim Bapak-Bapak aktif setiap malam Jumat. Kegiatan tahunan yang paling ditekankan adalah Tahun Baru Hijriah - dengan berbagai lomba dan acara menyenangkan, agar anak-anak tahu bahwa tahun baru umat Islam adalah Hijriah, bukan Masehi, demi menanamkan identitas Islam sejak dini. Sementara Idul Adha hanya dilaksanakan kurban biasa tanpa acara besar yang membebani kas.",
  },
  {
    year: "2022",
    title: "Legalitas Yayasan",
    body: "Resmi bernaung di bawah Yayasan Dian Amal Insani (DAI) - memberi payung hukum yang sah dan tata kelola yang amanah. Setiap donasi tercatat, terlaporkan, dan tersalurkan sesuai amanah.",
  },
  {
    year: "Hari ini",
    title: "3 TPQ · 2 Majelis Taklim Ibu · Majelis Bapak Aktif",
    body: "Melayani 150+ santri TPQ, 80+ ibu majelis taklim, dan 40+ bapak yasinan dari tiga cabang RKI di Denpasar - dengan tekad yang sama seperti hari pertama: agar tidak ada lagi anak-anak yang 'buta' terhadap agamanya.",
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
