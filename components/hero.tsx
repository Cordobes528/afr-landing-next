import Image from 'next/image'
export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Cumplimiento • Eficiencia • Datos</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Contabilidad e impuestos en Córdoba</h1>
          <p className="mt-4 text-neutral-300 max-w-xl">Soy <span className="text-white">Andrés F. Ruiz</span>, Contador Público. Soluciones prácticas con foco en normativa argentina, automatización y decisiones basadas en datos.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contacto" className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-5 py-3 text-sm font-medium">Agendar una llamada</a>
            <a href="/servicios" className="rounded-2xl border border-white/10 hover:border-white/20 px-5 py-3 text-sm font-medium text-neutral-200">Ver servicios</a>
          </div>
        </div>
        <div className="justify-self-end">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <Image src="/og.jpg" alt="AFR Contador" width={560} height={360} priority />
          </div>
        </div>
      </div>
    </section>
  )
}
