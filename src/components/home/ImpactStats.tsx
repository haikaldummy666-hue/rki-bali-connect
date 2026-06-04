import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export function ImpactStats() {
  return (
    <section id="impact" className="relative -mt-8 md:-mt-12 z-10">
      <div className="container-rki">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border shadow-elegant ring-1 ring-border md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-6 text-center md:p-8"
            >
              <div className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-[2.5rem]">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm md:normal-case md:tracking-normal">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
