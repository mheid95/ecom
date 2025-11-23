export interface Product {
  id: number
  name: string
  category: string
  description: string
  longDescription: string
  features: string[]
  price: number // in EUR, ohne MwSt
  priceDisplay: string
  priceNote: string
  ideal: string
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: 'Professional Espresso Pro 3000',
    category: 'Siebträgermaschine',
    description: 'Hochleistungs-Siebträgermaschine für Cafés und Restaurants mit 3 Gruppen.',
    longDescription: 'Die Professional Espresso Pro 3000 ist eine Drei-Gruppen-Siebträgermaschine der Spitzenklasse. Mit präziser Temperaturkontrolle, hochwertigen Komponenten und professioneller Dampflanze bietet sie alles, was Sie für perfekte Espresso-Getränke benötigen.',
    features: ['3 Brühgruppen', 'Automatische Temperaturregelung', 'Dampflanze', 'PID-Steuerung', 'Volumetrische Dosierung'],
    price: 8900,
    priceDisplay: 'ab 8.900 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Cafés, Restaurants, Hotels'
  },
  {
    id: 2,
    name: 'Office Master 5000',
    category: 'Kaffeevollautomat',
    description: 'Premium Vollautomat für Büros und Unternehmen bis 100 Mitarbeiter.',
    longDescription: 'Der Office Master 5000 wurde speziell für den Einsatz in Büroumgebungen entwickelt. Mit intuitiver Touch-Bedienung, großem Wassertank und leiser Mühle ist er die perfekte Lösung für Ihr Unternehmen.',
    features: ['Touch-Display', '15 Kaffeespezialitäten', 'Hygiene-System', '2.5L Wassertank', 'Leise Mühle'],
    price: 4200,
    priceDisplay: 'ab 4.200 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Büros, Unternehmen, Co-Working Spaces'
  },
  {
    id: 3,
    name: 'Hotel Premium Deluxe',
    category: 'Kaffeevollautomat',
    description: 'Luxus-Vollautomat für Hotels und Konferenzzentren mit höchstem Durchsatz.',
    longDescription: 'Der Hotel Premium Deluxe ist für höchste Ansprüche konzipiert. Mit Doppel-Bohnenbehälter, integriertem Milchkühlsystem und Fernwartungsfunktion ist er die ideale Wahl für Hotels und Großeinrichtungen.',
    features: ['Doppel-Bohnenbehälter', 'Milchkühlsystem', 'Fernwartung', 'Hoher Durchsatz (200+ Tassen/Tag)', 'Premium-Mahldisk'],
    price: 12500,
    priceDisplay: 'ab 12.500 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Hotels, Konferenzzentren, Großküchen'
  },
  {
    id: 4,
    name: 'Gastro Express 2000',
    category: 'Filtermaschine',
    description: 'Professionelle Filterkaffeemaschine für Großküchen und Kantinen.',
    longDescription: 'Die Gastro Express 2000 ist eine robuste Filterkaffeemaschine für den professionellen Einsatz. Mit großem Volumen, Schnellbrühsystem und energiesparender Warmhalteplatte ideal für Kantinen und Großküchen.',
    features: ['10 Liter Tank', 'Schnellbrühsystem', 'Warmhalteplatte', 'Robustes Gehäuse', 'Einfache Reinigung'],
    price: 1800,
    priceDisplay: 'ab 1.800 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Kantinen, Großküchen, Catering'
  },
  {
    id: 5,
    name: 'Compact Office 2000',
    category: 'Kaffeevollautomat',
    description: 'Kompakter Vollautomat für kleine Büros bis 30 Mitarbeiter.',
    longDescription: 'Der Compact Office 2000 bietet professionelle Qualität in kompakter Bauweise. Perfekt für kleinere Büros und Teams, die nicht auf erstklassigen Kaffee verzichten wollen.',
    features: ['Kompakte Bauweise', '8 Kaffeespezialitäten', 'Energiesparmodus', '1.8L Wassertank', 'One-Touch-Bedienung'],
    price: 2400,
    priceDisplay: 'ab 2.400 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Kleine Büros, Praxen, Kanzleien'
  },
  {
    id: 6,
    name: 'Professional Espresso Pro 2000',
    category: 'Siebträgermaschine',
    description: 'Zwei-Gruppen-Siebträgermaschine für gehobene Gastronomie.',
    longDescription: 'Die Professional Espresso Pro 2000 kombiniert italienisches Design mit modernster Technologie. Ideal für Cafés und Restaurants, die höchste Qualität bieten möchten.',
    features: ['2 Brühgruppen', 'Kupfer-Boiler', 'Dampf-Lanze', 'Manometer', 'E61 Brühgruppe'],
    price: 6500,
    priceDisplay: 'ab 6.500 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Cafés, Bars, Restaurants'
  }
]
