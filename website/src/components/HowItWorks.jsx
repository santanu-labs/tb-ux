import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import { UserPlus, Sparkles, Layers, Plane } from 'lucide-react'

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      number: '01',
      icon: UserPlus,
      titleKey: 'step1Title',
      descKey: 'step1Desc',
      detailKeys: ['step1Detail1', 'step1Detail2', 'step1Detail3'],
      color: 'from-trust to-trust-light',
    },
    {
      number: '02',
      icon: Sparkles,
      titleKey: 'step2Title',
      descKey: 'step2Desc',
      detailKeys: ['step2Detail1', 'step2Detail2', 'step2Detail3'],
      color: 'from-teal-600 to-teal',
    },
    {
      number: '03',
      icon: Layers,
      titleKey: 'step3Title',
      descKey: 'step3Desc',
      detailKeys: ['step3Detail1', 'step3Detail2', 'step3Detail3'],
      color: 'from-trust-400 to-trust-300',
    },
    {
      number: '04',
      icon: Plane,
      titleKey: 'step4Title',
      descKey: 'step4Desc',
      detailKeys: ['step4Detail1', 'step4Detail2', 'step4Detail3'],
      color: 'from-teal-700 to-teal-500',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-slate-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
            {t('howItWorks.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-trust">
            {t('howItWorks.title')} <span className="text-teal">{t('howItWorks.titleHighlight')}</span>{' '}
            {t('howItWorks.titleEnd')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('howItWorks.subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-trust/20 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="text-xs font-bold text-teal tracking-widest uppercase mb-2">
                    {t('howItWorks.step', { number: step.number })}
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-2">
                    {t(`howItWorks.${step.titleKey}`)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {t(`howItWorks.${step.descKey}`)}
                  </p>

                  <ul className="space-y-1.5">
                    {step.detailKeys.map((detailKey) => (
                      <li
                        key={detailKey}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                        {t(`howItWorks.${detailKey}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
