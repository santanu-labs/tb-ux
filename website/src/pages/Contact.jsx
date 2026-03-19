import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Our team typically responds within 4 hours.',
    value: 'hello@leavestudio.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm IST.',
    value: '+91 80 1234 5678',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office.',
    value: 'Bangalore, India',
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-brand-50 via-white to-brand-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/[0.08] text-brand-600 text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Get in <span className="text-brand">touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600"
            >
              Have questions about Leave Studio? Whether you're an individual traveler or representing
              a company, we'd love to hear from you.
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
                  className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                  <p className="text-sm font-semibold text-brand">{method.value}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-sm text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    I am a...
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all bg-white text-gray-700">
                    <option>Select one</option>
                    <option>Individual traveler</option>
                    <option>Company (1-50 people)</option>
                    <option>Company (51-200 people)</option>
                    <option>Company (201-500 people)</option>
                    <option>Company (500+ people)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-light transition-all shadow-md shadow-brand/20"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-brand hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
