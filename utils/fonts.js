import { Inter } from '@next/font/google';
export const interLatin = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  weight: ["400", "900"], // <- haz hover sobre 'weight' y mira qué tipo de grosor soporta la fuente.
  display: "swap",
  preload: true,
});

import { Raleway } from '@next/font/google';
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway-font",
  weight: ["300",  "400", "500", "600", "600", "700", "800"], // <- haz hover sobre 'weight' y mira qué tipo de grosor soporta la fuente.
  display: "swap",
  preload: true,
});