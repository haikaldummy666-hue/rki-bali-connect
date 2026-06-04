import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Landmark } from "lucide-react";
import { HoverPreviewCard } from "@/components/shared/HoverPreviewCard";
import { ASSETS, NAV_LINKS, ORG } from "@/lib/constants";

const previewLinks = NAV_LINKS.filter((l) => l.to !== "/");

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-rki py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={ASSETS.logo} alt="Logo RKI Bali" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="font-display text-lg font-bold">{ORG.short}</div>
                <div className="text-xs text-gold">Di bawah {ORG.parent}</div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              Rumah belajar Al-Qur'an gratis untuk anak-anak dhuafa dan ibu muallaf di Denpasar, Bali.
              Sejak {ORG.founded}, kami berkhidmat dengan amanah, bergerak dengan keikhlasan.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{ORG.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`https://wa.me/${ORG.whatsapp}`} className="hover:text-gold">
                  {ORG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {ORG.bank.name} · {ORG.bank.number}
                  <br />
                  <span className="text-primary-foreground/60">a.n {ORG.bank.holder}</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{ORG.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Jelajahi
            </h4>
            <p className="mt-1 text-xs text-primary-foreground/50">Arahkan kursor untuk pratinjau</p>
            <ul className="mt-5 flex flex-col gap-3">
              {previewLinks.map((link) => (
                <li key={link.to}>
                  <HoverPreviewCard to={link.to} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Mari Berkontribusi
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
              Setiap kontribusi Anda menjadi amal jariyah yang terus mengalir. Mari bersama menjaga cahaya Al-Qur'an untuk generasi mendatang.
            </p>
            <Link
              to="/donasi"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Menjadi Bagian Kebaikan
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/55 md:flex-row">
          <p>© {new Date().getFullYear()} {ORG.name} · {ORG.parent}</p>
          <p>Bergerak dengan amanah, melayani dengan ikhlas.</p>
        </div>
      </div>
    </footer>
  );
}
