import heroImg from "@/assets/Foto Bangunan/Picture4.webp";
import programTpq from "@/assets/Foto Kegiatan TPQ RKI/Picture10.webp";
import programIbu from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture38.webp";
import programBapak from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture37.webp";
import gallery1 from "@/assets/Foto Kegiatan TPQ RKI/Picture11.webp";
import gallery2 from "@/assets/Foto Kegiatan TPQ RKI/Picture12.webp";
import gallery3 from "@/assets/Foto Kegiatan TPQ RKI/Picture13.webp";
import gallery4 from "@/assets/Foto Kegiatan TPQ RKI/Picture14.webp";
import gallery5 from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture37.webp";
import gallery6 from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture38.webp";
import gallery7 from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture39.webp";
import gallery8 from "@/assets/Foto Kegiatan Majelis Taklim Ibu-Ibu dan Bapak-Bapak/Picture40.webp";
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
  gallery: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
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
      "Belajar membaca Al-Qur'an, hafalan juz 'amma, akhlak, dan adab Islami bagi 150+ santri dari keluarga prasejahtera dan muallaf — gratis tanpa biaya.",
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

export const FINANCE = {
  income: 7_450_000,
  expense: 13_000_000,
  deficit: 5_550_000,
  expenseBreakdown: [
    { label: "Honor Pengajar (3 cabang)", amount: 6_000_000 },
    { label: "Sewa & Operasional Tempat", amount: 3_500_000 },
    { label: "Konsumsi & Snack Santri", amount: 1_800_000 },
    { label: "Perlengkapan Belajar (Iqro, buku, alat tulis)", amount: 1_200_000 },
    { label: "Kegiatan Insidental & Hari Besar Islam", amount: 500_000 },
  ],
};

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
    benefit: "Mendukung honor pengajar & operasional 1 kelas TPQ.",
  },
  {
    amount: 1_000_000,
    title: "DONATUR UTAMA",
    benefit: "Menutup defisit operasional dan menjaga keberlangsungan 1 cabang RKI.",
    featured: true,
  },
];

export const HISTORY = [
  {
    year: "2014",
    title: "Awal Mula",
    body: "Didirikan pada 13 September 2014 di sebuah rumah kontrakan di Denpasar, dimulai dengan 14 santri kecil dan 7 ibu jamaah.",
  },
  {
    year: "2016",
    title: "RKI 1 Berkembang",
    body: "Jumlah santri TPQ bertambah pesat. Kegiatan majelis taklim ibu menjadi rutin setiap pekan.",
  },
  {
    year: "2019",
    title: "Lahirnya RKI 2",
    body: "Cabang kedua dibuka untuk menjangkau anak-anak dhuafa di area baru di Denpasar.",
  },
  {
    year: "2021",
    title: "RKI 3 & Majelis Bapak",
    body: "Cabang ketiga berdiri. Majelis taklim bapak (yasinan) menjadi program rutin tambahan.",
  },
  {
    year: "2022",
    title: "Legalitas Yayasan",
    body: "Resmi bernaung di bawah Yayasan Dian Amal Insani (DAI) — memberi payung hukum dan tata kelola yang amanah.",
  },
  {
    year: "Hari ini",
    title: "150 Santri · 120 Jamaah · 3 Cabang",
    body: "Melayani 150 santri TPQ, 80 ibu majelis taklim, dan 40 bapak yasinan dari tiga cabang RKI di Denpasar.",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/tentang-kami", label: "Tentang Kami" },
  { to: "/program", label: "Program" },
  { to: "/transparansi", label: "Transparansi" },
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
      "Tiga program utama: TPQ Anak setiap hari kerja, Majelis Taklim Ibu setiap Sabtu, dan Yasinan Bapak setiap Kamis malam — di tiga cabang RKI.",
  },
  "/transparansi": {
    title: "Transparansi",
    description:
      "Kami terbuka tentang pemasukan, pengeluaran, dan defisit bulanan sebesar Rp5,55 juta. Setiap rupiah donasi dilaporkan dengan amanah.",
  },
  "/galeri": {
    title: "Galeri Kegiatan",
    description:
      "Dokumentasi senyum santri, kajian para ibu, yasinan bapak, dan momen kebersamaan di tiga cabang RKI Bali.",
  },
  "/donasi": {
    title: "Donasi",
    description:
      "Jadi donatur tetap mulai dari Rp50.000/bulan. Donasi melalui Bank Mandiri a.n Mery Lusiana / Ledy Yuliawati — disalurkan amanah untuk para santri.",
  },
};

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
