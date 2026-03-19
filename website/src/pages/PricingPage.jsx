import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import { Check, HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Is Leave Studio really free for individuals?',
    a: 'Yes! Individual accounts are completely free. You get AI destination matching, the smart holiday planner, 5-year trip planner, and a personal dashboard at no cost. Team features require a paid plan.',
  },
  {
    q: 'How does the team trial work?',
    a: 'You get full access to all Team plan features for 14 days. No credit card required. At the end of the trial, you can choose a plan or your account will switch to the free Individual tier.',
  },
  {
    q: 'Can I start as an individual and upgrade to a team later?',
    a: 'Absolutely. You can upgrade anytime and invite your team. Your personal travel data, preferences, and trip history carry over seamlessly.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit/debit cards, UPI, net banking, and wire transfers for Enterprise plans. All payments are processed securely through our payment partners.',
  },
  {
    q: 'Do you offer discounts for annual billing?',
    a: 'Yes! Annual billing gives you 2 months free (save ~17%). Contact our sales team for volume discounts on 500+ users.',
  },
  {
    q: 'What kind of support is included?',
    a: 'Individual users get community support. Team plans include priority email and chat (4hr response). Enterprise includes a dedicated account manager and phone support.',
  },
]

const comparisonFeatures = [
  { feature: 'Users', individual: '1', team: 'Up to 500', enterprise: 'Unlimited' },
  { feature: 'AI destination matching', individual: true, team: true, enterprise: 'Advanced + Custom' },
  { feature: 'Smart holiday planner', individual: true, team: true, enterprise: true },
  { feature: '5-year trip planner', individual: true, team: true, enterprise: true },
  { feature: 'Personal dashboard', individual: true, team: true, enterprise: true },
  { feature: 'EMI payment options', individual: true, team: true, enterprise: true },
  { feature: 'Team admin dashboard', individual: false, team: true, enterprise: 'Full + Custom' },
  { feature: 'Travel perks management', individual: false, team: true, enterprise: true },
  { feature: 'Custom branding & subdomain', individual: false, team: true, enterprise: true },
  { feature: 'Audit logs', individual: false, team: true, enterprise: true },
  { feature: 'SSO integration', individual: false, team: false, enterprise: true },
  { feature: 'API access', individual: false, team: false, enterprise: true },
  { feature: 'Dedicated support', individual: false, team: false, enterprise: true },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{faq.q}</span>
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
      <Pricing />

      {/* Comparison table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Compare plans in detail
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Individual</th>
                    <th className="text-center py-4 px-4 font-semibold text-brand">Team</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-50">
                      <td className="py-3.5 pr-4 text-gray-700">{row.feature}</td>
                      {['individual', 'team', 'enterprise'].map((plan) => (
                        <td key={plan} className="py-3.5 px-4 text-center">
                          {typeof row[plan] === 'boolean' ? (
                            row[plan] ? (
                              <Check className="w-4 h-4 text-brand-500 mx-auto" />
                            ) : (
                              <span className="text-gray-300">—</span>
                            )
                          ) : (
                            <span className="text-gray-600 text-xs font-medium">{row[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-100 px-6">
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
