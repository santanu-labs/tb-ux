import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import { Check, ArrowRight, Sparkles, Heart } from 'lucide-react'
import { useRegion } from '../i18n/RegionContext'

export default function Pricing() {
  const { t } = useTranslation()
  const { region } = useRegion()

  const teamPriceFormatted = Number.isInteger(region.teamPrice)
    ? String(region.teamPrice)
    : region.teamPrice.toFixed(2)
  const teamPriceDisplay = `${region.currency.symbol}${teamPriceFormatted}`

  const plans = [
    {
      name: t('pricing.individual'),
      description: t('pricing.individualDesc'),
      price: t('pricing.free'),
      period: '',
      features: [
        t('pricing.feat_aiMatch'),
        t('pricing.feat_holiday'),
        t('pricing.feat_dashboard'),
        t('pricing.feat_5year'),
        t('pricing.feat_emi'),
        t('pricing.feat_community'),
      ],
      cta: t('pricing.getStarted'),
      popular: false,
      icon: Heart,
    },
    {
      name: t('pricing.team'),
      description: t('pricing.teamDesc'),
      price: teamPriceDisplay,
      period: t('pricing.perUserMonth'),
      features: [
        t('pricing.feat_everything'),
        t('pricing.feat_500users'),
        t('pricing.feat_admin'),
        t('pricing.feat_perks'),
        t('pricing.feat_csv'),
        t('pricing.feat_branding'),
        t('pricing.feat_audit'),
        t('pricing.feat_priority'),
      ],
      cta: t('pricing.startTrial'),
      popular: true,
      icon: null,
    },
    {
      name: t('pricing.enterprise'),
      description: t('pricing.enterpriseDesc'),
      price: t('pricing.custom'),
      period: '',
      features: [
        t('pricing.feat_everythingTeam'),
        t('pricing.feat_unlimited'),
        t('pricing.feat_advancedAi'),
        t('pricing.feat_manager'),
        t('pricing.feat_api'),
        t('pricing.feat_sla'),
        t('pricing.feat_soc2'),
        t('pricing.feat_onPremise'),
      ],
      cta: t('pricing.contactSales'),
      popular: false,
      icon: null,
    },
  ]

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            {t('pricing.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            {t('pricing.title')}{' '}
            <span className="text-brand">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">{t('pricing.subtitle')}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative h-full flex flex-col p-8 rounded-2xl border ${
                  plan.popular
                    ? 'border-brand bg-white shadow-xl shadow-brand/10'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-brand text-white text-xs font-bold shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/app/"
                  className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-brand text-white hover:bg-brand-light shadow-md shadow-brand/20'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
