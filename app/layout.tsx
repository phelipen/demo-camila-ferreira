import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Camila Ferreira · Conceito de site | Demonstração não oficial",
  description: "Proposta independente por Phelipe para Estética Camila Ferreira, Niterói. Demonstração não oficial com serviços e canais públicos da empresa.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: "Camila Ferreira — Um tempo só seu. Prévia não oficial", description: "Conceito independente por Phelipe. Sem vínculo ou aprovação da clínica.", locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>;
}
