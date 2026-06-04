import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, MapPin, Users, Heart, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const impactItems = [
  {
    label: "Pendidikan & Pembinaan",
    description: "Honor pengajar, perlengkapan belajar (Iqro, buku), dan konsumsi santri.",
    icon: BookOpen,
  },
  {
    label: "Operasional Cabang",
    description: "Sewa tempat dan perawatan fasilitas di tiga cabang RKI Denpasar.",
    icon: MapPin,
  },
  {
    label: "Kajian Jamaah",
    description: "Pembinaan majelis taklim ibu-ibu dan bapak-bapak setiap pekannya.",
    icon: Users,
  },
  {
    label: "Pemberdayaan Umat",
    description: "Kegiatan insidental, santunan, dan peringatan hari besar Islam.",
    icon: Heart,
  },
];

export function TransparencyPreview() {
  return (
    <section className="container-rki py-20 md:py-28">
      <SectionHeading
        eyebrow="Transparansi Penyaluran"
        title="Jejak kebaikan Anda, nyata dampaknya."
        description="Setiap rupiah yang diamanahkan dikelola dan disalurkan secara profesional untuk kemaslahatan umat."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {impactItems.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-3xl bg-card p-6 ring-1 ring-border shadow-soft"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <it.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">
              {it.label}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {it.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          asChild
          variant="outline"
          className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
        >
          <Link to="/transparansi">
            Lihat detail transparansi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
