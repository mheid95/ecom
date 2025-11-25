import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Michael Schmidt',
    company: 'Tech Solutions GmbH',
    role: 'Geschäftsführer',
    text: 'Die Kaffeemaschine hat die Stimmung im Büro deutlich verbessert. Die Beratung war exzellent und die Installation verlief reibungslos. Absolut empfehlenswert!',
    rating: 5
  },
  {
    name: 'Sarah Weber',
    company: 'Grand Hotel Berlin',
    role: 'F&B Manager',
    text: 'Unsere Gäste sind begeistert von der Kaffeequalität. Der Service ist erstklassig und die Maschinen sind absolut zuverlässig. Eine Investition, die sich gelohnt hat.',
    rating: 5
  },
  {
    name: 'Thomas Müller',
    company: 'Café Centrale',
    role: 'Inhaber',
    text: 'Als Café-Betreiber habe ich höchste Ansprüche. Die Siebträgermaschine erfüllt alle Erwartungen und der technische Support ist hervorragend. Top!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="section-container bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
          Das sagen unsere Kunden
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Über 500 zufriedene B2B-Kunden vertrauen auf unsere Expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card p-8 relative">
            <FaQuoteLeft className="text-primary-200 text-4xl mb-4" />

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            <div className="border-t border-gray-200 pt-4">
              <div className="font-bold text-neutral-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
              <div className="text-sm text-accent-600 font-medium">{testimonial.company}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-8 bg-white rounded-xl p-6 shadow-lg">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600">4.9/5</div>
            <div className="text-sm text-gray-600">Durchschnitt</div>
          </div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600">500+</div>
            <div className="text-sm text-gray-600">Bewertungen</div>
          </div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-600">98%</div>
            <div className="text-sm text-gray-600">Weiterempfehlung</div>
          </div>
        </div>
      </div>
    </section>
  )
}
