import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://contador-andresfruiz.com'),
  title: {
    default: 'Andrés F. Ruiz — Contador Público en Córdoba',
    template: '%s | AFR Contador'
  },
  description: 'Servicios contables, impositivos y periciales para pymes y profesionales en Córdoba Capital. Cumplimiento, eficiencia y datos.',
  openGraph: {
    type: 'website',
    url: 'https://contador-andresfruiz.com',
    siteName: 'AFR Contador',
    title: 'Andrés F. Ruiz — Contador Público en Córdoba',
    description: 'Asesoramiento impositivo y contable. Pericias y tableros de gestión.',
    images: ['/og.jpg'],
    locale: 'es_AR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFR Contador',
    description: 'Contabilidad e impuestos para pymes y profesionales en Córdoba.',
    images: ['/og.jpg']
  },
  alternates: { canonical: 'https://contador-andresfruiz.com' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
