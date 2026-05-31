import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Invictus AI | Dental Clinic Growth Agency',
    short_name: 'Invictus AI',
    description: '15 New Patients. Every Month. Guaranteed. Premium website and marketing services exclusively for dental clinics in India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#CCFF00',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
