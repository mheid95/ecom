'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-coffee-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center space-x-6 text-sm">
          <a href="tel:+4912345678" className="flex items-center hover:text-coffee-200 transition-colors">
            <FaPhone className="mr-2" />
            +49 (0) 123 456 78
          </a>
          <a href="mailto:info@kaffee-profi.de" className="flex items-center hover:text-coffee-200 transition-colors">
            <FaEnvelope className="mr-2" />
            info@kaffee-profi.de
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-coffee-900">
            <span className="text-primary-600">Kaffee</span>Profi B2B
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/produkte" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Produkte
            </Link>
            <Link href="/loesungen" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Lösungen
            </Link>
            <Link href="/ueber-uns" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Über uns
            </Link>
            <Link href="/kontakt" className="btn-primary">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/produkte" className="block text-gray-700 hover:text-primary-600 font-medium">
              Produkte
            </Link>
            <Link href="/loesungen" className="block text-gray-700 hover:text-primary-600 font-medium">
              Lösungen
            </Link>
            <Link href="/ueber-uns" className="block text-gray-700 hover:text-primary-600 font-medium">
              Über uns
            </Link>
            <Link href="/kontakt" className="block btn-primary text-center">
              Kontakt
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
