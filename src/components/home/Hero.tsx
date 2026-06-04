import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ArrowDown, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSETS, ORG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="container-rki grid items-center gap-10 pt-10 pb-16 md:gap-14 md:pt-16 md:pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-20">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Berkhidmat sejak {ORG.founded}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-5xl lg:text-6xl"
          >
            Menjaga Cahaya
            <span className="block text-primary">Al-Qur'an di Bali.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-balance"
          >
            Rumah Kajian Islami (RKI) Bali menghadirkan pendidikan Al-Qur'an{" "}
            <strong className="text-foreground">gratis</strong> untuk anak-anak dhuafa dan ibu
            muallaf di Denpasar. Mari bersama mewariskan ilmu dan mengalirkan pahala jariyah yang abadi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-primary px-7 text-base font-semibold shadow-soft hover:bg-primary/90"
            >
              <Link to="/donasi">
                <Heart className="mr-2 h-5 w-5 fill-current" />
                Mari Berkontribusi
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/30 px-7 text-base font-semibold text-primary hover:bg-primary/5"
            >
              <Link to="/tentang-kami">Kenal Lebih Dekat</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex items-center gap-4 text-xs text-muted-foreground"
          >
            <div className="h-px flex-1 bg-border" />
            <span>Di bawah {ORG.parent}</span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative lg:col-span-6"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elegant ring-1 ring-gold/30 md:aspect-[5/4]">
            <img
              src={ASSETS.hero}
              alt="Anak belajar membaca Al-Qur'an di RKI Bali"
              width={1600}
              height={1100}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-5 -left-3 hidden rounded-2xl bg-card p-4 shadow-elegant ring-1 ring-border md:flex md:items-center md:gap-3 md:-left-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl font-bold text-foreground">150+</div>
              <div className="text-xs text-muted-foreground">Santri aktif</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#impact"
        aria-label="Gulir ke bawah"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground/60 md:block"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
