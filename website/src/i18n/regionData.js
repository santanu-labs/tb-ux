const regionData = {
  US: {
    currency: { symbol: '$', code: 'USD' },
    publicHolidayCount: '11 days',
    holidays: [
      { name: 'New Year\'s Day', date: 'Jan 1' },
      { name: 'Martin Luther King Jr. Day', date: 'Jan 20' },
      { name: 'Presidents\' Day', date: 'Feb 17' },
      { name: 'Memorial Day', date: 'May 26' },
      { name: 'Independence Day', date: 'Jul 4' },
      { name: 'Labor Day', date: 'Sep 1' },
      { name: 'Thanksgiving', date: 'Nov 27' },
      { name: 'Christmas Day', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: 1000, monthly: 50, days: 9, match: 94 },
      { destination: 'Lisbon, Portugal', quarter: 'Q3', cost: 950, monthly: 48, days: 5, match: 89 },
      { destination: 'Santorini, Greece', quarter: 'Q1', cost: 2150, monthly: 179, days: 10, match: 91 },
      { destination: 'Medellín, Colombia', quarter: 'Q4', cost: 800, monthly: 67, days: 6, match: 96 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 2850, monthly: 119, days: 12, match: 88 },
      { destination: 'Iceland', quarter: 'Q3', cost: 3800, monthly: 106, days: 14, match: 85 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 5350, monthly: 112, days: 16, match: 92 },
    ],
    contact: { phone: '+1 (415) 555-0192', address: 'San Francisco, CA', timezone: 'Mon-Fri from 9am to 6pm EST' },
    teamPrice: 1.19,
    heroMonthlySave: 50,
  },
  GB: {
    currency: { symbol: '£', code: 'GBP' },
    publicHolidayCount: '8 days',
    holidays: [
      { name: 'New Year\'s Day', date: 'Jan 1' },
      { name: 'Good Friday', date: 'Apr 18' },
      { name: 'Easter Monday', date: 'Apr 21' },
      { name: 'Early May Bank Holiday', date: 'May 5' },
      { name: 'Spring Bank Holiday', date: 'May 26' },
      { name: 'Summer Bank Holiday', date: 'Aug 25' },
      { name: 'Christmas Day', date: 'Dec 25' },
      { name: 'Boxing Day', date: 'Dec 26' },
    ],
    destinations: [
      { destination: 'Barcelona, Spain', quarter: 'Q2', cost: 650, monthly: 33, days: 7, match: 93 },
      { destination: 'Dubrovnik, Croatia', quarter: 'Q3', cost: 800, monthly: 40, days: 5, match: 90 },
      { destination: 'Marrakech, Morocco', quarter: 'Q1', cost: 550, monthly: 46, days: 6, match: 88 },
      { destination: 'Reykjavik, Iceland', quarter: 'Q4', cost: 1200, monthly: 100, days: 8, match: 85 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 2200, monthly: 92, days: 12, match: 87 },
      { destination: 'Cape Town, South Africa', quarter: 'Q3', cost: 1800, monthly: 75, days: 10, match: 91 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 4200, monthly: 88, days: 16, match: 92 },
    ],
    contact: { phone: '+44 20 7946 0958', address: 'London, UK', timezone: 'Mon-Fri from 9am to 6pm GMT' },
    teamPrice: 0.99,
    heroMonthlySave: 40,
  },
  DE: {
    currency: { symbol: '€', code: 'EUR' },
    publicHolidayCount: '9–13 days',
    holidays: [
      { name: 'Neujahr', date: 'Jan 1' },
      { name: 'Karfreitag', date: 'Apr 18' },
      { name: 'Ostermontag', date: 'Apr 21' },
      { name: 'Tag der Arbeit', date: 'May 1' },
      { name: 'Tag der Deutschen Einheit', date: 'Oct 3' },
      { name: 'Weihnachten', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Mallorca, Spain', quarter: 'Q2', cost: 600, monthly: 30, days: 7, match: 94 },
      { destination: 'Santorini, Greece', quarter: 'Q3', cost: 900, monthly: 45, days: 8, match: 91 },
      { destination: 'Bali, Indonesia', quarter: 'Q1', cost: 1400, monthly: 117, days: 12, match: 89 },
      { destination: 'Tulum, Mexico', quarter: 'Q4', cost: 1600, monthly: 133, days: 10, match: 86 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 2200, monthly: 92, days: 12, match: 88 },
      { destination: 'Patagonia, Argentina', quarter: 'Q3', cost: 3200, monthly: 89, days: 14, match: 85 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 4500, monthly: 94, days: 16, match: 92 },
    ],
    contact: { phone: '+49 30 1234 5678', address: 'Berlin, Germany', timezone: 'Mon-Fri from 9am to 6pm CET' },
    teamPrice: 1.09,
    heroMonthlySave: 45,
  },
  FR: {
    currency: { symbol: '€', code: 'EUR' },
    publicHolidayCount: '11 days',
    holidays: [
      { name: 'Jour de l\'An', date: 'Jan 1' },
      { name: 'Lundi de Pâques', date: 'Apr 21' },
      { name: 'Fête du Travail', date: 'May 1' },
      { name: 'Fête Nationale', date: 'Jul 14' },
      { name: 'Assomption', date: 'Aug 15' },
      { name: 'Toussaint', date: 'Nov 1' },
      { name: 'Noël', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Barcelona, Spain', quarter: 'Q2', cost: 500, monthly: 25, days: 5, match: 95 },
      { destination: 'Santorini, Greece', quarter: 'Q3', cost: 850, monthly: 43, days: 8, match: 91 },
      { destination: 'Bali, Indonesia', quarter: 'Q1', cost: 1400, monthly: 117, days: 12, match: 89 },
      { destination: 'Marrakech, Morocco', quarter: 'Q4', cost: 450, monthly: 38, days: 6, match: 93 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 2100, monthly: 88, days: 12, match: 88 },
      { destination: 'Iceland', quarter: 'Q3', cost: 2800, monthly: 78, days: 14, match: 85 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 4500, monthly: 94, days: 16, match: 92 },
    ],
    contact: { phone: '+33 1 23 45 67 89', address: 'Paris, France', timezone: 'Mon-Fri from 9am to 6pm CET' },
    teamPrice: 1.09,
    heroMonthlySave: 45,
  },
  JP: {
    currency: { symbol: '¥', code: 'JPY' },
    publicHolidayCount: '16 days',
    holidays: [
      { name: '元日', date: 'Jan 1' },
      { name: '成人の日', date: 'Jan 13' },
      { name: '春分の日', date: 'Mar 20' },
      { name: '昭和の日', date: 'Apr 29' },
      { name: '海の日', date: 'Jul 21' },
      { name: '文化の日', date: 'Nov 3' },
    ],
    destinations: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: 150000, monthly: 7500, days: 7, match: 94 },
      { destination: 'Santorini, Greece', quarter: 'Q3', cost: 320000, monthly: 16000, days: 10, match: 90 },
      { destination: 'Barcelona, Spain', quarter: 'Q1', cost: 280000, monthly: 23333, days: 8, match: 88 },
      { destination: 'Hawaii, USA', quarter: 'Q4', cost: 200000, monthly: 16667, days: 7, match: 93 },
      { destination: 'Iceland', quarter: 'Q2', cost: 450000, monthly: 12500, days: 12, match: 86 },
      { destination: 'Patagonia, Argentina', quarter: 'Q3', cost: 550000, monthly: 15278, days: 14, match: 84 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 700000, monthly: 14583, days: 16, match: 91 },
    ],
    contact: { phone: '+81 3-1234-5678', address: 'Tokyo, Japan', timezone: 'Mon-Fri from 9am to 6pm JST' },
    teamPrice: 179,
    heroMonthlySave: 7500,
  },
  BR: {
    currency: { symbol: 'R$', code: 'BRL' },
    publicHolidayCount: '12 days',
    holidays: [
      { name: 'Ano Novo', date: 'Jan 1' },
      { name: 'Carnaval', date: 'Mar 4' },
      { name: 'Sexta-feira Santa', date: 'Apr 18' },
      { name: 'Tiradentes', date: 'Apr 21' },
      { name: 'Independência', date: 'Sep 7' },
      { name: 'Natal', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Lisbon, Portugal', quarter: 'Q2', cost: 5500, monthly: 275, days: 8, match: 95 },
      { destination: 'Buenos Aires, Argentina', quarter: 'Q3', cost: 2800, monthly: 140, days: 5, match: 93 },
      { destination: 'Cancún, Mexico', quarter: 'Q1', cost: 4200, monthly: 350, days: 7, match: 90 },
      { destination: 'Santorini, Greece', quarter: 'Q4', cost: 12000, monthly: 1000, days: 10, match: 88 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 15000, monthly: 625, days: 12, match: 86 },
      { destination: 'Iceland', quarter: 'Q3', cost: 18000, monthly: 500, days: 14, match: 84 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 25000, monthly: 521, days: 16, match: 91 },
    ],
    contact: { phone: '+55 11 1234-5678', address: 'São Paulo, Brazil', timezone: 'Mon-Fri from 9am to 6pm BRT' },
    teamPrice: 5.99,
    heroMonthlySave: 275,
  },
  CN: {
    currency: { symbol: '¥', code: 'CNY' },
    publicHolidayCount: '11 days',
    holidays: [
      { name: '元旦', date: 'Jan 1' },
      { name: '春节', date: 'Jan 29' },
      { name: '清明节', date: 'Apr 4' },
      { name: '劳动节', date: 'May 1' },
      { name: '端午节', date: 'Jun 1' },
      { name: '国庆节', date: 'Oct 1' },
    ],
    destinations: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: 7000, monthly: 350, days: 7, match: 94 },
      { destination: 'Tokyo, Japan', quarter: 'Q3', cost: 8000, monthly: 400, days: 5, match: 93 },
      { destination: 'Santorini, Greece', quarter: 'Q1', cost: 18000, monthly: 1500, days: 10, match: 89 },
      { destination: 'Barcelona, Spain', quarter: 'Q4', cost: 15000, monthly: 1250, days: 8, match: 87 },
      { destination: 'Iceland', quarter: 'Q2', cost: 25000, monthly: 694, days: 12, match: 85 },
      { destination: 'Patagonia, Argentina', quarter: 'Q3', cost: 30000, monthly: 833, days: 14, match: 83 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 35000, monthly: 729, days: 16, match: 91 },
    ],
    contact: { phone: '+86 21 1234 5678', address: 'Shanghai, China', timezone: 'Mon-Fri from 9am to 6pm CST' },
    teamPrice: 7.99,
    heroMonthlySave: 350,
  },
  IN: {
    currency: { symbol: '₹', code: 'INR' },
    publicHolidayCount: '12–18 days',
    holidays: [
      { name: 'Republic Day', date: 'Jan 26' },
      { name: 'Holi', date: 'Mar 14' },
      { name: 'Independence Day', date: 'Aug 15' },
      { name: 'Gandhi Jayanti', date: 'Oct 2' },
      { name: 'Diwali', date: 'Oct 20' },
      { name: 'Christmas', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: 85000, monthly: 4250, days: 9, match: 94 },
      { destination: 'Lisbon, Portugal', quarter: 'Q3', cost: 80000, monthly: 4000, days: 5, match: 89 },
      { destination: 'Santorini, Greece', quarter: 'Q1', cost: 180000, monthly: 15000, days: 10, match: 91 },
      { destination: 'Medellín, Colombia', quarter: 'Q4', cost: 65000, monthly: 5417, days: 6, match: 96 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 240000, monthly: 10000, days: 12, match: 88 },
      { destination: 'Iceland', quarter: 'Q3', cost: 320000, monthly: 8889, days: 14, match: 85 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 450000, monthly: 9375, days: 16, match: 92 },
    ],
    contact: { phone: '+91 80 1234 5678', address: 'Bangalore, India', timezone: 'Mon-Fri from 9am to 6pm IST' },
    teamPrice: 99,
    heroMonthlySave: 4250,
  },
  ES: {
    currency: { symbol: '€', code: 'EUR' },
    publicHolidayCount: '14 days',
    holidays: [
      { name: 'Año Nuevo', date: 'Jan 1' },
      { name: 'Viernes Santo', date: 'Apr 18' },
      { name: 'Fiesta del Trabajo', date: 'May 1' },
      { name: 'Fiesta Nacional', date: 'Oct 12' },
      { name: 'Navidad', date: 'Dec 25' },
    ],
    destinations: [
      { destination: 'Bali, Indonesia', quarter: 'Q2', cost: 1100, monthly: 55, days: 9, match: 93 },
      { destination: 'Marrakech, Morocco', quarter: 'Q3', cost: 400, monthly: 20, days: 5, match: 95 },
      { destination: 'Santorini, Greece', quarter: 'Q1', cost: 750, monthly: 63, days: 8, match: 92 },
      { destination: 'Tulum, Mexico', quarter: 'Q4', cost: 1300, monthly: 108, days: 10, match: 88 },
      { destination: 'Tokyo, Japan', quarter: 'Q2', cost: 2000, monthly: 83, days: 12, match: 87 },
      { destination: 'Iceland', quarter: 'Q3', cost: 2500, monthly: 69, days: 14, match: 85 },
      { destination: 'New Zealand', quarter: 'Q1', cost: 4200, monthly: 88, days: 16, match: 91 },
    ],
    contact: { phone: '+34 91 123 4567', address: 'Madrid, Spain', timezone: 'Mon-Fri from 9am to 6pm CET' },
    teamPrice: 1.09,
    heroMonthlySave: 45,
  },
}

const countryToLocale = {
  US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  FR: 'fr', BE: 'fr', CH: 'fr',
  DE: 'de', AT: 'de',
  JP: 'ja',
  BR: 'pt', PT: 'pt',
  CN: 'zh', TW: 'zh', HK: 'zh',
  IN: 'en',
}

const countryToRegion = {
  US: 'US', CA: 'US', AU: 'US', NZ: 'US', IE: 'GB',
  GB: 'GB',
  DE: 'DE', AT: 'DE', CH: 'DE',
  FR: 'FR', BE: 'FR',
  ES: 'ES', MX: 'ES', AR: 'ES', CO: 'ES', CL: 'ES', PE: 'ES',
  JP: 'JP',
  BR: 'BR', PT: 'BR',
  CN: 'CN', TW: 'CN', HK: 'CN',
  IN: 'IN',
}

export function getLocaleForCountry(countryCode) {
  return countryToLocale[countryCode] || 'en'
}

export function getRegionForCountry(countryCode) {
  const regionKey = countryToRegion[countryCode] || 'US'
  return regionData[regionKey] || regionData.US
}

export function formatCurrency(amount, region) {
  const { symbol, code } = region.currency
  if (code === 'JPY' || code === 'CNY') {
    return `${symbol}${amount.toLocaleString()}`
  }
  if (code === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`
  }
  return `${symbol}${amount.toLocaleString()}`
}

export function formatCurrencyPerMonth(amount, region) {
  return `${formatCurrency(amount, region)}/mo`
}

export default regionData
