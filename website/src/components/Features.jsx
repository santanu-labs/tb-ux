import { motion } from 'framer-motion'
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

const features = [
  {
    icon: Sparkles,
    title: 'AI Wellness DNA Matching',
    description:
      'Our AI analyzes your stress patterns, travel style, and preferences to match you with destinations that genuinely recharge you.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Calendar,
    title: 'Optimized Bridge Finder',
    description:
      'Automatically syncs corporate holidays, public calendars, and weekends to find 9-day windows using only 3 leave days.',
    color: 'bg-trust-50 text-trust',
  },
  {
    icon: TrendingUp,
    title: 'Monthly Affordability Engine',
    description:
      'Replace lump-sum shock with smart monthly savings plans. See exactly what each trip costs per month, not as a scary total.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: MapPin,
    title: '10-Year Travel Roadmap',
    description:
      'Plan your travel portfolio with a visual quarter-by-quarter planner. Financial dashboard precision for life\'s greatest experiences.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Clock,
    title: 'Real-Time Price Intelligence',
    description:
      'AI-powered alerts when flights and hotels drop in price — timed to match your optimized travel windows.',
    color: 'bg-violet-50 text-violet-700',
  },
  {
    icon: Heart,
    title: 'Female-Centric Safety Scores',
    description:
      'Real-time safety dashboards with dedicated solo female traveler filters, night safety ratings, and transport scores.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'ISO 27001, SOC 2 Type II, GDPR compliant. Multi-tenant data isolation, end-to-end encryption, and full audit trails.',
    color: 'bg-indigo-50 text-indigo-700',
  },
  {
    icon: BarChart3,
    title: 'HR Burnout Analytics',
    description:
      'For corporations: real-time team wellness dashboards, leave utilization patterns, and burnout prevention insights.',
    color: 'bg-cyan-50 text-cyan-700',
  },
  {
    icon: Globe,
    title: 'Global Trip Aggregator',
    description:
      'The world\'s best trips in one free interface. Tour operators, GDS providers, and experiences — all in your portfolio.',
    color: 'bg-orange-50 text-orange-700',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            Architectural Power,{' '}
            <span className="text-teal">Zero Cost</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Every feature built to institutional standards. No paywalls, no "Pro" tiers —
            just pure planning power for every traveler.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
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
                <h3 className="text-lg font-bold text-trust mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
