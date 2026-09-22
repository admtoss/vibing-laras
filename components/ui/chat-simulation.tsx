"use client";

import { motion, AnimatePresence } from "motion/react";
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
const imgChevronUp = `${A}/73f03.svg`;
const imgReceiptRefund = `${A}/fb3e0.svg`;
const imgExternalLink = `${A}/9aa93.svg`;
const imgSubmitIcon = `${A}/47929.svg`;
const imgReceipt = `${A}/1563f.png`;

// ── Shared sub-components ────────────────────────────────────────────────────

function ChatHeader() {
  return (
    <div
      className="flex w-full shrink-0 items-center justify-center px-4 pt-3 pb-[5px] text-center"
      style={{ borderBottom: "1px solid #e0e0e0", textAlign: "center" }}
    >
      <div
        className="flex flex-col items-center"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
      >
        <span style={{ fontSize: 16, lineHeight: "24px", color: "#0a121b" }}>Laras</span>
        <span style={{ fontSize: 10, lineHeight: "20px", color: "#607d8b" }}>
          Your AI finance asistant
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

function InputBar({ showStop = false }: { showStop?: boolean }) {
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
          className="min-w-0 flex-1 text-left"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            color: "#607d8b",
            textAlign: "left",
          }}
        >
          Ask Laras...
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
          fontWeight: 400,
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

// ── Frame 1: Greeting + scan ─────────────────────────────────────────────────

const GREETING =
  "Hello! I am Laras, your financial assistant here. Nice to meet you! How can I help you?";

function Frame1Content({ subPhase }: { subPhase: number }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTyped(GREETING.slice(0, i));
      if (i >= GREETING.length) clearInterval(iv);
    }, 22);
    return () => clearInterval(iv);
  }, []);

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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: 10,
              lineHeight: "20px",
              color: "#607d8b",
            }}
          >
            Today, 09.12 · First login
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
                {typed.length < GREETING.length && (
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
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <ActionButtons />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Input area dengan receipt */}
      <div className="w-full shrink-0 rounded-[48px] bg-white px-6 pt-3 pb-6">
        <div
          className="flex flex-col gap-2 px-4 pt-4 pb-2"
          style={{ border: "1px solid #b15b10", borderRadius: 24, background: "#fff" }}
        >
          <AnimatePresence>
            {subPhase >= 3 && (
              <motion.div
                className="relative"
                style={{
                  width: 90,
                  height: 90,
                  border: "1px solid #e0e0e0",
                  borderRadius: 8,
                  background: "#fff",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="receipt" className="absolute inset-0 h-full w-full object-cover" src={imgReceipt} />
                <div className="absolute -top-[3px] left-[75px] h-5 w-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-full w-full" src={imgXCircle} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex h-10 items-center text-left">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: "24px",
                color: "#212121",
                textAlign: "left",
              }}
            >
              Record this expense
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

// ── Frame 2: User kirim struk, Laras mengetik ────────────────────────────────

function Frame2Content() {
  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-6 overflow-hidden px-5 py-4">
        <motion.div
          className="flex flex-col items-end pl-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex flex-col items-end gap-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-4 py-3"
            style={{
              backgroundImage:
                "linear-gradient(225deg, rgba(193,141,63,0.5) 0%, rgba(132,212,225,0.5) 100%)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="relative"
              style={{
                width: 110,
                height: 110,
                border: "1px solid #cfd8dc",
                borderRadius: 8,
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="receipt" className="absolute inset-0 h-full w-full object-cover" src={imgReceipt} />
            </div>
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "24px",
                color: "#0a121b",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              Record this expense
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
            className="flex items-center gap-1 px-4 py-3"
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
              Laras is typing
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" style={{ width: 30, height: 6 }} src={imgTypingDots} />
          </div>
        </motion.div>
      </div>
      <InputBar showStop={true} />
    </>
  );
}

// ── Frame 3: AI balas dengan data struk + scroll otomatis ────────────────────

function Frame3Content() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      scrollRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto px-5 pt-3 pb-3"
        style={{ scrollbarWidth: "none" }}
      >
        <motion.div
          className="flex flex-col gap-[2px] pr-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative">
            <div
              className="flex flex-col gap-3 p-[17px]"
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
                  fontSize: 14,
                  lineHeight: "24px",
                  color: "#0a121b",
                  textAlign: "left",
                }}
              >
                I have read it, Mr. Budi! The receipt from Kopi Tuku totals Rp 187,000. Here&apos;s
                the summary — just click the number if anything is off, and you can edit it
                directly.
              </p>

              {/* Tabel data struk */}
              <div
                className="flex flex-col overflow-hidden"
                style={{ border: "1px solid #e0e0e0", borderRadius: 12, background: "#fff" }}
              >
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{ background: "#f6f8fa", borderBottom: "1px solid #e0e0e0" }}
                >
                  <div className="flex items-center gap-[6px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="h-[14px] w-[14px]" src={imgFile} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: "20px",
                        color: "#455a64",
                        whiteSpace: "nowrap",
                      }}
                    >
                      struk-7231.jpg
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="h-[14px] w-[14px]" src={imgPencil} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: 12,
                        lineHeight: "20px",
                        color: "#78909c",
                      }}
                    >
                      editable
                    </span>
                  </div>
                </div>
                {[
                  ["Vendor", "Restoran Sari Rasa"],
                  ["Activity", "Client reception"],
                  ["Date", "7 Juli 2026"],
                  ["Total", "Rp 750.000"],
                  ["Category", "Meals"],
                ].map(([label, value], i, arr) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-4 py-3"
                    style={i < arr.length - 1 ? { borderBottom: "1px solid #e0e0e0" } : undefined}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: "22px",
                        color: "#607d8b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: 14,
                        lineHeight: "22px",
                        color: "#0a121b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Close details */}
              <div
                className="flex items-center justify-between rounded-xl px-3 py-3"
                style={{ background: "#f6f8fa" }}
              >
                <div className="flex items-center gap-1">
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: "20px",
                      color: "#607d8b",
                    }}
                  >
                    Close details
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-4 w-4" src={imgChevronUp} />
                </div>
                <div className="flex items-center gap-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" className="h-[14px] w-[14px]" src={imgPencil} />
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 12,
                      lineHeight: "20px",
                      color: "#78909c",
                    }}
                  >
                    editable
                  </span>
                </div>
              </div>

              {/* Tombol Save and continue + cursor */}
              <div className="relative">
                <div
                  className="flex cursor-pointer items-center justify-center gap-1 rounded-xl px-4 py-2"
                  style={{ background: "#223c5b" }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: "22px",
                      color: "#fff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Save and continue
                  </span>
                </div>
                <div
                  className="pointer-events-none absolute overflow-hidden"
                  style={{ width: 32, height: 32, right: -28, bottom: -12 }}
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
      <InputBar />
    </>
  );
}

// ── Frame 4: Memo draft siap diajukan ────────────────────────────────────────

function Frame4Content() {
  return (
    <>
      <div
        className="flex min-h-0 flex-1 flex-col justify-end gap-6 overflow-y-auto px-5 pt-2 pb-3"
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
            className="flex items-start rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl px-4 py-3"
            style={{
              backgroundImage:
                "linear-gradient(195deg, rgba(193,141,63,0.5) 0%, rgba(132,212,225,0.5) 100%)",
              boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "24px",
                color: "#0a121b",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              Save and continue
            </p>
          </div>
        </motion.div>

        {/* AI response: memo card */}
        <motion.div
          className="flex flex-col gap-[2px] pr-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <div
            className="flex flex-col gap-2 p-[17px]"
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "2px 16px 16px 16px",
              background: "#fff",
              filter: "drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.1))",
            }}
          >
            <div
              className="text-left"
              style={{
                fontFamily: "system-ui, sans-serif",
                fontWeight: 590,
                fontSize: 14,
                lineHeight: "24px",
                color: "#0a121b",
                textAlign: "left",
              }}
            >
              <p className="mb-0 text-left">The expense memo draft is ready. 💼</p>
              <p className="text-left" style={{ fontWeight: 400, textAlign: "left" }}>
                {`If all the information above is correct, please click "Confirm" so I can save the document in the system.`}
              </p>
            </div>
            <div
              className="flex flex-col overflow-hidden"
              style={{ border: "1px solid #e0e0e0", borderRadius: 16, background: "#fff" }}
            >
              <div style={{ height: 4, background: "rgba(55,71,79,0.2)" }} />
              <div className="flex flex-col gap-2 px-4 pt-4 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div
                      className="flex items-center gap-[2px] overflow-hidden rounded-lg px-1"
                      style={{ background: "#00897b" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" className="h-4 w-4" src={imgReceiptRefund} />
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: 10,
                          lineHeight: "20px",
                          color: "#e0f2f1",
                          textTransform: "uppercase",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Reimbursement
                      </span>
                    </div>
                    <div className="overflow-hidden rounded-lg px-1" style={{ background: "#cfd8dc" }}>
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: 12,
                          lineHeight: "20px",
                          color: "#607d8b",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Draft
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#0a121b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Rp20.350.000
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p
                    className="text-left"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#0a121b",
                      textAlign: "left",
                    }}
                  >
                    Jakarta Summit Business Trip
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: 10,
                        lineHeight: "20px",
                        color: "#607d8b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      4 Items • 3 Receipts
                    </span>
                    <div className="flex items-center gap-[2px] px-1">
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 500,
                          fontSize: 12,
                          lineHeight: "20px",
                          color: "#212121",
                          whiteSpace: "nowrap",
                        }}
                      >
                        3 Receipt
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" className="h-4 w-4" src={imgExternalLink} />
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-1 self-start rounded-lg px-2 py-1">
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: 12,
                      lineHeight: "20px",
                      color: "#223c5b",
                      whiteSpace: "nowrap",
                    }}
                  >
                    More details
                  </span>
                  <span style={{ color: "#223c5b" }}>▾</span>
                </button>
                <div className="flex items-center gap-2 pt-2">
                  <div
                    className="flex cursor-pointer items-center justify-center rounded-2xl px-6 py-3"
                    style={{ background: "#eee", border: "1px solid #223c5b", minWidth: 87 }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "#223c5b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Save
                    </span>
                  </div>
                  <div
                    className="relative flex flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3"
                    style={{ background: "#223c5b" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" className="h-5 w-5" src={imgSubmitIcon} />
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "#fff",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Submit Approval
                    </span>
                    <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_-3px_-3px_6px_0px_rgba(0,0,0,0.2),inset_0px_4px_4px_0px_rgba(255,255,255,0.2)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ActionButtons />
        </motion.div>
      </div>
      <InputBar />
    </>
  );
}

// ── Konfigurasi timing ───────────────────────────────────────────────────────

const FRAME_CONFIG: [number, number[]][] = [
  [8000, [2200, 4000, 5400]],
  [4000, []],
  [5500, []],
  [4500, []],
];

// ── Tooltip per frame ────────────────────────────────────────────────────────

type TooltipDef = { label: string; body: string; bg: string; style: CSSProperties };

function getTooltip(frame: number, subPhase: number): TooltipDef | null {
  if (frame === 0 && subPhase >= 2)
    return {
      label: "Scan",
      body: "Snap or upload JPG, PNG, or PDF",
      bg: "#f5f4ef",
      style: { left: 392, top: 276, width: 217 },
    };
  if (frame === 1)
    return {
      label: "Chat",
      body: "Just tell Laras what you spent",
      bg: "#eaf1f3",
      style: { left: -21, top: 392, width: 206 },
    };
  if (frame === 2)
    return {
      label: "Confirm-before-save",
      body: "You confirm before saving",
      bg: "#ecf0f5",
      style: { right: -12, top: 492, width: 180 },
    };
  if (frame === 3)
    return {
      label: "Ready to ship",
      body: "Send to supervisor for approval",
      bg: "#ede9fa",
      style: { left: -25, top: 89, width: 210 },
    };
  return null;
}

// ── Komponen utama (ukuran asli 646 x ~694, di-scale responsif) ──────────────

const BASE_W = 646;
const BASE_H = 710;

export function ChatSimulation() {
  const [frame, setFrame] = useState(0);
  const [subPhase, setSubPhase] = useState(0);
  const [scale, setScale] = useState(1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => {
    clearTimers();
    setSubPhase(0);
    const [duration, subs] = FRAME_CONFIG[frame];
    subs.forEach((delay, i) => {
      timers.current.push(setTimeout(() => setSubPhase(i + 1), delay));
    });
    timers.current.push(setTimeout(() => setFrame((f) => (f + 1) % 4), duration));
    return clearTimers;
  }, [frame]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      setScale(Math.min(1, w / BASE_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const tooltipDef = getTooltip(frame, subPhase);

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[646px]">
      <div
        className="relative"
        style={{ height: BASE_H * scale, marginBottom: 8 }}
      >
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
                  key={`tooltip-${frame}`}
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
              <ChatHeader />

              <AnimatePresence mode="wait">
                {frame === 0 && (
                  <motion.div
                    key="f1"
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame1Content subPhase={subPhase} />
                  </motion.div>
                )}
                {frame === 1 && (
                  <motion.div
                    key="f2"
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame2Content />
                  </motion.div>
                )}
                {frame === 2 && (
                  <motion.div
                    key="f3"
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame3Content />
                  </motion.div>
                )}
                {frame === 3 && (
                  <motion.div
                    key="f4"
                    className="flex min-h-0 flex-1 flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Frame4Content />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress dots */}
              <div
                className="absolute flex items-center gap-1.5"
                style={{ bottom: 12, left: "50%", transform: "translateX(-50%)" }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: frame === i ? 16 : 6,
                      height: 6,
                      borderRadius: 9999,
                      background: frame === i ? "#223c5b" : "#cfd8dc",
                      transition: "all 0.3s ease",
                    }}
                  />
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
