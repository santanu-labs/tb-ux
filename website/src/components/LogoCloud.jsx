import AnimatedSection from './AnimatedSection'

const companies = [
  'TechNova',
  'CloudStack',
  'GlobalReach',
  'SecureOps',
  'InnovateTech',
  'NexGen',
  'DataPulse',
  'QuantumLeap',
]

export default function LogoCloud() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Trusted by travelers and forward-thinking companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map((company) => (
              <div
                key={company}
                className="text-lg font-bold text-gray-300 hover:text-gray-400 transition-colors cursor-default"
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
