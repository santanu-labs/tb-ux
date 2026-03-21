import SEOHead from '../components/SEOHead'
import Hero from '../components/Hero'
import LogoCloud from '../components/LogoCloud'
import TimelineRoadmap from '../components/TimelineRoadmap'
import TimeOffArchitecture from '../components/TimeOffArchitecture'
import Features from '../components/Features'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'
import TrustSecurity from '../components/TrustSecurity'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <SEOHead
        description="Engineering the world's first free Travel Life-Planning Platform. Structure your time, optimize your leave, and architect a 10-year travel roadmap — enterprise-grade, zero cost."
        path="/"
      />
      <Hero />
      <LogoCloud />
      <TimelineRoadmap />
      <TimeOffArchitecture />
      <Features />
      <Solutions />
      <HowItWorks />
      <TrustSecurity />
      <Testimonials />
      <CTA />
    </>
  )
}
