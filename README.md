# KaffeeProfi B2B - Professional Coffee Machine E-Commerce Website

Eine moderne, SEO-optimierte B2B E-Commerce-Website für professionelle Kaffeemaschinen, entwickelt mit Next.js 14, TypeScript und Tailwind CSS.

## Features

### 🎯 B2B-Fokussiert
- Professionelle Produktkataloge für Kaffeemaschinen
- Individuelle Anfrageformulare
- Mengenrabatt-Anzeigen
- Leasing- und Finanzierungsoptionen
- Branchenspezifische Lösungen

### 🚀 Technologie-Stack
- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **SEO:** Optimierte Metadaten für alle Seiten

### 📱 Design & UX
- Vollständig responsive Design
- Modernes, professionelles Layout
- Optimierte Benutzererfahrung
- Schnelle Ladezeiten
- Barrierefreie Navigation

### 🎨 Seiten
- **Home:** Hero Section, Features, Produktvorschau, Branchen, Testimonials
- **Produkte:** Detaillierter Produktkatalog mit allen Kaffeemaschinen
- **Lösungen:** Branchenspezifische Kaffeelösungen
- **Über uns:** Unternehmensgeschichte und Werte
- **Kontakt:** Umfassendes Kontaktformular mit Anfrageoptionen

### 🔍 SEO-Optimierungen
- Optimierte Meta-Tags für alle Seiten
- Semantisches HTML
- Strukturierte Daten-Vorbereitung
- Mobile-first Ansatz
- Schnelle Performance

## Installation

```bash
# Repository klonen
git clone <repository-url>

# In Projektverzeichnis wechseln
cd ecom

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Verfügbare Scripte

```bash
# Entwicklungsserver starten
npm run dev

# Production Build erstellen
npm run build

# Production Build starten
npm start

# Linting
npm run lint
```

## Projektstruktur

```
ecom/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout mit SEO
│   ├── page.tsx           # Homepage
│   ├── produkte/          # Produktkatalog
│   ├── loesungen/         # Lösungsseiten
│   ├── ueber-uns/         # Über uns
│   ├── kontakt/           # Kontaktseite
│   └── globals.css        # Globale Styles
├── components/            # React Komponenten
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero Section
│   ├── Features.tsx      # Feature Grid
│   ├── ProductShowcase.tsx
│   ├── Benefits.tsx
│   ├── Testimonials.tsx
│   ├── CTASection.tsx
│   └── ContactForm.tsx   # Kontaktformular
├── public/               # Statische Assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Anpassungen

### Farben
Die Farbpalette kann in `tailwind.config.js` angepasst werden:
- **primary:** Hauptfarbe (Blau)
- **coffee:** Kaffee-Brauntöne

### Kontaktdaten
Aktualisieren Sie die Kontaktinformationen in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/kontakt/page.tsx`

### Produkte
Produktdaten befinden sich direkt in den entsprechenden Seiten und können einfach erweitert werden.

## Deployment

### Vercel (Empfohlen)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

### Andere Plattformen
Die Website kann auf jeder Plattform deployed werden, die Next.js unterstützt:
- Netlify
- AWS
- Google Cloud
- DigitalOcean

## Performance

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG) wo möglich
- ✅ Optimierte Images
- ✅ Code Splitting
- ✅ Lazy Loading

## Browser-Unterstützung

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Lizenz

Alle Rechte vorbehalten.

## Support

Für Fragen und Support:
- E-Mail: info@kaffee-profi.de
- Telefon: +49 (0) 123 456 78

---

Entwickelt mit ❤️ und ☕ für professionelle Kaffeelösungen
