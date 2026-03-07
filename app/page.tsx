"use client";

import { HeroSection } from "@/components/hero-section";
import { SignalsSection } from "@/components/signals-section";
import { EcosystemSection } from "@/features/founder/sections/ecosystem-section";
import { WorkSection } from "@/components/work-section";
import { PrinciplesSection } from "@/components/principles-section";
import { ContactSection } from "@/features/leads/sections/contact-section";
import { Footer } from "@/features/shared/components/footer/footer";
import { Sidebar } from "@/features/shared/components/sidebar/sidebar";
import { TopNav } from "@/features/shared/components/top-nav";

const sidebarItems = [
  { id: "hero", label: "Home" },
  { id: "signals", label: "Services" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "work", label: "Projects" },
  { id: "principles", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <TopNav />
      <Sidebar brand="founder" items={sidebarItems} />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <EcosystemSection />
        <WorkSection />
        <PrinciplesSection />
        <ContactSection />
        <Footer variant="default" />
      </div>
    </main>
  );
}
