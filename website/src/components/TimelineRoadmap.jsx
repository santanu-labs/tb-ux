import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import {
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  ChevronRight,
  Plane,
} from 'lucide-react'

const years = [
  {
    year: 2026,
    trips: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: '$1,000', monthly: '$50/mo', days: 9, match: 94 },
      { destination: 'Lisbon, Portugal', quarter: 'Q3', cost: '$950', monthly: '$48/mo', days: 5, match: 89 },
    ],
    totalCost: '$1,950',
    monthlySave: '$98',
    daysUsed: 14,
    daysOptimized: 28,
  },
  {
    year: 2027,
    trips: [
      { destination: 'Santorini, Greece', quarter: 'Q1', cost: '$2,150', monthly: '$179/mo', days: 10, match: 91 },
      { destination: 'Medellín, Colombia', quarter: 'Q4', cost: '$800', monthly: '$67/mo', days: 6, match: 96 },
    ],
    totalCost: '$2,950',
    monthlySave: '$246',
    daysUsed: 14,
    daysOptimized: 24,
  },
  {
    year: 2028,
    trips: [
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: '$2,850', monthly: '$119/mo', days: 12, match: 88 },
    ],
    totalCost: '$2,850',
    monthlySave: '$119',
    daysUsed: 12,
    daysOptimized: 20,
  },
  {
    year: 2029,
    trips: [
      { destination: 'Iceland', quarter: 'Q3', cost: '$3,800', monthly: '$106/mo', days: 14, match: 85 },
    ],
    totalCost: '$3,800',
    monthlySave: '$106',
    daysUsed: 14,
    daysOptimized: 22,
  },
  {
    year: 2030,
    trips: [
      { destination: 'New Zealand', quarter: 'Q1', cost: '$5,350', monthly: '$112/mo', days: 16, match: 92 },
    ],
    totalCost: '$5,350',
    monthlySave: '$112',
    daysUsed: 16,
    daysOptimized: 26,
  },
]

export default function TimelineRoadmap() {
  const [activeYear, setActiveYear] = useState(0)
  const selected = years[activeYear]

  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            The 1–10 Year Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            Your Travel Portfolio,{' '}
            <span className="text-teal">Engineered</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Not a travel blog — a financial dashboard for your life's greatest experiences.
            Plan affordably with monthly breakdowns instead of lump-sum shock.
          </p>
        </AnimatedSection>

        {/* Interactive Horizontal Timeline */}
        <AnimatedSection>
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-trust/10 -translate-y-1/2" />
            <div className="flex items-center justify-between relative">
              {years.map((yr, i) => (
                <button
                  key={yr.year}
                  onClick={() => setActiveYear(i)}
                  className="relative z-10 flex flex-col items-center gap-2 group"
                >
                  <motion.div
                    animate={{
                      scale: activeYear === i ? 1.15 : 1,
                      backgroundColor: activeYear === i ? '#002366' : '#f0f4ff',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-sm border transition-all ${
                      activeYear === i
                        ? 'border-trust shadow-trust/20 shadow-lg'
                        : 'border-trust/10 hover:border-trust/30'
                    }`}
                  >
                    <Calendar className={`w-5 h-5 ${activeYear === i ? 'text-white' : 'text-trust/40'}`} />
                  </motion.div>
                  <span className={`text-sm font-bold transition-colors ${
                    activeYear === i ? 'text-trust' : 'text-gray-400'
                  }`}>
                    {yr.year}
                  </span>
                  {activeYear === i && (
                    <motion.div
                      layoutId="yearIndicator"
                      className="absolute -bottom-1 w-2 h-2 rounded-full bg-teal"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Year Detail Panel — Financial Dashboard Style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Total Investment', value: selected.totalCost, icon: DollarSign, color: 'text-trust', bg: 'bg-trust-50' },
                { label: 'Monthly Savings Plan', value: selected.monthlySave, icon: TrendingUp, color: 'text-teal-700', bg: 'bg-teal-50' },
                { label: 'Leave Days Used', value: `${selected.daysUsed} days`, icon: Calendar, color: 'text-amber-700', bg: 'bg-amber-50' },
                { label: 'Days Optimized', value: `${selected.daysOptimized} days`, icon: Plane, color: 'text-trust', bg: 'bg-trust-50' },
              ].map((card) => (
                <div key={card.label} className={`${card.bg} rounded-2xl p-5 border border-transparent`}>
                  <card.icon className={`w-5 h-5 ${card.color} opacity-60 mb-2`} />
                  <div className={`text-xl sm:text-2xl font-extrabold ${card.color}`}>{card.value}</div>
                  <div className="text-xs font-medium text-gray-500 mt-1">{card.label}</div>
                </div>
              ))}
            </div>

            {/* Trip Cards */}
            <div className="space-y-4">
              {selected.trips.map((trip) => (
                <div
                  key={trip.destination}
                  className="group flex items-center justify-between p-5 rounded-2xl border border-trust/[0.06] bg-slate-bg hover:border-trust/15 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-trust/[0.06] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-trust" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-trust">{trip.destination}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {trip.quarter} · {trip.days} days · {trip.match}% match
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Lump Sum</div>
                      <div className="text-sm font-bold text-gray-700">{trip.cost}</div>
                    </div>
                    <div className="w-px h-8 bg-trust/10" />
                    <div className="text-right">
                      <div className="text-xs text-teal-600 uppercase tracking-wider font-medium">Monthly Plan</div>
                      <div className="text-sm font-bold text-teal-700">{trip.monthly}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-trust transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
