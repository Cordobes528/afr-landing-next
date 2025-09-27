/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  },
  async redirects() {
    return [
      { source: '/bienvenido', destination: '/', permanent: true },
      { source: '/servicios', destination: '/servicios', permanent: true },
      { source: '/experiencia', destination: '/experiencia', permanent: true },
      { source: '/preguntas', destination: '/preguntas', permanent: true },
      { source: '/contacto', destination: '/contacto', permanent: true },
      { source: '/recursos/checklist', destination: '/recursos/checklist-fiscal', permanent: true }
    ]
  }
}
export default nextConfig
