import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Receipt, Users, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DONOR_LIST, formatIDR } from "@/lib/constants";

export const Route = createFileRoute("/transparansi")({
  head: () => ({
    meta: [
      { title: "Dampak & Penyaluran Donasi — RKI Bali" },
      {
        name: "description",
        content:
          "Laporan penyaluran donasi RKI Bali. Setiap rupiah disalurkan dengan penuh amanah untuk santri dan jamaah.",
      },
      { property: "og:title", content: "Dampak & Penyaluran Donasi — RKI Bali" },
      { property: "og:description", content: "Laporan penyaluran donasi RKI Bali secara amanah." },
      { property: "og:url", content: "/transparansi" },
    ],
    links: [{ rel: "canonical", href: "/transparansi" }],
  }),
  component: TransparansiPage,
});

const allocations = [
  "Honor Pengajar (3 cabang RKI Denpasar)",
  "Sewa & Operasional Tempat Belajar",
  "Konsumsi & Snack Harian Santri",
  "Perlengkapan Belajar (Iqro, buku, alat tulis)",
  "Kegiatan Insidental & Hari Besar Islam",
];

function TransparansiPage() {
  return (
    <>
      <section className="container-rki pt-12 pb-12 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Dampak & Penyaluran
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Amanah lahir dari kejujuran.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            Kami berkomitmen menyalurkan setiap titipan donasi Anda tepat sasaran. Berikut adalah fokus penyaluran operasional bulanan kami.
          </p>
        </motion.div>
      </section>


      {/* Expense breakdown / Allocations */}
      <section className="container-rki py-12">
        <SectionHeading eyebrow="Fokus Penyaluran" title="Ke mana donasi Anda disalurkan." align="left" />
        <div className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
          {allocations.map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-border p-5 last:border-0 md:p-6"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground text-lg">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donor list */}
      <section className="container-rki py-12 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Keluarga RKI Bali"
          title="Mereka yang membersamai langkah ini."
          description="Sebagian donatur yang telah mengamanahkan hartanya. Semoga Allah membalas dengan keberkahan berlipat ganda."
          align="left"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DONOR_LIST.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-2xl bg-card p-4 ring-1 ring-border"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground truncate">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.city}</div>
              </div>
              <div className="font-display text-sm font-bold text-primary tabular-nums">
                {formatIDR(d.amount)}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Daftar disamarkan untuk menjaga privasi sebagian donatur.
        </p>
      </section>
    </>
  );
}
