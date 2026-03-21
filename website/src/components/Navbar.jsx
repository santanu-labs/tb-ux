import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Menu, X, ArrowRight, ChevronDown, Calendar } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRegion } from '../i18n/RegionContext'
import { supportedLanguages } from '../i18n'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { changeLanguage } = useRegion()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langMenuRef = useRef(null)
  const location = useLocation()

  const navLinks = [
    { label: t('nav.roadmap'), href: '/#roadmap' },
    { label: t('nav.timeOff'), href: '/#time-off' },
    { label: t('nav.solutions'), href: '/#solutions' },
    { label: t('nav.trust'), href: '/#trust' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (!langOpen) return
    const onDoc = (e) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [langOpen])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const currentLang = i18n.resolvedLanguage?.split('-')[0] || i18n.language?.split('-')[0] || 'en'

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
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-trust">{t('nav.brand')}</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
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
              {t('nav.signIn')}
            </a>

            <div className="relative" ref={langMenuRef}>
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="inline-flex items-center gap-1 p-2 rounded-lg text-trust/70 hover:text-trust hover:bg-trust/5 transition-colors"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <Globe className="w-4 h-4" />
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 min-w-[11rem] z-50 rounded-xl border border-gray-200 bg-white shadow-lg py-1"
                    role="listbox"
                  >
                    {supportedLanguages.map(({ code, label, flag }) => (
                      <button
                        key={code}
                        type="button"
                        role="option"
                        aria-selected={currentLang === code}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-trust/5 transition-colors ${
                          currentLang === code ? 'text-trust font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          changeLanguage(code)
                          setLangOpen(false)
                        }}
                      >
                        <span className="text-base leading-none" aria-hidden>
                          {flag}
                        </span>
                        <span>{label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/app/"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-trust rounded-xl hover:bg-trust-light transition-all shadow-[0_1px_2px_rgba(0,35,102,0.3)] hover:shadow-[0_4px_12px_rgba(0,35,102,0.25)]"
            >
              {t('nav.startFree')}
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
                  key={link.href}
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
                  {t('nav.signIn')}
                </a>
                <a
                  href="/app/"
                  className="block px-4 py-3 text-sm font-semibold text-white bg-trust rounded-xl text-center"
                >
                  {t('nav.startFreeAlways')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
