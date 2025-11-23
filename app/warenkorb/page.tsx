'use client'

import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import { FaTrash, FaShoppingCart, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

export default function WarenkorbPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const vatAmount = totalPrice * 0.19
  const totalWithVat = totalPrice + vatAmount

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FaShoppingCart className="mx-auto text-gray-400 text-6xl mb-4" />
            <h1 className="text-3xl font-bold text-coffee-900 mb-4">
              Ihr Warenkorb ist leer
            </h1>
            <p className="text-gray-600 mb-8">
              Fügen Sie Produkte hinzu, um mit dem Einkauf zu beginnen
            </p>
            <Link href="/produkte" className="btn-primary inline-block">
              Zu den Produkten
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-coffee-900 mb-8">Warenkorb</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center space-x-6">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-50 w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaShoppingCart className="text-primary-600 text-3xl" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-coffee-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <p className="text-xl font-bold text-primary-600">
                      {formatPrice(item.price)}
                      <span className="text-sm text-gray-500 ml-2">zzgl. MwSt.</span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 p-2"
                      title="Entfernen"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-coffee-900 mb-6">
                Bestellübersicht
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Zwischensumme (netto)</span>
                  <span className="font-semibold">{formatPrice(totalPrice)}</span>
                </div>

                {items.reduce((sum, item) => sum + item.quantity, 0) >= 3 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800 font-medium">
                      ✓ Mengenrabatt verfügbar!
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Kontaktieren Sie uns für ein individuelles Angebot
                    </p>
                  </div>
                )}

                <div className="flex justify-between text-gray-700">
                  <span>MwSt. (19%)</span>
                  <span className="font-semibold">{formatPrice(vatAmount)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-bold text-coffee-900">
                    <span>Gesamtsumme</span>
                    <span>{formatPrice(totalWithVat)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full btn-primary text-center inline-flex items-center justify-center mb-4"
              >
                Zur Kasse
                <FaArrowRight className="ml-2" />
              </Link>

              <Link
                href="/produkte"
                className="w-full btn-secondary text-center inline-block"
              >
                Weiter einkaufen
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Kostenlose Lieferung ab 5.000 €
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Installation verfügbar
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Professionelle Beratung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
