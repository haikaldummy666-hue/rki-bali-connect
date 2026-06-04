import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="container-rki py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-primary p-10 text-center text-primary-foreground md:p-16"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary-light/40 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl">
            Setiap rupiah Anda menjaga satu cahaya tetap menyala.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            Bergabunglah sebagai donatur tetap RKI Bali. Mulai dari Rp50.000/bulan,
            menjadi bagian dari perjalanan 150+ santri menuju Al-Qur'an.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gold px-7 text-base font-semibold text-gold-foreground hover:bg-gold/90"
            >
              <Link to="/donasi">
                <Heart className="mr-2 h-5 w-5 fill-current" />
                Jadi Donatur Tetap
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-full px-7 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/transparansi">
                Lihat transparansi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
