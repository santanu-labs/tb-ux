import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { UserPlus, Sparkles, Layers, Plane } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Portfolio',
    description:
      'Sign up in seconds — as an individual or have your organization deploy for the entire team. No credit card, no procurement cycle.',
    details: ['Instant free account', 'Corporate bulk onboarding', 'SSO & calendar sync'],
    color: 'from-trust to-trust-light',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Define Your Wellness DNA',
    description:
      'Tell us your travel style, stress patterns, budget range, and life goals. Our AI builds your unique traveler profile.',
    details: ['Preference profiling', 'Budget & risk tolerance', 'Wellness pattern analysis'],
    color: 'from-teal-600 to-teal',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Optimize Your Calendar',
    description:
      'We sync your corporate holidays, public calendars, and weekends to find every hidden travel window — automatically.',
    details: ['Bridge day detection', 'Leave stacking engine', 'Price-optimized windows'],
    color: 'from-trust-400 to-trust-300',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Architect Your Decade',
    description:
      'Build a 1-10 year travel roadmap with monthly affordability plans. Track, adjust, and live your best life — all free.',
    details: ['Financial dashboard view', 'Monthly savings plans', 'Real-time adjustments'],
    color: 'from-teal-700 to-teal-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            From zero to <span className="text-teal">10-year roadmap</span> in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Four steps to architect your travel future. No setup fees, no learning curve, no limits.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-trust/20 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs font-bold text-teal tracking-widest uppercase mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>

                  <ul className="space-y-1.5">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
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
