export default function Footer(){
  return (
    <footer className="border-t border-white/5 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-medium text-white">AFR Contador Público</p>
          <p className="text-neutral-400 mt-1">Asesoramiento integral para profesionales y pymes en Córdoba.</p>
        </div>
        <div>
          <p className="font-medium text-white">Enlaces</p>
          <ul className="mt-2 space-y-1 text-neutral-300">
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/experiencia">Experiencia</a></li>
            <li><a href="/preguntas">Preguntas</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-white" id="privacidad">Privacidad</p>
          <p className="text-neutral-400 mt-1 text-xs">Usamos la información únicamente para responder a tu consulta.</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Andrés F. Ruiz. Todos los derechos reservados.</div>
    </footer>
  )
}
