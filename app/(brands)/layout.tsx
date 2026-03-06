"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { TopNav } from "@/features/shared/components/top-nav";
import { getBrandBySlug } from "@/features/shared/data/brands";

export default function SubBrandLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean)[0];
  const brand = getBrandBySlug(slug);

  return (
    <div style={{ "--brand-accent": brand?.accent } as React.CSSProperties}>
      <TopNav />
      <div className="pt-14">{children}</div>
    </div>
  );
}
