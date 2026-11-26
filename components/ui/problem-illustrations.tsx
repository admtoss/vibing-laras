"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  FileText,
  GearSix,
  House,
  ChartBar,
  HourglassMedium,
  Warning,
  FolderSimple,
  LockSimple,
  Spiral,
} from "@phosphor-icons/react";
import type { ChatLang } from "@/components/ui/chat-simulation";
import {
  AccentRays,
  EASE_OUT,
  IllustrationStage,
  SecurityShieldSvg,
  WindowDots,
} from "@/components/ui/illustration-primitives";

const STAGE_W = 296;
const STAGE_H = 244;

const PROBLEM_ILLUSTRATION_COPY = {
  en: {
    c1: {
      title: "Expenses",
      receiptLabel: "RECEIPT",
      rows: [
        {
          merchant: "Parking & Toll",
          amount: "Rp 85.000",
          recurring: false,
          badge: "Unsorted",
          badgeClass: "bg-[#EEF2F6] text-[#475467] ring-[#DDE3EA]",
        },
        {
          merchant: "PT Sumber Kertas",
          amount: "Rp 1.420.000",
          recurring: false,
          badge: "Needs review",
          badgeClass: "bg-[#FFEAD8] text-[#9A4A17] ring-[#F5CBA7]",
        },
        {
          merchant: "Office Internet",
          amount: "Rp 890.000",
          recurring: true,
          badge: "Recorded",
          badgeClass: "bg-[#DCFCE7] text-[#166534] ring-[#BBF7D0]",
        },
      ],
    },
    c2: {
      title: "Approval Workflow",
      step1: "Submitted",
      step2: "Reviewed",
      step3: "Pending",
      date: "Nov 12",
      invoice: "Invoice #INV-2026-042",
      waitingTop: "Waiting for",
      waitingBottom: "approval",
    },
    c3: {
      accountingTitle: "Accounting Software",
      aiTitle: "Chat with AI",
      riskTop: "Sensitive data",
      riskBottom: "at risk",
    },
  },
  id: {
    c1: {
      title: "Pengeluaran",
      receiptLabel: "STRUK",
      rows: [
        {
          merchant: "Parkir & Tol",
          amount: "Rp 85.000",
          recurring: false,
          badge: "Belum rapi",
          badgeClass: "bg-[#EEF2F6] text-[#475467] ring-[#DDE3EA]",
        },
        {
          merchant: "PT Sumber Kertas",
          amount: "Rp 1.420.000",
          recurring: false,
          badge: "Perlu cek",
          badgeClass: "bg-[#FFEAD8] text-[#9A4A17] ring-[#F5CBA7]",
        },
        {
          merchant: "Internet Kantor",
          amount: "Rp 890.000",
          recurring: true,
          badge: "Tercatat",
          badgeClass: "bg-[#DCFCE7] text-[#166534] ring-[#BBF7D0]",
        },
      ],
    },
    c2: {
      title: "Alur Persetujuan",
      step1: "Diajukan",
      step2: "Dicek",
      step3: "Menunggu",
      date: "12 Nov",
      invoice: "Invoice #INV-2026-042",
      waitingTop: "Menunggu",
      waitingBottom: "persetujuan",
    },
    c3: {
      accountingTitle: "Software Akuntansi",
      aiTitle: "Chat AI Publik",
      riskTop: "Data sensitif",
      riskBottom: "berisiko",
    },
  },
} as const;

// ── Card 01: Receipt Management Overload ─────────────────────────────────────

export function ManualWorkIllustration({ lang = "id" }: { lang?: ChatLang }) {
  const reduce = useReducedMotion();
  const c = PROBLEM_ILLUSTRATION_COPY[lang].c1;
  const rows = c.rows;

  return (
    <IllustrationStage width={STAGE_W} height={STAGE_H}>
      {/* Subtle ambient backdrop glow */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 62% at 52% 50%, rgba(226,232,240,0.62) 0%, rgba(255,237,213,0.26) 54%, transparent 78%)",
        }}
      />

      {/* Secondary floating bill slip on the right */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 10, rotate: 8 }}
        whileInView={{ opacity: 1, x: 0, rotate: 12 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.24, ease: EASE_OUT }}
        className="absolute top-12 right-1.5 z-0 w-[50px] rounded-lg bg-white p-2 shadow-[0_6px_16px_rgba(11,31,51,0.08)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <div className="space-y-1.5">
          <div className="h-1.5 w-6 rounded-full bg-[#CBD5E1]" />
          <div className="h-1 w-full rounded-full bg-[#E2E8F0]" />
          <div className="h-1 w-4/5 rounded-full bg-[#E2E8F0]" />
          <div className="h-1 w-full rounded-full bg-[#E2E8F0]" />
        </div>
      </motion.div>

      {/* Main Expenses Window */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-4 left-[36px] z-10 w-[234px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_-6px_rgba(11,31,51,0.12),0_2px_6px_rgba(11,31,51,0.04)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        {/* Dark Navy Window Bar */}
        <div className="flex h-5 items-center bg-[#415067] px-2.5">
          <WindowDots />
        </div>

        {/* Window Content */}
        <div className="grid grid-cols-[28px_1fr]">
          {/* Mini Sidebar */}
          <div className="flex flex-col items-center gap-2 border-r border-[#EEF2F6] bg-[#F8FAFC] py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#3B82F6] text-white shadow-2xs">
              <House size={11} weight="fill" />
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-md text-[#94A3B8]">
              <ChartBar size={12} weight="bold" />
            </span>
            <span className="h-1.5 w-3.5 rounded-full bg-[#E2E8F0]" />
          </div>

          {/* Expense Rows */}
          <div className="p-2.5">
            <p className="text-[11px] font-semibold tracking-tight text-[#0B1F33]">{c.title}</p>
            <div className="mt-2 space-y-1.5">
              {rows.map((r, idx) => (
                <div
                  key={r.badge}
                  className="flex items-center justify-between gap-1.5 rounded-lg bg-[#FAFBFD] px-2 py-1.5 ring-1 ring-[#EEF2F6]"
                >
                  <div className="flex min-w-0 items-center gap-1.5">
                    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#EEF2F6] text-[#64748B]">
                      <FileText size={11} weight="duotone" />
                      {r.recurring && (
                        <GearSix
                          size={8}
                          weight="fill"
                          className="absolute -right-0.5 -bottom-0.5 rounded-full bg-white text-[#475467]"
                        />
                      )}
                    </span>
                    <div className="min-w-0 leading-tight">
                      <p className="truncate text-[8.5px] font-semibold text-[#0B1F33]">
                        {r.merchant}
                      </p>
                      <p className="text-[7.5px] text-[#64748B] tabular-nums">{r.amount}</p>
                    </div>
                  </div>
                  <motion.span
                    initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: 0.2 + idx * 0.1, ease: EASE_OUT }}
                    className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold whitespace-nowrap ring-1 ${r.badgeClass}`}
                  >
                    {r.badge}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Attention ticks near receipt */}
      <AccentRays className="absolute top-[52px] left-2.5 z-20 -rotate-12 text-[#D97706]" />

      {/* Foreground Left: Stacked Receipt Cards */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18, rotate: -10 }}
        whileInView={{ opacity: 1, y: 0, rotate: -7 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT }}
        className="absolute bottom-3 left-2 z-20 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-9"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -3, 0] }}
          transition={
            reduce ? undefined : { duration: 4.4, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative"
        >
          {/* Back receipt sheet */}
          <div className="absolute top-2 left-4 h-[106px] w-[80px] rotate-[13deg] rounded-t-lg bg-[#F1F5F9] p-2 shadow-xs ring-1 ring-[#E2E8F0]">
            <div className="mt-6 space-y-1.5">
              <div className="h-1 w-full rounded-full bg-[#CBD5E1]" />
              <div className="h-1 w-3/4 rounded-full bg-[#CBD5E1]" />
            </div>
          </div>

          {/* Front receipt card */}
          <div className="relative w-[90px] rounded-t-lg rounded-b-sm bg-white px-2.5 pt-2.5 pb-3 shadow-[0_12px_24px_rgba(11,31,51,0.14)] ring-1 ring-[#E2E8F0]">
            <p className="text-center text-[8.5px] font-bold tracking-[0.08em] text-[#0B1F33]">
              {c.receiptLabel}
            </p>
            <div className="my-1.5 border-t border-dashed border-[#CBD5E1]" />
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1">
                <span className="h-1 w-9 rounded-full bg-[#CBD5E1]" />
                <span className="h-1 w-4 rounded-full bg-[#E2E8F0]" />
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="h-1 w-7 rounded-full bg-[#E2E8F0]" />
                <span className="h-1 w-5 rounded-full bg-[#E2E8F0]" />
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="h-1 w-10 rounded-full bg-[#E2E8F0]" />
                <span className="h-1 w-3.5 rounded-full bg-[#E2E8F0]" />
              </div>
            </div>
            <div className="my-1.5 border-t border-[#EEF2F6]" />
            <p className="text-center text-[10px] font-bold tracking-tight text-[#0B1F33] tabular-nums">
              Rp 245.000
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Foreground Right: Mini Dark-Navy Calculator */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16, rotate: 16 }}
        whileInView={{ opacity: 1, y: 0, rotate: 13 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT }}
        className="absolute right-2.5 bottom-3 z-20 w-[48px] rounded-[10px] bg-[#2D3B52] p-1.5 shadow-[0_12px_22px_rgba(11,31,51,0.22)] ring-1 ring-white/15 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[15deg]"
      >
        <div className="mb-1.5 h-3 rounded-[4px] bg-[#DCE5F0]" />
        <div className="grid grid-cols-3 gap-1">
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="row-span-2 rounded-[2px] bg-[#F59E0B]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
          <span className="h-2 rounded-[2px] bg-[#94A3B8]" />
        </div>
      </motion.div>
    </IllustrationStage>
  );
}

// ── Card 02: Approval Bottleneck ─────────────────────────────────────────────

export function ApprovalWorkflowIllustration({ lang = "id" }: { lang?: ChatLang }) {
  const reduce = useReducedMotion();
  const c = PROBLEM_ILLUSTRATION_COPY[lang].c2;

  return (
    <IllustrationStage width={STAGE_W} height={STAGE_H}>
      {/* Subtle ambient backdrop glow */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 62% at 48% 48%, rgba(226,232,240,0.6) 0%, rgba(255,237,213,0.28) 55%, transparent 78%)",
        }}
      />

      {/* Main Approval Workflow Window */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-5 left-3 z-10 w-[236px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_-6px_rgba(11,31,51,0.11),0_2px_6px_rgba(11,31,51,0.04)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <div className="border-b border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2">
          <div className="h-1.5 w-10 rounded-full bg-[#E2E8F0]" />
        </div>

        <div className="px-3.5 pt-2.5 pb-6">
          <p className="text-[11px] font-semibold tracking-tight text-[#0B1F33]">
            {c.title}
          </p>

          {/* 3-Step Stepper */}
          <div className="relative mt-3.5">
            {/* Base gray connector track */}
            <div className="absolute top-2.5 right-6 left-6 h-[2px] bg-[#E2E8F0]" />
            {/* Animated blue completed track stopping at step 2 */}
            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.18, ease: EASE_OUT }}
              style={{ transformOrigin: "left center" }}
              className="absolute top-2.5 left-6 h-[2px] w-[calc(50%-24px)] bg-[#3B82F6]"
            />

            <div className="relative grid grid-cols-3 text-center">
              {/* Step 1: Submitted */}
              <div className="flex flex-col items-center">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6] text-white ring-4 ring-white">
                  <Check size={11} weight="bold" />
                </span>
                <span className="mt-1.5 text-[9.5px] font-semibold text-[#0B1F33]">
                  {c.step1}
                </span>
                <span className="text-[8.5px] text-[#64748B]">{c.date}</span>
              </div>

              {/* Step 2: Reviewed */}
              <div className="flex flex-col items-center">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3B82F6] text-white ring-4 ring-white">
                  <Check size={11} weight="bold" />
                </span>
                <span className="mt-1.5 text-[9.5px] font-semibold text-[#0B1F33]">
                  {c.step2}
                </span>
                <span className="text-[8.5px] text-[#64748B]">{c.date}</span>
              </div>

              {/* Step 3: Pending (stalled) */}
              <div className="flex flex-col items-center">
                <motion.span
                  animate={reduce ? undefined : { scale: [1, 1.09, 1] }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E2E8F0] ring-4 ring-white"
                >
                  <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
                </motion.span>
                <span className="mt-1.5 text-[9.5px] font-semibold text-[#D97706]">{c.step3}</span>
                <span className="text-[8.5px] font-bold tracking-widest text-[#D97706]">
                  •••
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top-Right: Manager Avatar + Attention Rays */}
      <AccentRays className="absolute top-1.5 right-0.5 z-30 rotate-[35deg] text-[#D97706]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.22, ease: EASE_OUT }}
        className="absolute top-6 right-2.5 z-20 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#E8EEF6] shadow-[0_8px_18px_rgba(11,31,51,0.12)] ring-2 ring-white transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
          <path
            d="M9 48C10.5 38.5 16.5 34.5 24 34.5C31.5 34.5 37.5 38.5 39 48H9Z"
            fill="#2E4361"
          />
          <path d="M20.5 34.5L24 39L27.5 34.5H20.5Z" fill="#F8FAFC" />
          <rect x="21" y="29" width="6" height="6" rx="2.5" fill="#F3C9A8" />
          <rect x="16" y="14" width="16" height="17" rx="8" fill="#FAD6B8" />
          <path
            d="M15.5 20.5C15.5 14.5 19 11 24.5 11C29.5 11 32.5 14 32.5 19.5C30.8 17.3 28.5 16.2 24.5 16.2C20.5 16.2 17.4 17.5 15.5 20.5Z"
            fill="#1E293B"
          />
          <circle
            cx="20.8"
            cy="22.2"
            r="2.3"
            stroke="#1E293B"
            strokeWidth="1.2"
            fill="white"
            fillOpacity="0.4"
          />
          <circle
            cx="27.2"
            cy="22.2"
            r="2.3"
            stroke="#1E293B"
            strokeWidth="1.2"
            fill="white"
            fillOpacity="0.4"
          />
          <line x1="23.1" y1="22.2" x2="24.9" y2="22.2" stroke="#1E293B" strokeWidth="1.2" />
          <path
            d="M22.2 26.8Q24 27.6 25.8 26.8"
            stroke="#9A6B50"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Bottom-Left Foreground: Invoice Preview Card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.28, ease: EASE_OUT }}
        className="absolute bottom-3.5 left-4 z-20 flex w-[188px] items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_10px_24px_rgba(11,31,51,0.12)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-1"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#3B82F6] ring-1 ring-[#BFDBFE]">
          <FileText size={15} weight="duotone" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold text-[#0B1F33]">
            {c.invoice}
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-[#475467] tabular-nums">
            Rp 12.500.000
          </p>
        </div>
      </motion.div>

      {/* Bottom-Right Foreground: Waiting for Approval Toast */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.38, ease: EASE_OUT }}
        className="absolute right-1.5 bottom-6 z-30 flex items-center gap-2 rounded-xl bg-[#FFEAD8] px-3 py-2 shadow-[0_10px_22px_rgba(180,83,9,0.15)] ring-1 ring-[#F5CBA7] transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <motion.span
          animate={reduce ? undefined : { rotate: [0, 12, 0] }}
          transition={
            reduce ? undefined : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
          }
          className="text-[#B45309]"
        >
          <HourglassMedium size={16} weight="duotone" />
        </motion.span>
        <p className="text-[10px] leading-[1.18] font-semibold text-[#8C3D0F]">
          {c.waitingTop}
          <span className="block">{c.waitingBottom}</span>
        </p>
      </motion.div>
    </IllustrationStage>
  );
}

// ── Card 03: The Tool Dilemma (Rigid Software vs Unsafe Public AI) ───────────

export function ToolDilemmaIllustration({ lang = "id" }: { lang?: ChatLang }) {
  const reduce = useReducedMotion();
  const c = PROBLEM_ILLUSTRATION_COPY[lang].c3;

  return (
    <IllustrationStage width={STAGE_W} height={STAGE_H}>
      {/* Subtle ambient backdrop glow */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 70% 62% at 50% 50%, rgba(226,232,240,0.6) 0%, rgba(255,237,213,0.28) 55%, transparent 78%)",
        }}
      />

      {/* Background Window: Rigid Accounting Software */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -12, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-4 left-2 z-10 w-[214px] overflow-hidden rounded-xl bg-white shadow-[0_10px_24px_-6px_rgba(11,31,51,0.1)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <div className="flex h-5 items-center border-b border-[#EEF2F6] bg-[#F8FAFC] px-2.5">
          <WindowDots muted />
        </div>
        <div className="p-2.5">
          <p className="text-[10.5px] font-semibold tracking-tight text-[#0B1F33]">
            {c.accountingTitle}
          </p>
          <div className="mt-2 grid grid-cols-[26px_1fr] gap-2">
            {/* Dense Legacy Menu Rail */}
            <div className="flex flex-col items-center gap-1.5 rounded-lg bg-[#F8FAFC] py-1.5 ring-1 ring-[#EEF2F6]">
              <span className="flex h-4 w-4 items-center justify-center rounded bg-[#DBEAFE] text-[#2563EB]">
                <House size={10} weight="bold" />
              </span>
              <FolderSimple size={11} className="text-[#94A3B8]" />
              <FileText size={11} className="text-[#94A3B8]" />
              <LockSimple size={11} className="text-[#94A3B8]" />
            </div>

            {/* Rigid Multi-Field Form Skeleton */}
            <div className="space-y-1.5 pt-0.5">
              <div className="h-2 w-4/5 rounded bg-[#E2E8F0]" />
              <div className="h-4 w-full rounded-md bg-[#F8FAFC] ring-1 ring-[#E2E8F0]" />
              <div className="grid grid-cols-2 gap-1.5">
                <div className="h-4 rounded-md bg-[#F8FAFC] ring-1 ring-[#E2E8F0]" />
                <div className="h-4 rounded-md bg-[#F8FAFC] ring-1 ring-[#E2E8F0]" />
              </div>
              <div className="h-4 w-3/4 rounded-md bg-[#F8FAFC] ring-1 ring-[#E2E8F0]" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Attention rays top-right of AI Chat window */}
      <AccentRays className="absolute top-6 right-0.5 z-30 rotate-[38deg] text-[#D97706]" />

      {/* Overlapping Right Window: Public AI Chat */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 14, y: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, delay: 0.2, ease: EASE_OUT }}
        className="absolute top-11 right-2.5 z-20 w-[162px] overflow-hidden rounded-xl bg-white shadow-[0_14px_28px_-6px_rgba(11,31,51,0.16)] ring-1 ring-[#DCE3EC] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
      >
        <div className="flex h-5 items-center bg-[#415067] px-2.5">
          <WindowDots />
        </div>
        <div className="p-2.5 pb-5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0B1F33] ring-1 ring-[#E2E8F0]">
              <Spiral size={13} weight="bold" />
            </span>
            <span className="text-[10.5px] font-semibold tracking-tight text-[#0B1F33]">
              {c.aiTitle}
            </span>
          </div>
          <div className="mt-2.5 space-y-1.5 pl-1">
            <div className="h-1.5 w-full rounded-full bg-[#CBD5E1]" />
            <div className="h-1.5 w-4/5 rounded-full bg-[#E2E8F0]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[#FDE68A]" />
          </div>
        </div>
      </motion.div>

      {/* Foreground Bottom-Left: Blue Security Shield with Padlock */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
        className="absolute bottom-3 left-5 z-30 drop-shadow-[0_10px_18px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:-translate-y-1"
      >
        <SecurityShieldSvg primaryColor="#3B6EF5" secondaryColor="#2957D8" />
      </motion.div>

      {/* Foreground Bottom-Right: Sensitive Data at Risk Warning */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, delay: 0.38, ease: EASE_OUT }}
        className="absolute right-1.5 bottom-3.5 z-30 flex items-center gap-2 rounded-xl bg-[#FFEAD8] px-3 py-2 shadow-[0_10px_22px_rgba(180,83,9,0.15)] ring-1 ring-[#F5CBA7] transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <Warning size={16} weight="duotone" className="shrink-0 text-[#C2631A]" />
        <p className="text-[10px] leading-[1.18] font-semibold text-[#8C3D0F]">
          {c.riskTop}
          <span className="block">{c.riskBottom}</span>
        </p>
      </motion.div>
    </IllustrationStage>
  );
}
