import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <CTASection />
    </>
  )
}
