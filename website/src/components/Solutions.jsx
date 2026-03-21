import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import {
  User,
  Building2,
  ArrowRight,
  Calendar,
  TrendingUp,
  Heart,
  Shield,
  Users,
  BarChart3,
  Zap,
} from 'lucide-react'

export default function Solutions() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('individual')

  const tabs = [
    {
      id: 'individual',
      label: t('solutions.forIndividuals'),
      icon: User,
      tagline: t('solutions.individualTagline'),
      description: t('solutions.individualDesc'),
      features: [
        {
          icon: Calendar,
          title: t('solutions.indFeature1'),
          description: t('solutions.indFeature1Desc'),
        },
        {
          icon: TrendingUp,
          title: t('solutions.indFeature2'),
          description: t('solutions.indFeature2Desc'),
        },
        {
          icon: Heart,
          title: t('solutions.indFeature3'),
          description: t('solutions.indFeature3Desc'),
        },
        {
          icon: Zap,
          title: t('solutions.indFeature4'),
          description: t('solutions.indFeature4Desc'),
        },
      ],
    },
    {
      id: 'corporate',
      label: t('solutions.forCorporations'),
      icon: Building2,
      tagline: t('solutions.corporateTagline'),
      description: t('solutions.corporateDesc'),
      features: [
        {
          icon: Users,
          title: t('solutions.corpFeature1'),
          description: t('solutions.corpFeature1Desc'),
        },
        {
          icon: BarChart3,
          title: t('solutions.corpFeature2'),
          description: t('solutions.corpFeature2Desc'),
        },
        {
          icon: Shield,
          title: t('solutions.corpFeature3'),
          description: t('solutions.corpFeature3Desc'),
        },
        {
          icon: Zap,
          title: t('solutions.corpFeature4'),
          description: t('solutions.corpFeature4Desc'),
        },
      ],
    },
  ]

  const active = tabs.find((tab) => tab.id === activeTab)

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            {t('solutions.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            {t('solutions.title')} <span className="text-teal">{t('solutions.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('solutions.subtitle')}
          </p>
        </AnimatedSection>

        {/* Tab Switcher */}
        <AnimatedSection>
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-trust-50 border border-trust/[0.08]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-trust/60 hover:text-trust'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="solutionTab"
                      className="absolute inset-0 bg-trust rounded-xl shadow-lg"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal-700 text-xs font-bold mb-4">
                  <active.icon className="w-3.5 h-3.5" />
                  {active.id === 'individual' ? t('solutions.personalTag') : t('solutions.b2bTag')}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-trust mb-4">
                  {active.tagline}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {active.description}
                </p>
                <a
                  href="/app/"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-trust rounded-xl hover:bg-trust-light transition-all shadow-md"
                >
                  {active.id === 'individual'
                    ? t('solutions.startPlanning')
                    : t('solutions.deployTeam')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {active.features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="p-5 rounded-2xl border border-trust/[0.06] bg-slate-bg hover:border-trust/15 hover:shadow-sm transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-trust/[0.06] flex items-center justify-center mb-3">
                      <feature.icon className="w-5 h-5 text-trust" />
                    </div>
                    <h4 className="text-sm font-bold text-trust mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
