'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FaCreditCard, FaLock } from 'react-icons/fa'

// Initialisiere Stripe (in Production mit echtem API Key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo')

interface StripePaymentProps {
  amount: number
  billingData: any
  onSuccess: (paymentId: string) => void
}

function CheckoutForm({ amount, billingData, onSuccess }: StripePaymentProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)
    setError(null)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setError('Kartenelement nicht gefunden')
      setIsProcessing(false)
      return
    }

    try {
      // In Production: Erstelle Payment Intent auf dem Server
      // Hier simulieren wir die Zahlung für Demo-Zwecke

      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: billingData.name,
          email: billingData.email,
          phone: billingData.phone,
          address: {
            line1: billingData.street,
            postal_code: billingData.zipCode,
            city: billingData.city,
            country: 'DE',
          },
        },
      })

      if (stripeError) {
        setError(stripeError.message || 'Zahlung fehlgeschlagen')
        setIsProcessing(false)
        return
      }

      // Demo: Simuliere erfolgreiche Zahlung
      setTimeout(() => {
        const paymentId = `STRIPE-${Date.now()}`
        onSuccess(paymentId)
      }, 1500)

    } catch (err) {
      setError('Ein Fehler ist aufgetreten')
      setIsProcessing(false)
    }
  }

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Inter", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          <FaCreditCard className="inline mr-2" />
          Kreditkartendaten
        </label>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Demo-Modus:</strong> Verwenden Sie die Testkartennummer{' '}
          <code className="bg-blue-100 px-2 py-1 rounded">4242 4242 4242 4242</code>{' '}
          mit beliebigem zukünftigen Datum und CVC.
        </p>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
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
            Jetzt bezahlen ({new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)})
          </>
        )}
      </button>
    </form>
  )
}

export default function StripePayment(props: StripePaymentProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  )
}
