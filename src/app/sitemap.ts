import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://depon.com.tr/',
      lastModified: new Date(),
    },
    {
      url: 'https://depon.com.tr/hizmetlerimiz',
      lastModified: new Date(),
    },
    {
      url: 'https://depon.com.tr/referanslar', 
      lastModified: new Date(),
    },
    {
      url: 'https://depon.com.tr/iletisim',
      lastModified: new Date(),
    },
  ]
}