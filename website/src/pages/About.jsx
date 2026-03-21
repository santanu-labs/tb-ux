import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'
import AnimatedSection from '../components/AnimatedSection'
import CTA from '../components/CTA'
import { useRegion } from '../i18n/RegionContext'
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

export default function About() {
  const { t } = useTranslation()
  const { region } = useRegion()

  const values = [
    {
      icon: Clock,
      title: t('about.value1Title'),
      description: t('about.value1Desc'),
    },
    {
      icon: Shield,
      title: t('about.value2Title'),
      description: t('about.value2Desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.value3Title'),
      description: t('about.value3Desc'),
    },
    {
      icon: Target,
      title: t('about.value4Title'),
      description: t('about.value4Desc'),
    },
  ]

  const team = [
    {
      name: 'Anil Kumar',
      role: t('about.teamRole1'),
      photo: 'https://tb-resources.blr1.digitaloceanspaces.com/anil.png',
      background: t('about.teamBg1'),
    },
    {
      name: 'Santanu Kumar',
      role: t('about.teamRole2'),
      photo: 'https://tb-resources.blr1.digitaloceanspaces.com/santanu.png',
      background: t('about.teamBg2'),
    },
    {
      name: 'Aachri Tyagi',
      role: t('about.teamRole3'),
      photo: 'https://tb-resources.blr1.digitaloceanspaces.com/aachri.png',
      background: t('about.teamBg3'),
    },
    {
      name: 'Jamil Shaikh',
      role: t('about.teamRole4'),
      photo: 'https://tb-resources.blr1.digitaloceanspaces.com/jamil.png',
      background: t('about.teamBg4'),
    },
  ]

  const milestones = [
    { year: '2025', event: t('about.milestone1') },
    { year: '2025', event: t('about.milestone2') },
    { year: '2026', event: t('about.milestone3') },
    { year: '2026', event: t('about.milestone4') },
    { year: '2026', event: t('about.milestone5') },
  ]

  const stats = [
    { icon: Users, value: '100K+', label: t('about.statIndividuals'), color: 'bg-trust-50 text-trust' },
    { icon: Building2, value: '500+', label: t('about.statOrganizations'), color: 'bg-teal-50 text-teal-700' },
    { icon: Clock, value: '14', label: t('about.statExtraDays'), color: 'bg-amber-50 text-amber-700' },
    {
      icon: Award,
      value: `${region.currency.symbol}0`,
      label: t('about.statCost'),
      color: 'bg-emerald-50 text-emerald-700',
    },
  ]

  const investorStats = [
    { value: '100K+', label: t('about.activeUsers') },
    { value: '500+', label: t('about.organizations') },
    { value: '∞', label: t('about.scalability') },
  ]

  const investorFeatures = [
    {
      icon: Globe,
      title: t('about.globalAggregation'),
      description: t('about.globalAggregationDesc'),
    },
    {
      icon: TrendingUp,
      title: t('about.supplyMonetization'),
      description: t('about.supplyMonetizationDesc'),
    },
    {
      icon: Users,
      title: t('about.networkEffects'),
      description: t('about.networkEffectsDesc'),
    },
  ]

  return (
    <div className="pt-20">
      <SEOHead
        title="About Us — From Investment Portfolios to Time Engineering"
        description="Learn how Leave Studio applies financial portfolio management precision to travel planning. Meet the team behind the world's first free Travel Life-Planning Platform."
        path="/about"
      />
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
              {t('about.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-trust leading-tight"
            >
              {t('about.title')}{' '}
              <span className="text-teal">{t('about.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed"
            >
              {t('about.subtitle')}
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
                {t('about.originBadge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust mb-6">
                {t('about.originTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.originP1')} <em>{t('about.originP1Em')}</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">{t('about.originP2')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.originP3')}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
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
              {t('about.principlesBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              {t('about.principlesTitle')}
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
              {t('about.journeyBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              {t('about.journeyTitle')}
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
              {t('about.leadershipBadge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-trust">
              {t('about.leadershipTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t('about.leadershipSubtitle')}</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4"
                  />
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
                {t('about.investorBadge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                {t('about.investorTitle')}
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">{t('about.investorP1')}</p>
              <p className="text-white/60 leading-relaxed mb-6">{t('about.investorP2')}</p>
              <div className="grid grid-cols-3 gap-4">
                {investorStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-center"
                  >
                    <div className="text-xl font-extrabold text-teal-400">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {investorFeatures.map((item, i) => (
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
