import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SEOHead from '../components/SEOHead'
import AnimatedSection from '../components/AnimatedSection'
import { Mail, Phone, MapPin, MessageSquare, Globe, Code, Plane } from 'lucide-react'
import { useRegion } from '../i18n/RegionContext'

export default function Contact() {
  const { t } = useTranslation()
  const { region } = useRegion()

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      description: t('contact.emailDesc'),
      value: t('contact.emailValue'),
      color: 'bg-trust-50 text-trust',
    },
    {
      icon: Phone,
      title: t('contact.callTitle'),
      description: region.contact.timezone,
      value: region.contact.phone,
      color: 'bg-teal-50 text-teal-700',
    },
    {
      icon: MapPin,
      title: t('contact.visitTitle'),
      description: t('contact.visitDesc'),
      value: region.contact.address,
      color: 'bg-amber-50 text-amber-700',
    },
  ]

  const partnerTypes = [
    {
      icon: Plane,
      title: t('contact.tourOperators'),
      description: t('contact.tourOperatorsDesc'),
    },
    {
      icon: Code,
      title: t('contact.gdsProviders'),
      description: t('contact.gdsProvidersDesc'),
    },
    {
      icon: Globe,
      title: t('contact.apiPartners'),
      description: t('contact.apiPartnersDesc'),
    },
  ]

  return (
    <div className="pt-20">
      <SEOHead
        title="Contact & Partnerships"
        description="Get in touch with Leave Studio. Whether you're an individual, organization, tour operator, or API partner — we'd love to hear from you."
        path="/contact"
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
              <MessageSquare className="w-4 h-4" />
              {t('contact.badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-trust"
            >
              {t('contact.title')} <span className="text-teal">{t('contact.titleHighlight')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, i) => (
              <AnimatedSection key={method.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-2xl border border-trust/[0.06] hover:shadow-lg hover:shadow-trust/[0.04] transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-trust mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                  <p className="text-sm font-semibold text-teal">{method.value}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* API Partners & Ecosystem */}
      <section className="py-24 bg-slate-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-trust-50 text-trust text-sm font-semibold mb-4">
              {t('contact.ecosystemBadge')}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-trust">
              {t('contact.ecosystemTitle')}
            </h2>
            <p className="mt-4 text-gray-500">{t('contact.ecosystemSubtitle')}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {partnerTypes.map((partner, i) => (
              <AnimatedSection key={partner.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-trust/[0.06] bg-white hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-trust-50 flex items-center justify-center mb-4">
                    <partner.icon className="w-6 h-6 text-trust" />
                  </div>
                  <h3 className="text-base font-bold text-trust mb-2">{partner.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-trust/[0.06] shadow-sm p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-trust mb-2">{t('contact.formTitle')}</h2>
              <p className="text-sm text-gray-500 mb-8">{t('contact.formSubtitle')}</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-trust/80 mb-1.5">
                      {t('contact.firstName')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                      placeholder={t('contact.firstNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-trust/80 mb-1.5">
                      {t('contact.lastName')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                      placeholder={t('contact.lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    {t('contact.iAmA')}
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white text-gray-700">
                    <option>{t('contact.selectOne')}</option>
                    <option>{t('contact.optIndividual')}</option>
                    <option>{t('contact.optOrganization')}</option>
                    <option>{t('contact.optTourOperator')}</option>
                    <option>{t('contact.optGds')}</option>
                    <option>{t('contact.optApi')}</option>
                    <option>{t('contact.optInvestor')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    {t('contact.orgName')}{' '}
                    <span className="text-gray-400 font-normal">({t('contact.optional')})</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    placeholder={t('contact.orgPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-trust rounded-xl hover:bg-trust-light transition-all shadow-md shadow-trust/20"
                >
                  {t('contact.send')}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  {t('contact.privacyConsent')}{' '}
                  <a href="#" className="text-teal hover:underline">
                    {t('contact.privacyLink')}
                  </a>
                  .
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
