export const brand = {
  name: "Loomify",
  description: "Crochet patterns, project tracking, and inspiration",
  colors: {
    brand: "var(--brand)",
    brandDark: "var(--brand-600)",
    rose: "var(--rose)",
    peach: "var(--peach)",
    mint: "var(--mint)",
    sky: "var(--sky)",
  },
};

export const layout = {
  containerMaxWidth: "80rem", // 1280px
  sectionPaddingX: "1.5rem", // 24px
  sectionPaddingY: "4rem", // 64px
  radius: "1rem",
};

export const typography = {
  title: "text-3xl sm:text-5xl font-bold tracking-tight",
  h2: "text-2xl sm:text-3xl font-bold",
  body: "text-base sm:text-lg text-foreground/80",
  small: "text-sm text-foreground/70",
};

export const shadows = {
  soft: "shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
};

export type DesignTokens = typeof brand & typeof layout & typeof typography & typeof shadows;

