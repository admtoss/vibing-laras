import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Laras.ai — Governance AI for Expense Approvals",
  description:
    "Snap a receipt, confirm the draft, and get manager approval from a phone. Every step recorded, no long forms.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-white text-[#0B1F33]">{children}</body>
    </html>
  );
}
