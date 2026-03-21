import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import {
  MapPin,
  Sparkles,
  Calendar,
  TrendingUp,
  BarChart3,
  Shield,
  Clock,
  Heart,
  Globe,
} from 'lucide-react'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Sparkles,
      titleKey: 'wellnessDna',
      descKey: 'wellnessDnaDesc',
      color: 'bg-teal-50 text-teal-700',
    },
    {
      icon: Calendar,
      titleKey: 'bridgeFinder',
      descKey: 'bridgeFinderDesc',
      color: 'bg-trust-50 text-trust',
    },
    {
      icon: TrendingUp,
      titleKey: 'affordability',
      descKey: 'affordabilityDesc',
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: MapPin,
      titleKey: 'roadmap',
      descKey: 'roadmapDesc',
      color: 'bg-amber-50 text-amber-700',
    },
    {
      icon: Clock,
      titleKey: 'priceIntel',
      descKey: 'priceIntelDesc',
      color: 'bg-violet-50 text-violet-700',
    },
    {
      icon: Heart,
      titleKey: 'safety',
      descKey: 'safetyDesc',
      color: 'bg-rose-50 text-rose-700',
    },
    {
      icon: Shield,
      titleKey: 'security',
      descKey: 'securityDesc',
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      icon: BarChart3,
      titleKey: 'burnout',
      descKey: 'burnoutDesc',
      color: 'bg-cyan-50 text-cyan-700',
    },
    {
      icon: Globe,
      titleKey: 'aggregator',
      descKey: 'aggregatorDesc',
      color: 'bg-orange-50 text-orange-700',
    },
  ]

  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            {t('features.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            {t('features.title')}{' '}
            <span className="text-teal">{t('features.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('features.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.titleKey} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,35,102,0.06)' }}
                transition={{ duration: 0.2 }}
                className="group h-full p-6 rounded-2xl border border-trust/[0.06] bg-white hover:border-trust/15 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-trust mb-2">
                  {t(`features.${feature.titleKey}`)}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(`features.${feature.descKey}`)}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
