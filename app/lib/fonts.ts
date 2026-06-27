// app/fonts.ts
import { Inter, Playfair_Display } from "next/font/google";

// Fuentes de texto
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// ⚠️ Material Symbols NO se importa con next/font/google
// porque es una font de iconos, no de texto.
// La solución es usar el CDN con next/script o ignorar la regla.
