'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaCreditCard, FaPaypal, FaLock } from 'react-icons/fa'
import { SiKlarna, SiStripe } from 'react-icons/si'
import StripePayment from '@/components/payment/StripePayment'
import PayPalPayment from '@/components/payment/PayPalPayment'
import KlarnaPayment from '@/components/payment/KlarnaPayment'

type PaymentMethod = 'stripe' | 'paypal' | 'klarna' | 'invoice'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('stripe')
  const [isProcessing, setIsProcessing] = useState(false)

  const [billingData, setBillingData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    street: '',
    zipCode: '',
    city: '',
    country: 'Deutschland',
    vatId: ''
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  const vatAmount = totalPrice * 0.19
  const totalWithVat = totalPrice + vatAmount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBillingData({
      ...billingData,
      [e.target.name]: e.target.value
    })
  }

  const handlePaymentSuccess = (paymentId: string) => {
    // Hier würde normalerweise die Bestellung in der Datenbank gespeichert
    console.log('Payment successful:', paymentId)
    clearCart()
    router.push(`/bestaetigung?orderId=${paymentId}`)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-coffee-900 mb-4">
              Ihr Warenkorb ist leer
            </h1>
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
        <h1 className="text-3xl font-bold text-coffee-900 mb-8">Kasse</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing & Payment Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Address */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">
                Rechnungsadresse
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Firmenname *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={billingData.company}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Ihre Firma GmbH"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ansprechpartner *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={billingData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={billingData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="m.mustermann@firma.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={billingData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+49 123 456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    USt-IdNr.
                  </label>
                  <input
                    type="text"
                    name="vatId"
                    value={billingData.vatId}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="DE123456789"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Straße & Hausnummer *
                  </label>
                  <input
                    type="text"
                    name="street"
                    required
                    value={billingData.street}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Musterstraße 123"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PLZ *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={billingData.zipCode}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="12345"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Stadt *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={billingData.city}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Berlin"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Land *
                  </label>
                  <select
                    name="country"
                    value={billingData.country}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="Deutschland">Deutschland</option>
                    <option value="Österreich">Österreich</option>
                    <option value="Schweiz">Schweiz</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">
                Zahlungsart wählen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setSelectedPayment('stripe')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedPayment === 'stripe'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <SiStripe className="text-4xl text-[#635BFF]" />
                    <FaCreditCard className="text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-coffee-900">Kreditkarte</div>
                    <div className="text-sm text-gray-600">Via Stripe</div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPayment('paypal')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedPayment === 'paypal'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <FaPaypal className="text-4xl text-[#0070BA]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-coffee-900">PayPal</div>
                    <div className="text-sm text-gray-600">Schnell & sicher</div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPayment('klarna')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedPayment === 'klarna'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <SiKlarna className="text-4xl text-[#FFB3C7]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-coffee-900">Klarna</div>
                    <div className="text-sm text-gray-600">Jetzt kaufen, später zahlen</div>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPayment('invoice')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedPayment === 'invoice'
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <FaLock className="text-4xl text-gray-400" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-coffee-900">Rechnung</div>
                    <div className="text-sm text-gray-600">14 Tage Zahlungsziel</div>
                  </div>
                </button>
              </div>

              {/* Payment Components */}
              <div className="pt-6 border-t border-gray-200">
                {selectedPayment === 'stripe' && (
                  <StripePayment
                    amount={totalWithVat}
                    billingData={billingData}
                    onSuccess={handlePaymentSuccess}
                  />
                )}

                {selectedPayment === 'paypal' && (
                  <PayPalPayment
                    amount={totalWithVat}
                    billingData={billingData}
                    onSuccess={handlePaymentSuccess}
                  />
                )}

                {selectedPayment === 'klarna' && (
                  <KlarnaPayment
                    amount={totalWithVat}
                    billingData={billingData}
                    onSuccess={handlePaymentSuccess}
                  />
                )}

                {selectedPayment === 'invoice' && (
                  <div className="text-center py-8">
                    <p className="text-gray-700 mb-6">
                      Nach Abschluss der Bestellung erhalten Sie eine Rechnung mit 14 Tagen Zahlungsziel.
                      Die Ware wird nach Bonitätsprüfung versendet.
                    </p>
                    <button
                      onClick={() => handlePaymentSuccess('INV-' + Date.now())}
                      className="btn-primary"
                    >
                      Kostenpflichtig bestellen
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
                <FaLock className="mr-2" />
                <span>Sichere SSL-verschlüsselte Zahlung</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-coffee-900 mb-6">
                Ihre Bestellung
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <div className="font-semibold text-coffee-900">{item.name}</div>
                      <div className="text-gray-600">Menge: {item.quantity}</div>
                    </div>
                    <div className="font-semibold text-gray-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Zwischensumme (netto)</span>
                  <span className="font-semibold">{formatPrice(totalPrice)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>MwSt. (19%)</span>
                  <span className="font-semibold">{formatPrice(vatAmount)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Versand</span>
                  <span className="font-semibold text-green-600">Kostenlos</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-coffee-900">
                    <span>Gesamtsumme</span>
                    <span>{formatPrice(totalWithVat)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
