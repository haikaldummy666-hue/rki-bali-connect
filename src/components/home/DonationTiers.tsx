import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles, Heart } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { TIERS, formatIDR } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DonationTiers({ compact = false }: { compact?: boolean }) {
  return (
    <section className={cn("container-rki", compact ? "py-12" : "py-20 md:py-28")}>
      {!compact && (
        <SectionHeading
          eyebrow="Tier Donasi"
          title="Pilih cara Anda berkontribusi."
          description="Donatur tetap menjadi tulang punggung keberlangsungan RKI Bali. Pilih nominal yang nyaman bagi Anda."
        />
      )}

      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {TIERS.map((t, i) => (
          <motion.div
            key={t.amount}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={cn(
              "relative flex flex-col rounded-3xl p-6 ring-1 transition-all hover:-translate-y-1",
              t.featured
                ? "bg-primary text-primary-foreground ring-primary shadow-elegant"
                : "bg-card text-foreground ring-border shadow-soft hover:shadow-elegant",
            )}
          >
            {t.featured && (
              <div className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground shadow-soft">
                <Sparkles className="h-3 w-3" />
                Paling Dampak
              </div>
            )}
            <div className={cn("text-xs font-semibold uppercase tracking-wider", t.featured ? "text-gold" : "text-primary")}>
              {t.title}
            </div>
            <div className="mt-2 font-display text-2xl font-bold md:text-3xl">
              {formatIDR(t.amount)}
              <span className={cn("ml-1 text-xs font-medium", t.featured ? "text-primary-foreground/70" : "text-muted-foreground")}>
                /bulan
              </span>
            </div>
            <p className={cn("mt-4 flex-1 text-sm leading-relaxed", t.featured ? "text-primary-foreground/85" : "text-muted-foreground")}>
              <Check className="mr-1 inline h-4 w-4 align-text-bottom" />
              {t.benefit}
            </p>
            <Button
              asChild
              size="sm"
              className={cn(
                "mt-5 rounded-full font-semibold",
                t.featured
                  ? "bg-gold text-gold-foreground hover:bg-gold/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              <Link to="/donasi">
                <Heart className="mr-1.5 h-3.5 w-3.5 fill-current" />
                Donasi
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
