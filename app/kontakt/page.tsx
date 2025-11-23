import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kontakt | Kostenlose Beratung für professionelle Kaffeemaschinen',
  description: 'Kontaktieren Sie unsere Experten für eine kostenlose Beratung. Individuelle Angebote für professionelle Kaffeemaschinen im B2B-Bereich.',
  keywords: 'Kaffeemaschinen Beratung, B2B Kontakt, Angebot Kaffeemaschinen',
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee-900 to-coffee-800 text-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Wir beraten Sie gerne
            </h1>
            <p className="text-xl text-coffee-100">
              Fordern Sie jetzt Ihr individuelles Angebot an oder vereinbaren Sie einen kostenlosen Beratungstermin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-coffee-900 mb-1">Telefon</div>
                    <a href="tel:+4912345678" className="text-primary-600 hover:underline">
                      +49 (0) 123 456 78
                    </a>
                    <div className="text-sm text-gray-600 mt-1">Mo-Fr: 8:00 - 18:00 Uhr</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-coffee-900 mb-1">E-Mail</div>
                    <a href="mailto:info@kaffee-profi.de" className="text-primary-600 hover:underline break-all">
                      info@kaffee-profi.de
                    </a>
                    <div className="text-sm text-gray-600 mt-1">Antwort innerhalb 24h</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-coffee-900 mb-1">Adresse</div>
                    <div className="text-gray-700">
                      Musterstraße 123<br />
                      12345 Berlin<br />
                      Deutschland
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-coffee-900 mb-1">Öffnungszeiten</div>
                    <div className="text-gray-700 text-sm">
                      <div>Montag - Freitag: 8:00 - 18:00</div>
                      <div>Samstag: 10:00 - 14:00</div>
                      <div>Sonntag: Geschlossen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <h3 className="text-xl font-bold mb-4">24/7 Notfall-Service</h3>
              <p className="text-primary-100 mb-4">
                Für Wartungsvertragskunden bieten wir einen 24/7 Notfall-Service.
              </p>
              <a href="tel:+491234567890" className="text-white font-semibold hover:underline">
                +49 (0) 123 456 78 90
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-2">
                Angebot anfordern
              </h2>
              <p className="text-gray-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen mit einem individuellen Angebot.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-coffee-900 mb-8 text-center">
              Häufig gestellte Fragen
            </h2>

            <div className="space-y-4">
              <details className="card p-6 cursor-pointer">
                <summary className="font-semibold text-coffee-900 text-lg">
                  Wie schnell können Sie liefern?
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Lagerware können wir innerhalb von 48 Stunden liefern und installieren. Bei Spezialanfertigungen beträgt die Lieferzeit 2-4 Wochen.
                </p>
              </details>

              <details className="card p-6 cursor-pointer">
                <summary className="font-semibold text-coffee-900 text-lg">
                  Bieten Sie Wartungsverträge an?
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Ja, wir bieten verschiedene Wartungspakete an - von der jährlichen Inspektion bis zum Vollservice-Vertrag mit 24/7 Support.
                </p>
              </details>

              <details className="card p-6 cursor-pointer">
                <summary className="font-semibold text-coffee-900 text-lg">
                  Welche Finanzierungsoptionen gibt es?
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Wir bieten Leasing ab 99 €/Monat, Mietkauf und klassischen Kauf. Unsere Finanzierungsexperten beraten Sie gerne zu den verschiedenen Optionen.
                </p>
              </details>

              <details className="card p-6 cursor-pointer">
                <summary className="font-semibold text-coffee-900 text-lg">
                  Gibt es Mengenrabatte?
                </summary>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Ja, ab 3 Geräten bieten wir attraktive Staffelpreise. Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
