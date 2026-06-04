import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ORG } from "@/lib/constants";

export function WhatsAppButton() {
  const href = `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(
    "Assalamu'alaikum, saya ingin bertanya tentang RKI Bali.",
  )}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi RKI Bali via WhatsApp"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant ring-4 ring-[#25D366]/20 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" strokeWidth={2.2} />
    </motion.a>
  );
}
