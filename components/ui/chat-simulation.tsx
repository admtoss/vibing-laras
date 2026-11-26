"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const A = "/assets"; // public/assets -> /assets

// ── Icons ────────────────────────────────────────────────────────────────────
const imgPlus = `${A}/182b8.svg`;
const imgXCircle = `${A}/6cfd6.svg`;
const imgThumbUp = `${A}/84027.svg`;
const imgThumbDown = `${A}/1ad2a.svg`;
const imgCopy = `${A}/5dec4.svg`;
const imgReply = `${A}/90ae5.svg`;
const imgQuestionMark = `${A}/f78ca.svg`;
const imgPaperAirplane = `${A}/f12e4.svg`;
const imgCursor = `${A}/8de64.svg`;
const imgCursorAlt = `${A}/092b1.svg`;
const imgTypingDots = `${A}/157a7.svg`;
const imgStop = `${A}/3e6eb.svg`;
const imgFile = `${A}/d9bbd.svg`;
const imgPencil = `${A}/6ce22.svg`;
const imgReceiptRefund = `${A}/fb3e0.svg`;
const imgExternalLink = `${A}/9aa93.svg`;
const imgSubmitIcon = `${A}/47929.svg`;
const imgReceipt = `${A}/1563f.png`;

export type ChatLang = "en" | "id";

type SummaryFieldRow = {
  label: string;
  value: string;
  bold?: boolean;
  suggested?: boolean;
  warnSuggestion?: boolean;
};

const CHAT_COPY: Record<
  ChatLang,
  {
    subtitle: string;
    placeholder: string;
    timestamp: string;
    greeting: string;
    userPrompt: string;
    typing: string;
    f3Reply: string;
    tableHeader: string;
    editable: string;
    suggestionLabel: string;
    summaryRows: SummaryFieldRow[];
    saveContinueBtn: string;
    f4ReadyTitle: string;
    badgeExpense: string;
    badgeDraft: string;
    memoTitle: string;
    itemsMeta: string;
    filesLink: string;
    memoNumberLabel: string;
    memoNumberValue: string;
    saveBtn: string;
    submitBtn: string;
    f5SubmittedIntro: string;
    requestedBy: string;
    expiresIn: string;
    summaryByLarasLabel: string;
    summaryByLarasBody: string;
    flagPill: string;
    approveMobileOnly: string;
    amount: string;
    tooltips: {
      f0: { label: string; body: string };
      f1: { label: string; body: string };
      f2: { label: string; body: string };
      f3: { label: string; body: string };
      f4: { label: string; body: string };
    };
  }
> = {
  en: {
    subtitle: "Your Secure Company AI",
    placeholder: "Drop receipts, invoices, or ask Laras...",
    timestamp: "Today, 09:12 · Company Workspace",
    greeting:
      "Hello! I’m Laras, your company AI assistant. Drop your receipts, invoices, or chats and I’ll handle the rest.",
    userPrompt: "Create an expense draft from today’s 3 ops proofs",
    typing: "Laras is reading 3 files",
    f3Reply:
      "Done! Here is the extracted summary from your 3 proofs. Review or edit the suggested fields before saving:",
    tableHeader: "3 files · receipt, invoice, screenshot",
    editable: "editable",
    suggestionLabel: "suggestion by Laras",
    summaryRows: [
      { label: "Vendor", value: "PT Sumber Kertas" },
      {
        label: "Activity",
        value: "Office & Ops Supplies",
        suggested: true,
      },
      { label: "Date", value: "26 Nov 2026" },
      { label: "Total", value: "Rp 3,420,000", bold: true },
      {
        label: "Category",
        value: "Office Supplies",
        bold: true,
        suggested: true,
        warnSuggestion: true,
      },
    ],
    saveContinueBtn: "Save and continue",
    f4ReadyTitle: "Expense memo draft is ready. Submit when you’re ready:",
    badgeExpense: "EXPENSE",
    badgeDraft: "Draft",
    memoTitle: "Monthly Office & Ops Supplies",
    itemsMeta: "3 Items • 3 Receipts",
    filesLink: "3 Receipts",
    memoNumberLabel: "MEMO NUMBER",
    memoNumberValue: "EXP-2026-1042",
    saveBtn: "Save",
    submitBtn: "Submit Approval",
    f5SubmittedIntro:
      "Memo submitted! Laras analyzed the request and attached a review summary & flag for your approver:",
    requestedBy: "Requested by Dina · General Affairs",
    expiresIn: "Expires in 2 days",
    summaryByLarasLabel: "SUMMARY BY LARAS",
    summaryByLarasBody:
      "Office supplies request on 26 Nov 2026. New paper invoice from PT Sumber Kertas is 14% higher than October’s routine payment.",
    flagPill: "Routine Amount Change (+14%)",
    approveMobileOnly: "Approve only via Mobile App",
    amount: "Rp 3,420,000",
    tooltips: {
      f0: { label: "Drop Multiple Proofs", body: "Receipts, PDFs & chat screenshots" },
      f1: { label: "No Forms Needed", body: "Just send files in one chat" },
      f2: { label: "Smart Draft Fields", body: "Auto-filled with Laras suggestions" },
      f3: { label: "Confirm & Submit", body: "Review draft before sending" },
      f4: { label: "Post-Submit AI Analysis", body: "Flags anomalies for approvers" },
    },
  },
  id: {
    subtitle: "Asisten AI Aman Perusahaan",
    placeholder: "Kirim struk, invoice, atau tanya Laras...",
    timestamp: "Hari ini, 09.12 · Workspace Perusahaan",
    greeting:
      "Halo! Saya Laras, asisten AI perusahaan Anda. Kirim struk, invoice, atau chat Anda, biar saya yang membereskan sisanya.",
    userPrompt: "Tolong buatkan draf pengeluaran dari 3 bukti hari ini",
    typing: "Laras sedang membaca 3 bukti",
    f3Reply:
      "Selesai! Berikut ringkasan data dari ketiga bukti Anda. Silakan periksa atau sesuaikan isian sebelum disimpan:",
    tableHeader: "3 bukti · struk, invoice, screenshot",
    editable: "bisa diedit",
    suggestionLabel: "saran dari Laras",
    summaryRows: [
      { label: "Vendor", value: "PT Sumber Kertas" },
      {
        label: "Kegiatan",
        value: "Kebutuhan Operasional Kantor",
        suggested: true,
      },
      { label: "Tanggal", value: "26 Nov 2026" },
      { label: "Total", value: "Rp 3.420.000", bold: true },
      {
        label: "Kategori",
        value: "Perlengkapan Kantor",
        bold: true,
        suggested: true,
        warnSuggestion: true,
      },
    ],
    saveContinueBtn: "Simpan dan lanjut",
    f4ReadyTitle: "Draf memo pengeluaran sudah siap. Ajukan persetujuan kapan saja:",
    badgeExpense: "PENGELUARAN",
    badgeDraft: "Draf",
    memoTitle: "Kebutuhan Kantor & Operasional Bulanan",
    itemsMeta: "3 Item • 3 Bukti",
    filesLink: "3 Bukti",
    memoNumberLabel: "NOMOR MEMO",
    memoNumberValue: "EXP-2026-1042",
    saveBtn: "Simpan",
    submitBtn: "Ajukan Persetujuan",
    f5SubmittedIntro:
      "Memo berhasil diajukan! Laras telah menganalisis pengajuan dan menyematkan ringkasan & penanda untuk approver:",
    requestedBy: "Diajukan oleh Dina · General Affairs",
    expiresIn: "Berakhir dlm 2 hari",
    summaryByLarasLabel: "RINGKASAN LARAS",
    summaryByLarasBody:
      "Pembelian perlengkapan kantor 26 November 2026. Invoice baru PT Sumber Kertas lebih tinggi 14% dari pembayaran rutin Oktober.",
    flagPill: "Perubahan Nominal Rutin (+14%)",
    approveMobileOnly: "Setujui lewat Aplikasi HP",
    amount: "Rp 3.420.000",
    tooltips: {
      f0: { label: "Kirim Banyak Bukti", body: "Struk, PDF invoice & screenshot" },
      f1: { label: "Tanpa Isi Form", body: "Cukup kirim dalam satu chat" },
      f2: { label: "Saran Isian Otomatis", body: "Bisa diedit sebelum disimpan" },
      f3: { label: "Siap Diajukan", body: "Tinjau draf lalu ajukan approval" },
      f4: { label: "Analisa AI Setelah Diajukan", body: "Tandai anomali untuk approver" },
    },
  },
};

// ── Inline Micro-Icons Matching Product UI ───────────────────────────────────

function AmberWarnIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M7.134 2.5C7.519 1.833 8.481 1.833 8.866 2.5L14.062 11.5C14.447 12.167 13.966 13 13.196 13H2.804C2.034 13 1.553 12.167 1.938 11.5L7.134 2.5Z"
        fill="#F59E0B"
      />
      <path d="M8 6V8.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="10.8" r="0.8" fill="white" />
    </svg>
  );
}

function LarasSparkleIcon() {
  return (
    <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path
        d="M8 1L9.65 6.35L15 8L9.65 9.65L8 15L6.35 9.65L1 8L6.35 6.35L8 1Z"
        fill="#A67C52"
      />
    </svg>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

function ChatHeader({ subtitle }: { subtitle: string }) {
  return (
    <div
      className="flex w-full shrink-0 items-center justify-center px-4 pt-3 pb-[6px] text-center"
      style={{ borderBottom: "1px solid #e0e0e0", textAlign: "center" }}
    >
      <div
        className="flex flex-col items-center font-sans"
        style={{ fontWeight: 500 }}
      >
        <span style={{ fontSize: 16, lineHeight: "22px", color: "#0a121b", fontWeight: 600 }}>
          Laras
        </span>
        <span style={{ fontSize: 11, lineHeight: "18px", color: "#14745A", fontWeight: 600 }}>
          {subtitle}
        </span>
      </div>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="mt-1 flex items-center gap-2">
      {[imgThumbUp, imgThumbDown, imgCopy, imgReply].map((src, i) => (
        <div key={i} className="p-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="h-5 w-5" src={src} />
        </div>
      ))}
    </div>
  );
}

function InputBar({
  placeholder,
  showStop = false,
}: {
  placeholder: string;
  showStop?: boolean;
}) {
  return (
    <div className="w-full shrink-0 rounded-[48px] bg-white px-6 pt-3 pb-6">
      <div
        className="flex items-center gap-[10px] overflow-hidden px-4 py-4"
        style={{ border: "1px solid #b15b10", borderRadius: 24, background: "#fff" }}
      >
        <div className="shrink-0 cursor-pointer p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" className="h-5 w-5" src={imgPlus} />
        </div>
        <p
          className="min-w-0 flex-1 truncate text-left"
          style={{
            fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 15,
            lineHeight: "24px",
            color: "#607d8b",
            textAlign: "left",
          }}
        >
          {placeholder}
        </p>
        <div
          className="relative shrink-0 overflow-hidden rounded-2xl"
          style={{
            width: 40,
            height: 40,
            backgroundImage:
              "linear-gradient(224.53deg, rgb(43,87,94) 14.38%, rgb(85,116,117) 42.74%, rgb(143,115,90) 71.10%, rgb(188,124,72) 90.01%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="h-6 w-6" src={showStop ? imgStop : imgPaperAirplane} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProofAttachments({
  compact = false,
  lang = "id",
}: {
  compact?: boolean;
  lang?: ChatLang;
}) {
  const h = compact ? 64 : 74;
  return (
    <div className="flex items-center gap-2">
      {/* 1. Physical receipt photo */}
      <div
        className="relative shrink-0"
        style={{
          width: h,
          height: h,
          border: "1px solid #cfd8dc",
          borderRadius: 10,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Printed receipt"
          className="absolute inset-0 h-full w-full object-cover"
          src={imgReceipt}
        />
        {!compact && (
          <div className="absolute top-1 right-1 h-4 w-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="h-full w-full" src={imgXCircle} />
          </div>
        )}
      </div>

      {/* 2. Vendor PDF invoice */}
      <div
        className="flex shrink-0 flex-col justify-between p-2.5 text-left"
        style={{
          width: compact ? 132 : 146,
          height: h,
          border: "1px solid #cfd8dc",
          borderRadius: 10,
          background: "#f8fafc",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wide uppercase"
            style={{ background: "#fee2e2", color: "#991b1b" }}
          >
            PDF
          </span>
          <span className="truncate text-[11px] font-semibold text-[#0b1f33]">
            INV-042.pdf
          </span>
        </div>
        <span className="truncate text-[10px] text-[#607d8b]">PT Sumber Kertas</span>
      </div>

      {/* 3. Marketplace screenshot */}
      <div
        className="flex shrink-0 flex-col justify-between p-2.5 text-left"
        style={{
          width: compact ? 132 : 146,
          height: h,
          border: "1px solid #cfd8dc",
          borderRadius: 10,
          background: "#f0fdf4",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wide uppercase"
            style={{ background: "#dcfce7", color: "#166534" }}
          >
            IMG
          </span>
          <span className="truncate text-[11px] font-semibold text-[#0b1f33]">
            order-chat.png
          </span>
        </div>
        <span className="truncate text-[10px] text-[#607d8b]">
          {lang === "id" ? "Screenshot Belanja" : "Marketplace Screenshot"}
        </span>
      </div>
    </div>
  );
}

// Tooltip dirender di luar overflow:hidden card (di level outer ring)
function Tooltip({
  label,
  body,
  bg,
  style,
}: {
  label: string;
  body: string;
  bg: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute z-20 flex flex-col items-start overflow-hidden rounded-xl px-3 py-2 text-left"
      style={{
        background: bg,
        textAlign: "left",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.9, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          lineHeight: "15px",
          color: "#667085",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "Geist, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "16px",
          color: "#0b1f33",
          whiteSpace: "nowrap",
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

// ── Frame 1: Greeting + multi-file drop ──────────────────────────────────────

function Frame1Content({
  subPhase,
  lang,
  reduce,
  isPaused,
}: {
  subPhase: number;
  lang: ChatLang;
  reduce: boolean | null;
  isPaused: boolean;
}) {
  const c = CHAT_COPY[lang];
  const [typed, setTyped] = useState(reduce ? c.greeting : "");

  useEffect(() => {
    if (reduce) {
      setTyped(c.greeting);
      return;
    }
    setTyped("");
    if (isPaused) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(c.greeting.slice(0, i));
      if (i >= c.greeting.length) clearInterval(iv);
    }, 18);
    return () => clearInterval(iv);
  }, [c.greeting, reduce, isPaused]);

  return (
    <>
      <div className="min-h-0 flex-1 overflow-hidden px-10 py-4">
        <motion.div
          className="flex justify-center pb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
              fontSize: 10,
              lineHeight: "20px",
              color: "#607d8b",
            }}
          >
            {c.timestamp}
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[2px] pr-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="border p-4"
              style={{
                borderColor: "#e0e0e0",
                borderRadius: "2px 16px 16px 16px",
                background: "#fff",
                filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
              }}
            >
              <p
                className="text-left"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#3f3f3f",
                  textAlign: "left",
                }}
              >
                {typed}
                {typed.length < c.greeting.length && (
                  <span className="ml-[1px] inline-block h-[14px] w-[2px] animate-pulse bg-[#3f3f3f] align-middle" />
                )}
              </p>
            </div>
            <div className="absolute top-[6px] right-[7px] h-4 w-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="h-full w-full" src={imgQuestionMark} />
            </div>
          </div>

          <AnimatePresence>
            {subPhase >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ActionButtons />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Input area dengan 3 bukti sekaligus */}
      <div className="w-full shrink-0 rounded-[48px] bg-white px-6 pt-3 pb-6">
        <div
          className="flex flex-col gap-2 px-4 pt-3.5 pb-2"
          style={{ border: "1px solid #b15b10", borderRadius: 24, background: "#fff" }}
        >
          <AnimatePresence>
            {subPhase >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <ProofAttachments lang={lang} />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex h-9 items-center text-left">
            <p
              style={{
                fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                lineHeight: "22px",
                color: "#212121",
                textAlign: "left",
              }}
            >
              {c.userPrompt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="cursor-pointer p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="h-5 w-5" src={imgPlus} />
            </div>
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: 40,
                height: 40,
                backgroundImage:
                  "linear-gradient(224.53deg, rgb(43,87,94) 14.38%, rgb(85,116,117) 42.74%, rgb(143,115,90) 71.10%, rgb(188,124,72) 90.01%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="h-4 w-4" src={imgPaperAirplane} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor animasi */}
      <AnimatePresence>
        {subPhase >= 2 && (
          <motion.div
            className="pointer-events-none absolute z-10 overflow-hidden"
            style={{ width: 32, height: 32 }}
            initial={{ left: 430, top: 264, opacity: 0 }}
            animate={
              subPhase >= 3
                ? { left: 566, top: 618, opacity: 1 }
                : { left: 430, top: 264, opacity: 1 }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: subPhase >= 3 ? 0.7 : 0.3, ease: "easeInOut" }}
          >
            <div className="absolute inset-[3.3%]">
              <div className="absolute inset-[-1.67%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="block h-full w-full" src={imgCursor} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Frame 2: User kirim 3 bukti sekaligus, Laras membaca file ────────────────

function Frame2Content({ lang }: { lang: ChatLang }) {
  const c = CHAT_COPY[lang];
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-5 overflow-hidden px-5 py-4">
        <motion.div
          className="flex flex-col items-end pl-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex flex-col items-end gap-2.5 rounded-2xl px-4 py-3"
            style={{
              backgroundImage:
                "linear-gradient(225deg, rgba(193,141,63,0.42) 0%, rgba(132,212,225,0.42) 100%)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            <ProofAttachments compact lang={lang} />
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "22px",
                color: "#0a121b",
                textAlign: "left",
              }}
            >
              {c.userPrompt}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-start pr-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              border: "0.8px solid #e0e0e0",
              borderRadius: "2px 16px 16px 16px",
              background: "#fff",
              filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "24px",
                color: "#607d8b",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              {c.typing}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" style={{ width: 30, height: 6 }} src={imgTypingDots} />
          </div>
        </motion.div>
      </div>
      <InputBar placeholder={c.placeholder} showStop={true} />
    </>
  );
}

// ── Frame 3: Ringkasan Draf (Tanpa Analisa Spike/Pajak — Hanya Field + Suggestion by Laras) ─

function Frame3Content({ lang }: { lang: ChatLang }) {
  const c = CHAT_COPY[lang];

  return (
    <>
      <div
        className="flex min-h-0 flex-1 flex-col justify-end overflow-y-auto px-5 pt-3 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        <motion.div
          className="flex flex-col gap-[2px] pr-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div
            className="flex flex-col gap-3 p-4"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "2px 16px 16px 16px",
              background: "#fff",
              filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.05))",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 13.5,
                lineHeight: "20px",
                color: "#0a121b",
                textAlign: "left",
              }}
            >
              {c.f3Reply}
            </p>

            {/* Tabel Field Draf + Suggestion by Laras (Sesuai Referensi UI) */}
            <div
              className="flex flex-col overflow-hidden"
              style={{ border: "1px solid #e2e8f0", borderRadius: 12, background: "#fff" }}
            >
              <div
                className="flex items-center justify-between px-3.5 py-2.5"
                style={{ background: "#f6f8fa", borderBottom: "1px solid #e2e8f0" }}
              >
                <div className="flex items-center gap-[6px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-[14px] w-[14px]" src={imgFile} />
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: "18px",
                      color: "#455a64",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c.tableHeader}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-[13px] w-[13px]" src={imgPencil} />
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 11.5,
                      lineHeight: "18px",
                      color: "#78909c",
                    }}
                  >
                    {c.editable}
                  </span>
                </div>
              </div>

              {c.summaryRows.map((row, i, arr) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-3 px-3.5 py-2"
                  style={i < arr.length - 1 ? { borderBottom: "1px solid #eef2f6" } : undefined}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "20px",
                      color: "#607d8b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.label}
                  </span>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5">
                      <span
                        style={{
                          fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                          fontWeight: row.bold ? 700 : 500,
                          fontSize: 13,
                          lineHeight: "20px",
                          color: "#0a121b",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.value}
                      </span>
                      {row.warnSuggestion && <AmberWarnIcon size={14} />}
                    </div>
                    {row.suggested && (
                      <span
                        style={{
                          fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                          fontWeight: 500,
                          fontSize: 10.5,
                          lineHeight: "15px",
                          color: "#1e88e5",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.suggestionLabel}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Simpan dan lanjut + cursor */}
            <div className="relative">
              <div
                className="flex cursor-pointer items-center justify-center gap-1 rounded-2xl px-4 py-2.5"
                style={{ background: "#223c5b" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 13.5,
                    lineHeight: "20px",
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.saveContinueBtn}
                </span>
              </div>
              <div
                className="pointer-events-none absolute overflow-hidden"
                style={{ width: 32, height: 32, right: 18, bottom: -14 }}
              >
                <div className="absolute inset-[3.3%]">
                  <div className="absolute inset-[-1.67%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="block h-full w-full" src={imgCursorAlt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ActionButtons />
        </motion.div>
      </div>
      <InputBar placeholder={c.placeholder} />
    </>
  );
}

// ── Frame 4: Kartu Memo Draft Siap Diajukan (Klik Submit Approval) ───────────

function Frame4Content({ lang }: { lang: ChatLang }) {
  const c = CHAT_COPY[lang];
  return (
    <>
      <div
        className="flex min-h-0 flex-1 flex-col justify-end gap-4 overflow-y-auto px-5 pt-2 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {/* User bubble */}
        <motion.div
          className="flex flex-col items-end pl-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="flex items-start rounded-2xl px-4 py-2"
            style={{
              backgroundImage:
                "linear-gradient(195deg, rgba(193,141,63,0.45) 0%, rgba(132,212,225,0.45) 100%)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13.5,
                lineHeight: "20px",
                color: "#0a121b",
                whiteSpace: "nowrap",
              }}
            >
              {c.saveContinueBtn}
            </p>
          </div>
        </motion.div>

        {/* AI response: Draft Memo Card (Tanpa Flag — Menunggu Submit Approval) */}
        <motion.div
          className="flex flex-col gap-[2px] pr-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div
            className="flex flex-col gap-2.5 p-4"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "2px 16px 16px 16px",
              background: "#fff",
              filter: "drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.08))",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13.5,
                lineHeight: "20px",
                color: "#0a121b",
              }}
            >
              {c.f4ReadyTitle}
            </p>

            {/* Draft Memo Card (Sesuai Gambar 2, bersih sebelum submit) */}
            <div
              className="flex flex-col overflow-hidden p-4"
              style={{ border: "1px solid #e2e8f0", borderRadius: 16, background: "#fff" }}
            >
              {/* Top Badges + Amount */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="flex items-center gap-1 rounded-full px-2.5 py-0.5"
                    style={{ background: "#1976d2" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="h-3.5 w-3.5" src={imgReceiptRefund} />
                    <span
                      style={{
                        fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: 10,
                        lineHeight: "16px",
                        color: "#fff",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {c.badgeExpense}
                    </span>
                  </div>
                  <div
                    className="rounded-full px-2.5 py-0.5"
                    style={{ background: "#dfe5ec" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                        fontWeight: 600,
                        fontSize: 11,
                        lineHeight: "16px",
                        color: "#475569",
                      }}
                    >
                      {c.badgeDraft}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#0a121b",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.amount}
                </span>
              </div>

              {/* Title + External Icon */}
              <div className="mt-2.5 flex items-center gap-1.5">
                <p
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    lineHeight: "22px",
                    color: "#0a121b",
                  }}
                >
                  {c.memoTitle}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="h-4 w-4 opacity-60" src={imgExternalLink} />
              </div>

              {/* Items & Receipts Meta */}
              <div className="mt-1 flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 11.5,
                    lineHeight: "18px",
                    color: "#64748b",
                  }}
                >
                  {c.itemsMeta}
                </span>
                <div className="flex items-center gap-1">
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: "18px",
                      color: "#0a121b",
                    }}
                  >
                    {c.filesLink}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-3.5 w-3.5" src={imgExternalLink} />
                </div>
              </div>

              {/* Dashed Memo Number Row */}
              <div
                className="mt-3 flex items-center justify-between py-2.5"
                style={{
                  borderTop: "1px dashed #cbd5e1",
                  borderBottom: "1px dashed #cbd5e1",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 10.5,
                    letterSpacing: "0.04em",
                    color: "#64748b",
                  }}
                >
                  {c.memoNumberLabel}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 12.5,
                    color: "#0a121b",
                  }}
                >
                  {c.memoNumberValue}
                </span>
              </div>

              {/* Save + Submit Approval Buttons + Cursor */}
              <div className="relative mt-3.5 flex items-center gap-2.5">
                <div
                  className="flex cursor-pointer items-center justify-center rounded-2xl px-5 py-2.5"
                  style={{ background: "#eef1f4", border: "1px solid #223c5b", minWidth: 88 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#223c5b",
                    }}
                  >
                    {c.saveBtn}
                  </span>
                </div>
                <div
                  className="relative flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl px-5 py-2.5"
                  style={{ background: "#223c5b" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-4 w-4" src={imgSubmitIcon} />
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#fff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {c.submitBtn}
                  </span>
                </div>

                {/* Cursor clicking Submit Approval */}
                <div
                  className="pointer-events-none absolute overflow-hidden"
                  style={{ width: 32, height: 32, right: 20, bottom: -14 }}
                >
                  <div className="absolute inset-[3.3%]">
                    <div className="absolute inset-[-1.67%]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" className="block h-full w-full" src={imgCursorAlt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ActionButtons />
        </motion.div>
      </div>
      <InputBar placeholder={c.placeholder} />
    </>
  );
}

// ── Frame 5: Setelah Memo Diajukan → Muncul Analisa & Flag Laras (Gambar 2 & 3) ─

function Frame5Content({ lang }: { lang: ChatLang }) {
  const c = CHAT_COPY[lang];
  return (
    <>
      <div
        className="flex min-h-0 flex-1 flex-col justify-end gap-4 overflow-y-auto px-5 pt-2 pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {/* User bubble: Submit Approval */}
        <motion.div
          className="flex flex-col items-end pl-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="flex items-start rounded-2xl px-4 py-2"
            style={{
              backgroundImage:
                "linear-gradient(195deg, rgba(193,141,63,0.45) 0%, rgba(132,212,225,0.45) 100%)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13.5,
                lineHeight: "20px",
                color: "#0a121b",
                whiteSpace: "nowrap",
              }}
            >
              {c.submitBtn}
            </p>
          </div>
        </motion.div>

        {/* AI response: Submitted Memo Card with Laras Analysis & Flag */}
        <motion.div
          className="flex flex-col gap-[2px] pr-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        >
          <div
            className="flex flex-col gap-2.5 p-4"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "2px 16px 16px 16px",
              background: "#fff",
              filter: "drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.08))",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 500,
                fontSize: 13,
                lineHeight: "19px",
                color: "#0a121b",
              }}
            >
              {c.f5SubmittedIntro}
            </p>

            {/* Submitted Memo Card (Sesuai Gambar 3: Left Amber Stripe + Summary by Laras + Flag Pill) */}
            <div
              className="flex flex-col overflow-hidden p-4"
              style={{
                border: "1px solid #e2e8f0",
                borderLeft: "4px solid #f59e0b",
                borderRadius: 16,
                background: "#fff",
              }}
            >
              {/* Top Badge + Amount */}
              <div className="flex items-center justify-between gap-2">
                <div
                  className="flex items-center gap-1 rounded-full px-2.5 py-0.5"
                  style={{ background: "#0d8a72" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-3.5 w-3.5" src={imgReceiptRefund} />
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      lineHeight: "16px",
                      color: "#fff",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {c.badgeExpense}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 15.5,
                    lineHeight: "22px",
                    color: "#0a121b",
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.amount}
                </span>
              </div>

              {/* Memo Title */}
              <p
                className="mt-2 text-left"
                style={{
                  fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14.5,
                  lineHeight: "21px",
                  color: "#0a121b",
                }}
              >
                {c.memoTitle}
              </p>

              {/* Requester + Expires in 2 days */}
              <p
                className="mt-0.5 text-left"
                style={{
                  fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 11.5,
                  lineHeight: "18px",
                  color: "#64748b",
                }}
              >
                {c.requestedBy}
                <span className="mx-1.5 text-[#cbd5e1]">•</span>
                <span style={{ color: "#d97706", fontWeight: 600 }}>{c.expiresIn}</span>
              </p>

              {/* Summary by Laras + Analysis Paragraph */}
              <div
                className="mt-2.5 pt-2.5"
                style={{ borderTop: "1px dashed #e2e8f0" }}
              >
                <div className="flex items-center gap-1">
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.05em",
                      color: "#64748b",
                    }}
                  >
                    {c.summaryByLarasLabel}
                  </span>
                  <LarasSparkleIcon />
                </div>
                <p
                  className="mt-1 text-left"
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "18px",
                    color: "#1e293b",
                  }}
                >
                  {c.summaryByLarasBody}
                </p>
              </div>

              {/* Amber Anomaly Flag Pill */}
              <div className="mt-2.5 flex items-center">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{ background: "#fdecc8" }}
                >
                  <AmberWarnIcon size={13} />
                  <span
                    style={{
                      fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: 11,
                      lineHeight: "16px",
                      color: "#3b2f1e",
                    }}
                  >
                    {c.flagPill}
                  </span>
                </span>
              </div>

              {/* Footer: Memo ID + Approve only via Mobile App */}
              <div className="mt-3 flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: 11,
                    color: "#94a3b8",
                  }}
                >
                  {c.memoNumberValue}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist), ui-sans-serif, system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: 11.5,
                    color: "#1d6fd8",
                  }}
                >
                  {c.approveMobileOnly}
                </span>
              </div>
            </div>
          </div>
          <ActionButtons />
        </motion.div>
      </div>
      <InputBar placeholder={c.placeholder} />
    </>
  );
}

// ── Konfigurasi timing (5 Frame Alur Produk Nyata) ───────────────────────────

const TOTAL_FRAMES = 5;

const FRAME_CONFIG: [number, number[]][] = [
  [7400, [2100, 3800, 5100]],
  [3600, []],
  [5400, []],
  [4600, []],
  [6000, []],
];

// ── Tooltip per frame ────────────────────────────────────────────────────────

type TooltipDef = { label: string; body: string; bg: string; style: CSSProperties };

function getTooltip(
  frame: number,
  subPhase: number,
  lang: ChatLang,
  scale: number,
): TooltipDef | null {
  const t = CHAT_COPY[lang].tooltips;
  const inset = scale < 0.9;
  if (frame === 0 && subPhase >= 2)
    return {
      label: t.f0.label,
      body: t.f0.body,
      bg: "#f5f4ef",
      style: { left: 382, top: 276, width: 228 },
    };
  if (frame === 1)
    return {
      label: t.f1.label,
      body: t.f1.body,
      bg: "#eaf1f3",
      style: { left: inset ? 16 : -21, top: 392, width: 214 },
    };
  if (frame === 2)
    return {
      label: t.f2.label,
      body: t.f2.body,
      bg: "#eef6ff",
      style: { right: inset ? 16 : -16, top: 370, width: 220 },
    };
  if (frame === 3)
    return {
      label: t.f3.label,
      body: t.f3.body,
      bg: "#E9F3EC",
      style: { left: inset ? 16 : -22, top: 150, width: 210 },
    };
  if (frame === 4)
    return {
      label: t.f4.label,
      body: t.f4.body,
      bg: "#FFFBEB",
      style: { right: inset ? 16 : -16, top: 396, width: 222 },
    };
  return null;
}

// ── Komponen utama (ukuran asli 646 x ~694, di-scale responsif) ──────────────

const BASE_W = 646;
const BASE_H = 710;

export function ChatSimulation({ lang = "en" }: { lang?: ChatLang }) {
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);
  const [subPhase, setSubPhase] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const isPaused = !isVisible || isTabHidden;

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => {
    clearTimers();
    if (reduce) {
      setSubPhase(frame === 0 ? 3 : 0);
      return;
    }
    setSubPhase(0);
    if (isPaused) return;
    const [duration, subs] = FRAME_CONFIG[frame];
    subs.forEach((delay, i) => {
      timers.current.push(setTimeout(() => setSubPhase(i + 1), delay));
    });
    timers.current.push(setTimeout(() => setFrame((f) => (f + 1) % TOTAL_FRAMES), duration));
    return clearTimers;
  }, [frame, lang, cycleKey, reduce, isPaused]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      setScale(Math.min(1, w / BASE_W));
    });
    ro.observe(el);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
            threshold: 0,
          })
        : null;
    io?.observe(el);

    const onVis = () => setIsTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const tooltipDef = getTooltip(frame, subPhase, lang, scale);

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[646px]">
      <div className="relative" style={{ height: BASE_H * scale, marginBottom: 8 }}>
        <div
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: BASE_W,
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          {/* Outer frosted ring: relative + overflow visible agar tooltip bisa keluar */}
          <div
            className="relative rounded-[48px] p-3 text-left"
            style={{ background: "rgba(255,255,255,0.5)", textAlign: "left" }}
          >
            <AnimatePresence>
              {tooltipDef && (
                <Tooltip
                  key={`tooltip-${frame}-${lang}`}
                  label={tooltipDef.label}
                  body={tooltipDef.body}
                  bg={tooltipDef.bg}
                  style={tooltipDef.style}
                />
              )}
            </AnimatePresence>

            {/* White chat card */}
            <div
              className="relative flex flex-col overflow-hidden text-left"
              style={{
                width: 622,
                height: 670,
                borderRadius: 48,
                background: "#fff",
                textAlign: "left",
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0px 0px 0px 0px rgba(255,255,255,0.4), 0px 24px 80px 0px rgba(0,0,0,0.1)",
              }}
            >
              <ChatHeader subtitle={CHAT_COPY[lang].subtitle} />

              <AnimatePresence mode="wait">
                {frame === 0 && (
                  <motion.div
                    key={`f1-${lang}`}
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame1Content subPhase={subPhase} lang={lang} reduce={reduce} isPaused={isPaused} />
                  </motion.div>
                )}
                {frame === 1 && (
                  <motion.div
                    key={`f2-${lang}`}
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame2Content lang={lang} />
                  </motion.div>
                )}
                {frame === 2 && (
                  <motion.div
                    key={`f3-${lang}`}
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame3Content lang={lang} />
                  </motion.div>
                )}
                {frame === 3 && (
                  <motion.div
                    key={`f4-${lang}`}
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame4Content lang={lang} />
                  </motion.div>
                )}
                {frame === 4 && (
                  <motion.div
                    key={`f5-${lang}`}
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame5Content lang={lang} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Clickable Progress dots */}
              <div
                className="absolute flex items-center gap-1.5"
                style={{ bottom: 10, left: "50%", transform: "translateX(-50%)" }}
              >
                {Array.from({ length: TOTAL_FRAMES }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Preview step ${i + 1}`}
                    onClick={() => {
                      setFrame(i);
                      setCycleKey((k) => k + 1);
                    }}
                    className="cursor-pointer p-0.5"
                  >
                    <span
                      className="block"
                      style={{
                        width: frame === i ? 16 : 6,
                        height: 6,
                        borderRadius: 9999,
                        background: frame === i ? "#223c5b" : "#cfd8dc",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatSimulation;
