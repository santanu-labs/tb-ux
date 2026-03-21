import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

const companies = [
  'Meridian',
  'Stratos',
  'NovaBridge',
  'Arcadia',
  'Vantage',
  'Helix',
  'Luminary',
  'Basecamp',
]

export default function LogoCloud() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white border-y border-trust/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-sm font-medium text-trust/30 uppercase tracking-wider mb-8">
            {t('logoCloud.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <div
                key={company}
                className="text-lg font-bold text-trust/15 hover:text-trust/30 transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
