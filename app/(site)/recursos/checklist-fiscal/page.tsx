import Link from 'next/link'
export default function Page(){
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold">Checklist fiscal PyME Córdoba</h1>
      <p className="mt-2 text-neutral-300">Te enviamos el PDF por email y también podés descargarlo acá:</p>
      <div className="mt-6">
        <Link href="/checklist.pdf" className="rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm">Descargar PDF</Link>
      </div>
    </main>
  )
}
