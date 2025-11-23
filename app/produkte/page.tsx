import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCoffee, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Professionelle Kaffeemaschinen | Produktkatalog B2B',
  description: 'Entdecken Sie unser umfangreiches Sortiment an professionellen Kaffeemaschinen. Siebträger, Vollautomaten und Filtermaschinen für B2B-Kunden.',
  keywords: 'Kaffeemaschinen kaufen B2B, Siebträgermaschinen, Vollautomaten, gewerbliche Kaffeemaschinen',
}

const allProducts = [
  {
    id: 1,
    name: 'Professional Espresso Pro 3000',
    category: 'Siebträgermaschine',
    description: 'Hochleistungs-Siebträgermaschine für Cafés und Restaurants mit 3 Gruppen.',
    longDescription: 'Die Professional Espresso Pro 3000 ist eine Drei-Gruppen-Siebträgermaschine der Spitzenklasse. Mit präziser Temperaturkontrolle, hochwertigen Komponenten und professioneller Dampflanze bietet sie alles, was Sie für perfekte Espresso-Getränke benötigen.',
    features: ['3 Brühgruppen', 'Automatische Temperaturregelung', 'Dampflanze', 'PID-Steuerung', 'Volumetrische Dosierung'],
    price: 'ab 8.900 €',
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
    price: 'ab 4.200 €',
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
    price: 'ab 12.500 €',
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
    price: 'ab 1.800 €',
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
    price: 'ab 2.400 €',
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
    price: 'ab 6.500 €',
    priceNote: 'zzgl. MwSt.',
    ideal: 'Cafés, Bars, Restaurants'
  }
]

export default function ProduktePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-900 to-coffee-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professionelle Kaffeemaschinen für Ihr Business
            </h1>
            <p className="text-xl text-coffee-100 leading-relaxed">
              Entdecken Sie unsere umfangreiche Auswahl an hochwertigen Kaffeemaschinen. Von der klassischen Siebträgermaschine bis zum modernen Vollautomaten - wir haben die perfekte Lösung für Ihre Anforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="card overflow-hidden">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-12 relative">
                <FaCoffee className="text-primary-600 text-8xl mx-auto" />
                <div className="absolute top-4 right-4 bg-coffee-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-coffee-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-primary-600 font-medium text-sm">
                    Ideal für: {product.ideal}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>

                <div>
                  <h3 className="font-semibold text-coffee-900 mb-3">Ausstattung:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-primary-600">
                        {product.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.priceNote}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div>Mengenrabatte verfügbar</div>
                      <div>Leasing ab 99 €/Monat</div>
                    </div>
                  </div>

                  <Link
                    href="/kontakt"
                    className="w-full btn-primary text-center inline-block"
                  >
                    Individuelles Angebot anfordern
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Ihre B2B-Vorteile
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">Mengenrabatte</h3>
                <p className="text-primary-100">
                  Ab 3 Geräten erhalten Sie attraktive Staffelpreise
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">Flexible Finanzierung</h3>
                <p className="text-primary-100">
                  Leasing, Miete oder Kauf - wir finden die passende Lösung
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">Service-Pakete</h3>
                <p className="text-primary-100">
                  Umfassende Wartungsverträge für sorgenfreien Betrieb
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-2">Schnelle Lieferung</h3>
                <p className="text-primary-100">
                  Express-Lieferung und Installation innerhalb von 48h möglich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
