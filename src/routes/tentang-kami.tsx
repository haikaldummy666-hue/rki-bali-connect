import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, HeartHandshake, Scale, Sparkles, TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CHALLENGES, HISTORY, ORG } from "@/lib/constants";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — RKI Bali" },
      {
        name: "description",
        content:
          "Perjalanan RKI Bali: bermula dari Bapekis Bank Mandiri Bali dan kepeduliaan Ibu Mery & Ibu Diana, hingga kini melayani 3 TPQ, 2 Majelis Taklim Ibu, dan Majelis Taklim Bapak di Denpasar.",
      },
      { property: "og:title", content: "Tentang Kami — RKI Bali" },
      {
        property: "og:description",
        content: "Kisah RKI Bali dari 2014 hingga kini, di bawah Yayasan Dian Amal Insani.",
      },
      { property: "og:url", content: "/tentang-kami" },
    ],
    links: [{ rel: "canonical", href: "/tentang-kami" }],
  }),
  component: TentangKamiPage,
});

const branches = [
  { name: "RKI 1", year: "2014", note: "Cabang pertama — rumah awal mula. 14 murid pertama di kamar kos." },
  { name: "RKI 2", year: "2019", note: "Menjangkau anak dhuafa di area baru Denpasar. 50+ santri." },
  { name: "RKI 3", year: "2021", note: "Cabang termuda. Pusat majelis taklim bapak. 40+ santri." },
];

function TentangKamiPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-rki pt-12 pb-12 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Tentang Kami
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Dari keprihatinan seorang ibu, menjadi rumah bagi banyak hati.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
            {ORG.name} adalah yayasan non-profit yang berkhidmat dalam pendidikan Al-Qur'an
            gratis untuk anak dhuafa dan ibu muallaf di Denpasar, Bali sejak {ORG.founded}.
          </p>
        </motion.div>
      </section>

      {/* Founders' story - opening */}
      <section className="container-rki pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border md:p-12"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-gold">
            Cerita Pendiri
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            Ibu Mery & Ibu Diana
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Pendirian RKI Bali tidak lepas dari peran dua sosok yang aktif dalam{" "}
            <strong className="text-foreground">Bapekis (Badan Kerohanian Islam) Bank Mandiri
            Bali</strong>, yaitu Ibu Mery dan Ibu Diana. Menyadari bahwa umat Islam di Bali
            merupakan kelompok minoritas dengan karyawan Muslim yang tersebar di berbagai
            cabang dan sulit saling mengenal, keduanya sepakat membentuk Bapekis sebagai wadah
            resmi untuk pengajian, pembinaan rohani, dan penguatan silaturahmi. Dalam struktur
            organisasi Bapekis, Ibu Diana dipercaya mengelola kegiatan di wilayah Bali,
            sementara Ibu Mery menjalankan fungsi bendahara.
          </p>
        </motion.div>
      </section>

      {/* History timeline */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-rki">
          <SectionHeading
            eyebrow="Perjalanan"
            title="Tonggak demi tonggak — dari Bapekis hingga RKI."
          />
          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-10 pl-8 md:pl-12">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-5" />
              {HISTORY.map((h, i) => (
                <motion.div
                  key={`${h.year}-${h.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-cream md:-left-10 md:h-7 md:w-7">
                    <Sparkles className="h-3 w-3 text-gold md:h-3.5 md:w-3.5" />
                  </div>
                  <div className="rounded-2xl bg-card p-5 shadow-soft ring-1 ring-border md:p-6">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-display text-lg font-bold text-primary">{h.year}</span>
                      <span className="font-display text-base font-semibold text-foreground">— {h.title}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{h.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="container-rki py-20 md:py-28">
        <SectionHeading
          eyebrow="Tiga Cabang"
          title="RKI 1, RKI 2, RKI 3 — satu visi di tiga lokasi."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="font-display text-2xl font-bold text-foreground">{b.name}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">Sejak {b.year}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funding Challenges */}
      <section className="container-rki pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl items-start gap-5 rounded-3xl border border-destructive/30 bg-destructive/5 p-8 md:p-10"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
            <TrendingDown className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-destructive">
              Tantangan
            </div>
            <h3 className="mt-1 font-display text-xl font-bold text-foreground md:text-2xl">
              {CHALLENGES.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {CHALLENGES.body}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-card px-3 py-1 font-semibold ring-1 ring-border">
                Donatur: 7–8 orang
              </span>
              <span className="rounded-full bg-card px-3 py-1 font-semibold ring-1 ring-border">
                Sebelumnya: ~30 orang
              </span>
              <span className="rounded-full bg-card px-3 py-1 font-semibold ring-1 ring-border">
                Kondisi: Defisit bulanan
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to support */}
      <section className="container-rki pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl items-start gap-5 rounded-3xl bg-primary p-8 text-primary-foreground md:p-10"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">
              Ayo Bergabung
            </div>
            <h3 className="mt-1 font-display text-xl font-bold md:text-2xl">
              Jadi bagian dari perjalanan RKI.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Setiap bantuan — doa, donasi, maupun penyebaran informasi — sangat berarti
              agar RKI dapat terus berdiri untuk anak-anak dan ibu-ibu yang membutuhkan.
              Mari bersama menghidupkan rumah kedua bagi para pencari ilmu di Bali.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Legal */}
      <section className="container-rki pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl items-start gap-5 rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border md:p-10"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-gold">Legalitas</div>
            <h3 className="mt-1 font-display text-xl font-bold text-foreground md:text-2xl">
              Di bawah {ORG.parent}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Sejak 2022, RKI Bali resmi bernaung di bawah {ORG.parent} — memberikan payung hukum
              yang sah dan tata kelola yang amanah. Setiap donasi tercatat, terlaporkan, dan
              tersalurkan sesuai amanah.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
