'use client'

import { useState } from 'react'
import { FaPhone, FaTimes, FaCheck } from 'react-icons/fa'

export default function CallbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'asap'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Hier würde normalerweise ein API-Call erfolgen
    console.log('Callback request:', formData)

    setIsSubmitted(true)

    // Reset nach 3 Sekunden
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({ name: '', phone: '', preferredTime: 'asap' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-6 z-40 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Rückruf anfordern"
      >
        <FaPhone size={20} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-28 right-6 z-40 bg-white rounded-2xl shadow-2xl p-6 w-80">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-primary-100 p-2 rounded-full">
            <FaPhone className="text-accent-600" />
          </div>
          <div>
            <h3 className="font-bold text-neutral-900">Rückruf-Service</h3>
            <p className="text-xs text-gray-500">Kostenlos & unverbindlich</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-600 text-2xl" />
          </div>
          <h4 className="font-bold text-neutral-900 mb-2">Vielen Dank!</h4>
          <p className="text-sm text-gray-600">
            Wir rufen Sie in Kürze zurück.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ihr Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
              placeholder="Max Mustermann"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Telefonnummer *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
              placeholder="+49 123 456789"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Wann dürfen wir anrufen?
            </label>
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
            >
              <option value="asap">So schnell wie möglich</option>
              <option value="morning">Vormittags (9-12 Uhr)</option>
              <option value="afternoon">Nachmittags (12-15 Uhr)</option>
              <option value="evening">Spätnachmittags (15-18 Uhr)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full btn-primary flex items-center justify-center"
          >
            <FaPhone className="mr-2" />
            Jetzt Rückruf anfordern
          </button>

          <p className="text-xs text-gray-500 text-center">
            Durchschnittliche Rückrufzeit: 15 Minuten
          </p>
        </form>
      )}
    </div>
  )
}
