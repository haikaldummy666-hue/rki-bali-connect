import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { PROGRAMS } from "@/lib/constants";

export function ProgramsSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-rki">
        <SectionHeading
          eyebrow="Program Kami"
          title="Tiga program, satu visi: menghidupkan Al-Qur'an."
          description="Berjalan setiap pekan di tiga cabang RKI di Denpasar — gratis untuk siapa pun yang ingin belajar."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  <Users className="h-3 w-3" />
                  {p.count}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.schedule}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5"
          >
            <Link to="/program">
              Lihat jadwal lengkap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
