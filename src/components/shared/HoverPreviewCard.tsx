import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ASSETS, FOOTER_PREVIEWS } from "@/lib/constants";

interface Props {
  to: string;
  label: string;
}

export function HoverPreviewCard({ to, label }: Props) {
  const preview = FOOTER_PREVIEWS[to];
  const image = ASSETS.preview[to];

  if (!preview) {
    return (
      <Link to={to} className="text-sm text-primary-foreground/80 transition-colors hover:text-gold">
        {label}
      </Link>
    );
  }

  return (
    <HoverCard openDelay={120} closeDelay={120}>
      <HoverCardTrigger asChild>
        <Link
          to={to}
          className="inline-block text-sm text-primary-foreground/80 transition-colors hover:text-gold"
        >
          {label}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        align="start"
        sideOffset={12}
        className="w-72 overflow-hidden rounded-2xl border-gold/40 bg-card p-0 shadow-elegant"
      >
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          {image && (
            <div className="relative h-32 w-full overflow-hidden">
              <img
                src={image}
                alt={preview.title}
                loading="lazy"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            </div>
          )}
          <div className="space-y-3 p-4">
            <h4 className="font-display text-base font-semibold text-foreground">{preview.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{preview.description}</p>
            <Link
              to={to}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold"
            >
              Baca Selengkapnya
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </HoverCardContent>
    </HoverCard>
  );
}
