'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const map: Record<string, string> = {
  '-bienvenido': '/',
  '-servicios': '/servicios',
  '-experiencia': '/experiencia',
  '-preguntas': '/preguntas',
  '-contacto': '/contacto',
}

export function HashLegacyFixer(){
  const router = useRouter()
  useEffect(()=>{
    const hash = window.location.hash // e.g. #!/-bienvenido/
    if(hash.startsWith('#!/')){
      const slug = hash.replace('#!/', '').replaceAll('/', '')
      const to = map[slug]
      if(to) router.replace(to)
    }
  }, [router])
  return null
}
