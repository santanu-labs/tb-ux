import { Globe, Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = {
  Platform: [
    { label: 'Travel Roadmap', href: '/#roadmap' },
    { label: 'Time-Off Architecture', href: '/#time-off' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Safety Scores', href: '/#trust' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Investor Relations', href: '/about#investors' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Ecosystem: [
    { label: 'API Partners', href: '/contact' },
    { label: 'Tour Operators', href: '/contact' },
    { label: 'GDS Providers', href: '/contact' },
    { label: 'Documentation', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '/#trust' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-trust-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
            <div className="col-span-2">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-trust flex items-center justify-center border border-white/10">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Leave Studio</span>
              </Link>
              <p className="text-sm leading-relaxed max-w-xs mb-3">
                The world's first free Travel Life-Planning Platform. Enterprise-grade
                architecture for every traveler.
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/10 text-teal-400 text-xs font-semibold mb-6 border border-teal/20">
                Always Free — No Paywalls
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
          <span>ISO 27001</span>
          <span className="w-px h-3 bg-white/10" />
          <span>SOC 2 Type II</span>
          <span className="w-px h-3 bg-white/10" />
          <span>GDPR Compliant</span>
          <span className="w-px h-3 bg-white/10" />
          <span>256-bit Encryption</span>
        </div>

        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Leave Studio. All rights reserved.</p>
          <p className="text-xs">
            Engineered with precision for a global audience
          </p>
        </div>
      </div>
    </footer>
  )
}
