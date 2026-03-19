import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import CTA from '../components/CTA'
import {
  Globe,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Users,
  MapPin,
  Award,
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Traveler-First',
    description: 'Every feature is designed with the traveler in mind — making trip planning joyful, not tedious.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Enterprise-grade security with data isolation, RBAC, and comprehensive audit trails for teams.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'AI-powered matching, smart holiday detection, and predictive planning push the boundaries of travel tech.',
  },
  {
    icon: Target,
    title: 'Simplicity',
    description: 'Complex workflows made simple. Sign up in seconds, plan a trip in minutes. No training required.',
  },
]

const team = [
  { name: 'Santanu Sarkar', role: 'Founder & CEO', avatar: 'SS' },
  { name: 'Priya Sharma', role: 'Head of Product', avatar: 'PS' },
  { name: 'Arjun Mehta', role: 'CTO', avatar: 'AM' },
  { name: 'Neha Gupta', role: 'Head of Design', avatar: 'NG' },
]

const milestones = [
  { year: '2024', event: 'Leave Studio founded with a vision to make smart travel planning accessible to everyone' },
  { year: '2024', event: 'MVP launched with first 10 pilot companies and 500 individual beta users' },
  { year: '2025', event: 'AI destination matching engine released — free for all users' },
  { year: '2025', event: '500+ companies and 100K+ individual travelers on the platform' },
  { year: '2026', event: 'Enterprise tier launched with SSO, advanced compliance, and custom integrations' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-50 via-white to-brand-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.08] text-brand-600 text-sm font-medium mb-6"
            >
              <Globe className="w-4 h-4" />
              About Leave Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
            >
              Making smart travel planning{' '}
              <span className="text-brand">accessible to everyone</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              Whether you're a solo traveler planning your next adventure or a company offering
              world-class travel perks, Leave Studio gives you the tools to travel smarter.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-6">
                Transforming how people plan and experience travel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Travel planning shouldn't be overwhelming. Whether you're figuring out the best
                long weekend getaway or an HR team designing a benefits program for thousands,
                the process should be intuitive and delightful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Leave Studio combines AI-powered destination matching with smart holiday planning to
                help individuals discover their perfect trips. For companies, we add team
                management, travel perks, and compliance tools — all on the same platform.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: '100K+', label: 'Travelers', color: 'bg-brand-50 text-brand-600' },
                  { icon: Globe, value: '500+', label: 'Companies', color: 'bg-blue-50 text-blue-600' },
                  { icon: MapPin, value: '200+', label: 'Destinations', color: 'bg-emerald-50 text-emerald-600' },
                  { icon: Award, value: '98%', label: 'Satisfaction', color: 'bg-amber-50 text-amber-600' },
                ].map((stat) => (
                  <div key={stat.label} className={`p-6 rounded-2xl ${stat.color}`}>
                    <stat.icon className="w-8 h-8 mb-3" />
                    <div className="text-3xl font-extrabold">{stat.value}</div>
                    <div className="text-sm font-medium opacity-80 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              What drives us every day
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Building the future of travel planning
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 pb-8 relative">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[1.1rem] top-8 bottom-0 w-px bg-brand-100" />
                  )}
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div className="pt-1">
                    <div className="text-xs font-bold text-brand-500 mb-1">{milestone.year}</div>
                    <p className="text-sm text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              The people behind Leave Studio
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A passionate team of travelers building the future of travel planning.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{member.role}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
