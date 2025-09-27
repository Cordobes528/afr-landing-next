import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = process.env.CONTACT_TO
const FROM = process.env.CONTACT_FROM || 'AFR <no-reply@tu-dominio.com>'

export async function POST(req: NextRequest){
  const formData = await req.formData()
  const nombre = String(formData.get('nombre') || '')
  const email = String(formData.get('email') || '')
  const telefono = String(formData.get('telefono') || '')
  const mensaje = String(formData.get('mensaje') || '')
  const lead = String(formData.get('lead') || '')

  if(!TO){
    return new NextResponse('CONTACT_TO not set', { status: 500 })
  }

  await resend.emails.send({
    from: FROM,
    to: TO,
    subject: lead ? `Nuevo lead: ${lead}` : 'Nueva consulta del sitio',
    text: `Nombre: ${nombre}\nEmail: ${email}\nTel: ${telefono}\nMensaje: ${mensaje}`
  })

  const autorespuesta = lead
    ? { subject: 'Tu checklist fiscal PyME Córdoba', text: 'Adjuntamos el PDF. Gracias por suscribirte.' , attachments: [{ filename:'checklist.pdf', path: './public/checklist.pdf' }]}
    : { subject: 'Recibimos tu consulta', text: 'Gracias por escribirnos. Te respondemos a la brevedad.' }

  if(email){
    await resend.emails.send({ from: FROM, to: email, ...autorespuesta })
  }

  return NextResponse.redirect(new URL(lead ? '/recursos/checklist-fiscal' : '/contacto', req.url))
}
