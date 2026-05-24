import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Solarimob — Energia Solar Fotovoltaica",
    template: "%s | Grupo Solarimob",
  },
  description:
    "Especialistas em energia solar fotovoltaica residencial, comercial, rural e industrial. Reduza sua conta de luz em até 95% com sistemas de alta qualidade e garantia.",
  keywords: [
    "energia solar",
    "fotovoltaica",
    "painel solar",
    "geração distribuída",
    "economia energia",
    "solarimob",
  ],
  openGraph: {
    siteName: "Grupo Solarimob",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
