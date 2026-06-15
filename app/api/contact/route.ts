import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { vorname, nachname, email, anliegen, nachricht } = await request.json()

    if (!vorname || !nachname || !email || !nachricht) {
      return Response.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'LV PA Thüringen Website <onboarding@resend.dev>',
      to: 'matse2003@gmail.com',
      replyTo: email,
      subject: `Neue Nachricht: ${anliegen || 'Kontaktformular'} – ${vorname} ${nachname}`,
      text: `Name: ${vorname} ${nachname}
E-Mail: ${email}
Anliegen: ${anliegen || '–'}

${nachricht}`,
    })

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}
