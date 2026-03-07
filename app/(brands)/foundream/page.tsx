import type { Metadata } from "next";
import { getBrandBySlug } from "@/features/shared/data/brands";
import { BrandHero } from "@/features/shared/components/brand-hero";
import { BrandServices } from "@/features/shared/components/brand-services";
import { PortfolioGrid } from "@/features/shared/components/portfolio-grid";
import { ContactSection } from "@/features/leads/sections/contact-section";
import { Footer } from "@/features/shared/components/footer/footer";

const brand = getBrandBySlug("foundream")!;

export const metadata: Metadata = {
  title: `${brand.displayName} — ${brand.tagline} | Founder`,
  description: brand.description,
};

export default function FoundreamPage() {
  return (
    <main className="relative min-h-screen">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      <div className="relative z-10">
        <BrandHero brand={brand} />
        <BrandServices brand={brand} />
        <PortfolioGrid brandSlug="foundream" accentColor={brand.accent} />
        <ContactSection accentColor={brand.accent} />
        <Footer variant="ecosystem" />
      </div>
    </main>
  );
}
