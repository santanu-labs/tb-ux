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
  Clock,
  Award,
  TrendingUp,
  Building2,
} from 'lucide-react'

const values = [
  {
    icon: Clock,
    title: 'Time Engineering',
    description: 'We believe time is the most valuable asset. Every feature is designed to help you reclaim, optimize, and invest it wisely.',
  },
  {
    icon: Shield,
    title: 'Institutional Trust',
    description: 'Enterprise-grade security at zero cost. ISO 27001, SOC 2 Type II, and GDPR compliance — because free should never mean insecure.',
  },
  {
    icon: Lightbulb,
    title: 'Blue Ocean Thinking',
    description: 'We don\'t compete with travel blogs or booking engines. We\'re building an entirely new category: the Travel Life-Planning Platform.',
  },
  {
    icon: Target,
    title: 'Zero-Cost Architecture',
    description: 'No paywalls, no "Pro" tiers, no upsells. Pure architectural power for every human, funded by the aggregator model.',
  },
]

const team = [
  { name: 'Santanu Sarkar', role: 'Founder & CEO', avatar: 'SS', background: 'Real Estate & Investment' },
  { name: 'Clara Johansson', role: 'Head of Product', avatar: 'CJ', background: 'Fintech Product' },
  { name: 'Daniel Reyes', role: 'CTO', avatar: 'DR', background: 'Enterprise SaaS' },
  { name: 'Yuki Tanaka', role: 'Head of Design', avatar: 'YT', background: 'UX Architecture' },
]

const milestones = [
  { year: '2024', event: 'Founded with a vision: transition from Real Estate & Investment expertise to "Time Engineering" — applying portfolio management principles to travel.' },
  { year: '2024', event: 'MVP launched with 10 pilot organizations. Core insight validated: people don\'t need another booking tool — they need a life-planning platform.' },
  { year: '2025', event: 'AI Wellness DNA matching engine released. Bridge optimization algorithm discovers an average of 14 extra travel days per user per year.' },
  { year: '2025', event: '500+ organizations and 100K+ individuals on the platform. Aggregator model validated — tour operators and GDS providers join the ecosystem.' },
  { year: '2026', event: 'Enterprise compliance achieved: ISO 27001, SOC 2 Type II, GDPR. Global expansion begins with the world\'s best trips in one free interface.' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-trust-50 via-slate-bg to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-trust/[0.08] text-trust text-sm font-semibold mb-6"
            >
              <Globe className="w-4 h-4" />
              About Leave Studio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-trust leading-tight"
            >
              From Investment Portfolios to{' '}
              <span className="text-teal">Time Engineering</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              We took the precision of financial portfolio management and applied it to the
              most valuable asset you have — your time. The result: the world's first free
              Travel Life-Planning Platform.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission — The Transition Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
                Our Origin
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust mb-6">
                The same rigor that manages billions — now engineers your time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our founding team comes from Real Estate, Investment Banking, and Enterprise
                SaaS. We spent years building tools that optimize financial portfolios worth
                billions. Then we asked a simple question: <em>what if we applied the same
                architectural precision to time?</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The answer is Leave Studio — a platform that treats your travel life with
                the same seriousness as a financial advisor treats your retirement fund.
                Monthly savings plans instead of lump-sum shock. Optimized windows instead
                of random vacation days. A decade-long roadmap instead of last-minute bookings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                And we made it free. Because access to intelligent life-planning shouldn't
                be a luxury — it should be a public utility for the modern professional.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: '100K+', label: 'Individuals', color: 'bg-trust-50 text-trust' },
                  { icon: Building2, value: '500+', label: 'Organizations', color: 'bg-teal-50 text-teal-700' },
                  { icon: Clock, value: '14', label: 'Avg. Extra Days/Year', color: 'bg-amber-50 text-amber-700' },
                  { icon: Award, value: '$0', label: 'Cost — Always', color: 'bg-emerald-50 text-emerald-700' },
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
      <section className="py-24 bg-slate-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              The philosophy behind the platform
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-trust-50 text-trust flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-trust mb-2">{value.title}</h3>
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              From concept to global platform
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 pb-8 relative">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[1.1rem] top-8 bottom-0 w-px bg-trust-100" />
                  )}
                  <div className="w-9 h-9 rounded-full bg-trust flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <div className="pt-1">
                    <div className="text-xs font-bold text-teal mb-1">{milestone.year}</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              The Time Engineers
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A team that transitioned from managing financial portfolios to engineering
              the world's most valuable asset — your time.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-trust-100 text-trust flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-base font-bold text-trust">{member.name}</h3>
                  <p className="text-sm text-teal mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-1">ex-{member.background}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations / Aggregator Vision */}
      <section id="investors" className="py-24 bg-trust-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-300 text-sm font-semibold mb-4 border border-white/10">
                Investor Relations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                The Aggregator Model
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Leave Studio scales globally by becoming the single interface where the
                world's best trips are listed, compared, and planned — for free. Tour
                operators, GDS providers, and experience platforms join our ecosystem to
                reach millions of pre-qualified, intent-rich travelers.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                The platform is free for users. Revenue comes from the supply side —
                operators pay for premium placement, and we earn transaction fees on
                bookings made through the platform. Zero cost to the traveler, infinite
                value to the ecosystem.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '100K+', label: 'Active Users' },
                  { value: '500+', label: 'Organizations' },
                  { value: '∞', label: 'Scalability' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                    <div className="text-xl font-extrabold text-teal-400">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: Globe, title: 'Global Trip Aggregation', description: 'One interface for the world\'s best travel experiences. Tour operators list, travelers discover.' },
                  { icon: TrendingUp, title: 'Supply-Side Monetization', description: 'Free for travelers. Revenue from operator placements, booking commissions, and API partnerships.' },
                  { icon: Users, title: 'Network Effects', description: 'More travelers attract more operators. More operators attract more travelers. The flywheel spins.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
