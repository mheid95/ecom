'use client'

import { useState } from 'react'
import { SiKlarna } from 'react-icons/si'
import { FaLock } from 'react-icons/fa'

interface KlarnaPaymentProps {
  amount: number
  billingData: any
  onSuccess: (paymentId: string) => void
}

export default function KlarnaPayment({ amount, billingData, onSuccess }: KlarnaPaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<'pay_now' | 'pay_later' | 'slice'>('pay_later')

  const handleKlarnaPayment = async () => {
    setIsProcessing(true)
    setError(null)

    try {
      // In Production: Klarna API Integration
      // Hier simulieren wir die Zahlung für Demo-Zwecke

      // Simuliere API-Call
      await new Promise(resolve => setTimeout(resolve, 2000))

      const paymentId = `KLARNA-${Date.now()}`
      onSuccess(paymentId)
    } catch (err) {
      setError('Klarna-Zahlung fehlgeschlagen')
      setIsProcessing(false)
    }
  }

  const monthlyPayment = (amount / 12).toFixed(2)

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <SiKlarna className="text-6xl text-[#FFB3C7] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          Flexibel mit Klarna bezahlen
        </h3>
        <p className="text-gray-600">
          Wählen Sie Ihre bevorzugte Zahlungsoption
        </p>
      </div>

      {/* Klarna Payment Methods */}
      <div className="space-y-3">
        <button
          onClick={() => setSelectedMethod('pay_now')}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedMethod === 'pay_now'
              ? 'border-accent-600 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-neutral-900">Sofort bezahlen</div>
              <div className="text-sm text-gray-600">Direkte Zahlung per Überweisung</div>
            </div>
            <div className="text-2xl font-bold text-accent-600">
              {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)}
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedMethod('pay_later')}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedMethod === 'pay_later'
              ? 'border-accent-600 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-neutral-900">Später bezahlen</div>
              <div className="text-sm text-gray-600">Rechnung mit 14 Tagen Zahlungsziel</div>
            </div>
            <div className="text-accent-600 font-semibold">14 Tage</div>
          </div>
        </button>

        <button
          onClick={() => setSelectedMethod('slice')}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedMethod === 'slice'
              ? 'border-accent-600 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-neutral-900">In Raten zahlen</div>
              <div className="text-sm text-gray-600">12 Monate, 0% Zinsen</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Ab</div>
              <div className="text-xl font-bold text-accent-600">
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseFloat(monthlyPayment))}/Monat
              </div>
            </div>
          </div>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      )}

      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
        <p className="text-sm text-pink-800">
          <strong>Demo-Modus:</strong> Klarna-Integration ist im Testmodus. In Production würde hier das echte Klarna-Widget erscheinen.
        </p>
      </div>

      <button
        onClick={handleKlarnaPayment}
        disabled={isProcessing}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isProcessing ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Zahlung wird verarbeitet...
          </>
        ) : (
          <>
            <FaLock className="mr-2" />
            {selectedMethod === 'pay_now' && 'Sofort bezahlen'}
            {selectedMethod === 'pay_later' && 'Später bezahlen'}
            {selectedMethod === 'slice' && 'In Raten bezahlen'}
            {' '}({new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)})
          </>
        )}
      </button>

      <div className="text-center text-xs text-gray-600">
        <p>
          Mit Klärna bezahlen Sie sicher und flexibel.{' '}
          <a href="#" className="text-accent-600 hover:underline">Mehr erfahren</a>
        </p>
      </div>
    </div>
  )
}
