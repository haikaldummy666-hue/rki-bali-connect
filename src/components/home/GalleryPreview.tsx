import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants";

export function GalleryPreview() {
  const images = ASSETS.gallery.slice(0, 6).map(g => g.src);
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-rki">
        <SectionHeading
          eyebrow="Galeri"
          title="Cerita kecil yang bermakna besar."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Kegiatan RKI Bali ${i + 1}`}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
          >
            <Link to="/galeri">
              Lihat semua foto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
