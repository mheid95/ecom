import Link from 'next/link'
import { FaArrowRight, FaCoffee } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative section-container py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 text-sm">
              <FaCoffee className="mr-2 text-primary-400" />
              <span>Professionelle Lösungen für Ihr Business</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Kaffeemaschinen für professionelle Ansprüche
            </h1>

            <p className="text-xl text-coffee-100 leading-relaxed">
              Steigern Sie die Produktivität und Zufriedenheit Ihrer Mitarbeiter und Kunden mit erstklassigen Kaffeelösungen. Individuelle Beratung, Installation und Service aus einer Hand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="btn-primary inline-flex items-center justify-center">
                Kostenlose Beratung
                <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/produkte" className="btn-secondary bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white inline-flex items-center justify-center">
                Produkte ansehen
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-coffee-700">
              <div>
                <div className="text-3xl font-bold text-primary-400">500+</div>
                <div className="text-sm text-coffee-200">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">15+</div>
                <div className="text-sm text-coffee-200">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">24/7</div>
                <div className="text-sm text-coffee-200">Service</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <FaCoffee className="text-white/20 text-[200px]" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coffee-700 rounded-xl p-6 shadow-xl">
              <div className="text-sm text-coffee-200">Über</div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-coffee-200">Installationen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
