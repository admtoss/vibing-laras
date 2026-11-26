"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  CheckCircle,
  EyeSlash,
  FileText,
  Fingerprint,
  FolderSimple,
  House,
  LockKey,
  LockSimple,
  PencilSimple,
  Receipt,
  ShieldCheck,
  Spiral,
  UserCheck,
  UsersThree,
  WarningCircle,
} from "@phosphor-icons/react";
import type { ChatLang } from "@/components/ui/chat-simulation";
import {
  AccentRays,
  EASE_OUT,
  IllustrationStage,
  SecurityShieldSvg,
  WindowDots,
} from "@/components/ui/illustration-primitives";

// ── Bilingual Copy for Security Illustrations ────────────────────────────────

const SECURITY_ILLUSTRATION_COPY = {
  en: {
    c1: {
      windowTitle: "Expense Draft #EXP-204",
      amount: "Rp 3,420,000",
      rows: [
        { label: "PT Sumber Kertas", sub: "3 proofs attached", badge: "Draft", tone: "slate" },
        { label: "PPN 11%", sub: "Rp 338,919", badge: "Matched", tone: "green" },
        { label: "Office Paper", sub: "Unit price check", badge: "+14% flag", tone: "amber" },
      ],
      confirm: "Confirm & Save",
      edit: "Edit",
      toastTop: "Awaiting",
      toastBottom: "your confirm",
    },
    c2: {
      publicTitle: "Public AI Chat",
      publicBlocked: "Training Off",
      workspaceTitle: "Private Workspace",
      row1: "Receipts & Invoices",
      row1Val: "Encrypted",
      row2: "Company Chats",
      row2Val: "Isolated",
      pdpTop: "Privacy Compliant",
      pdpBottom: "Private Data Vault",
    },
    c3: {
      windowTitle: "Permanent Audit Trail",
      steps: [
        { label: "Drafted", time: "09:14" },
        { label: "Confirmed", time: "09:15" },
        { label: "2FA Signed", time: "09:18" },
      ],
      sealTop: "Immutable",
      sealBottom: "Audit Log",
      bioTitle: "Biometrics verified, signature recorded",
      bioSub: "Full audit trail saved automatically",
    },
    c4: {
      windowTitle: "Role Permissions",
      roles: [
        { name: "Employee", scope: "Own submissions & status", badge: "Own only", tone: "slate" },
        { name: "Manager", scope: "Team requests & AI flags", badge: "Team scope", tone: "blue" },
        { name: "Finance", scope: "Monthly recap & audit log", badge: "Full ledger", tone: "green" },
      ],
      maskedTitle: "Company Totals",
      maskedSub: "Hidden for Staff",
      badgeTop: "Role-Scoped",
      badgeBottom: "3 Access Tiers",
    },
  },
  id: {
    c1: {
      windowTitle: "Draf Pengeluaran #EXP-204",
      amount: "Rp 3.420.000",
      rows: [
        { label: "PT Sumber Kertas", sub: "3 bukti terlampir", badge: "Draf", tone: "slate" },
        { label: "PPN 11%", sub: "Rp 338.919", badge: "Sesuai", tone: "green" },
        { label: "Kertas Kantor", sub: "Cek harga satuan", badge: "Naik +14%", tone: "amber" },
      ],
      confirm: "Konfirmasi & Simpan",
      edit: "Edit",
      toastTop: "Menunggu",
      toastBottom: "konfirmasi Anda",
    },
    c2: {
      publicTitle: "Chat AI Publik",
      publicBlocked: "Tidak Dibagikan",
      workspaceTitle: "Workspace Privat",
      row1: "Struk & Invoice",
      row1Val: "Terenkripsi",
      row2: "Riwayat Chat Kantor",
      row2Val: "Terisolasi",
      pdpTop: "Sesuai Aturan",
      pdpBottom: "Privasi Data",
    },
    c3: {
      windowTitle: "Jejak Audit Permanen",
      steps: [
        { label: "Disusun", time: "09.14" },
        { label: "Dikonfirmasi", time: "09.15" },
        { label: "Teken 2FA", time: "09.18" },
      ],
      sealTop: "Catatan",
      sealBottom: "Permanen",
      bioTitle: "Biometrik terverifikasi, tanda tangan tercatat",
      bioSub: "Audit trail lengkap tersimpan otomatis",
    },
    c4: {
      windowTitle: "Hak Akses per Peran",
      roles: [
        { name: "Karyawan", scope: "Pengajuan & status sendiri", badge: "Milik sendiri", tone: "slate" },
        { name: "Manajer", scope: "Pengajuan tim & tanda AI", badge: "Khusus tim", tone: "blue" },
        { name: "Finance", scope: "Rekap bulanan & audit log", badge: "Akses penuh", tone: "green" },
      ],
      maskedTitle: "Total Perusahaan",
      maskedSub: "Tertutup bagi Staf",
      badgeTop: "Sesuai Peran",
      badgeBottom: "3 Level Akses",
    },
  },
} as const;

// ── Card 01: Confirm Before Saving ───────────────────────────────────────────

export function ConfirmBeforeSavingIllustration({ lang }: { lang: ChatLang }) {
  const reduce = useReducedMotion();
  const c = SECURITY_ILLUSTRATION_COPY[lang].c1;

  return (
    <IllustrationStage width={336} height={236}>
      {/* Soft ambient radial backdrop */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 72% 64% at 50% 48%, rgba(226,232,240,0.62) 0%, rgba(209,250,229,0.34) 55%, transparent 80%)",
        }}
      />

      {/* Secondary floating draft sheet peeking on right-back */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 10, rotate: 6 }}
        whileInView={{ opacity: 1, x: 0, rotate: 9 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.22, ease: EASE_OUT }}
        className="absolute top-14 right-2 z-0 w-[56px] rounded-lg bg-white p-2 shadow-[0_6px_16px_rgba(11,31,51,0.08)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <div className="space-y-1.5">
          <div className="h-1.5 w-7 rounded-full bg-[#8FD6B4]" />
          <div className="h-1 w-full rounded-full bg-[#E2E8F0]" />
          <div className="h-1 w-4/5 rounded-full bg-[#E2E8F0]" />
          <div className="h-1 w-full rounded-full bg-[#E2E8F0]" />
        </div>
      </motion.div>

      {/* Main Draft Window */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-4 left-4 z-10 w-[252px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_-6px_rgba(11,31,51,0.12),0_2px_6px_rgba(11,31,51,0.04)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <div className="flex h-5 items-center justify-between bg-[#415067] px-2.5">
          <WindowDots />
          <span className="font-mono text-[8px] font-medium text-white/80 tabular-nums">
            {c.amount}
          </span>
        </div>

        <div className="p-2.5 pb-4">
          <p className="text-[10.5px] font-semibold tracking-tight text-[#0B1F33]">
            {c.windowTitle}
          </p>
          <div className="mt-2 space-y-1.5">
            {c.rows.map((r, idx) => (
              <div
                key={r.label}
                className="flex items-center justify-between gap-2 rounded-lg bg-[#FAFBFD] px-2 py-1.5 ring-1 ring-[#EEF2F6]"
              >
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#EEF2F6] text-[#475467]">
                    {r.tone === "amber" ? (
                      <WarningCircle size={12} weight="fill" className="text-[#D97706]" />
                    ) : r.tone === "green" ? (
                      <CheckCircle size={12} weight="fill" className="text-[#14745A]" />
                    ) : (
                      <FileText size={11} weight="duotone" />
                    )}
                  </span>
                  <div className="min-w-0 leading-tight">
                    <p className="truncate text-[8.5px] font-semibold text-[#0B1F33]">{r.label}</p>
                    <p className="truncate text-[7.5px] text-[#64748B]">{r.sub}</p>
                  </div>
                </div>
                <motion.span
                  initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.18 + idx * 0.08, ease: EASE_OUT }}
                  className={`shrink-0 rounded-full px-1.5 py-0.5 text-[7.5px] font-semibold whitespace-nowrap ring-1 ${
                    r.tone === "green"
                      ? "bg-[#DCFCE7] text-[#166534] ring-[#BBF7D0]"
                      : r.tone === "amber"
                        ? "bg-[#FEF3C7] text-[#92400E] ring-[#FDE68A]"
                        : "bg-[#EEF2F6] text-[#475467] ring-[#DDE3EA]"
                  }`}
                >
                  {r.badge}
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Top-Right: Floating Awaiting Confirmation Toast + Trust Rays */}
      <AccentRays className="absolute top-1 right-1 z-30 rotate-[36deg] text-[#14745A]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.24, ease: EASE_OUT }}
        className="absolute top-6 right-2 z-30 transition-transform duration-300 group-hover:-translate-y-1"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -2.5, 0] }}
          transition={
            reduce ? undefined : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex items-center gap-1.5 rounded-xl bg-[#DCFCE7] px-2.5 py-1.5 shadow-[0_10px_22px_rgba(20,116,90,0.16)] ring-1 ring-[#BBF7D0]"
        >
          <ShieldCheck size={15} weight="fill" className="shrink-0 text-[#14745A]" />
          <p className="text-[9.5px] leading-[1.18] font-semibold text-[#0D5240]">
            {c.toastTop}
            <span className="block">{c.toastBottom}</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom-Left Foreground: Floating Action Bar (Confirm & Save / Edit) */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
        className="absolute right-4 bottom-3 left-7 z-20 flex items-center gap-2 rounded-xl bg-white p-2 shadow-[0_12px_26px_rgba(11,31,51,0.14)] ring-1 ring-[#DCE3EC] transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#0B1F33] px-3 py-1.5 text-[10px] font-semibold whitespace-nowrap text-white">
          <Check size={11} weight="bold" className="text-[#8FD6B4]" />
          {c.confirm}
        </span>
        <span className="inline-flex items-center justify-center gap-1 rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[10px] font-semibold whitespace-nowrap text-[#0B1F33] ring-1 ring-[#CBD5E1]">
          <PencilSimple size={11} weight="bold" />
          {c.edit}
        </span>
      </motion.div>
    </IllustrationStage>
  );
}

// ── Card 02: Private Company Data ────────────────────────────────────────────

export function PrivateWorkspaceIllustration({ lang }: { lang: ChatLang }) {
  const reduce = useReducedMotion();
  const c = SECURITY_ILLUSTRATION_COPY[lang].c2;

  return (
    <IllustrationStage width={336} height={236}>
      {/* Soft ambient radial backdrop */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 72% 64% at 50% 50%, rgba(226,232,240,0.6) 0%, rgba(209,250,229,0.34) 55%, transparent 80%)",
        }}
      />

      {/* Background Left Window: Blocked Public AI Chat */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -12, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-4 left-2.5 z-10 w-[166px] overflow-hidden rounded-xl bg-white/90 opacity-85 shadow-[0_10px_22px_-6px_rgba(11,31,51,0.08)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-x-0.5"
      >
        <div className="flex h-5 items-center border-b border-[#EEF2F6] bg-[#F8FAFC] px-2.5">
          <WindowDots muted />
        </div>
        <div className="p-2.5 pb-4">
          <div className="flex items-center gap-1.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
              <Spiral size={10} weight="bold" />
            </span>
            <span className="truncate text-[9.5px] font-semibold text-[#64748B]">
              {c.publicTitle}
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-4/5 rounded-full bg-[#E2E8F0]" />
            <div className="h-1.5 w-3/5 rounded-full bg-[#E2E8F0]" />
          </div>
          <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[8px] font-semibold text-[#64748B] ring-1 ring-[#E2E8F0]">
            <EyeSlash size={10} weight="bold" />
            {c.publicBlocked}
          </span>
        </div>
      </motion.div>

      {/* Attention trust rays top-right */}
      <AccentRays className="absolute top-4 right-1 z-30 rotate-[38deg] text-[#14745A]" />

      {/* Overlapping Right Main Window: Private Company Workspace */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: 14, y: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.18, ease: EASE_OUT }}
        className="absolute top-9 right-3 z-20 w-[206px] overflow-hidden rounded-xl bg-white shadow-[0_14px_30px_-6px_rgba(11,31,51,0.16)] ring-1 ring-[#DCE3EC] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
      >
        <div className="flex h-5 items-center bg-[#415067] px-2.5">
          <WindowDots />
        </div>
        <div className="p-2.5 pb-4">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#E9F3EC] text-[#14745A]">
              <LockKey size={12} weight="fill" />
            </span>
            <span className="truncate text-[10px] font-semibold tracking-tight text-[#0B1F33]">
              {c.workspaceTitle}
            </span>
          </div>

          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-[#FAFBFD] px-2 py-1.5 ring-1 ring-[#EEF2F6]">
              <span className="truncate text-[8.5px] font-medium text-[#475467]">{c.row1}</span>
              <span className="shrink-0 rounded-full bg-[#DCFCE7] px-1.5 py-0.5 text-[7.5px] font-semibold text-[#166534]">
                {c.row1Val}
              </span>
            </div>
            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-[#FAFBFD] px-2 py-1.5 ring-1 ring-[#EEF2F6]">
              <span className="truncate text-[8.5px] font-medium text-[#475467]">{c.row2}</span>
              <span className="shrink-0 rounded-full bg-[#DCFCE7] px-1.5 py-0.5 text-[7.5px] font-semibold text-[#166534]">
                {c.row2Val}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Foreground Bottom-Left: Custom Emerald Security Shield SVG with Padlock */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.28, ease: EASE_OUT }}
        className="absolute bottom-3 left-6 z-30 drop-shadow-[0_10px_18px_rgba(20,116,90,0.28)] transition-transform duration-300 group-hover:-translate-y-1"
      >
        <SecurityShieldSvg
          primaryColor="#14745A"
          secondaryColor="#0D5240"
          className="h-[54px] w-[48px]"
        />
      </motion.div>

      {/* Foreground Bottom-Right: UU PDP Ready · Jakarta Toast */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.36, ease: EASE_OUT }}
        className="absolute right-3 bottom-3.5 z-30 flex items-center gap-2 rounded-xl bg-[#DCFCE7] px-3 py-2 shadow-[0_10px_22px_rgba(20,116,90,0.16)] ring-1 ring-[#BBF7D0] transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <ShieldCheck size={16} weight="duotone" className="shrink-0 text-[#14745A]" />
        <p className="text-[10px] leading-[1.18] font-semibold text-[#0D5240]">
          {c.pdpTop}
          <span className="block font-medium text-[#166534]">{c.pdpBottom}</span>
        </p>
      </motion.div>
    </IllustrationStage>
  );
}

// ── Card 03: Permanent Audit Trail & Biometrics (Middle Full-Width Cream) ────

export function AuditTrailBiometricIllustration({ lang }: { lang: ChatLang }) {
  const reduce = useReducedMotion();
  const c = SECURITY_ILLUSTRATION_COPY[lang].c3;

  return (
    <IllustrationStage width={448} height={232}>
      {/* Soft warm-sage glow */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 48%, rgba(255,255,255,0.85) 0%, rgba(209,250,229,0.28) 58%, transparent 82%)",
        }}
      />

      {/* Main Window: 3-Step Completed Audit Trail Stepper */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-3 left-3 z-10 w-[336px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_-6px_rgba(11,31,51,0.11),0_2px_6px_rgba(11,31,51,0.04)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <div className="flex h-5 items-center justify-between border-b border-[#EEF2F6] bg-[#F8FAFC] px-3">
          <WindowDots muted />
          <span className="font-mono text-[8px] font-semibold text-[#14745A]">#AUD-2026-042</span>
        </div>

        <div className="px-4 pt-3 pb-5">
          <p className="text-[11px] font-semibold tracking-tight text-[#0B1F33]">
            {c.windowTitle}
          </p>

          {/* 3-Step All-Verified Emerald Stepper */}
          <div className="relative mt-3.5">
            <div className="absolute top-2.5 right-8 left-8 h-[2px] bg-[#DCFCE7]" />
            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.18, ease: EASE_OUT }}
              style={{ transformOrigin: "left center" }}
              className="absolute top-2.5 right-8 left-8 h-[2px] bg-[#14745A]"
            />

            <div className="relative grid grid-cols-3 text-center">
              {c.steps.map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#14745A] text-white ring-4 ring-white">
                    <Check size={11} weight="bold" />
                  </span>
                  <span className="mt-1.5 text-[9.5px] font-semibold text-[#0B1F33]">
                    {s.label}
                  </span>
                  <span className="font-mono text-[8.5px] text-[#64748B]">{s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top-Right Foreground: Immutable Audit Seal Badge + Trust Rays */}
      <AccentRays className="absolute top-0.5 right-1 z-30 rotate-[34deg] text-[#14745A]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.22, ease: EASE_OUT }}
        className="absolute top-6 right-2.5 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_10px_22px_rgba(11,31,51,0.1)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-1"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#14745A]">
          <ShieldCheck size={15} weight="fill" />
        </span>
        <p className="text-[9.5px] leading-[1.2] font-semibold text-[#0B1F33]">
          {c.sealTop}
          <span className="block font-medium text-[#14745A]">{c.sealBottom}</span>
        </p>
      </motion.div>

      {/* Bottom Foreground: Signature Dark-Navy Biometric Verification Card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.32, ease: EASE_OUT }}
        className="absolute right-3 bottom-2.5 left-6 z-30 flex items-center gap-3 rounded-2xl bg-[#0B1F33] px-4 py-3 text-white shadow-[0_14px_30px_rgba(11,31,51,0.22)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <motion.span
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={
            reduce ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
          }
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8FD6B4]"
        >
          <Fingerprint size={22} weight="duotone" />
        </motion.span>
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">{c.bioTitle}</p>
          <p className="mt-0.5 truncate text-[10.5px] text-white/70">{c.bioSub}</p>
        </div>
        <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14745A] text-white">
          <Check size={12} weight="bold" />
        </span>
      </motion.div>
    </IllustrationStage>
  );
}

// ── Card 04: Role-Based Access (Bottom Full-Width) ───────────────────────────

export function RoleAccessIllustration({ lang }: { lang: ChatLang }) {
  const reduce = useReducedMotion();
  const c = SECURITY_ILLUSTRATION_COPY[lang].c4;
  const roleIcons = [Receipt, UserCheck, UsersThree] as const;

  return (
    <IllustrationStage width={456} height={236}>
      {/* Soft ambient radial backdrop */}
      <div
        className="pointer-events-none absolute inset-2 rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 74% 64% at 50% 50%, rgba(226,232,240,0.62) 0%, rgba(209,250,229,0.3) 56%, transparent 80%)",
        }}
      />

      {/* Main Window: Role Permissions with Mini Sidebar Rail */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE_OUT }}
        className="absolute top-3 left-5 z-10 w-[336px] overflow-hidden rounded-xl bg-white shadow-[0_12px_28px_-6px_rgba(11,31,51,0.12),0_2px_6px_rgba(11,31,51,0.04)] ring-1 ring-[#E2E8F0] transition-transform duration-300 group-hover:-translate-y-0.5"
      >
        <div className="flex h-5 items-center bg-[#415067] px-2.5">
          <WindowDots />
        </div>

        <div className="grid grid-cols-[30px_1fr]">
          {/* Mini Sidebar Rail */}
          <div className="flex flex-col items-center gap-2 border-r border-[#EEF2F6] bg-[#F8FAFC] py-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#14745A] text-white">
              <LockSimple size={11} weight="fill" />
            </span>
            <House size={12} className="text-[#94A3B8]" />
            <FolderSimple size={12} className="text-[#94A3B8]" />
          </div>

          {/* 3 Role Rows */}
          <div className="p-2.5 pb-4">
            <p className="text-[11px] font-semibold tracking-tight text-[#0B1F33]">
              {c.windowTitle}
            </p>
            <div className="mt-2 space-y-1.5">
              {c.roles.map((r, idx) => {
                const RoleIcon = roleIcons[idx];
                return (
                  <div
                    key={r.name}
                    className="flex items-center justify-between gap-2 rounded-lg bg-[#FAFBFD] px-2 py-1.5 ring-1 ring-[#EEF2F6]"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#EEF2F6] text-[#0B1F33]">
                        <RoleIcon size={12} weight="duotone" />
                      </span>
                      <div className="min-w-0 leading-tight">
                        <p className="truncate text-[9px] font-semibold text-[#0B1F33]">{r.name}</p>
                        <p className="truncate text-[7.5px] text-[#64748B]">{r.scope}</p>
                      </div>
                    </div>
                    <motion.span
                      initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: 0.18 + idx * 0.08, ease: EASE_OUT }}
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[7.5px] font-semibold whitespace-nowrap ring-1 ${
                        r.tone === "green"
                          ? "bg-[#DCFCE7] text-[#166534] ring-[#BBF7D0]"
                          : r.tone === "blue"
                            ? "bg-[#EFF6FF] text-[#1D4ED8] ring-[#BFDBFE]"
                            : "bg-[#EEF2F6] text-[#475467] ring-[#DDE3EA]"
                      }`}
                    >
                      {r.badge}
                    </motion.span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top-Right Foreground: Role-Scoped Emerald Badge + Trust Rays */}
      <AccentRays className="absolute top-1 right-1 z-30 rotate-[36deg] text-[#14745A]" />
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.24, ease: EASE_OUT }}
        className="absolute top-6 right-2.5 z-30 flex items-center gap-2 rounded-xl bg-[#DCFCE7] px-3 py-2 shadow-[0_10px_22px_rgba(20,116,90,0.16)] ring-1 ring-[#BBF7D0] transition-transform duration-300 group-hover:-translate-y-1.5"
      >
        <ShieldCheck size={16} weight="duotone" className="shrink-0 text-[#14745A]" />
        <p className="text-[9.5px] leading-[1.18] font-semibold text-[#0D5240]">
          {c.badgeTop}
          <span className="block font-medium text-[#166534]">{c.badgeBottom}</span>
        </p>
      </motion.div>

      {/* Bottom-Right Foreground: Masked Sensitive Data Pill */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.32, ease: EASE_OUT }}
        className="absolute right-3 bottom-3 z-20 flex items-center gap-2.5 rounded-xl bg-[#0B1F33] px-3.5 py-2.5 text-white shadow-[0_12px_24px_rgba(11,31,51,0.2)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#8FD6B4]">
          <EyeSlash size={15} weight="duotone" />
        </span>
        <div className="leading-tight">
          <p className="text-[9.5px] font-semibold text-white">
            {c.maskedTitle} <span className="ml-1 font-mono tracking-widest text-[#8FD6B4]">••••••</span>
          </p>
          <p className="mt-0.5 text-[8.5px] text-white/70">{c.maskedSub}</p>
        </div>
      </motion.div>
    </IllustrationStage>
  );
}
