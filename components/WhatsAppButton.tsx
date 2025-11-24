'use client'

import { useState } from 'react'
import { FaWhatsapp, FaTimes, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  // WhatsApp Business Nummer (Format: Ländervorwahl ohne +, dann Nummer ohne Leerzeichen)
  const whatsappNumber = '4912345678' // Beispiel: +49 123 456 78

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const quickMessages = [
    {
      icon: FaComments,
      title: 'Allgemeine Anfrage',
      message: 'Hallo! Ich interessiere mich für Ihre professionellen Kaffeemaschinen und hätte gerne weitere Informationen.'
    },
    {
      icon: FaPhone,
      title: 'Beratungstermin',
      message: 'Hallo! Ich würde gerne einen Beratungstermin für Kaffeelösungen vereinbaren.'
    },
    {
      icon: FaEnvelope,
      title: 'Angebot anfordern',
      message: 'Hallo! Ich möchte ein individuelles Angebot für professionelle Kaffeemaschinen erhalten.'
    }
  ]

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Welcome Message */}
        {showWelcome && !isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs mb-2 animate-bounce">
            <button
              onClick={() => setShowWelcome(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes size={14} />
            </button>
            <div className="flex items-start space-x-3">
              <FaWhatsapp className="text-green-500 text-2xl flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-coffee-900 mb-1">
                  Haben Sie Fragen?
                </p>
                <p className="text-sm text-gray-600">
                  Kontaktieren Sie uns direkt über WhatsApp!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Message Menu */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-80 mb-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-500 text-2xl" />
                <div>
                  <h3 className="font-bold text-coffee-900">WhatsApp Chat</h3>
                  <p className="text-xs text-gray-500">Antwort in wenigen Minuten</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="space-y-2">
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(msg.message)}
                  className="w-full bg-gray-50 hover:bg-green-50 rounded-lg p-3 text-left transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                      <msg.icon className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-coffee-900">
                        {msg.title}
                      </div>
                      <div className="text-xs text-gray-600 line-clamp-1">
                        {msg.message}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleWhatsAppClick('Hallo! Ich habe eine Frage.')}
              className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" />
              Chat starten
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="WhatsApp Chat öffnen"
        >
          {isOpen ? (
            <FaTimes size={28} />
          ) : (
            <FaWhatsapp size={32} className="group-hover:animate-pulse" />
          )}
        </button>

        {/* Online Status Indicator */}
        {!isOpen && (
          <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        )}
      </div>
    </>
  )
}
