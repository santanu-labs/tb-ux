import { motion } from 'framer-motion'
import {
  ArrowRight,
  Play,
  Globe,
  Plane,
  CreditCard,
  Shield,
  Star,
  CheckCircle2,
  User,
} from 'lucide-react'

const floatingIcons = [
  { icon: Plane, x: '10%', y: '20%', delay: 0.5, size: 20 },
  { icon: Globe, x: '85%', y: '15%', delay: 0.8, size: 24 },
  { icon: CreditCard, x: '75%', y: '70%', delay: 1.1, size: 18 },
  { icon: Shield, x: '5%', y: '65%', delay: 1.4, size: 22 },
  { icon: Star, x: '90%', y: '45%', delay: 0.3, size: 16 },
]

const stats = [
  { value: '500+', label: 'Companies' },
  { value: '100K+', label: 'Travelers' },
  { value: '98%', label: 'Satisfaction' },
  { value: '₹2Cr+', label: 'Perks Delivered' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-300/[0.05] blur-3xl" />

        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-brand/10"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              <item.icon size={item.size} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.08] text-brand-600 text-sm font-medium mb-6"
            >
              <Star className="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
              Trusted by 100K+ travelers & 500+ companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]"
            >
              Travel smarter,{' '}
              <span className="relative">
                <span className="relative z-10 text-brand">your way</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-brand-200/50 -z-0 origin-left rounded-sm"
                />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Plan trips, discover AI-matched destinations, and unlock travel perks — whether
              you're exploring solo or managing benefits for your entire team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/app/"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-brand rounded-2xl hover:bg-brand-light transition-all shadow-[0_2px_8px_rgba(17,68,89,0.3)] hover:shadow-[0_8px_24px_rgba(17,68,89,0.25)] hover:-translate-y-0.5"
              >
                Start Free
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl hover:border-brand-300 hover:text-brand-600 transition-all shadow-sm">
                <Play className="w-4.5 h-4.5 text-brand fill-brand/20" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                Free for individuals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                14-day team trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                No credit card needed
              </span>
            </motion.div>
          </div>

          {/* Right — Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-white">
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200 text-center">
                    app.leavestudio.com/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Welcome back, Rahul 👋</div>
                    <div className="text-xs text-gray-500 mt-0.5">Your travel dashboard</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                    ₹9,000 credit
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Trips Planned', value: '3', color: 'bg-brand-50 text-brand-600' },
                    { label: 'Savings', value: '₹24K', color: 'bg-green-50 text-green-600' },
                    { label: 'Leave Balance', value: '12 days', color: 'bg-amber-50 text-amber-600' },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl p-3 ${stat.color}`}>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-[0.65rem] font-medium opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-gray-100 p-4">
                  <div className="text-xs font-semibold text-gray-700 mb-3">AI-Matched Destinations</div>
                  <div className="space-y-2.5">
                    {[
                      { name: 'Bali, Indonesia', match: '94%', color: 'bg-green-500' },
                      { name: 'Manali, India', match: '89%', color: 'bg-green-500' },
                      { name: 'Santorini, Greece', match: '82%', color: 'bg-yellow-500' },
                    ].map((dest) => (
                      <div key={dest.name} className="flex items-center justify-between">
                        <span className="text-xs text-gray-700 font-medium">{dest.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: dest.match }}
                              transition={{ duration: 1.5, delay: 1.2 }}
                              className={`h-full rounded-full ${dest.color}`}
                            />
                          </div>
                          <span className="text-[0.65rem] font-bold text-gray-500">{dest.match}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-900">Trip Booked!</div>
                <div className="text-[0.65rem] text-gray-500">Bali · 5N/6D · ₹42,000</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-extrabold text-brand">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
