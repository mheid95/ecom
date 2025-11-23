'use client'

import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { FaPaypal } from 'react-icons/fa'

interface PayPalPaymentProps {
  amount: number
  billingData: any
  onSuccess: (paymentId: string) => void
}

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'demo',
  currency: 'EUR',
  intent: 'capture',
}

export default function PayPalPayment({ amount, billingData, onSuccess }: PayPalPaymentProps) {
  const [error, setError] = useState<string | null>(null)

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toFixed(2),
            currency_code: 'EUR',
          },
          description: 'Kaffeemaschinen B2B Bestellung',
        },
      ],
    })
  }

  const onApprove = async (data: any, actions: any) => {
    try {
      const details = await actions.order.capture()
      const paymentId = `PAYPAL-${details.id}`
      onSuccess(paymentId)
    } catch (err) {
      setError('PayPal-Zahlung fehlgeschlagen')
    }
  }

  const onError = (err: any) => {
    console.error('PayPal Error:', err)
    setError('Ein Fehler bei der PayPal-Zahlung ist aufgetreten')
  }

  return (
    <div className="space-y-6">
      <div className="text-center py-4">
        <FaPaypal className="text-6xl text-[#0070BA] mx-auto mb-4" />
        <p className="text-gray-700 mb-2">
          Bezahlen Sie sicher mit PayPal
        </p>
        <p className="text-sm text-gray-600">
          Sie werden zu PayPal weitergeleitet, um die Zahlung abzuschließen
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Demo-Modus:</strong> PayPal-Integration ist im Testmodus. In Production würde hier der echte PayPal-Button erscheinen.
        </p>
      </div>

      {/* Demo Button - In Production würde hier PayPalButtons erscheinen */}
      <button
        onClick={() => {
          // Simuliere PayPal-Zahlung
          setTimeout(() => {
            const paymentId = `PAYPAL-${Date.now()}`
            onSuccess(paymentId)
          }, 1500)
        }}
        className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
      >
        <FaPaypal className="mr-2 text-2xl" />
        Mit PayPal bezahlen ({new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)})
      </button>

      {/* Für Production:
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          style={{ layout: 'vertical' }}
        />
      </PayPalScriptProvider>
      */}
    </div>
  )
}
