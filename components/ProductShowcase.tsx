'use client'

import Link from 'next/link'
import { FaCoffee, FaArrowRight } from 'react-icons/fa'
import { allProducts } from '@/lib/products'
import AddToCartButton from './AddToCartButton'

// Zeige nur die ersten 4 Produkte auf der Homepage
const showcaseProducts = allProducts.slice(0, 4)

export default function ProductShowcase() {
  return (
    <section className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Unsere Premium Kaffeemaschinen
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hochwertige Geräte für jeden Bedarf - von der Siebträgermaschine bis zum Vollautomaten
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {showcaseProducts.map((product) => (
          <div key={product.id} className="card group">
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-50 p-8 h-48 flex items-center justify-center">
              <FaCoffee className="text-accent-600 text-7xl group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute top-4 right-4 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {product.category}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-neutral-900">
                {product.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className="text-accent-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-2xl font-bold text-accent-600 mb-1">
                  {product.priceDisplay}
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {product.priceNote}
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

      <div className="text-center">
        <Link href="/produkte" className="btn-secondary inline-flex items-center">
          Alle Produkte ansehen
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  )
}
