import type { Metadata } from 'next'
import Link from 'next/link'
import { FaBuilding, FaHotel, FaUtensils, FaBriefcase, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kaffeelösungen für Ihr Business | Individuelle B2B-Konzepte',
  description: 'Maßgeschneiderte Kaffeelösungen für Büros, Hotels, Restaurants und öffentliche Einrichtungen. Beratung, Installation und Service aus einer Hand.',
  keywords: 'Kaffeelösungen B2B, Bürokaffee, Hotel Kaffeemaschine, Restaurant Kaffeelösung',
}

const solutions = [
  {
    icon: FaBuilding,
    title: 'Büro & Office',
    description: 'Die perfekte Kaffeelösung für Ihr Büro',
    longDescription: 'Steigern Sie Produktivität und Mitarbeiterzufriedenheit mit professionellem Bürokaffee. Unsere Lösungen passen zu jeder Bürogröße.',
    features: [
      'Vollautomaten für jeden Bedarf',
      'Wartungsfreundliche Systeme',
      'Kostenoptimierte Lösungen',
      'Flexible Finanzierung',
      'Schulung der Mitarbeiter',
      'Regelmäßiger Service'
    ],
    ideal: '10-500+ Mitarbeiter',
    priceFrom: 'ab 99 €/Monat'
  },
  {
    icon: FaHotel,
    title: 'Hotel & Gastgewerbe',
    description: 'Premium-Kaffee für Ihre Gäste',
    longDescription: 'Beeindrucken Sie Ihre Gäste mit erstklassigem Kaffee. Von der Lobby-Bar bis zum Frühstücksbuffet - wir haben die passende Lösung.',
    features: [
      'Hochleistungs-Vollautomaten',
      'Siebträgermaschinen für Barista',
      'Buffet-Lösungen',
      'Premium-Kaffeesorten',
      '24/7 Notfall-Service',
      'Individuelle Rezepte'
    ],
    ideal: 'Hotels aller Kategorien',
    priceFrom: 'ab 199 €/Monat'
  },
  {
    icon: FaUtensils,
    title: 'Restaurant & Café',
    description: 'Professionelle Gastro-Lösungen',
    longDescription: 'Erfüllen Sie höchste Ansprüche in der Gastronomie. Unsere Geräte garantieren konstante Qualität bei hohem Durchsatz.',
    features: [
      'Professionelle Siebträger',
      'Multi-Boiler Systeme',
      'Barista-Schulungen',
      'Schneller Service',
      'Ersatzgeräte bei Ausfällen',
      'Individuelle Wartungspläne'
    ],
    ideal: 'Cafés, Restaurants, Bars',
    priceFrom: 'ab 149 €/Monat'
  },
  {
    icon: FaBriefcase,
    title: 'Öffentliche Einrichtungen',
    description: 'Robuste Lösungen für hohe Auslastung',
    longDescription: 'Zuverlässige Systeme für Krankenhäuser, Universitäten, Behörden und andere öffentliche Einrichtungen.',
    features: [
      'Robuste Geräte',
      'Hygiene-Systeme',
      'Großvolumen-Lösungen',
      'Bargeldlose Zahlung',
      'Zentrale Verwaltung',
      'Planbare Kosten'
    ],
    ideal: 'Öffentliche Einrichtungen',
    priceFrom: 'ab 129 €/Monat'
  }
]

export default function LoesungenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Maßgeschneiderte Kaffeelösungen für Ihr Business
            </h1>
            <p className="text-xl text-coffee-100 leading-relaxed">
              Von der Bedarfsanalyse über Installation bis zum laufenden Service - wir begleiten Sie auf dem gesamten Weg zu perfektem Kaffee in Ihrem Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-container">
        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`bg-gradient-to-br from-primary-600 to-primary-700 p-12 flex items-center justify-center ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <solution.icon className="text-white text-[150px] opacity-20" />
                </div>

                <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {solution.ideal}
                  </div>

                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    {solution.title}
                  </h2>

                  <p className="text-xl text-gray-600 mb-6">
                    {solution.longDescription}
                  </p>

                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaCheckCircle className="text-accent-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Leasing</div>
                      <div className="text-2xl font-bold text-accent-600">
                        {solution.priceFrom}
                      </div>
                    </div>

                    <Link href="/kontakt" className="btn-primary">
                      Beratung anfordern
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Unser Prozess
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In 5 Schritten zur perfekten Kaffeelösung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '1', title: 'Bedarfsanalyse', desc: 'Wir analysieren Ihre Anforderungen' },
              { step: '2', title: 'Angebot', desc: 'Sie erhalten ein individuelles Angebot' },
              { step: '3', title: 'Installation', desc: 'Fachgerechte Installation vor Ort' },
              { step: '4', title: 'Schulung', desc: 'Einweisung Ihrer Mitarbeiter' },
              { step: '5', title: 'Service', desc: 'Laufender Support und Wartung' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihre individuelle Kaffeelösung?
          </h2>
          <p className="text-coffee-100 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung. Wir entwickeln gemeinsam die optimale Lösung für Ihr Unternehmen.
          </p>
          <Link href="/kontakt" className="btn-primary inline-block">
            Jetzt Beratung anfordern
          </Link>
        </div>
      </section>
    </div>
  )
}
