import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | KaffeeProfi B2B',
  description: 'Impressum und rechtliche Informationen von KaffeeProfi B2B',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Impressum</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="leading-relaxed">
                KaffeeProfi B2B GmbH<br />
                Musterstraße 123<br />
                12345 Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Vertreten durch</h2>
              <p className="leading-relaxed">
                Geschäftsführer: Max Mustermann
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Kontakt</h2>
              <p className="leading-relaxed">
                Telefon: +49 (0) 123 456 78<br />
                E-Mail: info@kaffee-profi.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Registereintrag</h2>
              <p className="leading-relaxed">
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Berlin<br />
                Registernummer: HRB 12345
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Umsatzsteuer-ID</h2>
              <p className="leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="leading-relaxed">
                Max Mustermann<br />
                Musterstraße 123<br />
                12345 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">EU-Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr" className="text-accent-600 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
                <br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
              <p className="leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Haftungsausschluss</h2>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Haftung für Inhalte</h3>
              <p className="leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Haftung für Links</h3>
              <p className="leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Urheberrecht</h3>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
