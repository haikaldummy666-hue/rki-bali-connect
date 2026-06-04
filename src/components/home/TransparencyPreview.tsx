import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { FINANCE, formatIDR } from "@/lib/constants";

const items = [
  {
    label: "Pemasukan / bulan",
    value: FINANCE.income,
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Pengeluaran / bulan",
    value: FINANCE.expense,
    icon: TrendingDown,
    color: "text-gold",
    bg: "bg-gold/15",
  },
  {
    label: "Defisit / bulan",
    value: FINANCE.deficit,
    icon: AlertCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
    highlight: true,
  },
];

export function TransparencyPreview() {
  const coverPct = Math.round((FINANCE.income / FINANCE.expense) * 100);
  return (
    <section className="container-rki py-20 md:py-28">
      <SectionHeading
        eyebrow="Transparansi Keuangan"
        title="Kami terbuka. Karena amanah lahir dari kejujuran."
        description="Realita keuangan operasional bulanan RKI Bali — kami laporkan apa adanya."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-3xl bg-card p-7 ring-1 ${
              it.highlight ? "ring-destructive/30 shadow-elegant" : "ring-border shadow-soft"
            }`}
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${it.bg}`}>
              <it.icon className={`h-6 w-6 ${it.color}`} />
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {it.label}
            </div>
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
        className="mx-auto mt-8 max-w-2xl rounded-3xl bg-primary p-6 text-primary-foreground md:p-8"
      >
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Donatur menutup</span>
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
        <p className="mt-3 text-sm text-primary-foreground/80">
          Setiap bulan kami masih kurang <strong className="text-gold">{formatIDR(FINANCE.deficit)}</strong> untuk
          menutup operasional. Donasi Anda menutup celah ini.
        </p>
      </motion.div>

      <div className="mt-10 text-center">
        <Button
          asChild
          variant="outline"
          className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
        >
          <Link to="/transparansi">
            Lihat laporan lengkap
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
