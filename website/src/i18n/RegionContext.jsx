import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getLocaleForCountry, getRegionForCountry } from './regionData'

const RegionContext = createContext(null)

export function RegionProvider({ children }) {
  const { i18n } = useTranslation()
  const [region, setRegion] = useState(() => getRegionForCountry('US'))
  const [countryCode, setCountryCode] = useState('US')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('ls-country')
    if (saved) {
      applyCountry(saved)
      setLoading(false)
      return
    }

    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((data) => {
        if (data?.country_code) {
          applyCountry(data.country_code)
          localStorage.setItem('ls-country', data.country_code)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  function applyCountry(code) {
    setCountryCode(code)
    setRegion(getRegionForCountry(code))

    const savedLang = localStorage.getItem('ls-lang')
    if (!savedLang) {
      const locale = getLocaleForCountry(code)
      i18n.changeLanguage(locale)
    }
  }

  useEffect(() => {
    document.documentElement.lang = i18n.language || 'en'
  }, [i18n.language])

  function changeLanguage(langCode) {
    i18n.changeLanguage(langCode)
    localStorage.setItem('ls-lang', langCode)
  }

  function changeCountry(code) {
    applyCountry(code)
    localStorage.setItem('ls-country', code)
  }

  return (
    <RegionContext.Provider value={{ region, countryCode, loading, changeLanguage, changeCountry }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used within RegionProvider')
  return ctx
}
