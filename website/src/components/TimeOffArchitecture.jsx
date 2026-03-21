import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import {
  Calendar,
  Layers,
  Sparkles,
  TrendingDown,
  Clock,
  Sun,
} from 'lucide-react'

const stackLayers = [
  { label: 'Your Corporate Holidays', count: '14 days', color: 'bg-trust', textColor: 'text-white', icon: Calendar },
  { label: 'Public Holidays', count: '10–15 days', color: 'bg-trust-400', textColor: 'text-white', icon: Sun },
  { label: 'Weekends (Sat + Sun)', count: '104 days', color: 'bg-teal', textColor: 'text-white', icon: Clock },
  { label: 'Optimized Bridges', count: '+14 days', color: 'bg-teal-300', textColor: 'text-trust-900', icon: Layers },
]

const aiInsights = [
  {
    icon: TrendingDown,
    title: 'Flights 27% cheaper this week',
    subtitle: 'Matches your Wellness DNA profile',
    color: 'bg-teal-50 text-teal-700 border-teal/20',
  },
  {
    icon: Sparkles,
    title: 'Best bridge: Mar 20–28',
    subtitle: '9 days off using only 3 leave days',
    color: 'bg-trust-50 text-trust border-trust/15',
  },
  {
    icon: Calendar,
    title: 'Holi + Weekend combo',
    subtitle: 'Auto-detected from your corporate calendar',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const heatmapData = months.map((m) => ({
  month: m,
  score: Math.floor(Math.random() * 60) + 40,
}))

export default function TimeOffArchitecture() {
  return (
    <section id="time-off" className="py-24 lg:py-32 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            Leave Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            The Mathematics of{' '}
            <span className="text-teal">Time-Off</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We sync your corporate holidays, public calendars, and weekends to find the
            most optimized windows for travel — automatically.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Stacking Visualization */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-trust/[0.06] p-6 shadow-sm">
              <div className="text-xs font-bold text-trust/50 uppercase tracking-wider mb-6">
                Time-Off Stack · 2026
              </div>

              <div className="space-y-3">
                {stackLayers.map((layer, i) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <div className={`${layer.color} ${layer.textColor} rounded-xl p-4 flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <layer.icon className="w-5 h-5 opacity-80" />
                        <span className="text-sm font-semibold">{layer.label}</span>
                      </div>
                      <span className="text-sm font-bold">{layer.count}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-trust to-teal text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium opacity-80">Total Optimized Days Off</div>
                    <div className="text-2xl font-extrabold mt-1">144 days</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium opacity-80">vs. Standard</div>
                    <div className="text-lg font-bold text-teal-200">+14 extra</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right — AI Insights + Heatmap */}
          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl border border-trust/[0.06] p-6 shadow-sm">
                <div className="text-xs font-bold text-trust/50 uppercase tracking-wider mb-4">
                  AI Travel Insights
                </div>
                <div className="space-y-3">
                  {aiInsights.map((insight, i) => (
                    <motion.div
                      key={insight.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`flex items-start gap-3 p-3 rounded-xl border ${insight.color}`}
                    >
                      <insight.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold">{insight.title}</div>
                        <div className="text-xs opacity-70 mt-0.5">{insight.subtitle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-2xl border border-trust/[0.06] p-6 shadow-sm">
                <div className="text-xs font-bold text-trust/50 uppercase tracking-wider mb-4">
                  Travel Opportunity Score · 2026
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {heatmapData.map((d) => (
                    <div key={d.month} className="text-center">
                      <div
                        className="w-full aspect-square rounded-lg mb-1.5"
                        style={{
                          backgroundColor: `rgba(20, 184, 166, ${d.score / 100})`,
                        }}
                      />
                      <div className="text-[0.6rem] font-medium text-gray-500">{d.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 text-[0.6rem] text-gray-400">
                  <span>Low opportunity</span>
                  <div className="flex gap-1">
                    {[0.2, 0.4, 0.6, 0.8, 1].map((o) => (
                      <div
                        key={o}
                        className="w-3 h-3 rounded-sm"
                        style={{ backgroundColor: `rgba(20, 184, 166, ${o})` }}
                      />
                    ))}
                  </div>
                  <span>High opportunity</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
