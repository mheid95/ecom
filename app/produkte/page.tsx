'use client'

import { FaCoffee, FaCheckCircle } from 'react-icons/fa'
import { allProducts } from '@/lib/products'
import AddToCartButton from '@/components/AddToCartButton'

export default function ProduktePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
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
                <FaCoffee className="text-accent-600 text-8xl mx-auto" />
                <div className="absolute top-4 right-4 bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-accent-600 font-medium text-sm">
                    Ideal für: {product.ideal}
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>

                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3">Ausstattung:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheckCircle className="text-accent-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-accent-600">
                        {product.priceDisplay}
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

                  <AddToCartButton
                    product={{
                      id: product.id,
                      name: product.name,
                      category: product.category,
                      price: product.price
                    }}
                  />
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
