import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'Leave Studio',
  siteUrl: 'https://leavestudio.com',
  image: 'https://leavestudio.com/og-image.png',
}

export default function SEOHead({
  title,
  description,
  path = '/',
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} — The World's First Free Travel Portfolio Manager`
  const url = `${defaults.siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaults.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaults.image} />
    </Helmet>
  )
}
