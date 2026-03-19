import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { Check, ArrowRight, Sparkles, Heart } from 'lucide-react'

const plans = [
  {
    name: 'Individual',
    description: 'For solo travelers who want smarter trip planning',
    price: 'Free',
    period: '',
    features: [
      'AI destination matching',
      'Smart holiday planner',
      'Personal travel dashboard',
      '5-year trip planner',
      'EMI payment options',
      'Community support',
    ],
    cta: 'Get Started Free',
    popular: false,
    icon: Heart,
  },
  {
    name: 'Team',
    description: 'For companies managing travel perks for their people',
    price: '₹99',
    period: '/user/month',
    features: [
      'Everything in Individual',
      'Up to 500 users',
      'Admin dashboard & analytics',
      'Travel perks management',
      'CSV bulk import & SSO',
      'Custom branding & subdomain',
      'Audit logs',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: null,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom requirements',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Team',
      'Unlimited users',
      'Advanced AI recommendations',
      'Dedicated account manager',
      'Custom integrations & API',
      'SLA guarantee',
      'SOC 2 compliance',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    popular: false,
    icon: null,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Free for individuals.{' '}
            <span className="text-brand">Powerful for teams.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Start planning trips for free. Upgrade when your company needs team-wide travel benefits.
          </p>
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
                      Most Popular
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
