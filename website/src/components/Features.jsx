import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import {
  MapPin,
  Sparkles,
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Calendar,
  Gift,
  Building2,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Destination Matching',
    description:
      'Our AI analyzes your preferences — travel style, climate, activities — and matches you with perfect destinations.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Calendar,
    title: 'Smart Holiday Planner',
    description:
      'Automatically detects long weekends, public holidays, and suggests optimal travel windows to maximize your time off.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Gift,
    title: 'Travel Perks & Credits',
    description:
      'Earn and manage travel credits, unlock perks, and track your savings — whether you\'re a solo traveler or part of a team.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Self-Service Portal',
    description:
      'Browse destinations, plan trips, and manage bookings independently through an intuitive, easy-to-use portal.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Building2,
    title: 'Team & Company Plans',
    description:
      'Companies get a branded subdomain with data isolation, while individuals enjoy a streamlined personal experience.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Dashboard & Insights',
    description:
      'Track your trips, spending, and savings. Team admins get employee management, financials, and audit trails.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description:
      'Your data is protected with role-based access, audit logging, and GDPR-ready data handling at every layer.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment Options',
    description:
      'EMI breakdowns, perk balance deductions, and transparent cost structures for every trip you plan.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: MapPin,
    title: '5-Year Trip Planner',
    description:
      'Plan your travel roadmap with a visual quarter-by-quarter planner. Dream big, travel often.',
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
            Everything you need to{' '}
            <span className="text-brand">travel better</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            From AI-powered matching to smart planning tools, Leave Studio helps individuals and
            teams make the most of every trip.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                transition={{ duration: 0.2 }}
                className="group h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
