import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, BookOpen } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Program Kegiatan — RKI Bali" },
      {
        name: "description",
        content:
          "Jadwal lengkap TPQ Anak (Senin–Jumat), Majelis Taklim Ibu (Sabtu), dan Yasinan Bapak (Kamis malam) di tiga cabang RKI Bali.",
      },
      { property: "og:title", content: "Program Kegiatan — RKI Bali" },
      { property: "og:description", content: "Tiga program utama RKI Bali untuk anak, ibu, dan bapak." },
      { property: "og:url", content: "/program" },
    ],
    links: [{ rel: "canonical", href: "/program" }],
  }),
  component: ProgramPage,
});

const scheduleDetail = [
  {
    slug: "tpq",
    materi: ["Iqro & Tahsin", "Hafalan Juz 'Amma", "Akhlak & Adab Islami", "Doa harian"],
    pengajar: "3 ustadz/ustadzah",
  },
  {
    slug: "ibu",
    materi: ["Tahsin Al-Qur'an", "Fiqih Wanita", "Pembinaan Muallaf", "Keluarga Sakinah"],
    pengajar: "2 ustadzah",
  },
  {
    slug: "bapak",
    materi: ["Yasinan & Tahlil", "Fiqih Praktis", "Kajian Hadits", "Silaturahmi Jamaah"],
    pengajar: "1 ustadz",
  },
];

function ProgramPage() {
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
            Program Kegiatan
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Belajar bersama, setiap pekan.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            Tiga program rutin di tiga cabang RKI Bali — gratis untuk seluruh santri dan jamaah.
          </p>
        </motion.div>
      </section>

      <section className="container-rki pb-20 md:pb-28">
        <div className="space-y-10">
          {PROGRAMS.map((p, i) => {
            const detail = scheduleDetail[i];
            return (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid gap-6 overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border md:grid-cols-2 ${
                  i % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {p.count}
                  </div>
                  <h2 className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.description}
                  </p>

                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground"><strong>Jadwal:</strong> {p.schedule}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground"><strong>Lokasi:</strong> 3 cabang RKI di Denpasar</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground"><strong>Pengajar:</strong> {detail.pengajar}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground"><strong>Materi:</strong> {detail.materi.join(" · ")}</span>
                    </div>
                  </dl>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
