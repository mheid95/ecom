'use client'

import { FaPhone, FaWhatsapp, FaEnvelope, FaCalendar } from 'react-icons/fa'

export default function QuickContactBar() {
  const handleWhatsApp = () => {
    const whatsappNumber = '4912345678'
    const message = encodeURIComponent('Hallo! Ich interessiere mich für Ihre Kaffeemaschinen.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-4 sticky top-[88px] z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white text-center sm:text-left">
            <p className="font-semibold">
              🎯 Brauchen Sie Hilfe? Wir sind für Sie da!
            </p>
            <p className="text-sm text-primary-100">
              Mo-Fr: 8-18 Uhr | Antwortzeit: &lt; 2 Stunden
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+4912345678"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <FaPhone />
              <span className="hidden sm:inline">Anrufen</span>
            </a>

            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <FaWhatsapp />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <a
              href="mailto:info@kaffee-profi.de"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <FaEnvelope />
              <span className="hidden sm:inline">E-Mail</span>
            </a>

            <a
              href="/kontakt"
              className="bg-white text-accent-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex items-center space-x-2"
            >
              <FaCalendar />
              <span>Beratung</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
