"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  ChatCircleText,
  Globe,
  Clock,
  AppleLogo,
  AndroidLogo,
  Users,
  WhatsappLogo,
  EnvelopeSimple,
  SlidersHorizontal,
  Sparkle,
  Files,
  LockSimpleOpen,
  List,
  X,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Velaris from "@/components/ui/velaris";
import { ChatSimulation, type ChatLang } from "@/components/ui/chat-simulation";
import {
  ManualWorkIllustration,
  ApprovalWorkflowIllustration,
  ToolDilemmaIllustration,
} from "@/components/ui/problem-illustrations";
import { HowItWorksMockup } from "@/components/ui/security-workflow-visuals";
import {
  ConfirmBeforeSavingIllustration,
  PrivateWorkspaceIllustration,
  AuditTrailBiometricIllustration,
  RoleAccessIllustration,
} from "@/components/ui/security-illustrations";

// registerPlugin menyentuh window/document pada sebagian versi GSAP —
// hanya jalankan di client agar SSR/prerender tidak 500.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

// Hero palette sampled from reference screenshot: dark navy-slate base,
// warm amber glow in the middle, teal-slate at the bottom.
const HERO_BG = "#151e2c";
const HERO_COLORS = ["#9c7c50", "#3f5f68", "#54472f", "#1d2a3c"];

const STORE_URL_APPLE = "https://www.apple.com/app-store/";
const STORE_URL_PLAY = "https://play.google.com/store";
const SUPPORT_EMAIL = "info@laras.id";
const SUPPORT_EMAIL_HREF = "mailto:info@laras.id";
const WHATSAPP_DISPLAY = "+62 823 2010 2573";
const WHATSAPP_URL = "https://wa.me/6282320102573";
const DEMO_MAILTO = "mailto:info@laras.id?subject=Schedule%20a%20Demo%20%E2%80%94%20Laras.ai";

// TODO (Pre-release): Replace dummy UI pricing with official Basic & Pro pricing.
const PRICING_DUMMY = {
  basicMonthly: "Rp 299.000",
  basicAnnual: "Rp 249.000",
  proMonthly: "Rp 999.000",
  proAnnual: "Rp 849.000",
} as const;

function buildWhatsAppPlanUrl(planName: string, lang: ChatLang): string {
  const text =
    lang === "id"
      ? `Halo Tim Laras.ai, saya tertarik dengan paket ${planName} untuk perusahaan kami.`
      : `Hello Laras.ai team, I'm interested in the ${planName} plan for our company.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

type Lang = ChatLang;
type BillingCycle = "monthly" | "annual";

type ProblemCard = {
  icon: Icon;
  tag: string;
  title: string;
  desc: string;
};

type BridgeSegment = {
  text: string;
  bold: boolean;
};

type SolutionRow = {
  anchorId?: string;
  label: string;
  benefit: string;
  blurb: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  overlap?: boolean;
  status: "live" | "soon";
  features: { body: string }[];
};

type CapabilityPart = {
  text: string;
  bold?: boolean;
};

type PricingPlan = {
  id: "trial" | "basic" | "pro" | "enterprise";
  name: string;
  badge?: string;
  featured?: boolean;
  monthlyPrice: string;
  annualPrice: string;
  hasPeriod?: boolean;
  caption: string;
  users: string;
  allowance: string;
  approvals: string;
  capabilities: CapabilityPart[];
  cta: string;
  ctaType: "trial" | "whatsapp";
};

const COPY: Record<
  Lang,
  {
    nav: {
      links: { href: string; label: string }[];
      login: string;
      primary: string;
    };
    hero: {
      h1Line1: string;
      h1Line2Prefix: string;
      h1Accent: string;
      sub: string;
      primary: string;
      secondary: string;
    };
    problem: {
      h2: string;
      sub: string;
      cards: ProblemCard[];
    };
    bridge: {
      eyebrow: string;
      segments: BridgeSegment[];
    };
    solutions: {
      eyebrow: string;
      h2: string;
      sub: string;
      soonBadge: string;
      soonPreview: string;
      rows: SolutionRow[];
    };
    security: {
      eyebrow: string;
      h2: string;
      sub: string;
      c1Title: string;
      c1Body: string;
      c2Title: string;
      c2Body: string;
      c3Title: string;
      c3Body: string;
      c4Title: string;
      c4Body: string;
    };
    howItWorks: {
      eyebrow: string;
      h2: string;
      sub: string;
      steps: { num: string; title: string; body: string }[];
    };
    pricing: {
      eyebrow: string;
      h2: string;
      sub: string;
      billingMonthly: string;
      billingAnnual: string;
      allowanceCardNote: string;
      period: string;
      billedAnnually: string;
      specLabels: {
        users: string;
        allowance: string;
        approvals: string;
        capabilities: string;
      };
      plans: PricingPlan[];
    };
    ctaFooter: {
      h2Prefix: string;
      h2Accent: string;
      sub: string;
      primary: string;
      secondary: string;
      orDownload: string;
      aboutBlurb: string;
      cols: { h: string; items: { label: string; href: string }[] }[];
      copyright: string;
    };
  }
> = {
  en: {
    nav: {
      links: [
        { href: "#solutions", label: "Solutions" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#pricing", label: "Pricing" },
        { href: "#security", label: "Security" },
      ],
      login: "Log In",
      primary: "Start Free Trial",
    },
    hero: {
      h1Line1: "Save hours on daily operations",
      h1Line2Prefix: "with a ",
      h1Accent: "secure AI assistant",
      sub: "Turn a full day of manual work into 5 minutes. Just chat.",
      primary: "Start Free Trial",
      secondary: "Schedule a Demo",
    },
    problem: {
      h2: "Why routine company work still eats up your team’s entire day",
      sub: "Manual tracking, heavy checking, and awkward follow-ups already slow down daily operations.",
      cards: [
        {
          icon: Files,
          tag: "Hours Lost to Manual Work",
          title: "A full day spent sorting receipts and repeat bills",
          desc: "Matching dozens of receipts, chats, and monthly bills takes hours just to keep records neat and easy to trace later.",
        },
        {
          icon: Clock,
          tag: "Stuck Approvals",
          title: "Slow sign-offs and awkward urgent follow-ups",
          desc: "Managers delay approvals because they have to check prices and taxes by hand, while staff hesitate to keep chasing busy bosses for urgent payments.",
        },
        {
          icon: LockSimpleOpen,
          tag: "The Tool Dilemma",
          title: "Rigid software is a chore; public AI isn’t safe",
          desc: "Buying another app means learning new forms all over again, while pasting company data into public AI chats puts sensitive records at risk.",
        },
      ],
    },
    bridge: {
      eyebrow: "Our belief",
      segments: [
        { text: "“You shouldn’t have to learn another app.", bold: false },
        {
          text: "Let an AI assistant sort, check, and follow up for you.”",
          bold: true,
        },
      ],
    },
    solutions: {
      eyebrow: "Solutions by Role",
      h2: "Built to take the busywork off every role’s plate",
      sub: "Start with Finance, where manual tracking and slow sign-offs cost the most time. Expand to other teams as you grow.",
      soonBadge: "Coming Soon",
      soonPreview: "HR & cross-division mockup is on its way",
      rows: [
        {
          anchorId: "solutions-employees",
          label: "For Employees",
          status: "live",
          benefit: "Submit expenses in seconds, without forms",
          blurb:
            "Drop receipts, chats, or invoices in one place. Laras drafts everything cleanly.",
          image: "/assets/for-staff.webp",
          imageAlt: "Laras chat mockup for employees",
          imageWidth: 712,
          imageHeight: 1406,
          features: [
            { body: "Send multiple receipts in one chat" },
            { body: "Confirm the draft before it’s saved" },
            { body: "Track status without chasing Finance" },
          ],
        },
        {
          anchorId: "solutions-managers",
          label: "For Managers",
          status: "live",
          benefit: "Approve faster with AI checks done",
          blurb:
            "Laras checks numbers, vendor price hikes, and taxes before requests reach you.",
          image: "/assets/for-manager.webp",
          imageAlt: "Laras approval mockup for managers",
          imageWidth: 712,
          imageHeight: 1379,
          features: [
            { body: "Flags unusual prices, fees, and taxes" },
            { body: "Instant summary without manual checking" },
            { body: "Secure mobile sign-off with 2FA" },
          ],
        },
        {
          anchorId: "solutions-finance",
          label: "For Finance",
          status: "live",
          benefit: "Turn a full day’s recap into 5 minutes",
          blurb:
            "Auto-sort recurring bills, file receipts by month, and follow up on urgent approvals.",
          image: "/assets/for-admin.webp",
          imageAlt: "Laras report mockup for finance and admin teams",
          imageWidth: 1878,
          imageHeight: 1158,
          overlap: true,
          features: [
            { body: "Auto-classifies recurring monthly bills" },
            { body: "Auto-files receipts neatly by month" },
            { body: "Neutral reminders for urgent approvals" },
          ],
        },
        {
          anchorId: "solutions-hr",
          label: "For HR & Other Divisions",
          status: "soon",
          benefit: "One secure AI built for every team",
          blurb:
            "Finance is just the start. Next up: HR, projects, and daily ops.",
          features: [
            { body: "Upcoming HR and internal ops workflows" },
            { body: "Same company permissions and audit trail" },
            { body: "Tell us which team you need next" },
          ],
        },
      ],
    },
    security: {
      eyebrow: "SAFE COMPANY AI",
      h2: "Connect your company to AI safely",
      sub: "Unlike public AI chats, Laras keeps company data private, puts your team in charge of every decision, and logs each action automatically.",
      c1Title: "Nothing saved without your confirmation",
      c1Body:
        "Laras drafts and checks the details, but never saves or approves on its own. Your team always has the final say.",
      c2Title: "Your data stays strictly private",
      c2Body:
        "Company receipts, invoices, and chats stay inside your private workspace. Nothing is shared externally, and storage follows applicable data privacy laws.",
      c3Title: "Permanent, audit-ready records",
      c3Body:
        "Every draft, edit, and biometric sign-off is logged automatically, so monthly reviews and audits are ready anytime.",
      c4Title: "Access matched to every role",
      c4Body:
        "Employees, managers, and Finance only see the records meant for them, so sensitive company numbers stay protected.",
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      h2: "From raw receipts and chats to approved records in 4 steps",
      sub: "Laras sorts and checks the details. Your team just confirms and decides.",
      steps: [
        {
          num: "01",
          title: "Drop receipts, invoices, or chats",
          body: "Send photos, PDFs, or marketplace screenshots in English or Indonesian. Laras reads vendors, dates, taxes, and totals in one go.",
        },
        {
          num: "02",
          title: "Checked and drafted before saving",
          body: "Laras formats the draft to match your company standards and flags vendor price hikes, unusual fees, or tax mismatches before anything is saved.",
        },
        {
          num: "03",
          title: "Fast mobile sign-off",
          body: "Approvers review AI-checked summaries from their phone with biometric 2FA and digital signatures, plus neutral reminders for urgent payments.",
        },
        {
          num: "04",
          title: "Filed by month, ready anytime",
          body: "Recurring bills are sorted automatically and every receipt is filed neatly by month. Ask Laras in chat for an instant PDF or Excel summary anytime.",
        },
      ],
    },
    pricing: {
      eyebrow: "PRICING",
      h2: "Choose the plan that fits your company",
      sub: "Every paid plan includes Laras’s full AI, from automatic receipt reading to price-hike and duplicate checks.",
      billingMonthly: "Monthly",
      billingAnnual: "Annual",
      allowanceCardNote:
        "Monthly task allowance refreshes every month. 1 task = 1 request or recap processed by Laras.",
      period: "/month",
      billedAnnually: "Billed annually",
      specLabels: {
        users: "Users",
        allowance: "Allowance",
        approvals: "Approval Levels",
        capabilities: "What’s included",
      },
      plans: [
        {
          id: "trial",
          name: "Trial",
          badge: "Free",
          monthlyPrice: "Rp 0",
          annualPrice: "Rp 0",
          caption: "Try Laras with your team",
          users: "2 users (Admin + 1 member)",
          allowance: "70 total tasks (no expiry)",
          approvals: "Up to 2 approval levels",
          capabilities: [{ text: "Full Basic features" }],
          cta: "Start Free Trial",
          ctaType: "trial",
        },
        {
          id: "basic",
          name: "Basic",
          monthlyPrice: PRICING_DUMMY.basicMonthly,
          annualPrice: PRICING_DUMMY.basicAnnual,
          hasPeriod: true,
          caption: "For small teams speeding up approvals",
          users: "2 included seats",
          allowance: "400 tasks/month (company pool)",
          approvals: "Up to 2 approval levels",
          capabilities: [
            {
              text: "Automatic receipt & invoice reading, vendor checks, and duplicate detection",
            },
          ],
          cta: "Contact Sales",
          ctaType: "whatsapp",
        },
        {
          id: "pro",
          name: "Pro",
          badge: "Most Popular",
          featured: true,
          monthlyPrice: PRICING_DUMMY.proMonthly,
          annualPrice: PRICING_DUMMY.proAnnual,
          hasPeriod: true,
          caption: "For growing companies needing multi-level control",
          users: "10 included seats",
          allowance: "2,000 tasks/month (company pool)",
          approvals: "Up to 5 approval levels",
          capabilities: [
            { text: "Everything in Basic + " },
            { text: "Device Binding", bold: true },
            { text: " (1 registered phone per user) + " },
            { text: "Scheduled Automation", bold: true },
            { text: " (automated reports & reminders)" },
          ],
          cta: "Get Pro",
          ctaType: "whatsapp",
        },
        {
          id: "enterprise",
          name: "Enterprise",
          monthlyPrice: "Custom",
          annualPrice: "Custom",
          caption: "For large companies with custom governance",
          users: "50 included seats",
          allowance: "10,000 tasks/month base (customizable)",
          approvals: "Unlimited approval levels",
          capabilities: [
            {
              text: "Everything in Pro + dedicated activation support & custom company allowance",
            },
          ],
          cta: "Talk to Us",
          ctaType: "whatsapp",
        },
      ],
    },
    ctaFooter: {
      h2Prefix: "Ready to turn a full day of routine ops into ",
      h2Accent: "5 minutes?",
      sub: "Delegate daily expense tracking and checking to a secure company AI.",
      primary: "Start Free Trial",
      secondary: "Schedule a Demo",
      orDownload: "Or download our mobile app",
      aboutBlurb:
        "Laras.ai is a secure company AI assistant that helps teams delegate daily operations without learning new software.",
      cols: [
        {
          h: "Solutions",
          items: [
            { label: "For Employees", href: "#solutions-employees" },
            { label: "For Managers", href: "#solutions-managers" },
            { label: "For Finance", href: "#solutions-finance" },
            { label: "HR & Other Divisions (Coming Soon)", href: "#solutions-hr" },
          ],
        },
        {
          h: "Product",
          items: [
            { label: "The Problem", href: "#problem" },
            { label: "Security & Trust", href: "#security" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
          ],
        },
        {
          h: "Company",
          items: [
            { label: "About Laras.ai", href: "#about" },
            { label: "Schedule a Demo", href: DEMO_MAILTO },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms" },
          ],
        },
      ],
      copyright: "Copyright 2026 Laras.ai. All rights reserved.",
    },
  },
  id: {
    nav: {
      links: [
        { href: "#solutions", label: "Solusi" },
        { href: "#how-it-works", label: "Cara Kerja" },
        { href: "#pricing", label: "Harga" },
        { href: "#security", label: "Keamanan" },
      ],
      login: "Masuk",
      primary: "Mulai Uji Coba Gratis",
    },
    hero: {
      h1Line1: "Hemat waktu operasional harian",
      h1Line2Prefix: "dengan ",
      h1Accent: "asisten AI yang aman",
      sub: "Pangkas kerja manual seharian jadi 5 menit. Cukup lewat chat.",
      primary: "Mulai Uji Coba Gratis",
      secondary: "Jadwalkan Demo",
    },
    problem: {
      h2: "Kenapa pekerjaan rutin kantor masih menyita waktu tim Anda seharian",
      sub: "Rekap manual, pengecekan berulang, dan persetujuan yang tersendat membuat operasional harian melambat.",
      cards: [
        {
          icon: Files,
          tag: "Habis Waktu di Kerja Manual",
          title: "Seharian habis untuk rekap nota dan tagihan rutin",
          desc: "Mencocokkan puluhan struk, chat, dan tagihan tetap bulanan menyita waktu lama hanya agar arsip rapi dan riwayatnya mudah dicari.",
        },
        {
          icon: Clock,
          tag: "Approval Tersendat",
          title: "Persetujuan lambat dan sungkan menagih",
          desc: "Atasan lama menyetujui karena harus mengecek angka, kenaikan harga vendor, dan pajak secara manual, sementara staf sungkan terus menagih pembayaran mendesak.",
        },
        {
          icon: LockSimpleOpen,
          tag: "Dilema Alat Kerja",
          title: "Software biasa ribet; AI publik tidak aman",
          desc: "Membeli aplikasi baru berarti belajar form dari awal lagi, sementara memasukkan data kantor ke chat AI umum membahayakan keamanan data perusahaan.",
        },
      ],
    },
    bridge: {
      eyebrow: "Keyakinan kami",
      segments: [
        { text: "“Anda tak perlu belajar aplikasi baru lagi.", bold: false },
        {
          text: "Serahkan urusan merapikan, mengecek, dan mengingatkan ke asisten AI yang aman.”",
          bold: true,
        },
      ],
    },
    solutions: {
      eyebrow: "Solusi per Peran",
      h2: "Mengurangi kerja rutin untuk setiap tim",
      sub: "Mulai dari Finance, area yang paling menyita waktu untuk rekap dan persetujuan. Setelah itu, perluas ke divisi lain seiring perusahaan berkembang.",
      soonBadge: "Coming Soon",
      soonPreview: "Mockup HR & lintas divisi sedang disiapkan",
      rows: [
        {
          anchorId: "solutions-employees",
          label: "Untuk Karyawan",
          status: "live",
          benefit: "Ajukan pengeluaran dalam hitungan detik",
          blurb:
            "Cukup kirim struk, chat, atau invoice. Laras langsung menyusun drafnya rapi.",
          image: "/assets/for-staff.webp",
          imageAlt: "Mockup chat Laras untuk karyawan",
          imageWidth: 712,
          imageHeight: 1406,
          features: [
            { body: "Kirim banyak struk sekaligus di satu chat" },
            { body: "Konfirmasi draf sebelum disimpan" },
            { body: "Pantau status tanpa tanya Finance bolak-balik" },
          ],
        },
        {
          anchorId: "solutions-managers",
          label: "Untuk Manajer",
          status: "live",
          benefit: "Approve cepat, AI sudah cek duluan",
          blurb:
            "Laras mengecek angka, kenaikan harga vendor, dan pajak sebelum sampai ke Anda.",
          image: "/assets/for-manager.webp",
          imageAlt: "Mockup persetujuan Laras untuk manajer",
          imageWidth: 712,
          imageHeight: 1379,
          features: [
            { body: "Tandai harga, ongkir, atau pajak tak wajar" },
            { body: "Ringkasan inti tanpa cek manual satu-satu" },
            { body: "Persetujuan aman di HP dengan 2FA" },
          ],
        },
        {
          anchorId: "solutions-finance",
          label: "Untuk Finance",
          status: "live",
          benefit: "Rekap seharian beres dalam 5 menit",
          blurb:
            "Kelompokkan tagihan rutin, arsipkan nota per bulan, dan ingatkan approval mendesak.",
          image: "/assets/for-admin.webp",
          imageAlt: "Mockup laporan Laras untuk tim finance",
          imageWidth: 1878,
          imageHeight: 1158,
          overlap: true,
          features: [
            { body: "Klasifikasi otomatis tagihan rutin bulanan" },
            { body: "Arsip nota otomatis dan rapi per bulan" },
            { body: "Pengingat netral untuk approval mendesak" },
          ],
        },
        {
          anchorId: "solutions-hr",
          label: "Untuk HR & Divisi Lainnya",
          status: "soon",
          benefit: "Satu AI aman untuk semua divisi",
          blurb:
            "Dimulai dari Finance, lalu menyusul untuk HR, proyek, dan operasional lainnya.",
          features: [
            { body: "Alur kerja HR dan admin internal mendatang" },
            { body: "Kontrol akses dan audit trail yang sama" },
            { body: "Beri tahu divisi mana yang Anda butuhkan" },
          ],
        },
      ],
    },
    security: {
      eyebrow: "AI AMAN UNTUK PERUSAHAAN",
      h2: "Hubungkan perusahaan Anda ke AI dengan aman",
      sub: "Berbeda dari chat AI publik, Laras menjaga data perusahaan tetap privat, menempatkan tim Anda sebagai pemegang keputusan akhir, dan mencatat setiap aktivitas secara otomatis.",
      c1Title: "Tidak ada yang disimpan tanpa konfirmasi Anda",
      c1Body:
        "Laras membantu menyusun dan mengecek detail, tetapi tidak pernah menyimpan atau menyetujui sendiri. Keputusan akhir selalu di tangan tim Anda.",
      c2Title: "Data perusahaan tetap privat",
      c2Body:
        "Struk, invoice, dan chat tersimpan eksklusif di ruang kerja privat perusahaan Anda, tidak dibagikan ke pihak lain, dan mengikuti aturan perlindungan data yang berlaku.",
      c3Title: "Catatan permanen siap audit",
      c3Body:
        "Setiap draf, perubahan, dan persetujuan biometrik tercatat otomatis, sehingga pengecekan bulanan maupun audit jauh lebih ringan.",
      c4Title: "Akses dibatasi sesuai peran",
      c4Body:
        "Karyawan, manajer, dan Finance hanya melihat data sesuai wewenangnya, sehingga angka sensitif perusahaan tetap terlindungi.",
    },
    howItWorks: {
      eyebrow: "CARA KERJA",
      h2: "Dari struk dan chat berantakan hingga catatan siap audit dalam 4 langkah",
      sub: "Laras membereskan rekap dan pengecekan. Tim Anda tinggal konfirmasi dan memutuskan.",
      steps: [
        {
          num: "01",
          title: "Kirim struk, invoice, atau chat",
          body: "Kirim foto struk, PDF, atau screenshot belanja dalam bahasa Indonesia maupun Inggris. Laras membaca vendor, tanggal, pajak, dan total sekaligus.",
        },
        {
          num: "02",
          title: "Dicek dan disusun sebelum disimpan",
          body: "Laras menyusun draf sesuai format perusahaan Anda lalu menandai kenaikan harga vendor, ongkir tak wajar, atau selisih pajak sebelum disimpan.",
        },
        {
          num: "03",
          title: "Persetujuan cepat dari HP",
          body: "Approver meninjau ringkasan yang sudah dicek AI langsung dari HP dengan 2FA biometrik dan tanda tangan digital, lengkap dengan pengingat netral untuk pembayaran mendesak.",
        },
        {
          num: "04",
          title: "Tersusun per bulan, siap kapan saja",
          body: "Tagihan rutin dikelompokkan otomatis dan setiap nota diarsipkan rapi per bulan. Cukup minta Laras di chat untuk ringkasan PDF atau Excel kapan saja.",
        },
      ],
    },
    pricing: {
      eyebrow: "HARGA",
      h2: "Pilih paket yang pas untuk skala perusahaan Anda",
      sub: "Semua fitur AI Laras tersedia penuh di tiap paket berbayar, dari baca struk otomatis sampai deteksi kenaikan harga dan duplikat.",
      billingMonthly: "Bulanan",
      billingAnnual: "Tahunan",
      allowanceCardNote:
        "Kuota task diperbarui setiap bulan. 1 task = 1 pengajuan atau rekap yang diproses Laras.",
      period: "/bulan",
      billedAnnually: "Ditagih tahunan",
      specLabels: {
        users: "Pengguna",
        allowance: "Kuota Perusahaan",
        approvals: "Level Approval",
        capabilities: "Termasuk",
      },
      plans: [
        {
          id: "trial",
          name: "Trial",
          badge: "Gratis",
          monthlyPrice: "Rp 0",
          annualPrice: "Rp 0",
          caption: "Untuk mencoba alur kerja Laras bersama tim Anda",
          users: "2 pengguna (Admin + 1 anggota)",
          allowance: "70 task total (tanpa batas waktu)",
          approvals: "Maksimal 2 level approval",
          capabilities: [{ text: "Fitur lengkap paket Basic" }],
          cta: "Mulai Gratis",
          ctaType: "trial",
        },
        {
          id: "basic",
          name: "Basic",
          monthlyPrice: PRICING_DUMMY.basicMonthly,
          annualPrice: PRICING_DUMMY.basicAnnual,
          hasPeriod: true,
          caption: "Untuk tim kecil yang mulai merapikan persetujuan",
          users: "Termasuk 2 pengguna",
          allowance: "400 task/bulan (kuota gabungan perusahaan)",
          approvals: "Maksimal 2 level approval",
          capabilities: [
            {
              text: "Baca struk & invoice otomatis, cek vendor, dan deteksi duplikat",
            },
          ],
          cta: "Hubungi Tim Laras",
          ctaType: "whatsapp",
        },
        {
          id: "pro",
          name: "Pro",
          badge: "Paling Populer",
          featured: true,
          monthlyPrice: PRICING_DUMMY.proMonthly,
          annualPrice: PRICING_DUMMY.proAnnual,
          hasPeriod: true,
          caption: "Untuk perusahaan berkembang dengan kontrol berlapis",
          users: "Termasuk 10 pengguna",
          allowance: "2.000 task/bulan (kuota gabungan perusahaan)",
          approvals: "Maksimal 5 level approval",
          capabilities: [
            { text: "Semua fitur Basic + " },
            { text: "Device Binding", bold: true },
            { text: " (1 HP terdaftar per pengguna) + " },
            { text: "Otomasi Terjadwal", bold: true },
            { text: " (laporan & pengingat rutin otomatis)" },
          ],
          cta: "Pilih Paket Pro",
          ctaType: "whatsapp",
        },
        {
          id: "enterprise",
          name: "Enterprise",
          monthlyPrice: "Hubungi Kami",
          annualPrice: "Hubungi Kami",
          caption: "Untuk perusahaan besar dengan kebutuhan khusus",
          users: "Termasuk 50 pengguna",
          allowance: "Basis 10.000 task/bulan (dapat disesuaikan)",
          approvals: "Level approval tidak terbatas",
          capabilities: [
            {
              text: "Semua fitur Pro + dukungan aktivasi & kuota khusus perusahaan",
            },
          ],
          cta: "Konsultasi Enterprise",
          ctaType: "whatsapp",
        },
      ],
    },
    ctaFooter: {
      h2Prefix: "Siap memangkas kerja rutin seharian jadi ",
      h2Accent: "5 menit?",
      sub: "Mulai delegasikan pencatatan dan pengecekan pengeluaran harian ke asisten AI perusahaan yang aman.",
      primary: "Mulai Uji Coba Gratis",
      secondary: "Jadwalkan Demo",
      orDownload: "Atau unduh aplikasi mobile kami",
      aboutBlurb:
        "Laras.ai adalah layanan asisten AI aman untuk perusahaan yang membantu tim mendelegasikan operasional harian tanpa perlu belajar software baru.",
      cols: [
        {
          h: "Solusi",
          items: [
            { label: "Untuk Karyawan", href: "#solutions-employees" },
            { label: "Untuk Manajer", href: "#solutions-managers" },
            { label: "Untuk Finance", href: "#solutions-finance" },
            { label: "HR & Divisi Lainnya (Segera Hadir)", href: "#solutions-hr" },
          ],
        },
        {
          h: "Produk",
          items: [
            { label: "Masalahnya", href: "#problem" },
            { label: "Keamanan & Kepercayaan", href: "#security" },
            { label: "Cara Kerja", href: "#how-it-works" },
            { label: "Harga", href: "#pricing" },
          ],
        },
        {
          h: "Perusahaan",
          items: [
            { label: "Tentang Laras.ai", href: "#about" },
            { label: "Jadwalkan Demo", href: DEMO_MAILTO },
            { label: "Kebijakan Privasi", href: "/privacy-policy" },
            { label: "Syarat & Ketentuan", href: "/terms" },
          ],
        },
      ],
      copyright: "Copyright 2026 Laras.ai. All rights reserved.",
    },
  },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Buttery per-section scroll on desktop: ScrollSmoother + slow anchor glides.
// Skipped on mobile and prefers-reduced-motion (native scroll takes over).
function SmoothScroll({ lang }: { lang: Lang }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        effects: false,
      });
      ScrollTrigger.refresh();
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      const onClick = (e: MouseEvent) => {
        const anchor = (e.target as Element).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        if (!hash || hash.length < 2) return;
        const el = document.querySelector(hash);
        if (!el) return;
        e.preventDefault();
        smoother.scrollTo(el, true, "top 88px");
      };
      document.addEventListener("click", onClick);
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          smoother.scrollTo(el, false, "top 88px");
        }
      }
      return () => {
        document.removeEventListener("click", onClick);
        window.removeEventListener("load", onLoad);
        smoother.kill();
      };
    });
    return () => mm.revert();
  }, [reduce]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [lang]);

  return null;
}

function Nav({ lang }: { lang: Lang }) {
  const [overHero, setOverHero] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const mobileOpenRef = useRef(false);
  const t = COPY[lang].nav;

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const hero = document.getElementById("hero");
      const limit = hero ? hero.offsetHeight - 96 : window.innerHeight - 96;
      setOverHero(y < limit);

      const delta = y - lastScrollY.current;
      if (y <= 80 || mobileOpenRef.current) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-40 transition-all duration-300 ${
        overHero ? "top-0 px-0" : "top-3 px-3 sm:top-4 sm:px-4"
      } ${hidden ? "pointer-events-none -translate-y-[140%] opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div
        className={`flex h-14 items-center justify-between gap-3 transition-all duration-300 md:grid md:grid-cols-[1fr_auto_1fr] ${
          overHero
            ? "mx-auto max-w-7xl bg-transparent px-4 sm:px-6"
            : "mx-auto max-w-5xl rounded-full bg-white/90 py-1 pr-1.5 pl-4 shadow-[0_8px_30px_rgba(11,31,51,0.12)] ring-1 ring-black/5 backdrop-blur-xl"
        }`}
      >
        <a
          href="#hero"
          className="flex shrink-0 items-center justify-self-start"
          aria-label="Laras.ai home"
        >
          <Image
            src="/assets/Logo-laras.svg"
            alt="Laras.ai"
            width={92}
            height={27}
            className="h-6 w-auto"
            priority
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-self-center gap-5 text-sm whitespace-nowrap md:flex lg:gap-7"
        >
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-medium transition-colors duration-200 ${
                overHero ? "text-white/80 hover:text-white" : "text-[#475467] hover:text-[#0B1F33]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
          <a
            href="#pricing"
            className={`hidden rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors md:inline-flex ${
              overHero
                ? "text-white/85 hover:bg-white/10 hover:text-white"
                : "text-[#0B1F33] hover:bg-[#F4F3EC]"
            }`}
          >
            {t.login}
          </a>

          <a
            href="#pricing"
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 active:translate-y-px active:scale-[0.98] ${
              overHero
                ? "bg-white text-[#0B1F33] hover:bg-[#E9F3EC]"
                : "bg-[#0B1F33] text-white hover:bg-[#14745A]"
            }`}
          >
            {t.primary}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition md:hidden ${
              overHero ? "text-white hover:bg-white/10" : "text-[#0B1F33] hover:bg-[#F4F3EC]"
            }`}
          >
            {mobileOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl px-4 md:hidden">
          <div className="rounded-2xl bg-white p-4 text-[#0B1F33] shadow-xl ring-1 ring-black/10">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {t.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#0B1F33] hover:bg-[#F4F3EC]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#475467] hover:bg-[#F4F3EC]"
              >
                {t.login}
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// ── Section 1: Hero ──────────────────────────────────────────────────────────

function Hero({ lang }: { lang: Lang }) {
  const reduce = useReducedMotion();
  const t = COPY[lang].hero;

  return (
    <section id="hero" className="relative overflow-hidden bg-[#151e2c]">
      <Velaris
        bg={HERO_BG}
        colors={HERO_COLORS}
        speed={1.0}
        grain={0.35}
        height="100%"
        className="absolute inset-0"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-32 pb-12 text-center sm:px-6">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-4xl leading-[1.16] font-semibold tracking-tight text-balance text-white sm:text-5xl sm:leading-[1.12] lg:text-[3.75rem]"
        >
          <span className="block">{t.h1Line1}</span>
          <span className="block">
            {t.h1Line2Prefix}
            <em className="font-serif text-[1.08em] leading-[0.88] font-bold tracking-normal italic sm:text-[1.14em]">
              {t.h1Accent}
            </em>
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-[56ch] text-base leading-relaxed text-white/80 md:text-lg"
        >
          {t.sub}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#pricing"
            className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-[#0B1F33] shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:bg-[#E9F3EC] active:translate-y-px active:scale-[0.98]"
          >
            {t.primary}
          </a>
          <a
            href="#cta"
            className="rounded-full bg-white/5 px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-white ring-1 ring-white/40 backdrop-blur-xs transition hover:bg-white/10 hover:ring-white active:translate-y-px active:scale-[0.98]"
          >
            {t.secondary}
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70"
        >
          <a
            href={STORE_URL_APPLE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
          >
            <AppleLogo size={14} weight="fill" />
            App Store
          </a>
          <span aria-hidden className="text-white/30">
            ·
          </span>
          <a
            href={STORE_URL_PLAY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition hover:bg-white/10 hover:text-white"
          >
            <AndroidLogo size={14} weight="fill" />
            Google Play
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-[646px]"
        >
          <ChatSimulation lang={lang} />
        </motion.div>
      </div>
    </section>
  );
}

// ── Section 2: The Problem (3 Cards) ─────────────────────────────────────────

const PROBLEM_ILLUSTRATIONS = [
  ManualWorkIllustration,
  ApprovalWorkflowIllustration,
  ToolDilemmaIllustration,
] as const;

function ProblemSection({ lang }: { lang: Lang }) {
  const t = COPY[lang].problem;

  return (
    <section id="problem" className="flex min-h-[100svh] items-center bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal>
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-4xl lg:text-[2.6rem]">
              {t.h2}
            </h2>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-[#475467]">
              {t.sub}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.cards.map((card, i) => {
            const ProblemIcon = card.icon;
            const Illustration = PROBLEM_ILLUSTRATIONS[i];
            return (
              <Reveal key={card.tag} delay={i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-[#ECEAE2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,51,0.07)] lg:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#FFFDF9] px-3.5 py-1 text-xs font-medium text-[#C2631A] ring-1 ring-[#EFE6DA]">
                      {card.tag}
                    </span>
                    <ProblemIcon
                      size={20}
                      weight="duotone"
                      className="shrink-0 text-[#B45309]"
                    />
                  </div>
                  <div className="mt-4">
                    <Illustration lang={lang} />
                  </div>
                  <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-[1.15rem]">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475467]">
                    {card.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Bridge Statement (Selection Frame + Magic Text Scroll Reveal) ─

function BridgeSection({ lang }: { lang: Lang }) {
  const t = COPY[lang].bridge;
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement | null>(null);

  // Flatten segments into individual words with bold metadata
  const words = t.segments.flatMap((seg) =>
    seg.text
      .trim()
      .split(/\s+/)
      .map((word) => ({ word, bold: seg.bold }))
  );

  useEffect(() => {
    const el = frameRef.current;
    if (!el || reduce) return;

    const ctx = gsap.context(() => {
      const wordNodes = el.querySelectorAll<HTMLElement>("[data-magic-word]");
      if (!wordNodes.length) return;

      gsap.set(wordNodes, { opacity: 0.16 });
      gsap.to(wordNodes, {
        opacity: 1,
        stagger: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 42%",
          scrub: 0.25,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [lang, reduce]);

  return (
    <section id="bridge" className="flex min-h-[100svh] items-center bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div
          ref={frameRef}
          className="relative border border-[#14745A]/75 bg-white px-7 py-10 text-left sm:px-14 sm:py-16 lg:px-20 lg:py-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(11, 31, 51, 0.16) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        >
          {/* 4 Corner Selection Handles */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-[6px] -left-[6px] h-3 w-3 bg-[#14745A]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -top-[6px] -right-[6px] h-3 w-3 bg-[#14745A]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-[6px] -left-[6px] h-3 w-3 bg-[#14745A]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-[6px] -bottom-[6px] h-3 w-3 bg-[#14745A]"
          />

          {/* Small Eyebrow inside top-left of frame */}
          <p className="text-sm font-medium tracking-normal text-[#14745A] sm:text-base">
            {t.eyebrow}
          </p>

          {/* Single Long Display Heading with Magic Text Word-by-Word Scroll Reveal */}
          <h2 className="mt-3 text-3xl leading-[1.16] tracking-[-0.03em] text-[#0B1F33] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            {words.map((item, idx) => (
              <span
                key={`${lang}-${idx}-${item.word}`}
                data-magic-word
                className={`mr-[0.24em] inline-block transition-colors ${
                  item.bold ? "font-semibold" : "font-light"
                }`}
                style={reduce ? undefined : { opacity: 0.16 }}
              >
                {item.word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}

// ── Section 4: Solutions by Role (Original Sticky Split Design, Updated Copy) ─

function SoonBadge({ label = "Coming Soon" }: { label?: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap text-[#92400E] ring-1 ring-[#D97706]/25">
      <Clock size={12} weight="bold" />
      {label}
    </span>
  );
}

function SolutionPreview({
  row,
  soonBadge,
  soonPreview,
  className = "",
}: {
  row: SolutionRow;
  soonBadge: string;
  soonPreview: string;
  className?: string;
}) {
  if (!row.image) {
    return (
      <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-3 rounded-[2rem] bg-[#F4F3EC] px-6 py-16 text-center ring-1 ring-black/5">
        <SoonBadge label={soonBadge} />
        <p className="text-sm leading-relaxed text-[#475467]">{soonPreview}</p>
      </div>
    );
  }
  return (
    <Image
      src={row.image}
      alt={row.imageAlt ?? row.label}
      width={row.imageWidth ?? 335}
      height={row.imageHeight ?? 656}
      loading="lazy"
      className={`h-auto object-contain ${className}`}
    />
  );
}

function Modules({ lang }: { lang: Lang }) {
  const t = COPY[lang].solutions;
  const rows = t.rows;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  // Deteksi kartu aktif via IntersectionObserver: live terhadap layout final,
  // kebal terhadap posisi basi (gambar lazy-load, font swap, ScrollSmoother).
  // Kartu yang memotong pita tengah viewport (10%) menjadi preview aktif.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const cards = section.querySelectorAll<HTMLElement>("[data-solution-card]");
    if (!cards.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.solutionCard ?? 0));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [lang]);

  // Animasi halus setiap preview berganti.
  useEffect(() => {
    if (reduceMotion) return;
    const layer = sectionRef.current?.querySelector(`[data-preview-layer="${active}"]`);
    if (layer) {
      gsap.fromTo(
        layer,
        { scale: 0.97, y: 12 },
        { scale: 1, y: 0, duration: 0.85, ease: "power3.out", overwrite: "auto" }
      );
    }
  }, [active, reduceMotion]);

  // Preview kanan menempel selama kartu kiri di-scroll (desktop).
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const grid = section.querySelector<HTMLElement>("[data-solution-grid]");
      const preview = section.querySelector<HTMLElement>("[data-solution-preview]");
      if (!grid || !preview) return;
      const tween = gsap.to(preview, {
        y: () => Math.max(0, grid.offsetHeight - preview.offsetHeight),
        ease: "none",
        scrollTrigger: {
          trigger: grid,
          start: "top top+=112",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      return () => {
        window.removeEventListener("load", onLoad);
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(preview, { y: 0 });
      };
    });
    return () => mm.revert();
  }, [reduceMotion, lang]);

  return (
    <section id="solutions" ref={sectionRef} className="overflow-x-clip bg-[#F4F3EC]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#0B1F33] uppercase ring-1 ring-black/5">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
              {t.h2}
            </h2>
            <p className="mx-auto mt-3 max-w-[62ch] text-base leading-relaxed text-[#475467]">
              {t.sub}
            </p>
          </div>
        </Reveal>

        <div data-solution-grid className="mt-12 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-10">
          <div className="grid content-start gap-6">
            {rows.map((row, i) => (
              <Reveal key={i}>
                <article
                  id={row.anchorId}
                  data-solution-card={i}
                  className="flex scroll-mt-28 flex-col justify-center rounded-[2rem] bg-white p-6 sm:p-10 lg:min-h-[78vh] lg:p-14"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-lg bg-[#DCE9F7] px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#3E6E9E] uppercase">
                        {row.label}
                      </span>
                      {row.status === "soon" ? <SoonBadge label={t.soonBadge} /> : null}
                    </div>
                    <h3 className="mt-4 max-w-[20ch] text-2xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-3xl">
                      {row.benefit}
                    </h3>
                    <hr className="my-5 border-[#E5E3DA]" />
                    <p className="max-w-[52ch] text-sm leading-relaxed text-[#475467] md:text-base">
                      {row.blurb}
                    </p>
                    <ul className="mt-5 grid gap-4">
                      {row.features.map((f) => (
                        <li key={f.body} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7A5F]"
                          />
                          <p className="text-sm leading-relaxed text-[#475467] md:text-[15px]">
                            {f.body}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex justify-center lg:hidden">
                    <SolutionPreview
                      row={row}
                      soonBadge={t.soonBadge}
                      soonPreview={t.soonPreview}
                      className={row.overlap ? "w-full" : "w-full max-w-[420px]"}
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:block">
            <div data-solution-preview className="sticky top-28 z-10">
              <div className="relative mx-auto flex h-[68vh] min-h-[500px] w-full items-center justify-center">
                {rows.map((row, i) => (
                  <div
                    key={i}
                    data-preview-layer={i}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 motion-reduce:transition-none ${
                      i === active ? "z-10 opacity-100" : "z-0 opacity-0"
                    }`}
                  >
                    <SolutionPreview
                      row={row}
                      soonBadge={t.soonBadge}
                      soonPreview={t.soonPreview}
                      className={
                        row.overlap
                          ? "-ml-28 w-[660px] max-w-none shrink-0"
                          : "max-h-full w-auto max-w-full"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 5: Security & Trust (4-Card Bento Grid) ──────────────────────────

function SecurityTrust({ lang }: { lang: Lang }) {
  const t = COPY[lang].security;

  return (
    <section id="security" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="inline-flex items-center rounded-full bg-[#E9F3EC] px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#0D5240] uppercase ring-1 ring-[#14745A]/15">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
              {t.h2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475467] md:text-lg">{t.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6">
          {/* Top 2 Cards Side-by-Side */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0} className="h-full">
              <article className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-[#ECEAE2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,51,0.07)] sm:p-8">
                <div>
                  <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-2xl">
                    {t.c1Title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475467] sm:text-[15px]">
                    {t.c1Body}
                  </p>
                </div>
                <div className="mt-5">
                  <ConfirmBeforeSavingIllustration lang={lang} />
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.06} className="h-full">
              <article className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 ring-1 ring-[#ECEAE2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,51,0.07)] sm:p-8">
                <div>
                  <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-2xl">
                    {t.c2Title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#475467] sm:text-[15px]">
                    {t.c2Body}
                  </p>
                </div>
                <div className="mt-5">
                  <PrivateWorkspaceIllustration lang={lang} />
                </div>
              </article>
            </Reveal>
          </div>

          {/* Middle Full-Width Cream Card (Permanent Audit Trail + Biometrics) */}
          <Reveal delay={0.08}>
            <article className="group grid gap-6 rounded-2xl bg-[#F4F3EC] p-6 ring-1 ring-[#E3E6DF] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,51,0.07)] sm:p-8 lg:grid-cols-[1fr_1.18fr] lg:items-center lg:gap-10 lg:p-10">
              <div>
                <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-2xl">
                  {t.c3Title}
                </h3>
                <p className="mt-2.5 max-w-[46ch] text-sm leading-relaxed text-[#475467] sm:text-[15px]">
                  {t.c3Body}
                </p>
              </div>
              <AuditTrailBiometricIllustration lang={lang} />
            </article>
          </Reveal>

          {/* Bottom Full-Width Card (Role-Based Access) */}
          <Reveal delay={0.1}>
            <article className="group grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-[#ECEAE2] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(11,31,51,0.07)] sm:p-8 lg:grid-cols-[1fr_1.22fr] lg:items-center lg:gap-10 lg:p-10">
              <div>
                <h3 className="text-xl leading-snug font-semibold tracking-tight text-balance text-[#0B1F33] sm:text-2xl">
                  {t.c4Title}
                </h3>
                <p className="mt-2.5 max-w-[44ch] text-sm leading-relaxed text-[#475467] sm:text-[15px]">
                  {t.c4Body}
                </p>
              </div>
              <RoleAccessIllustration lang={lang} />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Section 6: How It Works (Split Interactive Steps — Option 2) ─────────────

function HowItWorks({ lang }: { lang: Lang }) {
  const t = COPY[lang].howItWorks;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 60);
    return () => window.clearTimeout(id);
  }, [activeStep, lang]);

  return (
    <section id="how-it-works" className="bg-[#F4F3EC]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#0B1F33] uppercase ring-1 ring-black/5">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
              {t.h2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475467] md:text-lg">{t.sub}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Left Column: Interactive Vertical Stepper (01–04) */}
          <div className="grid gap-3.5" aria-label={t.eyebrow}>
            {t.steps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={s.num}
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-[0_14px_36px_rgba(11,31,51,0.08)] ring-2 ring-[#14745A]"
                      : "bg-white/75 ring-1 ring-[#E3E6DF] hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStep(idx)}
                    className="flex w-full cursor-pointer items-start gap-4 p-5 text-left sm:p-6"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-[#14745A] text-white"
                          : "bg-[#F4F3EC] text-[#475467]"
                      }`}
                    >
                      {s.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-lg leading-snug font-semibold tracking-tight transition-colors sm:text-xl ${
                          isActive ? "text-[#0B1F33]" : "text-[#344054]"
                        }`}
                      >
                        {s.title}
                      </h3>
                      {isActive && (
                        <>
                          <p className="mt-2.5 text-sm leading-relaxed text-[#475467] sm:text-[15px]">
                            {s.body}
                          </p>
                          <div
                            aria-hidden
                            className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[#EDF1F6]"
                          >
                            <div
                              className="h-full rounded-full bg-[#14745A] transition-all duration-300"
                              style={{ width: `${((idx + 1) / t.steps.length) * 100}%` }}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </button>

                  {/* Mobile / Tablet Inline Dynamic Screen */}
                  {isActive && (
                    <div className="border-t border-[#ECEEF2] bg-[#FAF9F5] px-4 py-6 lg:hidden">
                      <HowItWorksMockup step={activeStep} lang={lang} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Single Dynamic Mockup Stage (Desktop) */}
          <div className="hidden items-center justify-center rounded-[2rem] bg-white p-8 shadow-[0_16px_44px_rgba(11,31,51,0.06)] ring-1 ring-[#E3E6DF] lg:flex lg:min-h-[520px] lg:p-10">
            <HowItWorksMockup step={activeStep} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Shared Store Badges ──────────────────────────────────────────────────────

function StoreBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={STORE_URL_APPLE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className="flex items-center gap-2.5 rounded-full px-3 py-1.5 ring-1 ring-white/30 transition hover:ring-white active:translate-y-px active:scale-[0.98]"
      >
        <AppleLogo size={18} weight="fill" className="text-white" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] text-white/60">Download on the</span>
          <span className="block text-sm font-semibold text-white">App Store</span>
        </span>
      </a>
      <a
        href={STORE_URL_PLAY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className="flex items-center gap-2.5 rounded-full px-3 py-1.5 ring-1 ring-white/30 transition hover:ring-white active:translate-y-px active:scale-[0.98]"
      >
        <AndroidLogo size={16} weight="fill" className="text-white" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase text-white/60">Get it on</span>
          <span className="block text-sm font-semibold text-white">Google Play</span>
        </span>
      </a>
    </div>
  );
}

// ── Section 7: Pricing (4-Column Feature Play Grid) ──────────────────────────

function Pricing({ lang }: { lang: Lang }) {
  const t = COPY[lang].pricing;
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => window.clearTimeout(id);
  }, [billing, lang]);

  return (
    <section id="pricing" className="relative border-t border-[#E3E6DF] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Header & Billing Toggle */}
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="inline-flex items-center rounded-full bg-[#E9F3EC] px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#0D5240] uppercase ring-1 ring-[#14745A]/15">
              {t.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
              {t.h2}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#475467] md:text-lg">{t.sub}</p>

            {/* [ Monthly | Annual ] Segmented Toggle */}
            <div className="mt-7 flex flex-col items-center gap-3">
              <div
                role="group"
                aria-label="Billing cycle"
                className="inline-flex items-center rounded-full bg-[#F4F3EC] p-1 ring-1 ring-[#E3E6DF]"
              >
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  aria-pressed={billing === "monthly"}
                  className={`min-h-[40px] cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    billing === "monthly"
                      ? "bg-[#0B1F33] text-white shadow-xs"
                      : "text-[#475467] hover:text-[#0B1F33]"
                  }`}
                >
                  {t.billingMonthly}
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  aria-pressed={billing === "annual"}
                  className={`min-h-[40px] cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    billing === "annual"
                      ? "bg-[#0B1F33] text-white shadow-xs"
                      : "text-[#475467] hover:text-[#0B1F33]"
                  }`}
                >
                  {t.billingAnnual}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4-Column Pricing Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.plans.map((plan, idx) => {
            const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;
            const href =
              plan.ctaType === "trial" ? "#cta" : buildWhatsAppPlanUrl(plan.name, lang);
            const isExternal = plan.ctaType === "whatsapp";

            return (
              <Reveal key={plan.id} delay={idx * 0.05} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 sm:p-7 ${
                    plan.featured
                      ? "bg-[#FCFDFC] shadow-[0_20px_48px_rgba(20,116,90,0.12)] ring-2 ring-[#14745A] xl:-translate-y-2"
                      : "bg-white ring-1 ring-[#E3E6DF] hover:shadow-[0_12px_30px_rgba(11,31,51,0.06)]"
                  }`}
                >
                  {/* Top Plan Name + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-semibold tracking-tight text-[#0B1F33]">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${
                          plan.featured
                            ? "bg-[#14745A] text-white"
                            : "bg-[#F4F3EC] text-[#0B1F33] ring-1 ring-[#E3E6DF]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Sub-caption */}
                  <p className="mt-2 min-h-[40px] text-sm leading-snug text-[#475467]">
                    {plan.caption}
                  </p>

                  {/* Price Block */}
                  <div className="mt-5 min-h-[60px] border-y border-[#ECEEF2] py-4">
                    <div className="flex flex-wrap items-baseline gap-1">
                      <span className="text-2xl font-bold tracking-tight text-[#0B1F33] tabular-nums sm:text-[1.7rem]">
                        {price}
                      </span>
                      {plan.hasPeriod && (
                        <span className="text-sm font-medium text-[#475467]">{t.period}</span>
                      )}
                    </div>
                    {plan.hasPeriod && billing === "annual" ? (
                      <p className="mt-1 text-xs font-medium text-[#14745A]">{t.billedAnnually}</p>
                    ) : (
                      <p className="mt-1 h-4 text-xs opacity-0" aria-hidden>
                        &nbsp;
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition active:translate-y-px active:scale-[0.98] ${
                      plan.featured
                        ? "bg-[#14745A] text-white shadow-[0_8px_20px_rgba(20,116,90,0.22)] hover:bg-[#0B1F33]"
                        : plan.id === "trial"
                          ? "bg-[#0B1F33] text-white hover:bg-[#14745A]"
                          : "bg-white text-[#0B1F33] ring-1 ring-[#0B1F33]/25 hover:bg-[#F4F3EC] hover:ring-[#0B1F33]"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Plan Specs */}
                  <dl className="mt-6 flex-1 space-y-4 text-sm">
                    <div className="flex items-start gap-2.5">
                      <Users
                        size={17}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-[#14745A]"
                      />
                      <div>
                        <dt className="text-[11px] font-semibold tracking-wide text-[#667085] uppercase">
                          {t.specLabels.users}
                        </dt>
                        <dd className="mt-0.5 font-medium text-[#0B1F33]">{plan.users}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <ChatCircleText
                        size={17}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-[#14745A]"
                      />
                      <div>
                        <dt className="text-[11px] font-semibold tracking-wide text-[#667085] uppercase">
                          {t.specLabels.allowance}
                        </dt>
                        <dd className="mt-0.5 font-medium text-[#0B1F33]">{plan.allowance}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <SlidersHorizontal
                        size={17}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-[#14745A]"
                      />
                      <div>
                        <dt className="text-[11px] font-semibold tracking-wide text-[#667085] uppercase">
                          {t.specLabels.approvals}
                        </dt>
                        <dd className="mt-0.5 font-medium text-[#0B1F33]">{plan.approvals}</dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 border-t border-[#ECEEF2] pt-4">
                      <Sparkle
                        size={17}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-[#14745A]"
                      />
                      <div>
                        <dt className="text-[11px] font-semibold tracking-wide text-[#667085] uppercase">
                          {t.specLabels.capabilities}
                        </dt>
                        <dd className="mt-0.5 leading-relaxed text-[#475467]">
                          {plan.capabilities.map((part, pIdx) =>
                            part.bold ? (
                              <strong key={pIdx} className="font-semibold text-[#0B1F33]">
                                {part.text}
                              </strong>
                            ) : (
                              <span key={pIdx}>{part.text}</span>
                            )
                          )}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Task Allowance Note Card */}
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-2xl bg-[#F4F3EC] px-6 py-4 text-center ring-1 ring-[#E3E6DF]">
            <p className="text-sm leading-relaxed font-medium text-[#0B1F33]">
              {t.allowanceCardNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Section 8: Final CTA & Footer (#cta & #about) ────────────────────────────

function CtaFooter({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const t = COPY[lang].ctaFooter;

  return (
    <section id="cta" className="relative overflow-hidden bg-[#151e2c] text-white">
      <Velaris
        bg={HERO_BG}
        colors={HERO_COLORS}
        speed={1.0}
        grain={0.35}
        height="100%"
        className="absolute inset-0"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mx-auto max-w-[24ch] text-3xl leading-[1.15] font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
              {t.h2Prefix}
              <em className="font-serif text-[1.1em] leading-[0.9] font-bold tracking-normal italic">
                {t.h2Accent}
              </em>
            </h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-base leading-relaxed text-white/80">
              {t.sub}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#pricing"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold whitespace-nowrap text-[#0B1F33] shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition hover:bg-[#E9F3EC] active:translate-y-px active:scale-[0.98]"
                >
                  {t.primary}
                </a>
                <a
                  href={DEMO_MAILTO}
                  className="rounded-full bg-white/5 px-7 py-3.5 text-sm font-semibold whitespace-nowrap text-white ring-1 ring-white/40 transition hover:bg-white/10 hover:ring-white active:translate-y-px active:scale-[0.98]"
                >
                  {t.secondary}
                </a>
              </div>

              <div className="mt-2 flex items-center gap-3 text-xs text-white/55">
                <span aria-hidden className="h-px w-10 bg-white/20" />
                {t.orDownload}
                <span aria-hidden className="h-px w-10 bg-white/20" />
              </div>
              <StoreBadges />
            </div>
          </div>
        </Reveal>
      </div>

      <footer
        id="about"
        className="relative z-10 mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16"
      >
        <div>
          <div className="flex items-center">
            <Image
              src="/assets/Logo-laras.svg"
              alt="Laras.ai"
              width={102}
              height={30}
              className="h-7 w-auto"
            />
          </div>
          <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/75">{t.aboutBlurb}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-white/80">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <WhatsappLogo size={15} weight="duotone" className="text-[#8FD6B4]" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <span aria-hidden className="text-white/30">
              |
            </span>
            <a
              href={SUPPORT_EMAIL_HREF}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <EnvelopeSimple size={15} weight="duotone" className="text-[#8FD6B4]" />
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
        {t.cols.map((c) => (
          <nav key={c.h} aria-label={c.h}>
            <h3 className="text-sm font-semibold">{c.h}</h3>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              {c.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="transition hover:text-white">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </footer>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6">
          <p>{t.copyright}</p>
          <div className="inline-flex items-center gap-2">
            <Globe size={14} />
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`cursor-pointer transition hover:text-white ${
                lang === "id" ? "font-semibold text-white underline underline-offset-4" : ""
              }`}
            >
              Bahasa Indonesia (ID)
            </button>
            <span aria-hidden>|</span>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`cursor-pointer transition hover:text-white ${
                lang === "en" ? "font-semibold text-white underline underline-offset-4" : ""
              }`}
            >
              English (EN)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Nav lang={lang} />
      <div id="smooth-wrapper">
        <main id="smooth-content" className="min-h-[100dvh] bg-white text-[#0B1F33]">
          <Hero lang={lang} />
          <ProblemSection lang={lang} />
          <BridgeSection lang={lang} />
          <Modules lang={lang} />
          <SecurityTrust lang={lang} />
          <HowItWorks lang={lang} />
          <Pricing lang={lang} />
          <CtaFooter lang={lang} setLang={setLang} />
        </main>
      </div>
      <SmoothScroll lang={lang} />
    </>
  );
}
