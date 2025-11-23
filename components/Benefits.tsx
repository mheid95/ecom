import { FaBuilding, FaHotel, FaUtensils, FaBriefcase } from 'react-icons/fa'

const industries = [
  {
    icon: FaBuilding,
    title: 'Büros & Unternehmen',
    description: 'Steigern Sie die Produktivität mit erstklassigem Kaffee. Perfekt für kleine bis große Büros.',
    benefits: ['Mitarbeiterzufriedenheit', 'Kosteneinsparung', 'Flexible Lösung']
  },
  {
    icon: FaHotel,
    title: 'Hotels & Gastgewerbe',
    description: 'Begeistern Sie Ihre Gäste mit professionellen Kaffeelösungen und Premium-Service.',
    benefits: ['Gästezufriedenheit', 'Frühstücksbuffet', 'Roomservice']
  },
  {
    icon: FaUtensils,
    title: 'Restaurants & Cafés',
    description: 'Professionelle Geräte für höchste Ansprüche in der Gastronomie.',
    benefits: ['Barista-Qualität', 'Hoher Durchsatz', 'Zuverlässigkeit']
  },
  {
    icon: FaBriefcase,
    title: 'Öffentliche Einrichtungen',
    description: 'Robuste Lösungen für Krankenhäuser, Universitäten und Behörden.',
    benefits: ['Wartungsarm', 'Hygienisch', 'Langlebig']
  }
]

export default function Benefits() {
  return (
    <section className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-coffee-900 mb-4">
          Branchen & Lösungen
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Maßgeschneiderte Kaffeelösungen für verschiedene Branchen und Anforderungen
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="card p-8">
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <industry.icon className="text-white text-2xl" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-coffee-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-coffee-900 to-coffee-800 rounded-2xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Individuelle Beratung für Ihre Branche
        </h3>
        <p className="text-coffee-100 text-lg mb-8 max-w-2xl mx-auto">
          Unsere Experten analysieren Ihre Anforderungen und entwickeln die optimale Kaffeelösung für Ihr Unternehmen.
        </p>
        <a href="/kontakt" className="btn-primary inline-block">
          Jetzt beraten lassen
        </a>
      </div>
    </section>
  )
}
