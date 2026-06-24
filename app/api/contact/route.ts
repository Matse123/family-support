import { Resend } from 'resend'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY ist nicht gesetzt')
    return Response.json({ error: 'Server-Konfigurationsfehler' }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Ungültiges Request-Format' }, { status: 400 })
  }

  const { vorname, nachname, email, anliegen, nachricht } = body as Record<string, string>

  if (!vorname || !nachname || !email || !nachricht) {
    return Response.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
  }

  try {
    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'LV PA Thüringen Website <onboarding@resend.dev>',
      to: 'mattismerten03@gmail.com',
      replyTo: email,
      subject: `Neue Nachricht: ${anliegen || 'Kontaktformular'} – ${vorname} ${nachname}`,
      text: `Name: ${vorname} ${nachname}
E-Mail: ${email}
Anliegen: ${anliegen || '–'}

${nachricht}`,
    })

    if (error) {
      console.error('[contact] Resend Fehler:', JSON.stringify(error))
      return Response.json({ error: 'E-Mail konnte nicht gesendet werden', detail: error.message }, { status: 500 })
    }

    console.log('[contact] E-Mail gesendet, ID:', data?.id)
    return Response.json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('[contact] Unerwarteter Fehler:', err)
    return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}


