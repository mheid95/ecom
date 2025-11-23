import { FaCog, FaHeadset, FaTruck, FaAward, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: FaCog,
    title: 'Professionelle Installation',
    description: 'Fachgerechte Installation und Einweisung durch unsere zertifizierten Techniker vor Ort.'
  },
  {
    icon: FaHeadset,
    title: '24/7 Premium Support',
    description: 'Rund um die Uhr erreichbar für alle technischen Fragen und Notfälle.'
  },
  {
    icon: FaTruck,
    title: 'Schnelle Lieferung',
    description: 'Express-Lieferung innerhalb von 48h für alle lagernden Produkte.'
  },
  {
    icon: FaAward,
    title: 'Premium Qualität',
    description: 'Nur Markengeräte von führenden Herstellern mit Garantie und Zertifizierung.'
  },
  {
    icon: FaChartLine,
    title: 'Flexible Finanzierung',
    description: 'Individuelle Leasing- und Finanzierungsmodelle für Ihr Budget.'
  },
  {
    icon: FaShieldAlt,
    title: 'Wartungsverträge',
    description: 'Umfassende Service-Pakete für maximale Betriebssicherheit.'
  }
]

export default function Features() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-4">
          Warum KaffeeProfi B2B?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professionelle Komplettlösungen mit persönlicher Betreuung und exzellentem Service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
            <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <feature.icon className="text-primary-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-coffee-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
