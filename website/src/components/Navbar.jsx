import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'Time-Off', href: '/#time-off' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Trust', href: '/#trust' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,35,102,0.06)] border-b border-trust/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-trust flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-trust">Leave Studio</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-trust rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/app/"
              className="px-4 py-2 text-sm font-medium text-trust/70 hover:text-trust transition-colors"
            >
              Sign In
            </a>
            <a
              href="/app/"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-trust rounded-xl hover:bg-trust-light transition-all shadow-[0_1px_2px_rgba(0,35,102,0.3)] hover:shadow-[0_4px_12px_rgba(0,35,102,0.25)]"
            >
              Start Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-trust/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-trust-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-trust/[0.06] space-y-2">
                <a
                  href="/app/"
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-trust-50 rounded-lg"
                >
                  Sign In
                </a>
                <a
                  href="/app/"
                  className="block px-4 py-3 text-sm font-semibold text-white bg-trust rounded-xl text-center"
                >
                  Start Free — Always Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
