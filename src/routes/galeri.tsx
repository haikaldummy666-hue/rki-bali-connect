import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbox, type LightboxItem } from "@/components/shared/Lightbox";
import { ASSETS } from "@/lib/constants";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Kegiatan — RKI Bali" },
      {
        name: "description",
        content:
          "Dokumentasi kegiatan TPQ anak, majelis taklim ibu, yasinan bapak, dan acara-acara RKI Bali di Denpasar.",
      },
      { property: "og:title", content: "Galeri Kegiatan — RKI Bali" },
      { property: "og:description", content: "Foto-foto kegiatan RKI Bali di tiga cabang." },
      { property: "og:url", content: "/galeri" },
    ],
    links: [{ rel: "canonical", href: "/galeri" }],
  }),
  component: GaleriPage,
});

const categories = [
  { id: "all", label: "Semua" },
  { id: "tpq", label: "TPQ Anak" },
  { id: "ibu", label: "Majelis Ibu" },
  { id: "bapak", label: "Majelis Bapak" },
  { id: "bangunan", label: "Bangunan" },
];

const tagged = ASSETS.gallery;

function GaleriPage() {
  const [active, setActive] = useState("all");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (active === "all" ? tagged : tagged.filter((t) => t.cat === active)),
    [active],
  );

  const lightboxItems: LightboxItem[] = useMemo(
    () => items.map((it) => ({ src: it.src, alt: `Galeri RKI Bali - ${it.cat}`, caption: it.cat })),
    [items],
  );

  const openAt = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + lightboxItems.length) % lightboxItems.length)),
    [lightboxItems.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % lightboxItems.length)),
    [lightboxItems.length],
  );

  return (
    <>
      <section className="container-rki pt-12 pb-8 md:pt-20 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Galeri Kegiatan
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Momen-momen kecil yang menggugah.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Dari kelas TPQ hingga majelis taklim - inilah wajah keseharian RKI Bali. Klik foto untuk
            melihat dalam tampilan penuh.
          </p>
        </motion.div>
      </section>

      <section className="container-rki pb-20 md:pb-28">
        <Tabs value={active} onValueChange={setActive} className="w-full">
          <TabsList className="mx-auto mb-8 flex h-auto flex-wrap justify-center gap-1 rounded-full bg-muted p-1">
            {categories.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                key={item.src}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                onClick={() => openAt(i)}
                aria-label={`Lihat foto ${item.cat} lebih besar`}
                className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={item.src}
                  alt={`Galeri RKI Bali - ${item.cat}`}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  {item.cat}
                </div>
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/95 text-primary opacity-0 shadow-soft backdrop-blur transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Lightbox items={lightboxItems} index={index} onClose={close} onPrev={prev} onNext={next} />
    </>
  );
}
