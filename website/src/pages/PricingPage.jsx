import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import CTA from '../components/CTA'
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

const faqs = [
  {
    q: 'Is Leave Studio really 100% free?',
    a: 'Yes. Every feature — AI matching, 10-year roadmaps, bridge optimization, safety scores, and enterprise compliance — is completely free for every user. No paywalls, no "Pro" tiers, no hidden costs.',
  },
  {
    q: 'How does Leave Studio make money if it\'s free?',
    a: 'We operate an aggregator model. Tour operators, GDS providers, and experience platforms pay for premium placement and we earn commissions on bookings made through the platform. The platform is free for travelers — always.',
  },
  {
    q: 'Is it really enterprise-grade? How can free software be secure?',
    a: 'Absolutely. We hold ISO 27001, SOC 2 Type II, and GDPR certifications. Our security infrastructure is the same standard used by financial institutions. Free doesn\'t mean compromised — it means we monetize differently.',
  },
  {
    q: 'Can my company deploy this for our entire workforce?',
    a: 'Yes. Organizations can onboard their entire workforce in minutes — bulk CSV import, SSO integration, and corporate calendar sync. Zero software budget required. Your IT and security teams can audit us fully.',
  },
  {
    q: 'What data do you collect and how is it used?',
    a: 'We collect only what\'s needed to optimize your travel planning: preferences, calendar data, and travel history. Your data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never sell personal data to third parties.',
  },
  {
    q: 'How is this different from a travel booking site?',
    a: 'Booking sites help you buy a trip. Leave Studio helps you architect your life. We\'re a Travel Life-Planning Platform — think financial portfolio management applied to your time, with a 10-year horizon.',
  },
]

const allFeatures = [
  'AI Wellness DNA Matching',
  '10-Year Travel Roadmap',
  'Optimized Bridge Finder',
  'Monthly Affordability Engine',
  'Real-Time Price Intelligence',
  'Female-Centric Safety Scores',
  'Corporate Calendar Sync',
  'Leave Stacking Optimization',
  'Travel Opportunity Heatmap',
  'Burnout Prevention Analytics',
  'Workforce Leave Optimization',
  'ISO 27001 / SOC 2 / GDPR',
  'Multi-Tenant Data Isolation',
  'Full Audit Trails',
  'SSO Integration',
  'API Access',
  'Bulk CSV Import',
  'Custom Branding',
]

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
  return (
    <div className="pt-20">
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
              Zero-Cost, High-Value
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-trust leading-tight"
            >
              Everything. <span className="text-teal">Free. Forever.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              No paywalls. No "Pro" tiers. No credit card. Every feature, every user,
              every organization — completely free, with enterprise-grade security.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Single Plan */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'For Individuals',
                tagline: 'Your Life, Structured',
                description: 'Solo travelers, couples, families — architect your travel future with institutional-grade tools.',
              },
              {
                icon: Building2,
                title: 'For Organizations',
                tagline: 'The $0 Employee Perk',
                description: 'Deploy for your entire workforce. Reduce burnout, optimize leave, zero software budget.',
              },
              {
                icon: Globe,
                title: 'For Partners',
                tagline: 'Join the Ecosystem',
                description: 'Tour operators and GDS providers — list your experiences and reach millions of travelers.',
              },
            ].map((card, i) => (
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
                    <span className="text-4xl font-extrabold text-trust">$0</span>
                    <span className="text-sm text-gray-400 ml-2">forever</span>
                  </div>
                  <a
                    href="/app/"
                    className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-trust text-white hover:bg-trust-light transition-all shadow-md shadow-trust/20"
                  >
                    Get Started Free
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
              Every feature. Every user. <span className="text-teal">No exceptions.</span>
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
              {[
                { icon: Shield, label: 'ISO 27001' },
                { icon: Shield, label: 'SOC 2 Type II' },
                { icon: Shield, label: 'GDPR Compliant' },
                { icon: Shield, label: 'AES-256 Encryption' },
                { icon: Shield, label: 'TLS 1.3' },
              ].map((cert) => (
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
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-trust">
              Frequently asked questions
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
