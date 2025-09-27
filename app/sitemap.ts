export default function sitemap(){
  const base = 'https://contador-andresfruiz.com'
  return [
    { url: `${base}/`, changefreq: 'weekly', priority: 1.0 },
    { url: `${base}/servicios`, changefreq: 'monthly', priority: 0.8 },
    { url: `${base}/experiencia`, changefreq: 'monthly', priority: 0.7 },
    { url: `${base}/preguntas`, changefreq: 'monthly', priority: 0.6 },
    { url: `${base}/contacto`, changefreq: 'monthly', priority: 0.8 },
    { url: `${base}/recursos/checklist-fiscal`, changefreq: 'monthly', priority: 0.6 }
  ]
}
