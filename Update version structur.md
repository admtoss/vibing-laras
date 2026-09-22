---
title: "Update Struktur Landing Page Laras.ai - Touchpoint App Store & Play Store"
project: "Laras.ai"
doc_type: "landing-page-structure-update"
version: "1.1.0"
status: "approved"
last_updated: "2026-09-16"
language_primary: "id"
audience: ["ai-agent", "frontend-dev", "copywriter", "designer"]
related_file: "Plan.md"
---

# Update Struktur Landing Page Laras.ai — Touchpoint App Store & Play Store

> **TL;DR untuk Agen AI:** Tambahkan 3 touchpoint unduhan aplikasi mobile ke landing page: `T01` micro-badges di Hero (`S01`), `T02` seksi baru Mobile Experience Showcase (`S05`), `T03` store badges di CTA Final (`S07`) + Footer (`S08`). Penomoran seksi berubah `S01–S08` (lihat tabel migrasi di `§2`). Copy final ada di `§4`, jangan parafrase. Status: `approved` dan sudah diadopsi ke `Plan.md` v2.1.0; acuan ID seksi yang berlaku adalah `Plan.md`.

## 0. Cara Membaca Dokumen Ini (Untuk Agen AI)

1. **Urutan baca:** mulai dari `§1 Konteks` → `§2 Peta Struktur` → `§3 Spesifikasi Touchpoint` → `§4 Source of Truth` → `§6 Tasks`.
2. **ID touchpoint bersifat stabil.** Gunakan selalu:
   - `T01` = Micro-badges Hero
   - `T02` = Mobile Experience Showcase
   - `T03` = Store badges CTA Final + Footer
3. **ID seksi mengikuti skema baru `S01–S08`.** Tabel migrasi dari ID lama (`Plan.md` v2.0.0, `S01–S07`) ada di `§2.1`. Selalu rujuk ID baru saat mengerjakan dokumen ini.
4. **Copywriting final** ada di `§4` (`Copy ID`). Jangan parafrase headline/CTA/poin highlight tanpa izin.
5. **Definisi selesai:** semua Acceptance Criteria (`AC-Txx-xx`, `AC-Sxx-xx`) terpenuhi + responsif mobile/desktop + tidak ada placeholder + badge store resmi (bukan teks polos).

## 1. Konteks & Tujuan

### 1.1 Apa ini?

Usulan penambahan 3 titik penempatan (touchpoint) tautan unduhan App Store & Google Play di landing page **Laras.ai**.

### 1.2 Alasan (mengapa perlu seksi mobile khusus)

Fitur bernilai tinggi Laras.ai berada di HP: persetujuan klaim cepat, tanda tangan biometrik, dan push notifikasi real-time. Pengguna harus paham mengapa mereka perlu mengunduh aplikasi mobile, bukan hanya mendaftar via web.

### 1.3 Tujuan

- [ ] Pengunjung tahu aplikasi mobile tersedia sejak Hero (`T01`).
- [ ] Pengunjung paham nilai aplikasi mobile sebelum CTA penutup (`T02`).
- [ ] Jalur konversi web (trial/demo) dan jalur unduhan mobile tampil berdampingan tanpa berebut (`T03`).

### 1.4 Non-tujuan (jangan kerjakan)

- Mendesain ulang isi layar aplikasi mobile (cukup mockup layar Approval/Notification sebagai visual).
- Mengubah kuota Free Trial, status modul (`Finance = live`, `HR = coming-soon`), atau copy di luar `§4`.
- Menerbitkan aplikasi ke store (dokumen ini hanya soal landing page).

### 1.5 Status implementasi di kode (per 2026-09-16)

- `T01`: belum ada. Micro-copy Hero saat ini hanya `Tanpa kartu kredit • Bahasa Indonesia dan English`.
- `T02`: belum ada. Tidak ada seksi `#mobile` di halaman.
- `T03`: belum ada. CTA Final dan Footer belum menampilkan store badges.

## 2. Peta Struktur Baru (Information Architecture)

### 2.1 Migrasi ID seksi (lama → baru)

| ID lama (`Plan.md` v2.0.0) | ID baru (dokumen ini) | Seksi |
|----------------------------|-----------------------|-------|
| `S01` | `S01` | Hero Section |
| `S02` | `S02` | Modul Ekosistem (peran: Karyawan / Manajer / Finance) |
| `S03` | `S03` | Deep-Dive Finance |
| `S04` | `S04` | Cara Kerja |
| — (baru) | `S05` | Mobile Experience & Store Download |
| `S05` | `S06` | Free Trial |
| `S06` | `S07` | CTA Final |
| `S07` | `S08` | Footer |

> Setelah proposal ini diterima, `Plan.md` wajib dinaikkan versinya dan mengadopsi ID `S01–S08` ini.

### 2.2 Urutan render halaman (top → bottom)

| ID baru | Seksi | Fokus | Status Konten |
|---------|-------|-------|---------------|
| `S01` | Hero Section | Positioning + Dual CTA + App Store micro-badges (`T01`) | Copy final (`§4`) |
| `S02` | Modul Ekosistem | Story berbasis peran (tidak berubah) | Tidak berubah |
| `S03` | Deep-Dive Finance | 5 kapabilitas inti (tidak berubah) | Tidak berubah |
| `S04` | Cara Kerja | 3 langkah praktis (tidak berubah) | Tidak berubah |
| `S05` | Mobile Experience & Store Download | Nilai aplikasi mobile + store badges (`T02`) | Copy final (`§4`) |
| `S06` | Free Trial | Kuota transparan (tidak berubah) | Tidak berubah |
| `S07` | CTA Final | Konversi penutup + store badges (`T03`) | Copy final (`§4`) |
| `S08` | Footer | Navigasi + Legal + Store Links + Switcher ID/EN (`T03`) | Copy final (`§4`) |

### 2.3 Sitemap / anchor

```text
/ (landing)
  #hero (S01)
  #modul (S02)
  #fitur-finance (S03)
  #cara-kerja (S04)
  #mobile (S05, baru)
  #free-trial (S06)
  #cta (S07)
  footer (S08)
```

---

## 3. Spesifikasi Touchpoint

### T01 — Micro-badges Hero (`S01`)

**Penempatan:** tepat di bawah tombol utama `Mulai Uji Coba Gratis`.

**Visual:** ikon Apple & Android tipis (outline) + teks mikro satu baris.

**Copy (final):**

> 🔒 Tanpa kartu kredit • 📱 Tersedia di App Store & Google Play

**Acceptance Criteria:**

- [ ] `AC-T01-01`: micro-badges tampil di bawah CTA primer tanpa scroll di desktop.
- [ ] `AC-T01-02`: ikon Apple & Android berupa glyph outline, bukan emoji foto; teks `App Store` / `Google Play` terbaca.
- [ ] `AC-T01-03`: tidak menambah tombol CTA baru di Hero (tetap 1 primer + 1 sekunder).

---

### T02 — Mobile Experience Showcase (`S05`, seksi baru sebelum Free Trial)

**Tujuan:** menjelaskan mengapa pengguna perlu mengunduh aplikasi mobile (persetujuan klaim cepat, tanda tangan biometrik, push notifikasi real-time berada di HP).

**Layout:** side-by-side 2 kolom (desktop), stack vertikal (mobile, mockup dulu).

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
- [ ] `AC-S05-04`: kedua store badges tampil sebagai badge resmi (gambar/badge resmi store), mengarah ke URL store masing-masing, bukan tombol teks polos.
- [ ] `AC-S05-05`: tidak memakai H1 (gunakan H2).

---

### T03 — Store badges CTA Final (`S07`) + Footer (`S08`)

**Penempatan:**

1. Di dalam container CTA penutup (`S07`), di samping tombol utama pendaftaran web (jalur web tetap primer, store badges sekunder).
2. Di kolom Footer (`S08`) sebagai store links.

**Elemen:** Official Store Badges (App Store + Google Play).

**Acceptance Criteria:**

- [ ] `AC-T03-01`: CTA primer web (`Mulai Uji Coba Gratis`) tetap dominan secara visual; store badges berukuran sekunder dan tidak berebut perhatian.
- [ ] `AC-T03-02`: Footer memuat store links + 4 kolom navigasi + legal bar + switcher ID/EN yang sudah ada (tidak menghapus yang sudah ada).
- [ ] `AC-T03-03`: semua badge/link store mengarah ke URL store resmi (bukan `#` / placeholder).

---

## 4. Copywriting Source of Truth

Acuan copy untuk dokumen ini. Jika konflik dengan mockup/Figma, tabel ini yang menang kecuali ada instruksi baru.

| Key | ID (tampil) | Lokasi |
|-----|-------------|--------|
| `hero.store_micro` | 🔒 Tanpa kartu kredit • 📱 Tersedia di App Store & Google Play | S01 (`T01`) |
| `mobile.eyebrow` | 📱 Unduh Aplikasi Mobile Laras.ai | S05 (`T02`) |
| `mobile.h2` | Setujui Klaim & Pantau Pengeluaran Langsung dari HP Anda | S05 (`T02`) |
| `mobile.sub` | Manajer dapat meninjau rincian biaya, memberikan catatan, serta membubuhkan tanda tangan digital secara cepat dan aman di mana pun berada. | S05 (`T02`) |
| `mobile.point_push` | 🔔 Notifikasi Push Instant: Dapatkan pemberitahuan langsung saat ada pengajuan memo yang membutuhkan persetujuan. | S05 (`T02`) |
| `mobile.point_2fa` | 🔐 Persetujuan Aman (Mobile 2FA): Keputusan persetujuan terlindungi keamanan biometrik (sidik jari / pengenalan wajah) ponsel Anda. | S05 (`T02`) |
| `mobile.point_sign` | 📝 Tanda Tangan Digital: Tambahkan tanda tangan basah hasil usapan layar atau unggahan galeri dengan mudah. | S05 (`T02`) |
| `mobile.badges` | [ Download on the App Store ] [ GET IT ON Google Play ] | S05 (`T02`), S07 + S08 (`T03`) |

> Copy di luar tabel ini (Hero H1, modul peran, fitur finance, cara kerja, kuota trial, CTA final, footer) tetap mengacu ke `Plan.md` dan tidak diubah dokumen ini.

## 5. Aturan Aset & Aksesibilitas

- Gunakan **official store badges** (App Store + Google Play) sesuai brand guideline masing-masing store; jangan membuat badge tiruan dari teks + ikon generik.
- Setiap badge wajib `alt` deskriptif (misal: `Unduh di App Store`, `Dapatkan di Google Play`).
- Min touch target 44px untuk semua badge/link CTA.
- Mockup HP `S05` adalah visual pendukung (layar Approval/Notification); bukan janji tampilan 1:1 aplikasi final.
- Satu H1 per halaman tetap di `S01`. Seksi baru memakai H2.

## 6. Tasks untuk Agen AI (Eksekusi Berurutan)

- [ ] **T1 - `T01` Hero:** tambahkan micro-badges App Store & Play di bawah CTA primer (`AC-T01-01` s.d. `AC-T01-03`).
- [ ] **T2 - `T02` Seksi `#mobile`:** bangun `S05` side-by-side + copy `§4` + 3 poin + 2 store badges (`AC-S05-01` s.d. `AC-S05-05`).
- [ ] **T3 - `T03` CTA + Footer:** tambahkan store badges sekunder di `S07` + store links di `S08` (`AC-T03-01` s.d. `AC-T03-03`).
- [ ] **T4 - Navigasi:** tambahkan link `#mobile` ke nav (desktop + mobile) tanpa merusak tata satu-baris desktop.
- [ ] **T5 - QA:** cek semua AC dokumen ini, mobile 360px, desktop 1280px, tidak ada link `#` placeholder di badge store.
- [ ] **T6 - Sinkron dokumen:** adopsi ID `S01–S08` ke `Plan.md`, naikkan `version` frontmatter kedua file, isi Changelog.

## 7. Asumsi & Open Questions

| # | Topik | Asumsi sementara |
|---|-------|------------------|
| Q1 | URL App Store | Belum ada; pakai placeholder berlabel jelas sampai URL resmi tersedia (jangan tampilkan badge mati tanpa label) |
| Q2 | URL Google Play | Sama seperti Q1 |
| Q3 | Aset mockup HP | Gunakan placeholder berlabel jika screenshot aplikasi final belum ada |
| Q4 | Copy EN | Belum ada; gunakan ID dulu + siapkan i18n keys (`mobile.h2_en`, dst) |

## 8. Changelog

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| 1.1.0 | 2026-09-16 | Disetujui dan diadopsi ke `Plan.md` v2.1.0. Acuan ID seksi yang berlaku adalah `Plan.md`. |
| 1.0.0 | 2026-09-16 | Restrukturisasi total agar AI-readable: frontmatter, ID touchpoint stabil T01–T03, tabel migrasi ID seksi S01–S08, copy source-of-truth, AC per touchpoint, tasks, open questions. Tanpa ubah copy/angka final. |
