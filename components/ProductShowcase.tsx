import Link from 'next/link'
import { FaCoffee, FaArrowRight } from 'react-icons/fa'

const products = [
  {
    id: 1,
    name: 'Professional Espresso Pro 3000',
    category: 'Siebträgermaschine',
    description: 'Hochleistungs-Siebträgermaschine für Cafés und Restaurants mit 3 Gruppen.',
    features: ['3 Brühgruppen', 'Automatische Temperaturregelung', 'Dampflanze'],
    price: 'ab 8.900 €',
    priceNote: 'zzgl. MwSt.'
  },
  {
    id: 2,
    name: 'Office Master 5000',
    category: 'Kaffeevollautomat',
    description: 'Premium Vollautomat für Büros und Unternehmen bis 100 Mitarbeiter.',
    features: ['Touch-Display', '15 Kaffeespezialitäten', 'Hygiene-System'],
    price: 'ab 4.200 €',
    priceNote: 'zzgl. MwSt.'
  },
  {
    id: 3,
    name: 'Hotel Premium Deluxe',
    category: 'Kaffeevollautomat',
    description: 'Luxus-Vollautomat für Hotels und Konferenzzentren mit höchstem Durchsatz.',
    features: ['Doppel-Bohnenbehälter', 'Milchkühlsystem', 'Fernwartung'],
    price: 'ab 12.500 €',
    priceNote: 'zzgl. MwSt.'
  },
  {
    id: 4,
    name: 'Gastro Express 2000',
    category: 'Filtermaschine',
    description: 'Professionelle Filterkaffeemaschine für Großküchen und Kantinen.',
    features: ['10 Liter Tank', 'Schnellbrühsystem', 'Warmhalteplatte'],
    price: 'ab 1.800 €',
    priceNote: 'zzgl. MwSt.'
  }
]

export default function ProductShowcase() {
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-4">
          Unsere Premium Kaffeemaschinen
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hochwertige Geräte für jeden Bedarf - von der Siebträgermaschine bis zum Vollautomaten
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {products.map((product) => (
          <div key={product.id} className="card group">
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 p-8 h-48 flex items-center justify-center">
              <FaCoffee className="text-primary-600 text-7xl group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 bg-coffee-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {product.category}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-coffee-900">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {product.price}
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {product.priceNote}
                </div>

                <Link
                  href="/kontakt"
                  className="w-full btn-primary text-center inline-block"
                >
                  Angebot anfordern
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/produkte" className="btn-secondary inline-flex items-center">
          Alle Produkte ansehen
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  )
}
