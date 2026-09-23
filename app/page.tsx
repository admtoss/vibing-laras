"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  ChatCircleText,
  ShieldCheck,
  ArrowRight,
  Globe,
  Clock,
  AppleLogo,
  AndroidLogo,
  BellRinging,
  Fingerprint,
  PenNib,
  Users,
  Check,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Velaris from "@/components/ui/velaris";
import { ChatSimulation } from "@/components/ui/chat-simulation";
import trialConfig from "@/config/trial.json";

// registerPlugin menyentuh window/document pada sebagian versi GSAP —
// hanya jalankan di client agar SSR/prerender tidak 500.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
}

const PRIMARY = "Start Free Trial";
const SECONDARY = "Schedule a Team Demo";

// Hero palette sampled from reference screenshot: dark navy-slate base,
// warm amber glow in the middle, teal-slate at the bottom.
const HERO_BG = "#151e2c";
const HERO_COLORS = ["#9c7c50", "#3f5f68", "#54472f", "#1d2a3c"];

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
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
function SmoothScroll() {
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
        const y = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 88);
        gsap.to(window, {
          duration: 0.6,
          ease: "power2.out",
          overwrite: "auto",
          scrollTo: { y },
        });
      };
      document.addEventListener("click", onClick);
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - 88));
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

  return null;
}

function Nav() {
  // Transparan + full width selama navbar masih di atas hero section,
  // berubah jadi pill putih begitu user scroll melewatinya.
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const limit = hero ? hero.offsetHeight - 96 : window.innerHeight - 96;
      setOverHero(window.scrollY < limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const links = [
    { href: "#solution", label: "Solution" },
    { href: "#fitur-finance", label: "Features" },
    { href: "#mobile", label: "Mobile" },
    { href: "#free-trial", label: "Trial" },
  ];

  return (
    <header className={`fixed inset-x-0 z-40 transition-all duration-300 ${overHero ? "top-0" : "top-3 sm:top-4"}`}>
      <div
        className={`flex h-14 items-center justify-between gap-2 transition-all duration-300 ${
          overHero
            ? "mx-auto max-w-7xl bg-transparent px-4 sm:px-6"
            : "mx-auto max-w-4xl rounded-full bg-white/85 py-1 pr-1.5 pl-4 shadow-[0_8px_30px_rgba(11,31,51,0.12)] ring-1 ring-black/5 backdrop-blur-xl"
        }`}
      >
        <a href="#hero" className="flex shrink-0 items-center" aria-label="Laras.ai home">
          <Image
            src="/assets/Logo-laras.svg"
            alt="Laras.ai"
            width={92}
            height={27}
            className="h-6 w-auto"
            priority
          />
        </a>
        <nav className="hidden items-center gap-5 text-sm whitespace-nowrap md:flex lg:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors duration-300 ${
                overHero ? "text-white/80 hover:text-white" : "text-[#475467] hover:text-[#0B1F33]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#free-trial"
          className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 active:translate-y-px active:scale-[0.98] ${
            overHero
              ? "bg-white text-[#0B1F33] hover:bg-[#E9F3EC]"
              : "bg-[#0B1F33] text-white hover:bg-[#14745A]"
          }`}
        >
          {PRIMARY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
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
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-12 text-center sm:px-6">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-[16ch] text-5xl leading-[1.02] font-semibold tracking-tight text-balance text-white md:text-6xl lg:text-7xl"
        >
          Governance AI for approvals without the paperwork
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-white/80 md:text-lg"
        >
          Snap a receipt, Laras drafts the memo and asks you to confirm before saving. Managers
          approve from their phone, and every step is recorded.
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#free-trial"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold whitespace-nowrap text-[#0B1F33] transition hover:bg-[#E9F3EC] active:translate-y-px active:scale-[0.98]"
          >
            {PRIMARY}
          </a>
          <a
            href="#cta"
            className="rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap text-white ring-1 ring-white/40 transition hover:ring-white active:translate-y-px active:scale-[0.98]"
          >
            {SECONDARY}
          </a>
        </motion.div>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs tracking-wide text-white/70"
        >
          <span className="inline-flex items-center gap-1.5">
            <AppleLogo size={14} weight="fill" />
            App Store
          </span>
          <span className="inline-flex items-center gap-1.5">
            <AndroidLogo size={14} weight="fill" />
            Google Play
          </span>
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-[646px]"
        >
          <ChatSimulation />
        </motion.div>
      </div>
    </section>
  );
}

function SoonBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FEF3C7] px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap text-[#92400E] ring-1 ring-[#D97706]/25">
      <Clock size={12} weight="bold" />
      Coming Soon
    </span>
  );
}

type SolutionRow = {
  label: string;
  benefit: string;
  blurb: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  overlap?: boolean;
  status: "live" | "soon";
  cta?: string;
  features: { title: string; body: string }[];
};

function SolutionPreview({ row, className = "" }: { row: SolutionRow; className?: string }) {
  if (!row.image) {
    return (
      <div className="flex w-full max-w-[300px] flex-col items-center justify-center gap-3 rounded-[2rem] bg-[#F4F3EC] px-6 py-16 text-center ring-1 ring-black/5">
        <SoonBadge />
        <p className="text-sm text-[#607D8B]">HR mockup is on its way</p>
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

function Modules() {
  const rows: SolutionRow[] = [
    {
      label: "For Employees",
      status: "live",
      benefit: "Skip the forms and long inputs",
      blurb:
        "Snap receipts and chat expenses. Laras drafts the memo and asks you to confirm before saving.",
      image: "/assets/for-staff.webp",
      imageAlt: "Laras chat mockup for employees",
      imageWidth: 712,
      imageHeight: 1406,
      features: [
        {
          title: "Snap Receipts and Invoices",
          body: "Vendor, date, and amount are picked up automatically, up to 5 receipts at once.",
        },
        {
          title: "Automatic Memo Drafts",
          body: "Just chat about the expense, Laras drafts the memo for you.",
        },
      ],
    },
    {
      label: "For Managers",
      status: "live",
      benefit: "Spot the details instantly, approve with total confidence",
      blurb:
        "Review claims and sign from your phone, protected by biometrics. Nothing waits for Monday.",
      image: "/assets/for-manager.webp",
      imageAlt: "Laras approval mockup for managers",
      imageWidth: 712,
      imageHeight: 1379,
      features: [
        {
          title: "Mobile 2FA Approval",
          body: "Review and approve expense claims right from your phone, no laptop needed.",
        },
        {
          title: "Digital Signature",
          body: "Add a handwritten signature (draw or upload), secured with biometrics.",
        },
      ],
    },
    {
      label: "For Finance",
      status: "live",
      benefit: "Month-end reconciliation without the missing receipts",
      blurb:
        "Ask for spending summaries in chat. Every approval and revision is recorded, step by step.",
      image: "/assets/for-admin.webp",
      imageAlt: "Laras report mockup for finance and admin teams",
      imageWidth: 1878,
      imageHeight: 1158,
      overlap: true,
      features: [
        {
          title: "Chat-Based Reports",
          body: "Ask for monthly spending by division, right in chat.",
        },
        {
          title: "Append-Only Audit Log",
          body: "Every approval and revision is recorded, step by step.",
        },
      ],
    },
    {
      label: "For HR",
      status: "soon",
      benefit: "No more paper slips for leave and permits",
      blurb: "Leave requests and HR approvals over chat, in the same calm flow as finance.",
      features: [
        {
          title: "Leave and Time-Off Requests",
          body: "Request leave dates in a quick chat.",
        },
        {
          title: "HR Approvals and Documents",
          body: "Approve HR requests and sign documents in one place.",
        },
      ],
    },
  ];

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
  }, []);

  // Animasi halus setiap preview berganti.
  useEffect(() => {
    if (reduceMotion) return;
    const layer =
      sectionRef.current?.querySelector(`[data-preview-layer="${active}"]`);
    if (layer) {
      gsap.fromTo(
        layer,
        { scale: 0.97, y: 12 },
        { scale: 1, y: 0, duration: 0.85, ease: "power3.out", overwrite: "auto" }
      );
    }
  }, [active, reduceMotion]);

  // Preview kanan menempel selama kartu kiri di-scroll (desktop).
  // Alasan: `position: sticky` tidak berfungsi di dalam GSAP ScrollSmoother
  // (content di-transform), sehingga preview ikut ke-scroll. Emulasi sticky via
  // transform scrub — aman di dalam Smoother, tanpa lompat di akhir section.
  // Sticky CSS dipertahankan sebagai fallback saat Smoother nonaktif
  // (mobile / reduced-motion).
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
  }, [reduceMotion]);

  return (
    <section id="solution" ref={sectionRef} className="overflow-x-clip bg-[#F4F3EC]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#607D8B] uppercase ring-1 ring-black/5">
              Governance AI for every role
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance text-[#101418] md:text-5xl">
              One calm flow for staff, managers, and finance
            </h2>
            <p className="mx-auto mt-3 max-w-[62ch] text-base leading-relaxed text-[#607D8B]">
              Staff chat instead of filling forms. Managers approve from their phone. Finance keeps
              a clean audit trail. HR is next in line.
            </p>
          </div>
        </Reveal>

        <div data-solution-grid className="mt-12 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-10">
          <div className="grid content-start gap-6">
            {rows.map((row, i) => (
              <Reveal key={row.label}>
                <article
                  data-solution-card={i}
                  className="flex scroll-mt-28 flex-col justify-center rounded-[2rem] bg-white p-6 sm:p-10 lg:min-h-[78vh] lg:p-14"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-lg bg-[#DCE9F7] px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[#3E6E9E] uppercase">
                        {row.label}
                      </span>
                      {row.status === "soon" ? <SoonBadge /> : null}
                    </div>
                    <h3 className="mt-4 max-w-[20ch] text-2xl font-bold tracking-tight text-balance text-[#101418] md:text-4xl">
                      {row.benefit}
                    </h3>
                    <hr className="my-5 border-[#E5E3DA]" />
                    <p className="max-w-[52ch] text-sm leading-relaxed text-[#3F4750] md:text-base">
                      {row.blurb}
                    </p>
                    {row.status === "soon" ? (
                      <p className="mt-5 max-w-[52ch] text-sm leading-relaxed text-[#3F4750] md:text-[15px]">
                        Request leave dates in a quick chat, then approve HR requests and sign
                        documents in one place.
                      </p>
                    ) : (
                      <ul className="mt-5 grid gap-4">
                        {row.features.map((f) => (
                          <li key={f.title} className="flex items-start gap-2.5">
                            <span
                              aria-hidden
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7A5F]"
                            />
                            <p className="text-sm leading-relaxed text-[#101418] md:text-[15px]">
                              <strong className="font-bold">{f.title}: </strong>
                              <span className="text-[#3F4750]">{f.body}</span>
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                    {row.cta ? (
                      <a
                        href="#cta"
                        className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0B1F33] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-[#14745A] active:translate-y-px active:scale-[0.98]"
                      >
                        {row.cta}
                        <ArrowRight size={16} weight="bold" />
                      </a>
                    ) : null}
                  </div>
                  <div className="mt-8 flex justify-center lg:hidden">
                    <SolutionPreview
                      row={row}
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
                    key={row.label}
                    data-preview-layer={i}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 motion-reduce:transition-none ${
                      i === active ? "z-10 opacity-100" : "z-0 opacity-0"
                    }`}
                  >
                    <SolutionPreview
                      row={row}
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

function PhoneFrame({
  children,
  dark = false,
  className = "",
  flushBottom = false,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  flushBottom?: boolean;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[240px] rounded-t-[2rem] p-2 shadow-[0_20px_50px_rgba(11,31,51,0.18)] ring-1 ${
        flushBottom ? "rounded-b-none pb-0" : "rounded-b-[2rem]"
      } ${
        dark ? "bg-[#0B1F33] ring-black/30" : "bg-[#0B1F33] ring-black/10"
      } ${className}`}
    >
      <div
        className={`overflow-hidden rounded-t-[1.6rem] ${flushBottom ? "rounded-b-none" : "rounded-b-[1.6rem]"} ${dark ? "bg-[#101E32] text-white" : "bg-white text-[#0B1F33]"}`}
      >
        <div className="flex justify-center pt-2">
          <div className={`h-5 w-20 rounded-full ${dark ? "bg-black" : "bg-[#0B1F33]"}`} />
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="fitur-finance" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-5xl">
              How Laras Simplifies Expense Operations
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#667085]">
              Scan receipts, draft memos, approve, and report, all without opening a form.
            </p>
          </div>
        </Reveal>

        {/* Row 1: Step 1 + Step 2 */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Step 1 — Input & Capture (gabungan Chat + Scan) */}
          <Reveal delay={0}>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[#EDF1F6] p-6 pb-0 sm:p-8 sm:pb-0">
              <span className="font-mono text-sm font-semibold text-[#2F6B4F]">Step 1</span>
              <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#0B1F33] md:text-[28px]">
                Input &amp; Capture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                Chat about your spending naturally in English or Indonesian, or upload receipts.
                Laras extracts vendor names, dates, categories, and totals instantly.
              </p>
              <div className="relative mt-6 -mb-12 flex items-end justify-center gap-3">
                <PhoneFrame flushBottom className="mx-0 max-w-[200px] shrink-0">
                  <p className="text-center text-[10px] font-semibold tracking-wide text-[#475467]">
                    LARAS.AI
                  </p>
                  <div className="mt-2 grid gap-1.5 text-[11px] leading-snug">
                    <p className="w-fit max-w-[95%] justify-self-end rounded-xl rounded-br-sm bg-[#0B1F33] px-2.5 py-2 text-white">
                      Record the parking reimbursement of 85K, okay?
                    </p>
                    <p className="w-fit max-w-[95%] rounded-xl rounded-bl-sm bg-[#F1F3F0] px-2.5 py-2">
                      Okey. Confirm the date &amp; project?
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 rounded-full bg-[#F1F3F0] px-2.5 py-2 text-[10px] text-[#667085]">
                    <ChatCircleText size={12} />
                    Write a message…
                  </div>
                </PhoneFrame>
                <PhoneFrame dark flushBottom className="mx-0 max-w-[200px] shrink-0">
                  <p className="text-center text-[10px] font-semibold text-white/70">
                    Document Intelligence
                  </p>
                  <div className="mt-2 rounded-xl bg-white/10 p-2.5">
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-4 rounded ${i < 5 ? "bg-[#8FD6B4]" : "bg-white/20"}`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-[11px] font-semibold text-white">
                      5 readable receipts
                    </p>
                    <p className="text-[10px] text-white/60">Vendor • Date • Total</p>
                  </div>
                  <div className="mt-2 grid gap-1.5 text-[10px]">
                    <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 text-[#0B1F33]">
                      <span className="font-semibold">Parking for 1 day</span>
                      <span className="font-bold">85,000 IDR</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/10 px-2.5 py-2 text-white">
                      <span>Fuel • Toll</span>
                      <span>2 files</span>
                    </div>
                  </div>
                </PhoneFrame>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-black/5">
                  <p className="text-[10px] whitespace-nowrap text-[#667085]">
                    Multi-language chat
                  </p>
                  <p className="text-xs font-bold whitespace-nowrap">ID • EN</p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Step 2 — Auto Drafted Memo */}
          <Reveal delay={0.06}>
            <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[#EDF1F6] p-6 pb-0 sm:p-8 sm:pb-0">
              <span className="font-mono text-sm font-semibold text-[#2F6B4F]">Step 2</span>
              <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#0B1F33] md:text-[28px]">
                Auto Drafted Memo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475467]">
                Draft Reimbursement, Advances, and Reports are instantly organized following your
                office format.
              </p>
              <div className="relative mt-6 -mb-12 flex justify-center">
                <PhoneFrame flushBottom className="mx-0 max-w-[240px]">
                  <div className="rounded-xl bg-gradient-to-b from-[#DCEFE6] to-white p-2.5 text-center">
                    <p className="text-[10px] text-[#475467]">Smart Expense Memo</p>
                    <p className="text-lg font-bold">Rp85,000</p>
                    <span className="mx-auto mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-[#14745A] ring-4 ring-[#8FD6B4]/40">
                      ✓
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1.5 text-[10px]">
                    <div className="rounded-lg bg-[#F1F3F0] px-2 py-2">
                      <p className="text-[#667085]">Reimburse</p>
                      <p className="font-bold">Ready to send</p>
                    </div>
                    <div className="rounded-lg bg-transparent px-2 py-2" />
                  </div>
                </PhoneFrame>
                <div className="absolute right-2 bottom-20 rounded-xl bg-white px-3 py-2 shadow-lg ring-1 ring-black/5 sm:right-6">
                  <p className="text-[10px] whitespace-nowrap text-[#667085]">
                    Confirm before saving
                  </p>
                  <p className="text-xs font-bold whitespace-nowrap">Check the draft first</p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Row 2: Step 3 wide card */}
        <Reveal delay={0.05}>
          <article className="mt-5 grid overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#E8EAFB] via-[#EDE9FA] to-[#E6E4F7] lg:grid-cols-[1fr_1.2fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="font-mono text-sm font-semibold text-[#2F6B4F]">Step 3</span>
              <h3 className="mt-1.5 text-3xl font-bold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
                Review &amp; Sign on Mobile
              </h3>
              <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-[#475467]">
                Managers can review and approve submissions up to 3 hierarchical levels from mobile
                with biometric 2FA security and digital signatures.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {[
                  { t: "3 sequential levels", d: "Approve / Reject / Return" },
                  { t: "Mobile 2FA", d: "Fingerprint & face" },
                  { t: "Digital signature", d: "" },
                ].map((r) => (
                  <li
                    key={r.t}
                    className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 text-sm ring-1 ring-white"
                  >
                    <span className="font-semibold">{r.t}</span>
                    {r.d ? <span className="text-xs text-[#667085]">{r.d}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative grid content-center gap-3 p-8 sm:p-10 lg:p-10">
              <div className="grid grid-cols-[1fr_1fr] gap-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold">
                    <ShieldCheck size={14} className="text-[#14745A]" />
                    Approval L1
                  </p>
                  <p className="mt-2 text-xl font-bold">Rp1.2M</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EDF1F6]">
                    <div className="h-full w-2/3 rounded-full bg-[#2F6B4F]" />
                  </div>
                  <p className="mt-2 text-[11px] text-[#667085]">Approved • 09:41</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-[11px] font-semibold text-[#667085]">Cost breakdown</p>
                  <div className="mt-2 grid gap-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span>Parking</span>
                      <strong>85k</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel</span>
                      <strong>250k</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Toll</span>
                      <strong>120k</strong>
                    </div>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="flex-1 rounded-full bg-[#0B1F33] py-1.5 text-center text-[11px] font-bold text-white">
                      Approve
                    </span>
                    <span className="flex-1 rounded-full py-1.5 text-center text-[11px] font-bold ring-1 ring-black/15">
                      Return
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-[#0B1F33] p-4 text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Fingerprint size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Biometrics on, signature valid</p>
                  <p className="text-xs text-white/60">Audit trail recorded automatically</p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Row 3: Step 4 wide card */}
        <Reveal delay={0.08}>
          <article className="mt-5 grid overflow-hidden rounded-[1.5rem] bg-[#EAF1F3] lg:grid-cols-[1.2fr_1fr]">
            <div className="relative flex justify-center overflow-hidden px-8 pt-8 pb-0">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 40% 50%, transparent 55%, rgba(11,31,51,0.08) 56%, transparent 57%), radial-gradient(ellipse 80% 100% at 40% 50%, transparent 65%, rgba(11,31,51,0.06) 66%, transparent 67%)",
                }}
              />
              <div className="relative -mb-12 w-full max-w-[340px]">
                <PhoneFrame flushBottom className="max-w-[320px]">
                  <p className="text-center text-[13px] font-bold">Laras</p>
                  <div className="mt-3 grid gap-2.5 text-[13px] leading-snug">
                    <p className="w-fit max-w-[95%] justify-self-end rounded-2xl rounded-br-md bg-[#0B1F33] px-4 py-3 text-white">
                      Summarize this month&apos;s memo by sales division..
                    </p>
                    <div className="w-fit max-w-[95%] rounded-2xl rounded-bl-md bg-[#F1F3F0] px-4 py-3">
                      <p className="font-bold">January sales memo</p>
                      <p className="mt-0.5 text-[#667085]">Total Rp4.8m • 12 memos</p>
                    </div>
                    <p className="w-full rounded-2xl bg-[#0B1F33] px-4 py-3 text-center font-medium text-white">
                      Download Report
                    </p>
                  </div>
                </PhoneFrame>
                <div className="absolute top-16 -right-4 rotate-6 rounded-2xl bg-white px-4 py-3 text-[11px] shadow-lg ring-1 ring-black/5 sm:-right-8">
                  <p className="text-sm font-bold">PDF</p>
                  <p className="text-[#667085]">Instant download</p>
                </div>
                <div className="absolute bottom-16 -left-4 -rotate-3 rounded-2xl bg-white px-4 py-3 text-[11px] shadow-lg ring-1 ring-black/5 sm:-left-8">
                  <p className="text-sm font-bold">WhatsApp</p>
                  <p className="text-[#667085]">Forward to group</p>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="font-mono text-sm font-semibold text-[#2F6B4F]">Step 4</span>
              <h3 className="mt-1.5 text-3xl font-bold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
                Effortless Month End Reporting
              </h3>
              <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-[#475467]">
                Ask for a summary of expenses directly in chat, for example, &ldquo;Summarize this
                month&apos;s memo by sales division.&rdquo; Receive a summary ready to download as
                PDF or share via WhatsApp.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

const STORE_URL_APPLE = "https://www.apple.com/app-store/";
const STORE_URL_PLAY = "https://play.google.com/store";

function StoreBadges({ dark = false, pill = false, compact = false }: { dark?: boolean; pill?: boolean; compact?: boolean }) {
  const ring = dark ? "ring-white/30 hover:ring-white" : "ring-[#0B1F33]/25 hover:ring-[#0B1F33]";
  const text = dark ? "text-white" : "text-[#0B1F33]";
  const sub = dark ? "text-white/60" : "text-[#475467]";
  const shape = pill ? "rounded-full" : "rounded-xl";
  const pad = compact ? "px-3 py-1.5" : "px-4 py-2.5";
  const iconSize = compact ? 18 : 26;
  const iconSizeSm = compact ? 16 : 24;
  const titleSize = compact ? "text-sm" : "text-base";
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={STORE_URL_APPLE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
        className={`flex items-center gap-2.5 ring-1 transition ${shape} ${pad} ${ring} active:translate-y-px active:scale-[0.98]`}
      >
        <AppleLogo size={iconSize} weight="fill" className={text} />
        <span className="text-left leading-tight">
          <span className={`block text-[10px] ${sub}`}>Download on the</span>
          <span className={`block font-semibold ${titleSize} ${text}`}>App Store</span>
        </span>
      </a>
      <a
        href={STORE_URL_PLAY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
        className={`flex items-center gap-2.5 ring-1 transition ${shape} ${pad} ${ring} active:translate-y-px active:scale-[0.98]`}
      >
        <AndroidLogo size={iconSizeSm} weight="fill" className={text} />
        <span className="text-left leading-tight">
          <span className={`block text-[10px] uppercase ${sub}`}>Get it on</span>
          <span className={`block font-semibold ${titleSize} ${text}`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}

function MobileShowcase() {
  const points = [
    {
      icon: BellRinging,
      title: "Instant Push Notifications",
      body: "Get notified right away when a memo needs your approval.",
    },
    {
      icon: Fingerprint,
      title: "Secure Approval (Mobile 2FA)",
      body: "Approvals are protected by your phone's biometric security (fingerprint / face recognition).",
    },
    {
      icon: PenNib,
      title: "Digital Signature",
      body: "Add a handwritten signature easily by drawing on screen or uploading from your gallery.",
    },
  ];
  return (
    <section id="mobile" className="bg-[#F5F4EF]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <Reveal>
          <Image
            src="/assets/Mockup-3dmobile.webp"
            alt="Laras.ai mobile app mockup"
            width={948}
            height={1201}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[420px] object-contain"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#0B1F33] uppercase ring-1 ring-[#0B1F33]/10">
              Laras.ai mobile app
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Approve claims from your phone, wherever you are
            </h2>
            <p className="mt-3 max-w-[56ch] text-base leading-relaxed text-[#475467]">
              Managers can review cost details, leave notes, and add a digital signature quickly
              and securely, from anywhere.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-3">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <li className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-[#E3E6DF]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B1F33] text-white">
                      <Icon size={20} weight="duotone" />
                    </span>
                    <p className="text-sm leading-relaxed text-[#0B1F33]">
                      <strong className="font-semibold">{p.title}: </strong>
                      <span className="text-[#475467]">{p.body}</span>
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-6">
              <StoreBadges />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Trial() {
  // Spec: section-license.md v1.3.1 (PRD v1.27/v1.28 §5.12) — Free Trial only.
  // Layout: sticky intro (left) + quota rows card (right). Base License card removed.
  const reduce = useReducedMotion();
  // Quota angka dinamis dari CMS / Config JSON (config/trial.json).
  // Ubah nilai di sana tanpa menyentuh markup — seluruh copy mengikuti otomatis.
  const rows = [
    {
      icon: ChatCircleText,
      value: String(trialConfig.trial_chat_limit),
      label: "Total Shared Chats",
      desc: "One shared pool for text chats, receipt scans, and memo drafts.",
    },
    {
      icon: Users,
      value: String(trialConfig.trial_seats),
      label: "Included User Seats",
      desc: `1 Admin plus ${trialConfig.trial_seats - 1} approver. Test the mobile 2FA approval flow from start to finish.`,
    },
    {
      icon: Clock,
      value: "∞",
      label: "No Time Expiry",
      desc: `No 7 day or 14 day cutoff. Active until all ${trialConfig.trial_chat_limit} chats are used.`,
    },
  ];
  return (
    <section id="free-trial" className="border-y border-[#E3E6DF] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:py-24">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-[#0B1F33] md:text-4xl">
              Experience the full workflow. No expiry date.
            </h2>
            <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-[#475467]">
              No credit card required. No 7-day countdown. Test real memos, mobile approvals, and
              reports with your core team, then scale whenever you&apos;re ready.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#cta"
                data-cta="trial-signup"
                className="rounded-full bg-[#0B1F33] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition hover:opacity-90 active:translate-y-px active:scale-[0.98]"
              >
                {PRIMARY}
              </a>
              <a
                href="#cta"
                data-cta="team-demo"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold whitespace-nowrap text-[#0B1F33] ring-1 ring-[#0B1F33]/25 transition hover:ring-[#0B1F33] active:translate-y-px active:scale-[0.98]"
              >
                {SECONDARY}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-0 overflow-hidden rounded-2xl bg-white ring-1 ring-[#E3E6DF]">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.label}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-start gap-5 p-6 sm:p-7 ${i > 0 ? "border-t border-[#E3E6DF]" : ""}`}
              >
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F5F1] text-[#0D5240]">
                  <Icon size={22} weight="duotone" />
                </span>
                <div className="flex flex-1 items-start gap-3">
                  <span className="text-5xl leading-none font-semibold tracking-tight text-[#0B1F33] tabular-nums">
                    {r.value}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[#0B1F33]">{r.label}</p>
                    <p className="text-sm text-[#475467]">{r.desc}</p>
                  </div>
                </div>
                <Check size={20} weight="bold" className="shrink-0 self-center text-[#14745A]" />
              </motion.div>
            );
          })}
          <p className="bg-[#0B1F33] px-6 py-4 text-center text-sm leading-relaxed text-white/90">
            Usage Weight: Text Chat (1 chat) • Draft Memo (2 chats) • Scan Receipt (4 chats)
          </p>
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  const cols = [
    { h: "Products", items: ["Finance Management (Live)", "HR Management (Coming Soon)"] },
    {
      h: "Features",
      items: ["AI Chat Assistant", "Scan Receipts", "Smart Memos", "Mobile Approval", "Chat Reporting"],
    },
    { h: "Company", items: ["About Us", "Privacy Policy", "Terms & Conditions"] },
  ];
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
            <h2 className="mx-auto max-w-[22ch] text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              Ready for approvals without the paperwork?
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-base leading-relaxed text-white/70">
              Transform corporate finance today, with HR operations arriving soon to unify your
              team&apos;s daily workflows.
            </p>
            <div className="mt-8 flex flex-col items-center gap-5">
              <a
                href="#free-trial"
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold whitespace-nowrap text-[#0B1F33] shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition hover:bg-[#E9F3EC] active:translate-y-px active:scale-[0.98]"
              >
                {PRIMARY}
              </a>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span aria-hidden className="h-px w-10 bg-white/20" />
                Or download our mobile app
                <span aria-hidden className="h-px w-10 bg-white/20" />
              </div>
              <StoreBadges dark pill compact />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr_1fr] lg:py-16">
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
          <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-white/70">
            Smart corporate governance and claim automation for modern companies.
          </p>
        </div>
        {cols.map((c) => (
          <nav key={c.h} aria-label={c.h}>
            <h3 className="text-sm font-semibold">{c.h}</h3>
            <ul className="mt-3 grid gap-2 text-sm text-white/70">
              {c.items.map((it) => (
                <li key={it}>
                  <a href="#hero" className="transition hover:text-white">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:px-6">
          <p>Copyright 2026 Laras.ai. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            <Globe size={14} />
            Bahasa Indonesia (ID) | English (EN)
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Nav />
      <div id="smooth-wrapper">
        <main id="smooth-content" className="min-h-[100dvh] bg-white text-[#0B1F33]">
          <Hero />
      <Modules />
      <Features />
      <MobileShowcase />
          <Trial />
          <CtaFooter />
        </main>
      </div>
      <SmoothScroll />
    </>
  );
}
