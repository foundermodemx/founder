export interface BrandAsset {
  name: string;
  displayName: string;
  slug: string;
  color: string;
  colorForeground: string;
  /** Text used for the isotype (symbol-only) fallback */
  symbol: string;
}

/**
 * Centralized brand assets configuration.
 * Logo/symbol SVG files can be added to /public/logos/ and referenced here.
 * Currently uses text-based placeholders that can be swapped for real SVGs.
 */
export const brandAssets: Record<string, BrandAsset> = {
  founder: {
    name: "founder",
    displayName: "FOUNDER",
    slug: "founder",
    color: "oklch(1 0 0)",
    colorForeground: "oklch(0.08 0 0)",
    symbol: "F",
  },
  foundream: {
    name: "foundream",
    displayName: "FOUNDREAM",
    slug: "foundream",
    color: "oklch(0.65 0.25 300)",
    colorForeground: "oklch(0.98 0 0)",
    symbol: "FD",
  },
  foundev: {
    name: "foundev",
    displayName: "FOUNDEV",
    slug: "foundev",
    color: "oklch(0.65 0.2 250)",
    colorForeground: "oklch(0.98 0 0)",
    symbol: "FE",
  },
  foundgreen: {
    name: "foundgreen",
    displayName: "FOUNDGREEN",
    slug: "foundgreen",
    color: "oklch(0.72 0.19 145)",
    colorForeground: "oklch(0.08 0 0)",
    symbol: "FG",
  },
  foundbrands: {
    name: "foundbrands",
    displayName: "FOUNDBRANDS",
    slug: "foundbrands",
    color: "oklch(0.75 0.18 55)",
    colorForeground: "oklch(0.08 0 0)",
    symbol: "FB",
  },
  founding: {
    name: "founding",
    displayName: "FOUNDING",
    slug: "founding",
    color: "oklch(0.85 0.18 85)",
    colorForeground: "oklch(0.08 0 0)",
    symbol: "FI",
  },
};

export function getBrandAsset(brandSlug: string): BrandAsset | undefined {
  return brandAssets[brandSlug];
}
