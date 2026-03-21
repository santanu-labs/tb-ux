import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const { t } = useTranslation()

  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      name: 'Sarah Chen',
      role: 'HR Director',
      company: 'Meridian Group',
      avatar: 'SC',
      rating: 5,
    },
    {
      quote: t('testimonials.quote2'),
      name: 'James Okafor',
      role: 'Software Engineer',
      company: null,
      avatar: 'JO',
      rating: 5,
    },
    {
      quote: t('testimonials.quote3'),
      name: 'Lucas Andersen',
      role: 'People Operations Lead',
      company: 'Stratos Inc.',
      avatar: 'LA',
      rating: 5,
    },
    {
      quote: t('testimonials.quote4'),
      name: 'Elena Rossi',
      role: 'Freelance Designer',
      company: null,
      avatar: 'ER',
      rating: 5,
    },
    {
      quote: t('testimonials.quote5'),
      name: 'Maria Torres',
      role: 'VP of Employee Experience',
      company: 'NovaBridge',
      avatar: 'MT',
      rating: 5,
    },
    {
      quote: t('testimonials.quote6'),
      name: 'David Kim',
      role: 'Product Manager',
      company: null,
      avatar: 'DK',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-slate-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            {t('testimonials.title')}{' '}
            <span className="text-teal">{t('testimonials.titleHighlight')}</span>{' '}
            {t('testimonials.titleEnd')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t('testimonials.subtitle')}</p>
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
