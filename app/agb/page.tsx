import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Allgemeine Geschäftsbedingungen - KaffeeProfi B2B',
  description: 'Allgemeine Geschäftsbedingungen für B2B-Kunden von KaffeeProfi B2B',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 1 Geltungsbereich</h2>
              <p className="leading-relaxed mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der KaffeeProfi B2B GmbH
                (nachfolgend „Verkäufer") gelten für alle Verträge über die Lieferung von professionellen
                Kaffeemaschinen und Zubehör, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit
                dem Verkäufer hinsichtlich der im Online-Shop des Verkäufers dargestellten Waren abschließt.
              </p>
              <p className="leading-relaxed">
                (2) Diese AGB gelten ausschließlich für Geschäfte mit Unternehmern im Sinne des § 14 BGB.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 2 Vertragsschluss</h2>
              <p className="leading-relaxed mb-4">
                (1) Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine
                verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines
                verbindlichen Angebots durch den Kunden.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte
                Online-Kontaktformular abgeben. Der Verkäufer wird dem Kunden daraufhin ein individuelles
                Angebot unterbreiten.
              </p>
              <p className="leading-relaxed">
                (3) Ein Vertrag kommt erst zustande, wenn der Verkäufer dem Kunden ein schriftliches
                Auftragsbestätigung zusendet oder die Ware ausliefert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
              <p className="leading-relaxed mb-4">
                (1) Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Die Zahlung erfolgt nach individueller Vereinbarung. Möglich sind:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Vorkasse per Überweisung</li>
                <li>Rechnung (nach Bonitätsprüfung)</li>
                <li>Leasing über Partnerunternehmen</li>
                <li>Ratenzahlung (nach Vereinbarung)</li>
              </ul>
              <p className="leading-relaxed">
                (3) Bei Zahlung auf Rechnung ist der Rechnungsbetrag innerhalb von 14 Tagen nach Erhalt
                der Rechnung ohne Abzug zu zahlen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 4 Lieferung und Versand</h2>
              <p className="leading-relaxed mb-4">
                (1) Die Lieferung erfolgt nach individueller Vereinbarung. Standard-Lieferzeit für
                lagerhaltige Artikel beträgt 2-5 Werktage.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Die Installation und Inbetriebnahme der Geräte kann optional hinzugebucht werden.
              </p>
              <p className="leading-relaxed">
                (3) Bei Spezialanfertigungen oder nicht lagerhaltigen Artikeln beträgt die Lieferzeit
                2-4 Wochen, sofern nichts anderes vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 5 Gewährleistung</h2>
              <p className="leading-relaxed mb-4">
                (1) Es gelten die gesetzlichen Gewährleistungsrechte.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Für Unternehmer beträgt die Gewährleistungsfrist ein Jahr ab Ablieferung der Ware.
              </p>
              <p className="leading-relaxed">
                (3) Zusätzlich können erweiterte Garantieleistungen und Wartungsverträge abgeschlossen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 6 Eigentumsvorbehalt</h2>
              <p className="leading-relaxed mb-4">
                Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 7 Service und Wartung</h2>
              <p className="leading-relaxed mb-4">
                (1) Der Verkäufer bietet verschiedene Service- und Wartungspakete an.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Details zu Service-Leistungen werden in separaten Wartungsverträgen geregelt.
              </p>
              <p className="leading-relaxed">
                (3) Ein 24/7 Notfall-Service steht Kunden mit entsprechendem Wartungsvertrag zur Verfügung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 8 Haftung</h2>
              <p className="leading-relaxed mb-4">
                (1) Der Verkäufer haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Bei leichter Fahrlässigkeit haftet der Verkäufer nur bei Verletzung wesentlicher
                Vertragspflichten (Kardinalpflichten).
              </p>
              <p className="leading-relaxed">
                (3) Die Haftung für Personenschäden bleibt unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">§ 9 Schlussbestimmungen</h2>
              <p className="leading-relaxed mb-4">
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="leading-relaxed mb-4">
                (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Berlin, sofern der
                Kunde Kaufmann ist.
              </p>
              <p className="leading-relaxed">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
                Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
              </p>
            </section>

            <section className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Stand: November 2024<br />
                KaffeeProfi B2B GmbH<br />
                Musterstraße 123, 12345 Berlin<br />
                <br />
                Bei Fragen zu unseren AGB kontaktieren Sie uns gerne:<br />
                E-Mail: info@kaffee-profi.de<br />
                Telefon: +49 (0) 123 456 78
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
