import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Leave Studio found 14 extra travel days in my 2026 calendar that I never would have spotted. The bridge optimization is genuinely life-changing — and it\'s free.',
    name: 'Sarah Chen',
    role: 'HR Director',
    company: 'Meridian Group',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote:
      'I replaced my spreadsheet with a 10-year travel roadmap. The monthly affordability engine turned a $5,350 New Zealand trip into $112/month. Suddenly it felt achievable.',
    name: 'James Okafor',
    role: 'Software Engineer',
    company: null,
    avatar: 'JO',
    rating: 5,
  },
  {
    quote:
      'We deployed Leave Studio for 200 employees at zero cost. The burnout analytics alone justified it — our leave utilization improved 34% in the first quarter.',
    name: 'Lucas Andersen',
    role: 'People Operations Lead',
    company: 'Stratos Inc.',
    avatar: 'LA',
    rating: 5,
  },
  {
    quote:
      'As a solo female traveler, the safety scores are invaluable. Real-time ratings for night safety, transport, and area-specific advisories — I\'ve never felt more confident planning trips.',
    name: 'Elena Rossi',
    role: 'Freelance Designer',
    company: null,
    avatar: 'ER',
    rating: 5,
  },
  {
    quote:
      'The fact that this is enterprise-grade and completely free is hard to believe. ISO 27001, SOC 2 — we ran it through our security team and they were impressed.',
    name: 'Maria Torres',
    role: 'VP of Employee Experience',
    company: 'NovaBridge',
    avatar: 'MT',
    rating: 5,
  },
  {
    quote:
      'Leave Studio told me flights to Bali were 27% cheaper during my optimized bridge window. I saved $215 on a single booking. This platform pays for itself — except it\'s free.',
    name: 'David Kim',
    role: 'Product Manager',
    company: null,
    avatar: 'DK',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-slate-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            Trusted by <span className="text-teal">Professionals</span> Worldwide
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            From solo travelers to enterprise HR teams — see how Leave Studio is
            engineering better lives.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-2xl border border-trust/[0.06] bg-white hover:shadow-lg hover:shadow-trust/[0.04] transition-shadow"
              >
                <Quote className="w-8 h-8 text-trust-200 mb-4" />

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-teal text-teal" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-trust/[0.04]">
                  <div className="w-10 h-10 rounded-full bg-trust-50 text-trust flex items-center justify-center text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-trust">{testimonial.name}</div>
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
