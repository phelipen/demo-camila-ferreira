import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Camila Ferreira · Conceito de site | Demonstração não oficial",
  description: "Proposta visual independente por Phelipe para Estética Camila Ferreira, em Niterói. Demonstração não oficial, com fotografia ilustrativa.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: "Um novo olhar para o autocuidado · Prévia não oficial", description: "Conceito de site por Phelipe. Fotografia ilustrativa; sem vínculo com a clínica.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>;
}
