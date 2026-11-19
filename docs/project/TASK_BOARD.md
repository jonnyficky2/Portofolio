# 📌 Portfolio — TASK BOARD

Dokumen ini adalah papan kendali operasional untuk pengembangan Portfolio Website (`github.com/jonnyficky2/Portofolio`).

---

## 📊 Overall Progress: 79% (11/14 Tasks)

## 🕒 Progress Log (Bukti)

| Minggu | Total Jam | Fokus Task | Bukti (commit/PR) | Catatan |
|---|---:|---|---|---|
| 2026-11-18..2026-11-24 | 2:00 | TASK-P12, TASK-P10, TASK-P09, TASK-P07, TASK-P06, TASK-P03 | [6ce7ca2](https://github.com/jonnyficky2/Portofolio/commit/6ce7ca20aeffa41cb6f8076c8d877f90008ac925), [8c492fe](https://github.com/jonnyficky2/Portofolio/commit/8c492fe8c810b9688debb10bc8764b5701996815), [367616b](https://github.com/jonnyficky2/Portofolio/commit/367616be6b20eb354d001bcc4f89e9531109e8ea), [3effb9a](https://github.com/jonnyficky2/Portofolio/commit/3effb9a738ffbd649a2e11c95efd68ed15e05799), [13cf0cc](https://github.com/jonnyficky2/Portofolio/commit/13cf0ccfb9c107609a6cbce4fb3dbdcaa12dfd5c), [b3ee413](https://github.com/jonnyficky2/Portofolio/commit/b3ee4133ea3694e6a3949312965e73e04a4dc31d) | Perkembangan: OG/Twitter + CV download + Journey + Skills + Avatar path + Favicon task board. Konsistensi GitHub: 6 commit, aktif 1 hari (2026-11-18). |

---

## MP - Portfolio Website
*(Review & Improvement — github.com/jonnyficky2/Portofolio)*

> Status MP: `IN_PROGRESS`. Task berikut berasal dari audit portofolio 2026-11-18. Task bertanda 🔴 High Priority harus diselesaikan terlebih dahulu sebelum item lainnya.
> Review lengkap: [portfolio-review.md](../../../Portofolio/../../../.gemini/antigravity/brain/73ae1118-a2f3-423c-9826-6ffe61ddabce/portfolio-review.md)

---

### [TASK-P01] Aktifkan atau Hapus Framer Motion
- **Description:** `framer-motion` terpasang di `package.json` dan menambah ~120KB ke bundle size, tetapi tidak diimport di satupun komponen. Pilih salah satu: (A) Implementasikan animasi `fadeInUp` / `whileInView` di tiap section, atau (B) hapus dependensi dari `package.json` dan jalankan `npm install` ulang.
- **Priority:** High 🔴
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Tidak ada dependensi yang terpasang tapi tidak dipakai; build PASS; bundle size tidak naik tanpa alasan. ✅
- **Progress:** 100%
- **Related Docs:** `src/components/ui/Motion.tsx`, `package.json`
- **Notes:** Opsi A diimplementasikan penuh. Komponen `Motion.tsx` menyediakan `FadeIn`, `StaggerContainer`, dan `StaggerItem` yang digunakan di seluruh section.

### [TASK-P02] Isi techStack LifeFlow di portfolioData
- **Description:** `techStack: []` pada entri LifeFlow di `portfolioData.ts` kosong sehingga badge teknologi tidak tampil di kartu proyek unggulan. Isi dengan stack nyata yang dipakai.
- **Priority:** High 🔴
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Kartu LifeFlow di section Projects menampilkan badge `React`, `TypeScript`, `Vite`, `Tailwind CSS`, `PWA`, dan `Firebase`. ✅
- **Progress:** 100%
- **Related Docs:** `src/data/portfolioData.ts` line 34

### [TASK-P03] Tambahkan Foto Profil / Avatar
- **Description:** Tidak ada foto profil di manapun. Tambahkan gambar profil di section About (card kiri) dan opsional di Hero sebagai avatar bulat di sebelah nama.
- **Priority:** High 🔴
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Foto profil tampil di section About; fallback ke inisial "JF" jika file tidak tersedia; gambar responsif dan tidak stretch. ✅
- **Progress:** 100%
- **Related Docs:** `src/components/sections/About.tsx`, `src/components/sections/Hero.tsx`, `src/components/ui/Avatar.tsx`
- **Notes:** File dipindahkan ke `public/profil.jpeg`. Ditambahkan komponen `Avatar` dengan glow ring dan fallback inisial `JF`.

### [TASK-P04] Perbaiki Deskripsi Semua Proyek
- **Description:** Deskripsi proyek-proyek selain LifeFlow sangat singkat atau generic (`unverifiedProjectDetails`). Tulis deskripsi yang bermakna untuk setiap proyek meski status belum verified, berdasarkan nama repo dan tech stack.
- **Priority:** High 🔴
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Setiap entri di `projectsData` memiliki deskripsi unik minimal 1 kalimat yang menjelaskan fungsi proyek (bukan copy-paste disclaimer). `POS` tidak lagi hanya bertuliskan `"Point Of Sale."` (3 kata). ✅
- **Progress:** 100%
- **Related Docs:** `src/data/portfolioData.ts`

### [TASK-P05] Konsistensi Bahasa (Pilih Satu)
- **Description:** Konten portofolio campur aduk antara Bahasa Indonesia dan Inggris secara tidak konsisten. Pilih satu bahasa lalu terapkan ke seluruh teks: badge, subtitle section, deskripsi proyek, tagline, `bioIntro`, dan footer.
- **Priority:** High 🔴
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Seluruh teks UI menggunakan satu bahasa yang sama (rekomendasi: Inggris, karena audience portofolio bisa internasional); tidak ada campuran paragraph Indonesia di tengah UI berbahasa Inggris. ✅ Bahasa yang dipilih: **English**
- **Progress:** 100%
- **Related Docs:** `src/data/portfolioData.ts`, semua komponen di `src/components/sections/`

### [TASK-P06] Perluas Section Skills
- **Description:** Section Skills saat ini hanya menampilkan tools portofolio dan bahasa repo GitHub. Tambahkan kategori skill nyata yang dikuasai sebagai mahasiswa SI.
- **Priority:** Medium 🟡
- **Status:** DONE ✅
- **Dependencies:** TASK-P05
- **Acceptance Criteria:** Minimal ada 3 kategori skill: (1) Web Frontend, (2) Backend & Database, (3) Tools & Environment. Setiap kategori berisi skill yang nyata dan relevan. ✅
- **Progress:** 100%
- **Related Docs:** `src/data/portfolioData.ts` (skillCategories), `src/components/sections/Skills.tsx`
- **Notes:** Ditata menjadi 3 kategori: Web Frontend (React, TS, JS, Tailwind, HTML/CSS, Vite), Backend & DB (PHP, MySQL, CI3, Firebase, REST APIs), Tools (Git/GitHub, VS Code, Figma, Postman, Node.js). Dilengkapi level profisiensi dan konteks nyata.

### [TASK-P07] Perluas Journey Timeline
- **Description:** Section Journey hanya memiliki 2 milestone (Pendidikan & Proyek). Tambahkan timeline belajar yang lebih detail dan kronologis untuk mencerminkan perkembangan nyata.
- **Priority:** Medium 🟡
- **Status:** DONE ✅
- **Dependencies:** TASK-P05
- **Acceptance Criteria:** Minimal 4-5 milestone kronologis yang menggambarkan perjalanan dari awal belajar hingga sekarang. Setiap milestone memiliki periode/tahun, teknologi yang dipelajari, dan deskripsi yang bermakna. ✅
- **Progress:** 100%
- **Related Docs:** `src/data/portfolioData.ts` (journeyMilestones), `src/components/sections/Journey.tsx`
- **Notes:** Ditambahkan 5 milestone kronologis: (1) 2023 - Awal Kuliah & Dasar Web, (2) Awal 2024 - Backend PHP & CI3, (3) Pertengahan 2024 - Adopsi TypeScript, (4) Akhir 2024 - Proyek LifeFlow PWA, (5) 2024–Sekarang - Pembelajaran Berkelanjutan.

### [TASK-P08] Animasi Scroll-In dengan Framer Motion
- **Description:** Tambahkan animasi `whileInView` / `fadeInUp` ke setiap section menggunakan Framer Motion yang sudah terpasang. Animasi harus menghormati `prefers-reduced-motion`.
- **Priority:** Medium 🟡
- **Status:** DONE ✅
- **Dependencies:** TASK-P01 (harus memilih opsi A)
- **Acceptance Criteria:** Setiap section masuk dengan animasi fade+slide halus saat di-scroll; animasi hanya berjalan sekali (`once: true`); dinonaktifkan jika user mengaktifkan `prefers-reduced-motion`. ✅
- **Progress:** 100%
- **Related Docs:** `src/components/ui/Motion.tsx`, semua komponen di `src/components/sections/`
- **Notes:** Animasi stagger diaplikasikan pada grid kartu Proyek, Skills, Journey, dan Contact. `Hero` dianimasikan saat mount.

### [TASK-P09] Tombol Download CV
- **Description:** Tambahkan tombol "Download CV" di bagian Hero (secondary button) atau di section Contact. File CV disimpan di folder `public/`.
- **Priority:** Medium 🟡
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Klik tombol langsung mendownload file PDF CV; atribut `download` terpasang; tombol memiliki ikon `Download` dari Lucide React. ✅
- **Progress:** 100%
- **Related Docs:** `src/components/sections/Hero.tsx`, `src/components/ui/Button.tsx`, `public/cv-jonnyficky.pdf`
- **Notes:** File CV terstruktur disimpan di `public/cv-jonnyficky.pdf`. Tombol Download CV ditambahkan di bagian Hero dengan ikon Download dan dukungan atribut `download` pada komponen Button. Link menggunakan base URL dinamis agar aman di GitHub Pages.

### [TASK-P10] Meta Tag SEO & Open Graph
- **Description:** `index.html` belum memiliki meta tag deskripsi, Open Graph (OG), dan Twitter Card. Ini membuat tampilan link saat dibagikan ke media sosial tidak menarik.
- **Priority:** Medium 🟡
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Tag `<meta name="description">`, `og:title`, `og:description`, `og:image`, dan `og:url` terpasang di `<head>`; preview link di WhatsApp/Twitter menampilkan nama + deskripsi yang benar. ✅
- **Progress:** 100%
- **Related Docs:** `index.html`, `public/og-image.png`
- **Notes:** Gambar OG resolusi 1200x630px dibuat di `public/og-image.png` dengan branding modern, foto profil, dan tag keahlian. Tag Open Graph dan Twitter card (`summary_large_image`) dipasang lengkap di `index.html`.

### [TASK-P11] Contact Form (Formspree)
- **Description:** Tambahkan form kontak sederhana (Nama, Email, Pesan) di section Contact menggunakan Formspree sebagai backend gratis tanpa perlu server.
- **Priority:** Low 🟢
- **Status:** NOT_STARTED
- **Dependencies:** TASK-P05
- **Acceptance Criteria:** Form memiliki validasi HTML5 dasar; submit form mengirim pesan ke email via Formspree; ada feedback sukses/gagal setelah submit; form accessible (label terhubung ke input).
- **Progress:** 0%
- **Related Docs:** `src/components/sections/Contact.tsx`
- **Notes:** Daftar di [formspree.io](https://formspree.io) (gratis, 50 submission/bulan). Simpan form endpoint di `portfolioData.ts` atau env variable.

### [TASK-P12] Favicon Custom (Inisial JF)
- **Description:** `public/favicon.svg` kemungkinan masih favicon default Vite. Buat favicon SVG custom dengan inisial "JF" dan warna brand yang sesuai dengan logo di Navbar.
- **Priority:** Low 🟢
- **Status:** DONE ✅
- **Dependencies:** None
- **Acceptance Criteria:** Favicon di tab browser menampilkan inisial "JF" dengan background gradient brand (indigo→blue); terlihat jelas di ukuran 16x16 dan 32x32px. ✅
- **Progress:** 100%
- **Related Docs:** `public/favicon.svg`, `index.html`, `src/components/layout/Navbar.tsx`
- **Notes:** File `public/favicon.svg` sudah berisi monogram "JF" bergradien brand (cyan→indigo→violet) dengan background dark navy, selaras dengan logo Navbar dan tag `<link rel="icon">` di `index.html`.

### [TASK-P13] Halaman 404 untuk GitHub Pages
- **Description:** Saat ini tidak ada `404.html`. Jika pengguna mengakses URL yang tidak ada di GitHub Pages, mereka mendapat halaman error default GitHub yang tidak branded.
- **Priority:** Low 🟢
- **Status:** NOT_STARTED
- **Dependencies:** None
- **Acceptance Criteria:** File `404.html` tersedia di folder `public/` dengan pesan yang ramah dan link kembali ke halaman utama; atau konfigurasi redirect di `vite.config.ts` jika menggunakan SPA routing.
- **Progress:** 0%
- **Related Docs:** `public/`, `vite.config.ts`

### [TASK-P14] Section Sertifikasi & Pencapaian
- **Description:** Tambahkan section baru "Certifications" atau "Achievements" untuk menampilkan sertifikat yang sudah dimiliki (Dicoding, Google, Coursera, dsb).
- **Priority:** Low 🟢
- **Status:** NOT_STARTED
- **Dependencies:** TASK-P05, TASK-P06
- **Acceptance Criteria:** Section baru muncul antara Skills dan Journey; setiap sertifikat memiliki nama, penerbit, tahun, dan link verifikasi (opsional).
- **Progress:** 0%
- **Related Docs:** `src/App.tsx`, `src/data/portfolioData.ts`, `src/types/index.ts`
- **Notes:** Skip task ini jika belum memiliki sertifikat yang perlu ditampilkan.

---
