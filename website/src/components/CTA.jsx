import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedSection from './AnimatedSection'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand to-brand-light px-8 py-16 sm:px-16 sm:py-24 text-center">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                Free for individuals · 14-day team trial
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
                Ready to plan your next great trip?
              </h2>

              <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
                Join 100K+ travelers and 500+ companies already using Leave Studio to discover
                destinations, plan smarter, and travel more.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/app/"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-brand bg-white rounded-2xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Get Started Free
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white/90 border border-white/20 rounded-2xl hover:bg-white/10 transition-all"
                >
                  Talk to Sales
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/50">
                No credit card required · Setup in under 2 minutes · Cancel anytime
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
