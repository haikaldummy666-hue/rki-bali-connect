import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyWeExist() {
  return (
    <section className="container-rki py-20 md:py-28">
      <SectionHeading
        eyebrow="Mengapa kami ada"
        title="Karena setiap anak berhak mengenal Al-Qur'an."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl space-y-5 text-center text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        <p>
          Di pelosok Denpasar, banyak anak dari keluarga prasejahtera dan ibu-ibu muallaf yang
          rindu belajar Al-Qur'an — namun terhalang biaya, jarak, dan kesempatan.
        </p>
        <p>
          Sejak 2014, RKI Bali hadir sebagai rumah belajar gratis. Dari satu rumah kontrakan
          dengan 14 santri, kini kami berkhidmat di tiga cabang dan melayani lebih dari{" "}
          <strong className="text-foreground">270 jiwa</strong>: santri kecil, ibu muallaf, dan
          bapak jamaah.
        </p>
        <p className="font-display text-lg italic text-primary md:text-xl">
          “Sebaik-baik kalian adalah yang belajar Al-Qur'an dan mengajarkannya.” (HR. Bukhari)
        </p>
      </motion.div>
    </section>
  );
}
