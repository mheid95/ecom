'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaCheckCircle, FaEnvelope, FaPhone, FaFileInvoice, FaHome } from 'react-icons/fa'
import confetti from 'canvas-confetti'

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderId = searchParams.get('orderId')

  useEffect(() => {
    if (!orderId) {
      router.push('/')
      return
    }

    // Konfetti-Effekt
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#007ec9', '#43302b', '#0c9eeb']
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#007ec9', '#43302b', '#0c9eeb']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [orderId, router])

  if (!orderId) {
    return null
  }

  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Vielen Dank für Ihre Bestellung!
            </h1>
            <p className="text-xl text-green-100">
              Ihre Bestellung wurde erfolgreich aufgegeben
            </p>
          </div>

          <div className="p-8 sm:p-12">
            {/* Order Details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Bestelldetails
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Bestellnummer</div>
                  <div className="font-mono font-semibold text-neutral-900">{orderId}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Bestelldatum</div>
                  <div className="font-semibold text-neutral-900">
                    {new Date().toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Zahlungsstatus</div>
                  <div className="font-semibold text-green-600">✓ Bezahlt</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Voraussichtliche Lieferung</div>
                  <div className="font-semibold text-neutral-900">
                    {estimatedDelivery.toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Wie geht es weiter?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-accent-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      1. Bestellbestätigung per E-Mail
                    </h3>
                    <p className="text-gray-600">
                      Sie erhalten in wenigen Minuten eine Bestätigung mit allen Details zu Ihrer Bestellung.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-accent-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      2. Persönliche Kontaktaufnahme
                    </h3>
                    <p className="text-gray-600">
                      Unser Kundenservice wird sich innerhalb von 24 Stunden bei Ihnen melden, um den
                      Liefertermin und die Installation zu koordinieren.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaFileInvoice className="text-accent-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      3. Rechnung und Dokumente
                    </h3>
                    <p className="text-gray-600">
                      Die Rechnung und alle relevanten Dokumente werden Ihnen per E-Mail zugesendet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white mb-8">
              <h3 className="text-xl font-bold mb-4">
                Haben Sie Fragen zu Ihrer Bestellung?
              </h3>
              <p className="mb-6 text-primary-100">
                Unser Kundenservice steht Ihnen gerne zur Verfügung.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:+4912345678"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-colors text-center"
                >
                  <FaPhone className="mx-auto mb-2" />
                  <div className="font-semibold">+49 (0) 123 456 78</div>
                  <div className="text-sm text-primary-100">Mo-Fr: 8-18 Uhr</div>
                </a>
                <a
                  href="mailto:info@kaffee-profi.de"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-colors text-center"
                >
                  <FaEnvelope className="mx-auto mb-2" />
                  <div className="font-semibold">info@kaffee-profi.de</div>
                  <div className="text-sm text-primary-100">Antwort in 24h</div>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="flex-1 btn-primary text-center inline-flex items-center justify-center"
              >
                <FaHome className="mr-2" />
                Zurück zur Startseite
              </Link>
              <Link
                href="/produkte"
                className="flex-1 btn-secondary text-center"
              >
                Weitere Produkte ansehen
              </Link>
            </div>

            {/* Thank You Note */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 italic">
                Vielen Dank für Ihr Vertrauen in KaffeeProfi B2B.<br />
                Wir freuen uns darauf, Sie mit erstklassigen Kaffeelösungen zu versorgen!
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">✓</div>
            <div className="font-semibold text-neutral-900">Sichere Zahlung</div>
            <div className="text-sm text-gray-600">SSL-verschlüsselt</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">✓</div>
            <div className="font-semibold text-neutral-900">Kostenlose Installation</div>
            <div className="text-sm text-gray-600">Inklusive Einweisung</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">✓</div>
            <div className="font-semibold text-neutral-900">2 Jahre Garantie</div>
            <div className="text-sm text-gray-600">Auf alle Geräte</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BestaetingungPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lädt...</p>
        </div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}
