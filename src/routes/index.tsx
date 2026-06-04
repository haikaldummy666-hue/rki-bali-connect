import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { WhyWeExist } from "@/components/home/WhyWeExist";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { DonationTiers } from "@/components/home/DonationTiers";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RKI Bali — Rumah Belajar Al-Qur'an Gratis di Denpasar" },
      {
        name: "description",
        content:
          "Pendidikan Al-Qur'an gratis untuk 150+ santri dhuafa & ibu muallaf di Denpasar Bali. Jadi donatur tetap mulai Rp50.000/bulan.",
      },
      { property: "og:title", content: "RKI Bali — Menjaga Cahaya Al-Qur'an di Bali" },
      {
        property: "og:description",
        content: "Donasi tetap menjaga pendidikan Al-Qur'an gratis untuk anak dhuafa dan ibu muallaf di Denpasar.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <WhyWeExist />
      <ProgramsSection />
      <TransparencyPreview />
      <GalleryPreview />
      <section className="bg-cream">
        <DonationTiers />
      </section>
      <FinalCTA />
    </>
  );
}
