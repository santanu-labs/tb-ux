import { Globe, Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = {
    [t('footer.platform')]: [
      { label: t('footer.travelRoadmap'), href: '/#roadmap' },
      { label: t('footer.timeOffArch'), href: '/#time-off' },
      { label: t('footer.solutions'), href: '/#solutions' },
      { label: t('footer.safetyScores'), href: '/#trust' },
    ],
    [t('footer.company')]: [
      { label: t('footer.aboutUs'), href: '/about' },
      { label: t('footer.investorRelations'), href: '/about#investors' },
      { label: t('footer.careers'), href: '#' },
      { label: t('footer.contactLink'), href: '/contact' },
    ],
    [t('footer.ecosystem')]: [
      { label: t('footer.apiPartners'), href: '/contact' },
      { label: t('footer.tourOperators'), href: '/contact' },
      { label: t('footer.gdsProviders'), href: '/contact' },
      { label: t('footer.documentation'), href: '#' },
    ],
    [t('footer.legal')]: [
      { label: t('footer.privacyPolicy'), href: '#' },
      { label: t('footer.terms'), href: '#' },
      { label: t('footer.cookiePolicy'), href: '#' },
      { label: t('footer.security'), href: '/#trust' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: t('footer.twitter') },
    { icon: Linkedin, href: '#', label: t('footer.linkedin') },
    { icon: Github, href: '#', label: t('footer.github') },
    { icon: Mail, href: '#', label: t('footer.email') },
  ]

  return (
    <footer aria-label="Site footer" className="bg-trust-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            <div className="col-span-2">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-trust flex items-center justify-center border border-white/10">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">{t('footer.brand')}</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-3">{t('footer.tagline')}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal-400 text-xs font-semibold mb-6 border border-teal/20">
                {t('footer.alwaysFree')}
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-teal/20 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm hover:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Bar */}
        <div className="py-4 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-white/30">
          <span>{t('footer.iso')}</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{t('footer.soc')}</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{t('footer.gdprCompliant')}</span>
          <span className="w-px h-3 bg-white/10" />
          <span>{t('footer.encryption')}</span>
        </div>

        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs">{t('footer.engineered')}</p>
        </div>
      </div>
    </footer>
  )
}
