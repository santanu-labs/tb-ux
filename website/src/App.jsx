import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { RegionProvider } from './i18n/RegionContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import PricingPage from './pages/PricingPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RegionProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </RegionProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
