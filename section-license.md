---
title: "Section License - Trial & Base License Limits"
project: "Laras.ai"
doc_type: "section-spec"
section_id: "S06-license"
version: "1.3.1"
status: "proposal"
last_updated: "2026-09-22"
language_primary: "id"
language_secondary: "en"
audience: ["ai-agent", "frontend-dev", "copywriter", "designer"]
source_refs: ["PRD v1.27/v1.28 §5.12", "Design Deliverable D18"]
supersedes: "Plan.md S06 (10/20/5 model) - pending approval"
---

# S06 License - Trial & Base License Limits (`#free-trial` / `#license`)

> **TL;DR untuk Agen AI:** Render 1 seksi `Plan & Usage Limits` berisi 2 kartu side-by-side: `Card A = Free Trial` (70 pooled chats, 2 seats, no expiry) dan `Card B = Base License` (750 pooled chats/month, 2 seats + add-on +80/seat, monthly renewal). Model kuota = **single pooled allowance**, bukan 10/20/5 lama. Jangan render ASCII-art di UI. Ikuti `AC-LIC-xx` sebelum tandai selesai.

## 0. Cara Membaca Dokumen Ini (Untuk Agen AI)

1. **Urutan baca:** `§1 Konteks` → `§2 Layout` → `§3 Copy Source of Truth` → `§4 Spesifikasi Kartu` → `§5 Kuota YAML` → `§8 Acceptance Criteria`.
2. **ID stabil:**
   - `LIC-HEADER` = eyebrow + headline + sub-headline
   - `LIC-A` = Card Free Trial
   - `LIC-B` = Card Base License
   - `LIC-STRIP` = Non-AI assurance strip
   - `LIC-FOOTER` = micro-assurance footer
3. **Copy final** ada di `§3`. Jangan parafrase headline/CTA tanpa izin.
4. **Angka kuota final di file ini** ada di `§5` (YAML). Jika konflik dengan `Plan.md S06`, file ini yang diusulkan menang, tapi butuh approval eksplisit (lihat `§9`).
5. **Definisi selesai:** semua `AC-LIC-xx` terpenuhi + responsif mobile/desktop + tidak ada placeholder.

## 1. Konteks & Tujuan

### 1.1 Apa ini?

Spesifikasi konten dan layout untuk seksi **Kuota & Uji Coba (Free Trial & Base License)** pada Landing Page Laras.ai.

### 1.2 Tujuan seksi

- Memberikan transparansi penuh alokasi Free Trial dan kapasitas Base License bulanan.
- Menjawab keberatan "biaya tersembunyi" dan "trial hangus".
- Mendorong 2 konversi: `Mulai Uji Coba Gratis` dan `Jadwalkan Demo / Hubungi Sales`.

### 1.3 Referensi requirement

- `PRD v1.27/v1.28 §5.12` — model kuota terpol (single pooled allowance).
- `Design Deliverable D18` — dual container layout.

### 1.4 Perubahan dari model lama

- Model lama: `10 dokumen / 20 chat / 5 memo` (terpisah).
- Model baru (file ini): `70 shared chats (Trial)` + `750 chats/month (Base)` (terpol).
- Bobot pemakaian transparan: `1 chat = 1 kuota`, `1 memo = 2 kuota`, `1 ekstraksi struk = 4 kuota`.
- Add-on skalabilitas: `+80 chats/month per kursi tambahan`.

## 2. Layout & Information Architecture

### 2.1 Struktur render (top → bottom)

| Order | Component ID | Isi |
|-------|--------------|-----|
| 1 | `LIC-HEADER` | eyebrow badge + H2 headline + sub-headline |
| 2 | `LIC-A` | Card Free Trial |
| 3 | `LIC-B` | Card Base License |
| 4 | `LIC-STRIP` | Non-AI assurance strip |
| 5 | `LIC-FOOTER` | Micro-assurance footer (UU PDP + audit log) |

### 2.2 Layout responsif

- **Desktop (1440px):** `LIC-A` + `LIC-B` side-by-side, 2 kolom equal width, gap 24px.
- **Mobile (390px):** vertical stack: `LIC-HEADER` → `LIC-A` → `LIC-B` → `LIC-STRIP` → `LIC-FOOTER`. Tanpa scroll horizontal.
- Jangan render diagram ASCII di UI. Tabel di atas adalah spec, bukan tampilan.

### 2.3 Anchor & heading

- Anchor: `#free-trial` (alias `#license`). Pertahankan `#free-trial` untuk kompatibilitas dengan `Plan.md T1`.
- Heading: satu `H2` di `LIC-HEADER`. Card headers pakai `H3`. Jangan pakai `H1` di seksi ini.

## 3. Copywriting Source of Truth

Tabel ini menang atas Figma/mockup bila ada konflik.

| Key | ID (tampil) | EN (tampil, jika ada) | Lokasi |
|-----|-------------|------------------------|--------|
| `license.eyebrow` | TRANSPARENT USAGE LIMITS | sama | `LIC-HEADER` |
| `license.h2_id` | Batasan Transparan untuk Uji Coba, Siap Tumbuh Bersama Operasional Tim | — | `LIC-HEADER` |
| `license.h2_en` | — | 70 free chats to test everything. No expiry date. | `LIC-HEADER` |
| `license.sub_id` | Nikmati alur manajemen pengeluaran tanpa formulir rumit. Coba langsung seluruh alur tanpa kartu kredit, lalu lanjutkan ke tata kelola operasional penuh saat tim Anda siap. | No credit card. No 7-day countdown. Try approvals, memos, and reports with your team, then move to a monthly plan when the quota runs out. | `LIC-HEADER` |
| `license.trial.title` | Free Trial | sama | `LIC-A` |
| `license.trial.badge` | NO CREDIT CARD NEEDED | sama | `LIC-A` |
| `license.trial.desc` | Uji coba alur nyata bersama tim inti Anda tanpa batasan tenggat waktu. | Work through real expense cases with your core team. The only limit is the quota itself. | `LIC-A` |
| `license.trial.cta` | Mulai Uji Coba Gratis | Start Free Trial | `LIC-A` |
| `license.trial.micro` | Seluruh alur persetujuan dan riwayat berkas tetap tercatat aman di audit log. | The audit log records every approval and file change. | `LIC-A` |
| `license.base.title` | Base License | sama | `LIC-B` |
| `license.base.badge` | CORPORATE READY | sama | `LIC-B` |
| `license.base.desc` | Dirancang untuk menangani seluruh tata kelola klaim dan pengeluaran harian perusahaan. | Handle daily claims and expenses for the whole company in one monthly plan. | `LIC-B` |
| `license.base.cta` | Jadwalkan Demo Tim | Schedule a Team Demo | `LIC-B` |
| `license.base.micro` | Dukungan penuh kepatuhan UU PDP, penyimpanan lokal Jakarta, dan bantuan prioritas. | UU PDP compliant, data stored in Jakarta, priority support included. | `LIC-B` |
| `license.strip` | Saat kuota obrolan AI mencapai batasnya, fitur non-AI tidak pernah dikunci. Tim Anda tetap dapat membuka draf memo, melakukan persetujuan di ponsel, serta mengunduh dokumen laporan PDF kapan saja. | If the AI quota runs out, nothing locks. Your team can still open memos, approve on mobile, and download PDF reports. | `LIC-STRIP` |
| `license.footer` | Data tersimpan aman di Jakarta (UU PDP) • Jejak Audit Sah | — | `LIC-FOOTER` |

> Catatan i18n: siapkan kunci paralel `_en` untuk semua string ID. Jangan auto-translate headline tanpa review.

## 4. Spesifikasi Kartu

### 4.1 LIC-A — Free Trial (Eksplorasi)

**Fokus:** ruang eksplorasi bebas tekanan waktu.

- **Header (H3):** `Free Trial`
- **Badge:** `NO CREDIT CARD NEEDED`
- **Deskripsi:** lihat `license.trial.desc` di `§3`.
- **Metrik kuota:**
  1. `70 Total Shared Chats` — satu alokasi bersama untuk obrolan teks, pindai nota, dan draf memo. (EN: one shared pool for text chats, receipt scans, and memo drafts.)
  2. `2 Included User Seats` — 1 Admin + 1 Approver agar alur persetujuan mobile 2FA dapat diuji dari awal sampai akhir.
  3. `No Time Expiry` — tanpa batas hangus 7/14 hari. Aktif sampai seluruh 70 kuota habis digunakan.
- **Callout bobot di footer kartu navy (tampil persis):**
  > Usage Weight: Text Chat (1 chat) • Draft Memo (2 chats) • Scan Receipt (4 chats)
- **CTA primer:** `license.trial.cta` → alur signup trial.
- **Micro-assurance:** `license.trial.micro`.

### 4.2 LIC-B — Base License (Operasional Penuh)

**Fokus:** kepastian kapasitas bulanan operasional harian.

- **Header (H3):** `Base License`
- **Badge:** `CORPORATE READY`
- **Deskripsi:** lihat `license.base.desc` di `§3`.
- **Metrik kuota:**
  1. `750 Pooled Chats / Month` — satu alokasi bulanan bersama untuk seluruh tim dalam satu siklus.
  2. `2 Base Seats + Flexible Add-ons` — mulai dengan 2 pengguna. Setiap kursi tambahan menambah 80 obrolan/bulan.
  3. `Monthly Auto-Renewal` — kuota direset otomatis tiap bulan pada tanggal tagihan (*billing date*) perusahaan.
- **CTA primer:** `license.base.cta` → `/demo` atau `/contact` (lihat `§9 Q2`).
- **Micro-assurance:** `license.base.micro`.

### 4.3 LIC-STRIP — Non-AI Assurance Strip

- Tampil di bawah kedua kartu, full-width di dalam seksi.
- Isi: `license.strip` di `§3`.
- Fungsi: hilangkan keraguan — fitur non-AI (buka memo, approval HP, unduh PDF) tidak dikunci saat kuota AI habis.

### 4.4 LIC-FOOTER — Micro-assurance Footer

- Isi: `license.footer` di `§3`.
- Gaya: teks kecil, muted, centered.

## 5. Kuota Machine-Readable (Jangan Ubah Tanpa Approval)

```yaml
license_quotas:
  model: "single_pooled_allowance"
  refs: ["PRD v1.27/v1.28 §5.12"]

  free_trial:
    pooled_chats: 70
    seats_included: 2
    seats_breakdown: "1 Admin + 1 Member/Approver"
    expiry_days: null  # null = tanpa batas waktu, habis saat kuota habis
    credit_card_required: false
    usage_weights:
      chat: 1
      memo_draft: 2
      receipt_extraction: 4

  base_license:
    pooled_chats_per_month: 750
    renewal: "monthly_auto_renewal_by_anchor_date"
    seats_included: 2
    add_on:
      chats_per_extra_seat_per_month: 80
      purchasable_anytime: true

  non_ai_guarantee:
    locked_when_ai_quota_empty: false
    always_available: ["open_memo_draft", "mobile_approval", "download_pdf"]
```

## 6. Design Tokens & Styling

```yaml
colors:
  navy_primary: "#0B1F33"   # page lock: sama dengan nav/hero/footer/CTA final
  badge_trial_bg: "#EFF6FF" # soft blue / slate tint
  badge_corp_bg: "#E6F4EA"  # sage green tint
  badge_corp_text: "#4285F4"
  accent_amber: "#F59E0B"   # ikon infinity / no-expiry
text:
  eyebrow: "TRANSPARENT USAGE LIMITS"
layout:
  desktop: "side-by-side 2 col, gap 24px @1440px"
  mobile: "vertical stack @390px"
```

## 7. Guardrails (Aturan Wajib Agen)

### 7.1 Vocabulary

- Wajib: `Company / Perusahaan`.
- Dilarang: `Organization`.
- Brand resmi: `Laras.ai` atau `Laras`. Jangan `LARAS.AI`, `laras ai`, `Laras AI`.

### 7.2 Store safety

- Di landing page web: info paket + tombol `Schedule Demo` diperbolehkan.
- Jika komponen diadaptasi ke layar aplikasi mobile (iOS/Android): hapus semua teks harga/pembelian, ganti dengan satu tombol bantuan WhatsApp CS.

### 7.3 Aksesibilitas & SEO

- Satu `H2` per seksi, card headers `H3`.
- Badge = teks + warna, bukan warna saja.
- CTA min touch target 44px + focus-visible.
- Kontras body text ≥ 4.5:1.

## 8. Acceptance Criteria

- [ ] `AC-LIC-01`: Dua kartu tampil side-by-side di desktop, stack vertikal di mobile tanpa scroll horizontal.
- [ ] `AC-LIC-02`: Angka `70` (Trial) dan `750/month` (Base) tampil menonjol dan sesuai `§5`. Tidak ada angka lama `10/20/5` di seksi ini.
- [ ] `AC-LIC-03`: Bobot `1 / 2 / 4` tampil persis sebagai callout mikro di `LIC-A`.
- [ ] `AC-LIC-04`: Teks `No Time Expiry` / tanpa batas hangus tampil di `LIC-A`; tidak ada klaim "7 hari" / "14 hari".
- [ ] `AC-LIC-05`: Info add-on `+80 chats/month per kursi` tampil di `LIC-B`.
- [ ] `AC-LIC-06`: `LIC-STRIP` tampil — fitur non-AI tidak dikunci saat kuota habis.
- [ ] `AC-LIC-07`: Dua CTA mengarah ke tujuan berbeda (trial → signup, base → demo/sales).
- [ ] `AC-LIC-08`: Tidak ada klaim `unlimited` atau `gratis selamanya`.
- [ ] `AC-LIC-09`: Kosakata `Perusahaan/Company` dan brand `Laras.ai` benar; tidak ada kata `Organization`.
- [ ] `AC-LIC-10`: Tidak ada ASCII-art / `cite: xx` / blok kode bersarang yang bocor ke UI.

## 9. Konflik & Open Questions

| # | Topik | Status / Asumsi sementara |
|---|-------|----------------------------|
| C1 | Konflik dengan `Plan.md S06` (10/20/5) | File ini (70/750 pooled, PRD §5.12) diusulkan sebagai pengganti. Jangan gabungkan kedua model. Butuh approval untuk update `Plan.md §5-§6` + `AC-S06-xx` + `T7`. |
| C2 | Varian Trial-only di website | Keputusan 2026-09-22: landing page hanya merender `LIC-A` (layout sticky-intro + quota rows, tanpa kartu Base License). Revisi menyusul: strip non-AI (`LIC-STRIP`), micro-assurance kiri (`license.trial.micro`), dan footer PDP (`LIC-FOOTER`) tidak dirender; background seksi putih; footer navy kartu diganti callout bobot format baru (lihat §4.1). Konten yang dilepas tetap berlaku sebagai referensi, tidak dihapus. |
| Q1 | Link CTA trial | Arahkan ke `/signup` atau modal signup (perlu konfirmasi). |
| Q2 | Link demo/sales | Arahkan ke `/demo` atau `/contact` (perlu konfirmasi). |
| Q3 | Copy EN final | Gunakan ID dulu + siapkan i18n keys `license.*_en`. |
| Q4 | Anchor date renewal | Tampilkan tanggal siklus perusahaan bila tersedia, fallback ke teks generik `diperbarui otomatis setiap bulan`. |

## 10. Tasks untuk Agen AI

- [ ] **L1 - Render:** implementasikan `LIC-HEADER → LIC-A + LIC-B → LIC-STRIP → LIC-FOOTER` di anchor `#free-trial`.
- [ ] **L2 - QA:** cek semua `AC-LIC-01` s.d. `AC-LIC-10` di 390px dan 1440px.
- [ ] **L3 - Sinkronisasi:** setelah approval C1, update `Plan.md` S06 + `trial.*` keys + `T7` ke model pooled 70/750.

## 11. Glosarium

- **Pooled allowance:** satu alokasi kuota bersama untuk semua jenis pemakaian AI, dikurangi berbasis bobot.
- **Anchor date:** tanggal acuan siklus bulanan perusahaan untuk renewal kuota.
- **Non-AI guarantee:** fitur non-AI tetap tersedia walau kuota AI habis.

## 12. Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 1.3.1 | 2026-09-22 | Varian website: background seksi putih, callout jadi format chat/chats, micro kiri + footer PDP dilepas dari render. |
| 1.3.0 | 2026-09-22 | Revisi footer kartu Trial: strip non-AI dilepas dari website, callout bobot pindah ke footer navy dengan format baru "Usage Weight: Text Chat (1 quota) • Draft Memo (2 quotas) • Scan Receipt (4 quotas)". Baris kuota dibuat top-aligned (ikon–angka–deskripsi). Bobot angka tidak berubah. |
| 1.2.1 | 2026-09-22 | Humanizer pass: micro ke kalimat aktif, desc seats ditulis ulang tanpa koma template. Fakta tidak berubah. |
| 1.2.0 | 2026-09-22 | Catat varian Trial-only: website hanya render `LIC-A` (layout sticky-intro + quota rows 70/2/∞ + callout bobot + strip non-AI + footer PDP). `LIC-B` tetap di spec sebagai referensi. |
| 1.1.0 | 2026-09-22 | Rewrite copy EN (clarity-first): headline spesifik angka 70 + no-expiry, hapus qualifier lemah (real/full/flexible), "anchor date" → "billing date", sub 2 kalimat. Kolom ID belum diselaraskan (pending). Angka/model tidak berubah. |
| 1.0.1 | 2026-09-22 | Anti-slop audit (Trial saja): `navy_primary` → `#0B1F33` (color lock satu halaman), radius kartu 16px (`rounded-2xl`, shape lock), hapus em-dash di copy. Angka/model tidak berubah. |
| 1.0.0 | 2026-09-22 | Restrukturisasi total agar AI-readable: frontmatter, ID stabil LIC-*, copy source-of-truth, kuota YAML, tokens YAML, AC-LIC-xx, hapus ASCII-art/cite/blok-kode bersarang. Tanpa ubah angka/model PRD (70 Trial, 750 Base, bobot 1/2/4, +80/seat). |
| 0.1.0 | - | Versi awal (narasi + plan.md campur, sulit diparsing agen). |
