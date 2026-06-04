import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertCircle, Receipt, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DONOR_LIST, FINANCE, formatIDR } from "@/lib/constants";

export const Route = createFileRoute("/transparansi")({
  head: () => ({
    meta: [
      { title: "Transparansi Keuangan — RKI Bali" },
      {
        name: "description",
        content:
          "Laporan keuangan bulanan RKI Bali: pemasukan Rp7,45 juta, pengeluaran Rp13 juta, defisit Rp5,55 juta. Setiap rupiah dilaporkan amanah.",
      },
      { property: "og:title", content: "Transparansi Keuangan — RKI Bali" },
      { property: "og:description", content: "Pemasukan, pengeluaran, dan defisit bulanan operasional RKI Bali." },
      { property: "og:url", content: "/transparansi" },
    ],
    links: [{ rel: "canonical", href: "/transparansi" }],
  }),
  component: TransparansiPage,
});

const summary = [
  { label: "Pemasukan / bulan", value: FINANCE.income, icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
  { label: "Pengeluaran / bulan", value: FINANCE.expense, icon: TrendingDown, color: "text-gold", bg: "bg-gold/15" },
  { label: "Defisit / bulan", value: FINANCE.deficit, icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
];

function TransparansiPage() {
  const coverPct = Math.round((FINANCE.income / FINANCE.expense) * 100);
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
            Transparansi
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Amanah lahir dari kejujuran.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            Realita keuangan kami — pemasukan, pengeluaran, dan defisit bulanan — kami buka apa adanya.
          </p>
        </motion.div>
      </section>

      {/* Summary */}
      <section className="container-rki pb-12">
        <div className="grid gap-5 md:grid-cols-3">
          {summary.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${it.bg}`}>
                <it.icon className={`h-6 w-6 ${it.color}`} />
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{it.label}</div>
              <div className={`mt-1 font-display text-2xl font-bold md:text-3xl ${it.color}`}>
                {formatIDR(it.value)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-3xl bg-primary p-6 text-primary-foreground md:p-8"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Donatur saat ini menutup</span>
            <span className="font-display text-xl font-bold text-gold">{coverPct}%</span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-primary-foreground/15">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${coverPct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              className="h-full rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* Expense breakdown */}
      <section className="container-rki py-12">
        <SectionHeading eyebrow="Rincian Pengeluaran" title="Ke mana donasi Anda disalurkan." align="left" />
        <div className="overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
          {FINANCE.expenseBreakdown.map((row, i) => {
            const pct = (row.amount / FINANCE.expense) * 100;
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-border p-5 last:border-0 md:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Receipt className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{row.label}</span>
                  </div>
                  <span className="font-display font-bold text-foreground tabular-nums">
                    {formatIDR(row.amount)}
                  </span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Donor list */}
      <section className="container-rki py-12 pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Donatur Tetap"
          title="Mereka menjaga rumah ini tetap menyala."
          description="Sebagian donatur yang telah memberi kepercayaan. Semoga Allah membalas dengan keberkahan."
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
