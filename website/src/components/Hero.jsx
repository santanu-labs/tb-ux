import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Clock,
  Calendar,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
} from 'lucide-react'
import { useRegion } from '../i18n/RegionContext'
import { formatCurrencyPerMonth } from '../i18n/regionData'

export default function Hero() {
  const { t } = useTranslation()
  const { region } = useRegion()
  const [animPhase, setAnimPhase] = useState(0)

  const bridgeSteps = [
    { day: t('hero.days.thu'), type: 'work', label: t('hero.labels.work') },
    { day: t('hero.days.fri'), type: 'leave', label: t('hero.labels.leave') },
    { day: t('hero.days.sat'), type: 'weekend', label: t('hero.days.sat') },
    { day: t('hero.days.sun'), type: 'weekend', label: t('hero.days.sun') },
    { day: t('hero.days.mon'), type: 'holiday', label: t('hero.labels.holiday') },
    { day: t('hero.days.tue'), type: 'leave', label: t('hero.labels.leave') },
    { day: t('hero.days.wed'), type: 'leave', label: t('hero.labels.leave') },
    { day: t('hero.days.thu'), type: 'holiday', label: t('hero.labels.holiday') },
    { day: t('hero.days.fri'), type: 'weekend', label: t('hero.days.fri') },
  ]

  const stats = [
    { value: '14', label: t('hero.statExtraDays'), suffix: t('hero.statSuffixDays') },
    { value: '27%', label: t('hero.statFlightSavings'), suffix: '' },
    { value: '10', label: t('hero.statRoadmap'), suffix: t('hero.statSuffixYr') },
    { value: '0', label: t('hero.statCost'), suffix: 'currency' },
  ]

  useEffect(() => {
    const t1 = setTimeout(() => setAnimPhase(1), 1200)
    const t2 = setTimeout(() => setAnimPhase(2), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <section aria-label="Hero" className="relative min-h-screen flex items-center overflow-hidden bg-trust-50">
      {/* Background Video — preload=none for Lighthouse LCP */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          loading="lazy"
          className="w-full h-full object-cover"
          src="https://tb-resources.blr1.digitaloceanspaces.com/14322544_3840_2160_25fps.mp4"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-trust/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-teal/[0.05] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-trust/[0.04]" />
      </div>

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/[0.1] text-teal-700 text-sm font-semibold mb-6 border border-teal/[0.15]"
            >
              <Zap className="w-3.5 h-3.5" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-trust leading-[1.08]"
            >
              {t('hero.titleStart')}{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal">{t('hero.titleHighlight')}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-teal-200/40 -z-0 origin-left rounded-sm"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/app/"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-trust rounded-2xl hover:bg-trust-light transition-all shadow-[0_2px_12px_rgba(0,35,102,0.3)] hover:shadow-[0_8px_30px_rgba(0,35,102,0.25)] hover:-translate-y-0.5"
              >
                {t('hero.cta')}
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-trust/60 bg-white border border-trust/10 rounded-2xl">
                <Shield className="w-4 h-4 text-teal" />
                {t('hero.trustBadge')}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                {t('hero.iso')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                {t('hero.soc')}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                {t('hero.gdpr')}
              </span>
            </motion.div>
          </div>

          {/* Right — Glassmorphism Dashboard with Bridge Animation */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15),0_2px_12px_rgba(0,0,0,0.1)] border border-white/60 bg-white/80 backdrop-blur-xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-trust-50/60 border-b border-trust/[0.08]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/80 rounded-md px-3 py-1 text-xs text-trust/40 border border-trust/[0.08] text-center font-mono">
                    {t('hero.dashboardUrl')}
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-trust">{t('hero.dashboardTitle')}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{t('hero.dashboardSubtitle')}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal/20">
                    {t('hero.daysFound')}
                  </div>
                </div>

                {/* Bridge Animation */}
                <div className="rounded-xl border border-trust/[0.08] bg-trust-50/30 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-bold text-trust/70 uppercase tracking-wider">{t('hero.bridgeTitle')}</div>
                    <div className="text-[0.65rem] text-teal-600 font-semibold">{t('hero.bridgeSubtitle')}</div>
                  </div>
                  <div className="flex gap-1.5">
                    {bridgeSteps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{
                          opacity: animPhase >= 1 ? 1 : 0,
                          scaleY: animPhase >= 1 ? 1 : 0,
                        }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className={`flex-1 rounded-lg py-2 text-center origin-bottom ${
                          step.type === 'work'
                            ? 'bg-gray-200 text-gray-500'
                            : step.type === 'leave'
                            ? 'bg-teal/20 text-teal-700 border border-teal/30'
                            : step.type === 'holiday'
                            ? 'bg-trust/10 text-trust border border-trust/20'
                            : 'bg-trust-100 text-trust-600'
                        }`}
                      >
                        <div className="text-[0.6rem] font-bold">{step.day}</div>
                        <div className="text-[0.5rem] opacity-70">{step.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: animPhase >= 2 ? 1 : 0 }}
                    className="mt-2 text-center"
                  >
                    <span className="text-[0.6rem] text-trust/50 italic">
                      {t('hero.bridgeQuote')}
                    </span>
                  </motion.div>
                </div>

                {/* Mini Financial Dashboard */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: t('hero.monthlySave'),
                      value: formatCurrencyPerMonth(region.heroMonthlySave, region),
                      icon: TrendingUp,
                      color: 'bg-teal-50 text-teal-700',
                    },
                    {
                      label: t('hero.leaveBalance'),
                      value: t('hero.leaveBalanceValue'),
                      icon: Calendar,
                      color: 'bg-trust-50 text-trust',
                    },
                    {
                      label: t('hero.nextWindow'),
                      value: t('hero.nextWindowValue'),
                      icon: Clock,
                      color: 'bg-amber-50 text-amber-700',
                    },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className={`rounded-xl p-3 ${stat.color}`}
                    >
                      <stat.icon className="w-3.5 h-3.5 mb-1 opacity-60" />
                      <div className="text-sm font-bold">{stat.value}</div>
                      <div className="text-[0.6rem] font-medium opacity-70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating AI Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-lg rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.12),0_1px_6px_rgba(0,0,0,0.08)] border border-teal/20 p-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-teal-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-trust">{t('hero.flightsCheaper')}</div>
                <div className="text-[0.6rem] text-gray-500">{t('hero.wellnessDna')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.1),0_1px_8px_rgba(0,0,0,0.06)]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl lg:text-3xl font-extrabold text-trust">
                {stat.suffix === 'currency' && (
                  <span className="text-teal">{region.currency.symbol}</span>
                )}
                {stat.value}
                {stat.suffix && stat.suffix !== 'currency' && (
                  <span className="text-base font-bold text-teal ml-1">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
