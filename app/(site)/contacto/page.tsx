export default function Page(){
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-3xl font-semibold">Contacto</h1>
        <p className="mt-2 text-neutral-300 max-w-xl">Respondemos dentro de las 24 h hábiles.</p>
        <div className="mt-6 space-y-3 text-sm text-neutral-300">
          <div>Tel: +54 351 XXX XXXX</div>
          <div>Email: contacto@tu-dominio.com</div>
          <div>Ubicación: Córdoba Capital, Argentina</div>
        </div>
        <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-white/10">
          <iframe title="Ubicación Córdoba" src="https://www.google.com/maps?q=Córdoba+Capital,+Argentina&output=embed" width="100%" height="100%" loading="lazy"></iframe>
        </div>
      </div>
      <form className="grid gap-3" action="/api/contact" method="POST">
        <input name="nombre" placeholder="Nombre" required className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2"/>
        <input name="email" type="email" placeholder="Email" required className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2"/>
        <input name="telefono" placeholder="Teléfono" className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2"/>
        <textarea name="mensaje" placeholder="¿En qué te ayudo?" required className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 min-h-28"></textarea>
        <button type="submit" className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm">Enviar</button>
        <p className="text-[11px] text-neutral-400">Al enviar, aceptás nuestra Política de Privacidad.</p>
      </form>
    </main>
  )
}
