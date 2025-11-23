'use client'

import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    employeeCount: '',
    productInterest: '',
    quantity: '1',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        employeeCount: '',
        productInterest: '',
        quantity: '1',
        message: ''
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
            Unternehmen *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="input-field"
            placeholder="Ihre Firma GmbH"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Ihr Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Max Mustermann"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="m.mustermann@firma.de"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+49 123 456789"
          />
        </div>

        <div>
          <label htmlFor="employeeCount" className="block text-sm font-semibold text-gray-700 mb-2">
            Anzahl Mitarbeiter
          </label>
          <select
            id="employeeCount"
            name="employeeCount"
            value={formData.employeeCount}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Bitte wählen</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        <div>
          <label htmlFor="productInterest" className="block text-sm font-semibold text-gray-700 mb-2">
            Produktinteresse
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Bitte wählen</option>
            <option value="siebtraeger">Siebträgermaschine</option>
            <option value="vollautomat">Kaffeevollautomat</option>
            <option value="filter">Filtermaschine</option>
            <option value="beratung">Allgemeine Beratung</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
            Anzahl Geräte
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="input-field"
            placeholder="1"
          />
          {parseInt(formData.quantity) >= 3 && (
            <p className="text-primary-600 text-sm mt-2 font-medium">
              ✓ Mengenrabatt verfügbar
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
          placeholder="Teilen Sie uns Ihre Anforderungen und Wünsche mit..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-600">
          Mit dem Absenden des Formulars stimmen Sie unserer{' '}
          <a href="/datenschutz" className="text-primary-600 hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin mr-2">⏳</span>
            Wird gesendet...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <span className="mr-2">✓</span>
            Erfolgreich gesendet!
          </>
        ) : (
          <>
            Angebot anfordern
            <FaPaperPlane className="ml-2" />
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">
            Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>
      )}
    </form>
  )
}
