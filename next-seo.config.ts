import siteConfig from './site.config';

const SEO = {
  title: siteConfig.title,
  // description: siteConfig.description, - injected on page, translated
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: siteConfig.default_locale,
    url: siteConfig.url,
    site_name: siteConfig.title,
    title: siteConfig.title,
    // description: siteConfig.description, - injected on page, translated
    images: [
      {
        url: siteConfig.image,
        alt: siteConfig.title
      }
    ]
  },
  twitter: {
    handle: siteConfig.twitter_username,
    site: siteConfig.twitter_username,
    cardType: 'summary_large_image'
  }
};

export default SEO;
