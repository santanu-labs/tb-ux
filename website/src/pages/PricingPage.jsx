import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'
import AnimatedSection from '../components/AnimatedSection'
import CTA from '../components/CTA'
import { useRegion } from '../i18n/RegionContext'
import {
  Check,
  HelpCircle,
  ChevronDown,
  Zap,
  Shield,
  ArrowRight,
  Heart,
  Building2,
  Globe,
} from 'lucide-react'
import { useState } from 'react'

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-trust/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-trust pr-4">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
      </motion.div>
    </div>
  )
}

export default function PricingPage() {
  const { t } = useTranslation()
  const { region } = useRegion()

  const faqs = [
    { q: t('pricingPage.faq1q'), a: t('pricingPage.faq1a') },
    { q: t('pricingPage.faq2q'), a: t('pricingPage.faq2a') },
    { q: t('pricingPage.faq3q'), a: t('pricingPage.faq3a') },
    { q: t('pricingPage.faq4q'), a: t('pricingPage.faq4a') },
    { q: t('pricingPage.faq5q'), a: t('pricingPage.faq5a') },
    { q: t('pricingPage.faq6q'), a: t('pricingPage.faq6a') },
  ]

  const allFeatures = Array.from({ length: 18 }, (_, i) => t(`pricingPage.feat${i + 1}`))

  const compliance = [
    { icon: Shield, label: t('pricingPage.isoLabel') },
    { icon: Shield, label: t('pricingPage.socLabel') },
    { icon: Shield, label: t('pricingPage.gdprLabel') },
    { icon: Shield, label: t('pricingPage.aesLabel') },
    { icon: Shield, label: t('pricingPage.tlsLabel') },
  ]

  const cards = [
    {
      icon: Heart,
      title: t('pricingPage.forIndividuals'),
      tagline: t('pricingPage.forIndividualsTag'),
      description: t('pricingPage.forIndividualsDesc'),
    },
    {
      icon: Building2,
      title: t('pricingPage.forOrganizations'),
      tagline: t('pricingPage.forOrganizationsTag'),
      description: t('pricingPage.forOrganizationsDesc'),
    },
    {
      icon: Globe,
      title: t('pricingPage.forPartners'),
      tagline: t('pricingPage.forPartnersTag'),
      description: t('pricingPage.forPartnersDesc'),
    },
  ]

  return (
    <div className="pt-20">
      <SEOHead
        title="Pricing — Everything Free Forever"
        description="Leave Studio is 100% free for individuals and organizations. No paywalls, no Pro tiers, no credit card. Enterprise-grade travel planning at zero cost."
        path="/pricing"
      />
      {/* Hero — Zero Cost Philosophy */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-trust-50 via-slate-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 text-teal-700 text-sm font-semibold mb-6 border border-teal/15"
            >
              <Zap className="w-4 h-4" />
              {t('pricingPage.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-trust leading-tight"
            >
              {t('pricingPage.title')}{' '}
              <span className="text-teal">{t('pricingPage.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              {t('pricingPage.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Single Plan */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-full flex flex-col p-8 rounded-2xl border border-trust/[0.06] bg-white hover:shadow-lg hover:shadow-trust/[0.04] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-trust-50 flex items-center justify-center mb-4">
                    <card.icon className="w-6 h-6 text-trust" />
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-1">{card.title}</h3>
                  <p className="text-sm text-teal font-semibold mb-3">{card.tagline}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{card.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-trust">
                      {`${region.currency.symbol}0`}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">{t('pricingPage.forever')}</span>
                  </div>
                  <a
                    href="/app/"
                    className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-trust text-white hover:bg-trust-light transition-all shadow-md shadow-trust/20"
                  >
                    {t('pricingPage.getStarted')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Included */}
      <section className="py-24 bg-slate-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-trust">
              {t('pricingPage.allFeatures')}{' '}
              <span className="text-teal">{t('pricingPage.allFeaturesHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-trust/[0.06] p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-teal flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-8 py-8 px-6 rounded-2xl bg-trust-50 border border-trust/[0.06]">
              {compliance.map((cert) => (
                <div key={cert.label} className="flex items-center gap-2 text-sm font-semibold text-trust/60">
                  <cert.icon className="w-4 h-4 text-teal" />
                  {cert.label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              {t('pricingPage.faqBadge')}
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-trust">
              {t('pricingPage.faqTitle')}
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-trust/[0.06] px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </div>
  )
}
