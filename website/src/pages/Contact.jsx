import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { Mail, Phone, MapPin, MessageSquare, Globe, Code, Plane } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team typically responds within 4 hours.',
    value: 'hello@leavestudio.com',
    color: 'bg-trust-50 text-trust',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm EST.',
    value: '+1 (415) 555-0192',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office.',
    value: 'San Francisco, CA',
    color: 'bg-amber-50 text-amber-700',
  },
]

const partnerTypes = [
  {
    icon: Plane,
    title: 'Tour Operators',
    description: 'List your experiences and reach millions of intent-rich travelers through our free platform.',
  },
  {
    icon: Code,
    title: 'GDS Providers',
    description: 'Integrate your inventory via our API. Power the world\'s first Travel Life-Planning Platform.',
  },
  {
    icon: Globe,
    title: 'API Partners',
    description: 'Build on top of Leave Studio. Access travel optimization data, safety scores, and bridge algorithms.',
  },
]

export default function Contact() {
  return (
    <div className="pt-20">
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
              Contact & Partnerships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-trust"
            >
              Get in <span className="text-teal">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              Whether you're an individual, an organization, or a partner looking to join
              our ecosystem — we'd love to hear from you.
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
              Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-trust">
              Join the Leave Studio Ecosystem
            </h2>
            <p className="mt-4 text-gray-500">
              Tour operators, GDS providers, and API partners — reach millions of
              travelers through the world's first free Travel Life-Planning Platform.
            </p>
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
              <h2 className="text-2xl font-bold text-trust mb-2">Send us a message</h2>
              <p className="text-sm text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-trust/80 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-trust/80 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    I am a...
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all bg-white text-gray-700">
                    <option>Select one</option>
                    <option>Individual traveler</option>
                    <option>Organization (HR / People Ops)</option>
                    <option>Tour Operator</option>
                    <option>GDS Provider</option>
                    <option>API Partner</option>
                    <option>Investor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    Organization Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-trust/80 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-trust/10 text-sm focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-trust rounded-xl hover:bg-trust-light transition-all shadow-md shadow-trust/20"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-teal hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
