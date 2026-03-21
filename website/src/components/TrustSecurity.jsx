import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'
import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Server,
} from 'lucide-react'

export default function TrustSecurity() {
  const { t } = useTranslation()

  const certifications = [
    { name: t('trust.iso'), description: t('trust.isoDesc'), icon: Shield },
    { name: t('trust.soc'), description: t('trust.socDesc'), icon: Lock },
    { name: t('trust.gdprCert'), description: t('trust.gdprDesc'), icon: Eye },
  ]

  const safetyMetrics = [
    { label: t('trust.overallSafety'), score: 92, color: 'bg-teal' },
    { label: t('trust.soloFemaleSafety'), score: 88, color: 'bg-trust-400' },
    { label: t('trust.nightSafety'), score: 85, color: 'bg-teal-600' },
    { label: t('trust.transportSafety'), score: 90, color: 'bg-trust' },
  ]

  const securityFeatures = [
    {
      icon: Server,
      title: t('trust.dataIsolation'),
      description: t('trust.dataIsolationDesc'),
    },
    {
      icon: Lock,
      title: t('trust.encryption'),
      description: t('trust.encryptionDesc'),
    },
    {
      icon: Eye,
      title: t('trust.auditTrails'),
      description: t('trust.auditTrailsDesc'),
    },
    {
      icon: Heart,
      title: t('trust.femaleSafety'),
      description: t('trust.femaleSafetyDesc'),
    },
  ]

  return (
    <section id="trust" className="py-24 lg:py-32 bg-trust-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-300 text-sm font-semibold mb-4 border border-white/10">
            {t('trust.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {t('trust.title')}{' '}
            <span className="text-teal-400">{t('trust.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-white/50">{t('trust.subtitle')}</p>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, borderColor: 'rgba(20, 184, 166, 0.3)' }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                <p className="text-sm text-white/50">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Real-time Safety Score Dashboard */}
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider">
                    {t('trust.liveDashboard')}
                  </div>
                  <div className="text-sm text-white/60 mt-0.5">{t('trust.dashboardLocation')}</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/20 text-teal-300 text-xs font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  {t('trust.safe')}
                </div>
              </div>

              <div className="space-y-4">
                {safetyMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-white/70">{metric.label}</span>
                      <span className="text-sm font-bold text-white">{metric.score}/100</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                        className={`h-full rounded-full ${metric.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-amber-300">{t('trust.advisoryNote')}</div>
                  <div className="text-xs text-amber-200/70 mt-0.5">{t('trust.advisoryText')}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Security Features */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-trust-400/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
