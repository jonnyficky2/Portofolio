# Jonny Ficky — Personal Developer Portfolio

Portfolio personal yang dibuat dengan React, TypeScript, Vite, dan Tailwind CSS. Situs ini menampilkan profil akademik, teknologi yang digunakan, perjalanan belajar, kontak, serta tautan ke proyek-proyek.

## Teknologi

- React 18
- TypeScript
- Vite
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite di terminal. Server dikonfigurasi menggunakan port `3000`.

## Perintah yang tersedia

```bash
npm run dev      # Menjalankan development server
npm run lint     # Memeriksa TypeScript
npm run build    # Memeriksa TypeScript dan membuat production build
npm run preview  # Meninjau production build secara lokal
```

Hasil build tersedia di direktori `dist/`.

## Struktur sumber

```text
src/
├── components/
│   ├── layout/       # Navbar dan footer
│   ├── sections/     # Hero, About, Skills, Projects, Journey, Contact
│   └── ui/           # Komponen UI yang dapat digunakan kembali
├── data/             # Konten portfolio
├── types/            # Tipe TypeScript
├── App.tsx
└── main.tsx
```

## Proyek

- [LifeFlow — live demo](https://jonnyficky2.github.io/LifeFlow/) · [repository](https://github.com/jonnyficky2/LifeFlow)  
  Status pada portfolio: **Active Development**.
- [Restaurant-landing-sistem — live demo](https://jonnyficky2.github.io/Restaurant-landing-sistem/) · [repository](https://github.com/jonnyficky2/Restaurant-landing-sistem)
- [Smart-warung-POS-persentation — live demo](https://jonnyficky2.github.io/Smart-warung-POS-persentation/) · [repository](https://github.com/jonnyficky2/Smart-warung-POS-persentation)
- [POS — live demo](https://pos-one-umber.vercel.app/) · [repository](https://github.com/jonnyficky2/POS)
- [CI3_CRUD — repository](https://github.com/jonnyficky2/CI3_CRUD)
- [CI3_Layout_Dinamis — repository](https://github.com/jonnyficky2/CI3_Layout_Dinamis)

## GitHub Pages

Vite dikonfigurasi untuk path repository `/Portofolio/`. Setelah perubahan dipush, deployment ke GitHub Pages tetap memerlukan konfigurasi atau workflow deployment di GitHub. README ini tidak menyatakan bahwa portfolio sudah dideploy.
