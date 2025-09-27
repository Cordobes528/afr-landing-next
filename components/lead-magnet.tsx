export default function LeadMagnet(){
  return (
    <section className="border-y border-white/5 bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl font-semibold">Checklist fiscal PyME Córdoba</h2>
          <p className="text-neutral-300 mt-1">Descargá el checklist (PDF) y recibí actualizaciones puntuales.</p>
          <form className="mt-4 flex gap-2" action="/api/contact" method="POST">
            <input type="hidden" name="lead" value="checklist-fiscal" />
            <input name="email" type="email" placeholder="Tu email" required className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 w-full max-w-md"/>
            <button className="rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm">Recibir PDF</button>
          </form>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe title="Agenda una reunión" src="https://calendar.google.com" className="w-full h-64" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}
