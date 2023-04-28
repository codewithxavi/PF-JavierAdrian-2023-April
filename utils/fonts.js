import { Inter, Raleway } from 'next/font/google';
export const interLatin = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  weight: ["400", "900"],
  display: "swap",
  preload: true,
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway-font",
  weight: ["300",  "400", "500", "600", "600", "700", "800"], 
  display: "swap",
  preload: true,
});