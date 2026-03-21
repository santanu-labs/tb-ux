import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import { useRegion } from '../i18n/RegionContext'
import { formatCurrency, formatCurrencyPerMonth } from '../i18n/regionData'
import {
  TrendingUp,
  Calendar,
  DollarSign,
  MapPin,
  ChevronRight,
  Plane,
} from 'lucide-react'

function buildTimelineYears(destinations) {
  const d = destinations ?? []
  const tripGroups = [
    [d[0], d[1]].filter(Boolean),
    [d[2], d[3]].filter(Boolean),
    d[4] ? [d[4]] : [],
    d[5] ? [d[5]] : [],
    d[6] ? [d[6]] : [],
  ]
  const yearLabels = [2026, 2027, 2028, 2029, 2030]

  return yearLabels.map((year, yearIndex) => {
    const tripsRaw = tripGroups[yearIndex] ?? []
    const totalCost = tripsRaw.reduce((sum, t) => sum + (t?.cost ?? 0), 0)
    const monthlySave = Math.round(totalCost / 12)
    const daysUsed = tripsRaw.reduce((sum, t) => sum + (t?.days ?? 0), 0)
    const daysOptimized = daysUsed + (yearIndex === 0 ? 14 : 10)

    return {
      year,
      tripsRaw,
      totalCost,
      monthlySave,
      daysUsed,
      daysOptimized,
    }
  })
}

export default function TimelineRoadmap() {
  const { t } = useTranslation()
  const { region } = useRegion()
  const [activeYear, setActiveYear] = useState(0)

  const years = useMemo(
    () => buildTimelineYears(region.destinations),
    [region.destinations],
  )

  const selected = years[activeYear]

  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            {t('timeline.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            {t('timeline.title')}{' '}
            <span className="text-teal">{t('timeline.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('timeline.subtitle')}
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
                {
                  labelKey: 'timeline.totalInvestment',
                  value: formatCurrency(selected.totalCost, region),
                  icon: DollarSign,
                  color: 'text-trust',
                  bg: 'bg-trust-50',
                },
                {
                  labelKey: 'timeline.monthlySavings',
                  value: formatCurrencyPerMonth(selected.monthlySave, region),
                  icon: TrendingUp,
                  color: 'text-teal-700',
                  bg: 'bg-teal-50',
                },
                {
                  labelKey: 'timeline.leaveDays',
                  value: t('timeline.daysUnit', { count: selected.daysUsed }),
                  icon: Calendar,
                  color: 'text-amber-700',
                  bg: 'bg-amber-50',
                },
                {
                  labelKey: 'timeline.daysOptimized',
                  value: t('timeline.daysUnit', { count: selected.daysOptimized }),
                  icon: Plane,
                  color: 'text-trust',
                  bg: 'bg-trust-50',
                },
              ].map((card) => (
                <div key={card.labelKey} className={`${card.bg} rounded-2xl p-5 border border-transparent`}>
                  <card.icon className={`w-5 h-5 ${card.color} opacity-60 mb-2`} />
                  <div className={`text-xl sm:text-2xl font-extrabold ${card.color}`}>{card.value}</div>
                  <div className="text-xs font-medium text-gray-500 mt-1">{t(card.labelKey)}</div>
                </div>
              ))}
            </div>

            {/* Trip Cards */}
            <div className="space-y-4">
              {selected.tripsRaw.map((trip, tripIdx) => (
                <div
                  key={`${selected.year}-${trip.destination}-${trip.quarter}-${tripIdx}`}
                  className="group flex items-center justify-between p-5 rounded-2xl border border-trust/[0.06] bg-slate-bg hover:border-trust/15 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-trust/[0.06] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-trust" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-trust">{trip.destination}</div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {t('timeline.tripInfo', {
                          quarter: trip.quarter,
                          days: trip.days,
                          match: trip.match,
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-8">
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        {t('timeline.lumpSum')}
                      </div>
                      <div className="text-sm font-bold text-gray-700">
                        {formatCurrency(trip.cost, region)}
                      </div>
                    </div>
                    <div className="w-px h-8 bg-trust/10" />
                    <div className="text-right">
                      <div className="text-xs text-teal-600 uppercase tracking-wider font-medium">
                        {t('timeline.monthlyPlan')}
                      </div>
                      <div className="text-sm font-bold text-teal-700">
                        {formatCurrencyPerMonth(trip.monthly, region)}
                      </div>
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
