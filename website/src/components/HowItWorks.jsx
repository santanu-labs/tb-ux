import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { UserPlus, Compass, Sparkles, Plane } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign Up in Seconds',
    description:
      'Create your free account as an individual, or have your company set up a team workspace with custom branding.',
    details: ['Free individual accounts', 'Team workspaces for companies', 'SSO & CSV import for teams'],
    color: 'from-brand-600 to-brand-400',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Set Your Preferences',
    description:
      'Tell us what you love — beach or mountains, adventure or relaxation, budget or luxury. Our AI learns your style.',
    details: ['Destination types & climate', 'Travel style & budget', 'Activity interests'],
    color: 'from-blue-600 to-blue-400',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Discover & Plan',
    description:
      'Get AI-matched destinations, find optimal travel windows around holidays, and build your perfect itinerary.',
    details: ['AI-powered matching', 'Smart holiday optimizer', 'Budget & EMI planning'],
    color: 'from-violet-600 to-violet-400',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Book & Travel',
    description:
      'Use your credits and perks to book. Track everything in your dashboard — or let your admin handle it for the team.',
    details: ['Perk & credit utilization', 'Real-time trip tracking', 'Team admin dashboard'],
    color: 'from-emerald-600 to-emerald-400',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            From signup to takeoff in <span className="text-brand">4 simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Whether you're a solo traveler or a company of thousands — getting started takes minutes.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-gray-300 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs font-bold text-brand-400 tracking-widest uppercase mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>

                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
