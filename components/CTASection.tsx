import Link from 'next/link'
import { FaPhone, FaEnvelope, FaCalendar } from 'react-icons/fa'

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Bereit für perfekten Kaffee in Ihrem Unternehmen?
          </h2>
          <p className="text-xl text-primary-100 mb-12 leading-relaxed">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein individuelles Angebot. Unsere Experten finden die optimale Lösung für Ihre Anforderungen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+4912345678"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20"
            >
              <FaPhone className="text-4xl mb-4 mx-auto" />
              <div className="font-semibold mb-2">Anrufen</div>
              <div className="text-sm text-primary-100">+49 (0) 123 456 78</div>
            </a>

            <a
              href="mailto:info@kaffee-profi.de"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20"
            >
              <FaEnvelope className="text-4xl mb-4 mx-auto" />
              <div className="font-semibold mb-2">E-Mail schreiben</div>
              <div className="text-sm text-primary-100">info@kaffee-profi.de</div>
            </a>

            <Link
              href="/kontakt"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-6 transition-all duration-300 border border-white/20"
            >
              <FaCalendar className="text-4xl mb-4 mx-auto" />
              <div className="font-semibold mb-2">Termin vereinbaren</div>
              <div className="text-sm text-primary-100">Kostenlose Beratung</div>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-xl">
              Jetzt Angebot anfordern
            </Link>
            <Link href="/produkte" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Produkte entdecken
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
