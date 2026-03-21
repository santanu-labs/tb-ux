import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import {
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Globe,
  Server,
} from 'lucide-react'

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management', icon: Shield },
  { name: 'SOC 2 Type II', description: 'Service Organization Controls', icon: Lock },
  { name: 'GDPR', description: 'EU Data Protection Regulation', icon: Eye },
]

const safetyMetrics = [
  { label: 'Overall Safety', score: 92, color: 'bg-teal' },
  { label: 'Solo Female Safety', score: 88, color: 'bg-trust-400' },
  { label: 'Night Safety', score: 85, color: 'bg-teal-600' },
  { label: 'Transport Safety', score: 90, color: 'bg-trust' },
]

const securityFeatures = [
  { icon: Server, title: 'Data Isolation', description: 'Multi-tenant architecture with complete data segregation per organization.' },
  { icon: Lock, title: 'End-to-End Encryption', description: 'AES-256 encryption at rest, TLS 1.3 in transit for all data.' },
  { icon: Eye, title: 'Audit Trails', description: 'Complete audit logging for every action — accessible to admins in real-time.' },
  { icon: Heart, title: 'Female-Centric Safety', description: 'Dedicated safety filters and real-time safety scores for solo female travelers.' },
]

export default function TrustSecurity() {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-trust-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-teal-300 text-sm font-semibold mb-4 border border-white/10">
            Trust & Security
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Enterprise-Grade Security for{' '}
            <span className="text-teal-400">Every Traveler</span>
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Free doesn't mean compromised. We hold ourselves to the same standards as
            the world's leading financial institutions.
          </p>
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
                  <div className="text-xs font-bold text-white/40 uppercase tracking-wider">Live Safety Dashboard</div>
                  <div className="text-sm text-white/60 mt-0.5">Bali, Indonesia · Updated 2h ago</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/20 text-teal-300 text-xs font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  Safe
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
                  <div className="text-xs font-semibold text-amber-300">Advisory Note</div>
                  <div className="text-xs text-amber-200/70 mt-0.5">
                    Avoid Kuta area after 11 PM. Seminyak rated safer for solo female travelers.
                  </div>
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
