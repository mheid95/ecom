import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-accent-400">Kaffee</span>Profi B2B
            </h3>
            <p className="text-neutral-300 mb-4">
              Ihr zuverlässiger Partner für professionelle Kaffeemaschinen im B2B-Bereich.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-accent-400 transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-accent-400 transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/4912345678" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-green-400 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/produkte" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Produkte
                </Link>
              </li>
              <li>
                <Link href="/loesungen" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Lösungen
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-neutral-300">Beratung & Planung</li>
              <li className="text-neutral-300">Installation & Schulung</li>
              <li className="text-neutral-300">Wartung & Service</li>
              <li className="text-neutral-300">Leasing & Finanzierung</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-accent-400" />
                <span className="text-neutral-300">
                  Musterstraße 123<br />
                  12345 Berlin, Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent-400" />
                <a href="tel:+4912345678" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  +49 (0) 123 456 78
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent-400" />
                <a href="mailto:info@kaffee-profi.de" className="text-neutral-300 hover:text-accent-400 transition-colors">
                  info@kaffee-profi.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} KaffeeProfi B2B. Alle Rechte vorbehalten.</p>
          <div className="mt-2 space-x-4">
            <Link href="/impressum" className="hover:text-accent-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent-400 transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-accent-400 transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
