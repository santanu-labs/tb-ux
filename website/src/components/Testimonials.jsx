import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Leave Studio transformed how we handle travel perks. The AI matching is surprisingly accurate — our team loves the personalized recommendations.',
    name: 'Priya Mehta',
    role: 'HR Director',
    company: 'TechNova Solutions',
    avatar: 'PM',
    rating: 5,
  },
  {
    quote:
      'I signed up as an individual traveler and was blown away. The holiday planner found me a 9-day trip window I never would have spotted on my own.',
    name: 'Karthik Rajan',
    role: 'Solo Traveler',
    company: null,
    avatar: 'KR',
    rating: 5,
  },
  {
    quote:
      'Setting up was incredibly smooth. We imported 200 employees via CSV and had everyone onboarded within a day. The admin dashboard gives us complete visibility.',
    name: 'Arjun Kapoor',
    role: 'People Operations Lead',
    company: 'CloudStack Inc.',
    avatar: 'AK',
    rating: 5,
  },
  {
    quote:
      'As a freelancer, I use Leave Studio to plan all my trips. The AI matched me with Pondicherry at 96% — it was the best trip I\'ve ever taken. And the EMI option made it affordable.',
    name: 'Meera Nair',
    role: 'Freelance Designer',
    company: null,
    avatar: 'MN',
    rating: 5,
  },
  {
    quote:
      'Our employee satisfaction scores jumped 23% after introducing Leave Studio. Travel perks are now our most valued benefit — ahead of even stock options.',
    name: 'Anita Desai',
    role: 'VP of Employee Experience',
    company: 'InnovateTech',
    avatar: 'AD',
    rating: 5,
  },
  {
    quote:
      'The 5-year trip planner changed how I think about travel. I\'ve mapped out my next 3 vacations and I\'m actually saving towards them. It makes dreaming feel actionable.',
    name: 'Rohan Verma',
    role: 'Software Engineer',
    company: null,
    avatar: 'RV',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Loved by <span className="text-brand">travelers & teams</span> alike
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            See what individual travelers and companies are saying about planning trips with Leave Studio.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-brand-200 mb-4" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">
                      {testimonial.role}
                      {testimonial.company && ` · ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
