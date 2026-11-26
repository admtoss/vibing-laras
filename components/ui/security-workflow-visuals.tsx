"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BellRinging,
  CheckCircle,
  FilePdf,
  FileText,
  FileXls,
  Fingerprint,
  ShieldCheck,
  WarningCircle,
} from "@phosphor-icons/react";
import type { ChatLang } from "@/components/ui/chat-simulation";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── Section 6 Visuals: Dynamic 4-Step Mockup Screen (Rp3.42M Flow) ───────────

const STEP_SCREEN_COPY = {
  en: {
    subtitle: "Your Secure Company AI",
    s1: {
      filesCount: "3 files",
      langTag: "ID · EN",
      userMsg: "Recap 3 ops receipts & check PPN",
      files: [
        { name: "INV-042_SumberKertas.pdf", type: "PDF Invoice" },
        { name: "Receipt_OfficeSupply.jpg", type: "Receipt Photo" },
        { name: "Marketplace_Order.png", type: "Chat Screenshot" },
      ],
      botTitle: "3 files read · Rp3.42M total",
      botSub: "Checking vendor prices, dates, and PPN 11%...",
      statusLeft: "Vendor & Tax Read",
      statusRight: "3 / 3 Proofs",
    },
    s2: {
      badge: "AI-Checked Draft",
      amount: "Rp3,420,000",
      vendor: "PT Sumber Kertas + 2 others · PPN 11% Matched",
      flagTitle: "! Vendor price +14%, flagged before saving",
      flagSub: "Office paper unit price rose vs. last month’s invoice.",
      confirm: "Confirm & Save Draft",
      edit: "Edit",
    },
    s3: {
      header: "Manager Sign-Off",
      amount: "Rp3.42M",
      sub: "AI Checked · 1 Flag Noted",
      reminder: "Urgent payment · Neutral reminder sent",
      rows: [
        { k: "Office paper", v: "+14% flag", tone: "amber" },
        { k: "PPN 11%", v: "Matched", tone: "green" },
        { k: "Attached proofs", v: "3 files", tone: "neutral" },
      ],
      approve: "Approve",
      ret: "Return",
      bio: "Biometric 2FA & digital signature ready",
    },
    s4: {
      userMsg: "Send this month’s finance recap",
      cardTitle: "Monthly Finance Recap",
      readyBadge: "Ready",
      cardAmount: "24 receipts filed by month",
      cardSub: "Recurring bills sorted · Includes Rp3.42M ops batch",
      row1: "Recurring monthly bills",
      row1Val: "Auto-sorted",
      row2: "Receipt archive",
      row2Val: "Filed neatly",
      pdf: "Download PDF",
      excel: "Export Excel",
    },
  },
  id: {
    subtitle: "Asisten AI Aman Perusahaan",
    s1: {
      filesCount: "3 bukti",
      langTag: "ID · EN",
      userMsg: "Rekap 3 struk operasional & cek PPN",
      files: [
        { name: "INV-042_SumberKertas.pdf", type: "PDF Invoice" },
        { name: "Struk_KebutuhanKantor.jpg", type: "Foto Struk" },
        { name: "Order_Marketplace.png", type: "Screenshot Belanja" },
      ],
      botTitle: "3 bukti terbaca · Total Rp3,42 Jt",
      botSub: "Mengecek harga vendor, tanggal, dan PPN 11%...",
      statusLeft: "Vendor & Pajak Terbaca",
      statusRight: "3 / 3 Bukti",
    },
    s2: {
      badge: "Draf Dicek AI",
      amount: "Rp 3.420.000",
      vendor: "PT Sumber Kertas + 2 lainnya · PPN 11% Sesuai",
      flagTitle: "! Harga vendor +14%, ditandai sebelum disimpan",
      flagSub: "Harga satuan kertas kantor naik dibanding invoice bulan lalu.",
      confirm: "Konfirmasi & Simpan Draf",
      edit: "Edit",
    },
    s3: {
      header: "Persetujuan Manajer",
      amount: "Rp3,42 Jt",
      sub: "Sudah Dicek AI · 1 Catatan",
      reminder: "Pembayaran mendesak · Pengingat netral terkirim",
      rows: [
        { k: "Kertas kantor", v: "Tanda +14%", tone: "amber" },
        { k: "PPN 11%", v: "Sesuai", tone: "green" },
        { k: "Lampiran bukti", v: "3 bukti", tone: "neutral" },
      ],
      approve: "Setujui",
      ret: "Kembalikan",
      bio: "2FA biometrik & tanda tangan digital siap",
    },
    s4: {
      userMsg: "Minta rekap keuangan bulan ini",
      cardTitle: "Rekap Keuangan Bulanan",
      readyBadge: "Siap",
      cardAmount: "24 nota tersusun rapi per bulan",
      cardSub: "Tagihan rutin dikelompokkan · Termasuk pengajuan Rp3,42 Jt",
      row1: "Tagihan rutin bulanan",
      row1Val: "Otomatis rapi",
      row2: "Arsip nota bulanan",
      row2Val: "Siap audit",
      pdf: "Unduh PDF",
      excel: "Ekspor Excel",
    },
  },
} as const;

export function HowItWorksMockup({
  step,
  lang,
}: {
  step: number;
  lang: ChatLang;
}) {
  const reduce = useReducedMotion();
  const c = STEP_SCREEN_COPY[lang];

  return (
    <div className="mx-auto w-full max-w-[356px]">
      <div className="rounded-[2.2rem] bg-[#0B1F33] p-2.5 shadow-[0_24px_54px_rgba(11,31,51,0.18)] ring-1 ring-black/15">
        <div className="overflow-hidden rounded-[1.75rem] bg-white text-[#0B1F33]">
          {/* Phone Dynamic Island & Consistent "Laras" Header */}
          <div className="border-b border-[#ECEEF2] bg-[#FAFBFD] px-4 pt-2.5 pb-3">
            <div className="mx-auto h-4 w-20 rounded-full bg-[#0B1F33]" />
            <div className="mt-2.5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-tight text-[#0B1F33]">Laras</p>
                <p className="text-[10px] font-medium text-[#475467]">{c.subtitle}</p>
              </div>
              <span className="rounded-full bg-[#E9F3EC] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#0D5240]">
                0{step + 1} / 04
              </span>
            </div>
          </div>

          {/* Dynamic Screen Body */}
          <div className="min-h-[312px] bg-white p-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${lang}-${step}`}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
                className="flex h-full flex-col justify-between gap-3"
              >
                {step === 0 && (
                  <>
                    <div className="space-y-2.5">
                      <div className="ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-[#0B1F33] px-3.5 py-2.5 text-xs text-white">
                        <div className="mb-1.5 flex items-center justify-between gap-2 text-[10px] text-white/70">
                          <span>{c.s1.filesCount}</span>
                          <span className="rounded bg-white/15 px-1.5 py-0.5 font-semibold text-white">
                            {c.s1.langTag}
                          </span>
                        </div>
                        <p className="font-medium">{c.s1.userMsg}</p>
                      </div>

                      <div className="space-y-1.5 rounded-xl bg-[#F8F9FA] p-2.5 ring-1 ring-[#ECEEF2]">
                        {c.s1.files.map((f) => (
                          <div
                            key={f.name}
                            className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5 text-[11px] ring-1 ring-[#E6E8EC]"
                          >
                            <span className="flex min-w-0 items-center gap-1.5 font-medium text-[#0B1F33]">
                              <FileText size={13} weight="duotone" className="shrink-0 text-[#14745A]" />
                              <span className="truncate">{f.name}</span>
                            </span>
                            <span className="shrink-0 text-[10px] text-[#64748B]">{f.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl rounded-bl-sm bg-[#E9F3EC]/75 px-3.5 py-3 ring-1 ring-[#14745A]/20">
                      <p className="text-xs font-semibold text-[#0B1F33]">{c.s1.botTitle}</p>
                      <p className="mt-0.5 text-[11px] text-[#475467]">{c.s1.botSub}</p>
                      <div className="mt-2 flex items-center justify-between border-t border-[#14745A]/15 pt-2 text-[10px] font-semibold text-[#0D5240]">
                        <span>{c.s1.statusLeft}</span>
                        <span>{c.s1.statusRight}</span>
                      </div>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="rounded-2xl bg-gradient-to-b from-[#E9F3EC] to-[#F8FAF9] p-4 text-center ring-1 ring-[#14745A]/20">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#0D5240] ring-1 ring-[#14745A]/15">
                        <CheckCircle size={12} weight="fill" className="text-[#14745A]" />
                        {c.s2.badge}
                      </span>
                      <p className="mt-2 text-2xl font-bold tracking-tight text-[#0B1F33] tabular-nums">
                        {c.s2.amount}
                      </p>
                      <p className="mt-1 text-[11px] text-[#475467]">{c.s2.vendor}</p>
                    </div>

                    <div className="rounded-xl bg-[#FFFBEB] p-3 ring-1 ring-[#F59E0B]/40">
                      <div className="flex items-start gap-2">
                        <WarningCircle
                          size={16}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-[#D97706]"
                        />
                        <div>
                          <p className="text-xs font-semibold text-[#92400E]">{c.s2.flagTitle}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-[#78350F]">
                            {c.s2.flagSub}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="flex-1 rounded-full bg-[#0B1F33] py-2.5 text-center text-xs font-semibold text-white">
                        {c.s2.confirm}
                      </span>
                      <span className="rounded-full bg-white px-4 py-2.5 text-center text-xs font-semibold text-[#0B1F33] ring-1 ring-[#0B1F33]/20">
                        {c.s2.edit}
                      </span>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="rounded-xl bg-[#F8F9FA] p-3.5 ring-1 ring-[#ECEEF2]">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F33]">
                          <ShieldCheck size={15} weight="fill" className="text-[#14745A]" />
                          {c.s3.header}
                        </span>
                        <span className="text-base font-bold text-[#0B1F33] tabular-nums">
                          {c.s3.amount}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-[#475467]">{c.s3.sub}</p>

                      <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-[#EEF6FF] px-2.5 py-1.5 text-[10px] font-medium text-[#1E40AF]">
                        <BellRinging size={12} weight="fill" className="shrink-0" />
                        <span>{c.s3.reminder}</span>
                      </div>

                      <div className="mt-3 space-y-1.5 border-t border-[#E5E7EB] pt-2.5 text-xs">
                        {c.s3.rows.map((r) => (
                          <div key={r.k} className="flex items-center justify-between">
                            <span className="text-[#475467]">{r.k}</span>
                            <strong
                              className={
                                r.tone === "amber"
                                  ? "font-semibold text-[#B45309]"
                                  : r.tone === "green"
                                    ? "font-semibold text-[#14745A]"
                                    : "font-semibold text-[#0B1F33]"
                              }
                            >
                              {r.v}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <span className="flex-1 rounded-full bg-[#0B1F33] py-2 text-center text-xs font-semibold text-white">
                        {c.s3.approve}
                      </span>
                      <span className="flex-1 rounded-full bg-white py-2 text-center text-xs font-semibold text-[#0B1F33] ring-1 ring-[#0B1F33]/20">
                        {c.s3.ret}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 rounded-xl bg-[#0B1F33] px-3 py-2.5 text-white">
                      <Fingerprint size={18} weight="duotone" className="shrink-0 text-[#8FD6B4]" />
                      <span className="text-[11px] font-medium text-white/90">{c.s3.bio}</span>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#0B1F33] px-3.5 py-2 text-xs font-medium text-white">
                      {c.s4.userMsg}
                    </div>

                    <div className="rounded-2xl bg-[#F8F9FA] p-3.5 ring-1 ring-[#ECEEF2]">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-bold text-[#0B1F33]">{c.s4.cardTitle}</p>
                        <span className="rounded-full bg-[#E9F3EC] px-2 py-0.5 text-[10px] font-semibold text-[#0D5240]">
                          {c.s4.readyBadge}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-[#14745A]">{c.s4.cardAmount}</p>
                      <p className="mt-0.5 text-[11px] text-[#475467]">{c.s4.cardSub}</p>

                      <div className="mt-3 space-y-1.5 border-t border-[#E5E7EB] pt-2.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-[#475467]">{c.s4.row1}</span>
                          <span className="font-semibold text-[#0B1F33]">{c.s4.row1Val}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#475467]">{c.s4.row2}</span>
                          <span className="font-semibold text-[#14745A]">{c.s4.row2Val}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0B1F33] py-2.5 text-xs font-semibold text-white">
                        <FilePdf size={14} weight="fill" />
                        {c.s4.pdf}
                      </span>
                      <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#E9F3EC] py-2.5 text-xs font-semibold text-[#0D5240] ring-1 ring-[#14745A]/25">
                        <FileXls size={14} weight="fill" />
                        {c.s4.excel}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
