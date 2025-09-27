'use client'
import Link from 'next/link'

export default function Nav(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight"><span className="text-indigo-400">AFR</span> Contador Público</Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/servicios">Servicios</Link>
          <Link href="/experiencia">Experiencia</Link>
          <Link href="/preguntas">Preguntas</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/54351XXXXXXX" target="_blank" className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm">WhatsApp</a>
          <Link href="/contacto" className="hidden sm:inline-block rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm">Solicitud de consulta</Link>
        </div>
      </nav>
    </header>
  )
}
