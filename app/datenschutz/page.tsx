import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | KaffeeProfi B2B',
  description: 'Datenschutzerklärung von KaffeeProfi B2B',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Allgemeine Hinweise</h3>
              <p className="leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
              <p className="leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="leading-relaxed mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>

              <p className="leading-relaxed mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Hosting</h2>
              <p className="leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Externes Hosting</h3>
              <p className="leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Allgemeine Hinweise und Pflicht­informationen</h2>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Datenschutz</h3>
              <p className="leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="leading-relaxed mb-4">
                KaffeeProfi B2B GmbH<br />
                Musterstraße 123<br />
                12345 Berlin<br />
                <br />
                Telefon: +49 (0) 123 456 78<br />
                E-Mail: info@kaffee-profi.de
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Recht auf Datenübertragbarkeit</h3>
              <p className="leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                aushändigen zu lassen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Kontaktformular</h3>
              <p className="leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-semibold text-neutral-900 mt-4 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Stand: November 2024<br />
                Diese Datenschutzerklärung wurde mit Sorgfalt erstellt. Bei Fragen zum Datenschutz kontaktieren Sie
                uns bitte unter den oben genannten Kontaktdaten.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
