import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Laras.ai — Secure Company AI for Daily Operations",
  description:
    "Save hours on daily operations with a secure AI assistant. Turn a full day of manual work into 5 minutes. Just chat.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-white text-[#0B1F33]">{children}</body>
    </html>
  );
}
