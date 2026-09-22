---
title: "Plan Landing Page Laras.ai"
project: "Laras.ai"
doc_type: "landing-page-plan"
version: "2.1.0"
status: "draft"
last_updated: "2026-09-16"
language_primary: "id"
language_secondary: "en"
audience: ["ai-agent", "frontend-dev", "copywriter", "designer"]
source_file: "Plan.md"
---

# Plan Landing Page Laras.ai - Governance AI

> **TL;DR untuk Agen AI:** Bangun 1 halaman landing responsif dengan 8 seksi berurutan: `S01 Hero` → `S02 Modul` → `S03 Fitur Finance` → `S04 Cara Kerja` → `S05 Mobile & Store` → `S06 Free Trial` → `S07 CTA Final` → `S08 Footer`. Positioning: **Platform Governance AI Perusahaan**. Modul `Finance = Live`, `HR = Coming Soon`. Bahasa utama ID, switcher ID/EN. Ikuti Acceptance Criteria di tiap seksi sebelum menandai task selesai.

## 0. Cara Membaca Dokumen Ini (Untuk Agen AI)

1. **Urutan baca:** mulai dari `§1 Konteks` → `§3 Peta Struktur` → `§4 Spesifikasi Seksi` → `§10 Tasks`.
2. **ID Seksi bersifat stabil.** Gunakan selalu:
   - `S01` = Hero
   - `S02` = Modul Ekosistem
   - `S03` = Fitur Finance
   - `S04` = Cara Kerja
   - `S05` = Mobile Experience & Store Download
   - `S06` = Free Trial
   - `S07` = CTA Final
   - `S08` = Footer
3. **Copywriting final** ada di tiap seksi (`Copy ID`). Jangan parafrase headline/CTA tanpa izin. Lihat juga `§5 Source of Truth`.
4. **Status modul:**
   - `Finance Management` = `live`
   - `HR Management` = `coming-soon`
5. **Definisi selesai:** semua Acceptance Criteria (`AC-xx`) di seksi terkait terpenuhi + responsif mobile/desktop + tidak ada placeholder.

## 1. Konteks & Tujuan

### 1.1 Apa ini?

Rancangan struktur, layout, dan copywriting halaman utama (landing page) **Laras.ai**.

### 1.2 Positioning produk

- **Kategori:** Platform Governance AI Perusahaan
- **Janji utama:** Tata kelola + otomatisasi operasional kantor tanpa formulir panjang.
- **Cakupan:** Keuangan (live) → SDM (roadmap).

### 1.3 Tujuan halaman

- [ ] Pengunjung paham positioning dalam 5 detik pertama.
- [ ] Pengunjung diarahkan ke 2 konversi: `Uji Coba Gratis` dan `Jadwalkan Demo / Hubungi Sales`.
- [ ] Pengunjung tahu aplikasi mobile tersedia (App Store & Google Play) dan paham nilainya (approval cepat, tanda tangan biometrik, push real-time).
- [ ] Batas Free Trial dijelaskan transparan untuk mendorong signup.

### 1.4 Non-tujuan (jangan kerjakan)

- Dashboard aplikasi, halaman pricing detail, blog, dokumentasi API.
- Fitur fungsional HR (hanya tampilkan sebagai `Coming Soon`).

## 2. Prinsip Laras Voice

> Ramah, profesional, transparan, membantu.

Aturan untuk agen:

- Gunakan bahasa sehari-hari yang sopan, hindari jargon berat.
- Transparan soal kuota, status modul, dan alur persetujuan.
- Dwibahasa: ID utama, EN sebagai alternatif. Chat Laras mendukung keduanya.
- Pola interaksi: `Confirm-before-save` - Laras selalu konfirmasi draf sebelum menyimpan.

## 3. Peta Struktur (Information Architecture)

Urutan render halaman (top → bottom):

| ID | Seksi | Fokus | Status Konten |
|----|-------|-------|---------------|
| S01 | Hero Section | Positioning + Dual CTA + App Store micro-badges + Mockup | Final copy |
| S02 | Modul Ekosistem | Finance (Live) vs HR (Coming Soon) | Final copy |
| S03 | Deep-Dive Finance | 5 kapabilitas inti | Final copy |
| S04 | Cara Kerja | 3 langkah praktis | Final copy |
| S05 | Mobile Experience & Store Download | Nilai aplikasi mobile + store badges | Final copy |
| S06 | Free Trial | Kuota transparan | Final copy |
| S07 | CTA Final | Konversi penutup + store badges | Final copy |
| S08 | Footer | Navigasi + Legal + Store Links + Switcher ID/EN | Final copy |

Sitemap minimal:

```text
/ (landing)
  #hero (S01)
  #modul (S02)
  #fitur-finance (S03)
  #cara-kerja (S04)
  #mobile (S05)
  #free-trial (S06)
  #cta (S07)
  footer (S08)
```

---

## 4. Spesifikasi Seksi

### S01 - Hero Section (`#hero`)

**Tujuan:** Perkenalkan Laras.ai sebagai Platform Governance AI dalam 5 detik dan dorong ke registrasi trial.

**Layout:** Dual column.

- Kiri: eyebrow badges → headline → sub-headline → CTA buttons → micro-copy.
- Kanan: mockup interaktif aplikasi (web/mobile).
- Responsif: stack vertikal di mobile (teks dulu, mockup sesudah).

**Copy ID (final):**

- **Eyebrow / Status badges:**
  - `🟢 Finance Management (Live)`
  - `⏳ HR Management (Coming Soon)`
- **Headline (H1):**
  > Platform Governance AI untuk Tata Kelola & Otomatisasi Operasional Kantor
- **Sub-headline:**
  > Sederhanakan alur persetujuan, manajemen pengeluaran keuangan, dan tata kelola SDM tim Anda. Didukung asisten AI cerdas dwibahasa yang memanjakan pengguna tanpa perlu mengisikan formulir panjang.
- **Primary CTA:** `Mulai Uji Coba Gratis` (button Navy Blue)
- **Secondary CTA:** `Jadwalkan Demo Tim` (outline button)
- **Micro-copy (bawah CTA):**
  > 🔒 Tanpa kartu kredit • 📱 Tersedia di App Store & Google Play

**Komponen visual kanan:**

- Chat interface Laras menyapa pengguna (ID/EN).
- Kartu preview batch review struk dengan rincian biaya terurai.

**Acceptance Criteria:**

- [ ] `AC-S01-01`: H1 tampil exactly 1x, above the fold desktop & mobile.
- [ ] `AC-S01-02`: Dua CTA terlihat tanpa scroll di desktop.
- [ ] `AC-S01-03`: Badge Live vs Coming Soon dibedakan visual (warna + label teks, bukan warna saja).
- [ ] `AC-S01-04`: Mockup chat + kartu struk tampil, tidak pecah di 360px.
- [ ] `AC-S01-05`: Micro-badges App Store & Google Play tampil di bawah CTA primer (ikon outline + teks, bukan tombol CTA baru).

---

### S02 - Modul Ekosistem (`#modul`)

**Tujuan:** Tunjukkan cakupan ekosistem Governance AI: keuangan (live) + SDM (roadmap).

**Layout:** Side-by-side comparison cards + status badges.

**Card A - Finance Management:**

- **Status:** `🟢 Available Now` / `live`
- **Deskripsi:** Otomatisasi administrasi & pengeluaran keuangan kantor berbasis AI.
- **Fitur list:**
  - Pindai Struk & Faktur (Batch Upload max 5)
  - Pembuatan Memo Keuangan Instan
  - Approval Bertingkat & Tanda Tangan Digital HP
  - Laporan Pengeluaran Berbasis Chat

**Card B - HR Management:**

- **Status:** `⏳ Coming Soon` / `coming-soon`
- **Deskripsi:** Tata kelola SDM & operasional karyawan yang praktis berbasis chat.
- **Fitur list:**
  - Pengajuan Cuti & Izin Kerja via Chat
  - Tanya-Jawab Kebijakan HR (HR Policy)
  - Asisten Onboarding Karyawan Baru
  - Persetujuan & Dokumen SDM Otomatis

**Copy penjelas (di bawah/bawah cards):**

> Laras.ai hadir sebagai konsultan senior AI yang menjaga kepatuhan, transparansi, dan efisiensi operasional perusahaan Anda - dimulai dari tata kelola keuangan hingga manajemen SDM.

**Acceptance Criteria:**

- [ ] `AC-S02-01`: Dua kartu berdampingan di desktop, stack di mobile.
- [ ] `AC-S02-02`: Card HR jelas berlabel Coming Soon + CTA dinonaktifkan atau jadi `Notify Me` (jangan fake-active).
- [ ] `AC-S02-03`: Copy penjelas tampil persis, max 3 baris di desktop.

---

### S03 - Deep-Dive Finance (`#fitur-finance`)

**Tujuan:** Jelaskan 5 pilar fitur Finance yang sudah live.

**Layout:** Grid cards `3 + 2` (desktop), 1 kolom (mobile). Tiap card: ikon + judul + deskripsi.

**Fitur:**

1. **🤖 Asisten Chat Dwibahasa (Bilingual Governance Chat)**
   > Berkomunikasi secara alami dalam Bahasa Indonesia atau English. Cukup obrolkan kebutuhan operasional Anda; Laras yang akan mengumpulkan informasi, menanyakan rincian yang kurang, dan mencatatnya secara akurat.

2. **📄 Pindai & Ekstrak Struk/Faktur Otomatis (Document Intelligence)**
   > Unggah foto atau berkas kwitansi, struk, hingga faktur (format JPG, PNG, PDF) hingga 5 dokumen sekaligus (Batch Upload). Laras mendeteksi nama vendor, tanggal, kategori, dan total biaya secara instan.

3. **📝 Pembuatan Memo Keuangan Instan (Smart Expense Memos)**
   > Buat draf memo Reimbursement, Pembayaran Tagihan, Pengajuan Anggaran, Uang Muka (Cash Advance), hingga LPJ tanpa formulir rumit. Laras mempelajari format memo khas perusahaan Anda dan menyajikan smart defaults.

4. **✅ Persetujuan Bertingkat di HP (Mobile Approvals & 2FA)**
   > Keputusan persetujuan (Approve/Reject) berada di genggaman manajer melalui aplikasi mobile sebagai pengamanan 2FA. Dilengkapi alur bertingkat hingga 3 level sequential, tanda tangan digital, dan fitur Return-for-Review.

5. **📊 Laporan Chat & Jejak Audit (Chat-First Reporting)**
   > Tanyakan ringkasan pengeluaran langsung di chat (misal: "Ringkas memo bulan ini per divisi sales"). Dapatkan ringkasan instan yang siap diunduh atau dibagikan ke format PDF dan WhatsApp.

**Acceptance Criteria:**

- [ ] `AC-S03-01`: Tepat 5 cards, judul + deskripsi sesuai copy di atas.
- [ ] `AC-S03-02`: Grid tidak orphan aneh di tablet (gunakan 2+2+1 atau 3+2 rapi).
- [ ] `AC-S03-03`: Format file `JPG, PNG, PDF` dan angka `5 dokumen` / `3 level` akurat, tidak diubah.

---

### S04 - Cara Kerja (`#cara-kerja`)

**Tujuan:** Tunjukkan adopsi cepat dalam 3 langkah.

**Layout:** 3-step horizontal workflow (desktop), vertikal dengan konektor (mobile).

**Langkah:**

| Step | Judul | Deskripsi |
|------|-------|-----------|
| 1 | Pindai / Chat | Foto struk atau chat Laras: unggah berkas kwitansi/struk atau obrolkan pengeluaran Anda dalam bahasa sehari-hari. |
| 2 | Draf & Konfirmasi | Konfirmasi rincian: Laras menyusun draf memo yang rapi dan mengonfirmasi rincian penting sebelum disimpan (Confirm-before-save). |
| 3 | Approve & Ekspor | Persetujuan & ekspor: manajer menyetujui klaim di aplikasi mobile (2FA), dan laporan siap diekspor ke format PDF atau WhatsApp. |

Diagram logika (jangan render sebagai ASCII art di UI):

```text
[1. Pindai / Chat] → [2. Draf & Konfirmasi] → [3. Approve & Ekspor]
```

**Acceptance Criteria:**

- [ ] `AC-S04-01`: 3 langkah berurutan dengan nomor jelas.
- [ ] `AC-S04-02`: Frasa `Confirm-before-save`, `2FA`, `PDF`, `WhatsApp` muncul persis.
- [ ] `AC-S04-03`: Alur terbaca di mobile tanpa scroll horizontal.

---

### S05 - Mobile Experience & Store Download (`#mobile`)

**Tujuan:** Jelaskan mengapa pengguna perlu mengunduh aplikasi mobile (persetujuan klaim cepat, tanda tangan biometrik, push notifikasi real-time berada di HP).

**Layout:** Side-by-side 2 kolom (desktop), stack vertikal di mobile (mockup di atas, konten di bawah).

| Kolom | Isi |
|-------|-----|
| Kiri: Mockup HP | Visual layar persetujuan mobile (UI Approve / Reject) dengan indikator tanda tangan digital & biometrik |
| Kanan: Konten | Eyebrow + headline + sub-headline + 3 poin highlight + store badges CTA |

**Copy ID (final):**

- **Eyebrow:**
  > 📱 Unduh Aplikasi Mobile Laras.ai
- **Headline (H2):**
  > Setujui Klaim & Pantau Pengeluaran Langsung dari HP Anda
- **Sub-headline (Laras Voice):**
  > Manajer dapat meninjau rincian biaya, memberikan catatan, serta membubuhkan tanda tangan digital secara cepat dan aman di mana pun berada.
- **Poin highlight:**
  1. 🔔 **Notifikasi Push Instant:** Dapatkan pemberitahuan langsung saat ada pengajuan memo yang membutuhkan persetujuan.
  2. 🔐 **Persetujuan Aman (Mobile 2FA):** Keputusan persetujuan terlindungi keamanan biometrik (sidik jari / pengenalan wajah) ponsel Anda.
  3. 📝 **Tanda Tangan Digital:** Tambahkan tanda tangan basah hasil usapan layar atau unggahan galeri dengan mudah.
- **Store badges CTA:**
  > [ Download on the App Store ] [ GET IT ON Google Play ]

**Acceptance Criteria:**

- [ ] `AC-S05-01`: seksi ter-render di `#mobile` di antara `#cara-kerja` dan `#free-trial`.
- [ ] `AC-S05-02`: layout side-by-side di desktop, stack di mobile (mockup di atas, konten di bawah).
- [ ] `AC-S05-03`: tepat 3 poin highlight dengan copy persis seperti di atas.
- [ ] `AC-S05-04`: kedua store badges tampil sebagai badge resmi, mengarah ke URL store masing-masing (bukan tombol teks polos / link `#`).
- [ ] `AC-S05-05`: tidak memakai H1 (gunakan H2).

---

### S06 - Free Trial (`#free-trial`)

**Tujuan:** Jelaskan kuota trial transparan agar pengguna langsung daftar.

**Layout:** Centered card box + quota breakdown + CTA.

**Kuota (final, jangan ubah angka):**

| Ikon | Kuota | Keterangan |
|------|-------|------------|
| 📄 | 10 Upload Dokumen | Pindai struk & faktur otomatis |
| 🤖 | 20 Chat dengan Laras | Obrolan keuangan dwibahasa |
| 📝 | 5 Generate Memo Keuangan | Draf reimbursement, uang muka & LPJ |

**Callout:**

> Rasakan sendiri kemudahan mengelola keuangan kantor bersama konsultan AI pribadi Anda.

**CTA:** `Coba Free Trial Sekarang →`

**Acceptance Criteria:**

- [ ] `AC-S06-01`: Angka 10 / 20 / 5 tampil menonjol dan tidak bisa diedit user.
- [ ] `AC-S06-02`: Satu CTA primer ke alur signup trial.
- [ ] `AC-S06-03`: Tidak ada klaim "unlimited" atau "gratis selamanya".

---

### S07 - CTA Final (`#cta`)

**Tujuan:** Konversi penutup sebelum footer.

**Style:** Container Dark Navy Blue + aksen Sage Green. Kontras teks ≥ 4.5:1.

**Copy ID:**

- **Headline (H2):**
  > Siap Memajukan Tata Kelola & Operasional Kantor Anda bersama Governance AI?
- **Sub-headline:**
  > Mulai dengan Finance Management hari ini dan bersiaplah menyambut modul HR Management untuk efisiensi tim yang menyeluruh.
- **Buttons:**
  - Primary: `Mulai Uji Coba Gratis`
  - Secondary: `Hubungi Tim Sales` (outline)
- **Store badges (sekunder):** Official Store Badges (App Store + Google Play) di samping tombol utama pendaftaran web. Jalur web tetap primer dan dominan secara visual.

**Acceptance Criteria:**

- [ ] `AC-S07-01`: Section full-width dengan background navy, teks terbaca.
- [ ] `AC-S07-02`: Dua button mengarah ke tujuan berbeda (trial vs sales/contact).
- [ ] `AC-S07-03`: Tidak duplikat H1 (gunakan H2).
- [ ] `AC-S07-04`: Store badges tampil sekunder (tidak berebut perhatian dengan CTA primer) dan mengarah ke URL store resmi.

---

### S08 - Footer (`footer`)

**Tujuan:** Navigasi, legal, store links, dan switcher bahasa.

**Layout:** 4 kolom + bottom legal bar.

| Kolom | Isi |
|-------|-----|
| 1. Branding | Logo Laras.ai + deskripsi singkat Platform Governance AI Perusahaan |
| 2. Modul | Finance Management (Live), HR Management (Coming Soon) |
| 3. Fitur Keuangan | Pindai Struk, Smart Memos, Mobile Approval, Chat Reporting |
| 4. Perusahaan & Bantuan | Tentang Kami, Panduan Pengguna, Hubungi Sales |

**Store links:** Official Store Badges (App Store + Google Play) di Footer.

**Bottom bar:**

- `Copyright © 2026 Laras.ai. All rights reserved.`
- `Language Switcher: 🌐 Bahasa Indonesia (ID) | English (EN)`

**Acceptance Criteria:**

- [ ] `AC-S08-01`: 4 kolom di desktop, collapse accordion/stack di mobile.
- [ ] `AC-S08-02`: Switcher ID/EN berfungsi (minimal ganti `lang` attribute + copy kunci, atau link `/id` vs `/en`).
- [ ] `AC-S08-03`: Tahun copyright `2026` dan teks legal persis.
- [ ] `AC-S08-04`: Store links mengarah ke URL store resmi (bukan `#` / placeholder).

---

## 5. Copywriting Source of Truth

Tabel ini adalah acuan copy. Jika ada konflik dengan mockup/Figma, tabel ini yang menang kecuali ada instruksi baru.

| Key | ID (tampil) | Lokasi |
|-----|-------------|--------|
| `hero.h1` | Platform Governance AI untuk Tata Kelola & Otomatisasi Operasional Kantor | S01 |
| `hero.sub` | Sederhanakan alur persetujuan, manajemen pengeluaran keuangan, dan tata kelola SDM tim Anda... | S01 |
| `hero.cta_primary` | Mulai Uji Coba Gratis | S01, S07 |
| `hero.cta_secondary` | Jadwalkan Demo Tim | S01 |
| `hero.store_micro` | 🔒 Tanpa kartu kredit • 📱 Tersedia di App Store & Google Play | S01 |
| `modules.explainer` | Laras.ai hadir sebagai konsultan senior AI... | S02 |
| `mobile.eyebrow` | 📱 Unduh Aplikasi Mobile Laras.ai | S05 |
| `mobile.h2` | Setujui Klaim & Pantau Pengeluaran Langsung dari HP Anda | S05 |
| `mobile.sub` | Manajer dapat meninjau rincian biaya, memberikan catatan, serta membubuhkan tanda tangan digital secara cepat dan aman di mana pun berada. | S05 |
| `mobile.point_push` | 🔔 Notifikasi Push Instant: Dapatkan pemberitahuan langsung saat ada pengajuan memo yang membutuhkan persetujuan. | S05 |
| `mobile.point_2fa` | 🔐 Persetujuan Aman (Mobile 2FA): Keputusan persetujuan terlindungi keamanan biometrik (sidik jari / pengenalan wajah) ponsel Anda. | S05 |
| `mobile.point_sign` | 📝 Tanda Tangan Digital: Tambahkan tanda tangan basah hasil usapan layar atau unggahan galeri dengan mudah. | S05 |
| `mobile.badges` | [ Download on the App Store ] [ GET IT ON Google Play ] | S05, S07, S08 |
| `trial.quota_docs` | 10 Upload Dokumen | S06 |
| `trial.quota_chats` | 20 Chat dengan Laras | S06 |
| `trial.quota_memos` | 5 Generate Memo Keuangan | S06 |
| `trial.cta` | Coba Free Trial Sekarang → | S06 |
| `cta_final.h2` | Siap Memajukan Tata Kelola & Operasional Kantor Anda bersama Governance AI? | S07 |
| `footer.legal` | Copyright © 2026 Laras.ai. All rights reserved. | S08 |

> Catatan EN: siapkan kunci i18n paralel (`hero.h1_en`, dst). Isi EN menyusul; jangan auto-translate headline tanpa review.

## 6. Batasan Free Trial (Jangan Diubah Tanpa Approval)

```yaml
free_trial:
  documents_upload: 10
  chats_with_laras: 20
  memo_generations: 5
  credit_card_required: false
  notes:
    - "Format upload: JPG, PNG, PDF"
    - "Batch upload max: 5 dokumen sekaligus"
```

## 7. Panduan Desain & Aksesibilitas

### 7.1 Tokens (saran awal, boleh disesuaikan sistem yang ada)

```yaml
colors:
  navy_primary: "#0A1B2E"   # CTA primer / CTA final bg
  sage_accent: "#8FBF9F"    # aksen CTA final
  background: "#FFFFFF"
  text_primary: "#101828"
  text_muted: "#475467"
  success_live: "#16A34A"
  warning_soon: "#D97706"
radius: 12
spacing_section: 96  # desktop, 64 mobile
```

### 7.2 Aturan UI

- Satu H1 per halaman (S01). Seksi lain pakai H2.
- Badge status selalu teks + ikon, jangan warna saja.
- Semua CTA harus focus-visible dan min touch target 44px.
- Gambar mockup wajib `alt` deskriptif.
- Store badges wajib official badge (App Store + Google Play) dengan `alt` deskriptif; jangan badge tiruan dari teks polos. Badge store tidak boleh mengarah ke `#` / placeholder tanpa label.

### 7.3 SEO & A11y checklist

- [ ] Title: `Laras.ai - Platform Governance AI untuk Kantor Modern`
- [ ] Meta description ID 150-160 karakter.
- [ ] Semantic landmarks: `header`, `main`, `section`, `footer`.
- [ ] Kontras ≥ 4.5:1 untuk body text.
- [ ] Keyboard navigable untuk semua CTA/cards.

## 8. Multibahasa (ID/EN)

- Default: `id`.
- Switcher: `🌐 Bahasa Indonesia (ID) | English (EN)`.
- Strategi: kunci i18n per `§5`. Jangan hardcode string campuran ID/EN di komponen.
- Chat mockup boleh tampilkan contoh dwibahasa (1 bubble ID + 1 bubble EN).

## 9. Tasks untuk Agen AI (Eksekusi Berurutan)

- [ ] **T1 - Scaffold:** buat struktur `/` dengan anchor `#hero #modul #fitur-finance #cara-kerja #mobile #free-trial #cta` + footer.
- [ ] **T2 - S01 Hero:** implementasi dual-column + badges + dual CTA + micro-copy + mockup chat.
- [ ] **T3 - S02 Modul:** dua comparison cards + explainer copy.
- [ ] **T4 - S03 Fitur:** grid 5 cards sesuai copy final.
- [ ] **T5 - S04 Cara Kerja:** 3-step workflow responsif.
- [ ] **T6 - S05 Mobile:** side-by-side mockup HP + konten + 3 poin + 2 store badges.
- [ ] **T7 - S06 Trial:** centered card kuota 10/20/5 + CTA.
- [ ] **T8 - S07 CTA Final:** navy container + 2 buttons + store badges sekunder.
- [ ] **T9 - S08 Footer:** 4 kolom + legal bar + switcher ID/EN + store links.
- [ ] **T10 - QA:** cek semua `AC-Sxx-xx`, mobile 360px, desktop 1280px, Lighthouse + a11y.
- [ ] **T11 - Update dokumen:** naikkan `version` di frontmatter + isi `Changelog`.

## 10. Asumsi & Open Questions

| # | Topik | Asumsi sementara |
|---|-------|------------------|
| Q1 | Link CTA trial | Arahkan ke `/signup` atau modal signup (perlu konfirmasi) |
| Q2 | Link demo/sales | Arahkan ke `/demo` atau `/contact` (perlu konfirmasi) |
| Q3 | Copy EN final | Belum ada; gunakan ID dulu + siapkan i18n keys |
| Q4 | Aset logo/mockup | Gunakan placeholder berlabel jika aset final belum ada |
| Q5 | URL App Store | Belum ada; badge tampil berlabel jelas sampai URL resmi tersedia |
| Q6 | URL Google Play | Sama seperti Q5 |
| Q7 | Aset mockup HP S05 | Gunakan placeholder berlabel jika screenshot aplikasi final belum ada |

## 11. Glosarium

- **Governance AI:** AI yang menjaga kepatuhan, transparansi, efisiensi operasional.
- **Confirm-before-save:** Laras konfirmasi draf sebelum menyimpan.
- **Return-for-Review:** pengaju dapat mengembalikan memo untuk revisi.
- **LPJ:** Laporan Pertanggungjawaban.
- **2FA:** autentikasi 2 faktor via aplikasi mobile untuk approval.

## 12. Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 2.1.0 | 2026-09-16 | Adopsi touchpoint App Store & Play dari `Update version structur.md` v1.0.0: seksi baru `S05 Mobile Experience & Store Download` (`#mobile`), micro-badges store di `S01`, store badges di `S07` + `S08`; penomoran menjadi `S01–S08` (Trial→`S06`, CTA→`S07`, Footer→`S08`). Tanpa ubah copy/angka final lain. |
| 2.0.0 | 2026-09-15 | Restrukturisasi total agar AI-readable: frontmatter, ID seksi stabil S01-S07, AC per seksi, source-of-truth copy, tasks, tokens, i18n. Tanpa ubah copy/angka final. |
| 1.0.0 | - | Versi awal (layout + copy mentah, sulit diparsing agen). |
