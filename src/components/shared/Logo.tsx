import { Link } from "@tanstack/react-router";
import { ASSETS, ORG } from "@/lib/constants";

export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={ASSETS.logo}
        alt="Logo RKI Bali"
        width={40}
        height={40}
        className="h-10 w-10 transition-transform group-hover:scale-105"
      />
      <div className="leading-tight">
        <div
          className={`font-display text-base font-bold ${
            variant === "light" ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {ORG.short}
        </div>
        <div
          className={`text-[10px] font-medium uppercase tracking-wider ${
            variant === "light" ? "text-gold" : "text-muted-foreground"
          }`}
        >
          Yayasan DAI
        </div>
      </div>
    </Link>
  );
}
