'use client'

import { useState } from 'react'
import { FaPaperPlane, FaWhatsapp, FaPhone, FaCheckCircle } from 'react-icons/fa'

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    employeeCount: '',
    productInterest: '',
    quantity: '1',
    budget: '',
    urgency: 'normal',
    preferredContact: 'email',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuliere Form Submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')

    // Reset nach 3 Sekunden
    setTimeout(() => {
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        employeeCount: '',
        productInterest: '',
        quantity: '1',
        budget: '',
        urgency: 'normal',
        preferredContact: 'email',
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

  const handleWhatsApp = () => {
    const message = `Hallo! Ich interessiere mich für ${formData.productInterest || 'Ihre Kaffeemaschinen'}.
Firma: ${formData.company}
Name: ${formData.name}
Telefon: ${formData.phone}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/4912345678?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h3 className="font-semibold text-neutral-900 mb-3">
          ⚡ Schneller Kontakt gewünscht?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2 text-xl" />
            WhatsApp Chat starten
          </button>
          <a
            href="tel:+4912345678"
            className="bg-accent-600 hover:bg-accent-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Sofort anrufen
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Oder nutzen Sie unser Formular</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basis Informationen */}
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-neutral-900 mb-4">Ihre Kontaktdaten</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>

        {/* Projekt Details */}
        <div className="bg-blue-50 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-neutral-900 mb-4">Ihr Projekt</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <option value="mehrere">Mehrere Gerätetypen</option>
                <option value="beratung">Noch unsicher - Beratung gewünscht</option>
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
              />
              {parseInt(formData.quantity) >= 3 && (
                <p className="text-accent-600 text-sm mt-2 font-medium">
                  ✓ Mengenrabatt verfügbar!
                </p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Budget (optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Bitte wählen</option>
                <option value="unter-5000">Unter 5.000 €</option>
                <option value="5000-10000">5.000 - 10.000 €</option>
                <option value="10000-25000">10.000 - 25.000 €</option>
                <option value="25000-50000">25.000 - 50.000 €</option>
                <option value="ueber-50000">Über 50.000 €</option>
              </select>
            </div>

            <div>
              <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                Dringlichkeit
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="input-field"
              >
                <option value="normal">Normal (innerhalb 1 Woche)</option>
                <option value="urgent">Dringend (innerhalb 48h)</option>
                <option value="very-urgent">Sehr dringend (heute)</option>
                <option value="planning">Nur Planung</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
                Bevorzugter Kontaktweg
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="input-field"
              >
                <option value="email">E-Mail</option>
                <option value="phone">Telefon</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="videocall">Videocall</option>
              </select>
            </div>
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
            placeholder="Beschreiben Sie Ihre Anforderungen, Fragen oder Wünsche..."
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            Mit dem Absenden des Formulars stimmen Sie unserer{' '}
            <a href="/datenschutz" className="text-accent-600 hover:underline">
              Datenschutzerklärung
            </a>{' '}
            zu. Ihre Daten werden vertraulich behandelt.
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
              <FaCheckCircle className="mr-2" />
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
              ✓ Vielen Dank! Wir melden uns innerhalb von {formData.urgency === 'very-urgent' ? '2 Stunden' : formData.urgency === 'urgent' ? '24 Stunden' : '48 Stunden'} bei Ihnen.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
