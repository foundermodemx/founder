"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { TopNav } from "@/features/shared/components/top-nav";
import { getBrandBySlug } from "@/features/shared/data/brands";
import { Sidebar } from "@/features/shared/components/sidebar/sidebar";
import { useEffect } from "react";

const brandSidebarItems = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
  { id: "colophon", label: "Ecosystem" },
];

export default function SubBrandLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0];
  const brand = getBrandBySlug(slug);

  // Reset scroll to top on brand navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ "--brand-accent": brand?.accent } as React.CSSProperties}>
      <TopNav />
      <Sidebar brand={slug} items={brandSidebarItems} />
      <div className="pt-14">{children}</div>
    </div>
  );
}
