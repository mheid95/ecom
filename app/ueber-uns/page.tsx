import type { Metadata } from 'next'
import Link from 'next/link'
import { FaAward, FaUsers, FaHandshake, FaLeaf } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Über uns | Ihr Partner für professionelle Kaffeelösungen',
  description: 'Über 15 Jahre Erfahrung im B2B-Kaffeemaschinenhandel. Vertrauen Sie auf Expertise, Qualität und erstklassigen Service.',
  keywords: 'Kaffeemaschinen Experte, B2B Kaffee, professionelle Kaffeelösungen',
}

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Über KaffeeProfi B2B
            </h1>
            <p className="text-xl text-coffee-100 leading-relaxed">
              Seit über 15 Jahren Ihr verlässlicher Partner für professionelle Kaffeelösungen im B2B-Bereich.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Was 2008 als kleines Familienunternehmen begann, ist heute einer der führenden Anbieter für professionelle Kaffeelösungen in Deutschland. Über 500 zufriedene Kunden aus verschiedensten Branchen vertrauen auf unsere Expertise und unseren Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Unsere Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Wir möchten Unternehmen dabei helfen, ihren Mitarbeitern und Kunden erstklassigen Kaffee zu bieten. Denn guter Kaffee steigert nicht nur die Produktivität, sondern schafft auch Momente der Freude im Arbeitsalltag.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Unsere Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Wir streben danach, der bevorzugte Partner für professionelle Kaffeelösungen in Deutschland zu werden - durch Innovation, Qualität und exzellenten Service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-accent-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Qualität</h3>
              <p className="text-gray-600">
                Nur Premium-Geräte von führenden Herstellern mit voller Garantie
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-accent-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Service</h3>
              <p className="text-gray-600">
                24/7 Support und persönliche Betreuung durch Experten
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-accent-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Partnerschaft</h3>
              <p className="text-gray-600">
                Langfristige Beziehungen basierend auf Vertrauen und Transparenz
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLeaf className="text-accent-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Nachhaltigkeit</h3>
              <p className="text-gray-600">
                Energieeffiziente Geräte und nachhaltige Kaffeesorten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-container">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Installationen</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahrene Experten mit Leidenschaft für Kaffee
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              Unser Team besteht aus zertifizierten Technikern, erfahrenen Beratern und Kaffee-Enthusiasten. Gemeinsam sorgen wir dafür, dass Sie die beste Lösung für Ihr Unternehmen erhalten und diese langfristig optimal funktioniert.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-neutral-900 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-neutral-900">Vertrieb & Beratung</h3>
                <p className="text-sm text-gray-600">8 Berater</p>
              </div>
              <div className="text-center">
                <div className="bg-neutral-900 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-neutral-900">Technischer Service</h3>
                <p className="text-sm text-gray-600">12 Techniker</p>
              </div>
              <div className="text-center">
                <div className="bg-neutral-900 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-neutral-900">Schulung & Support</h3>
                <p className="text-sm text-gray-600">5 Experten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Werden Sie Teil unserer Erfolgsgeschichte
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lassen Sie uns gemeinsam die perfekte Kaffeelösung für Ihr Unternehmen entwickeln.
          </p>
          <Link href="/kontakt" className="btn-primary inline-block">
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  )
}
