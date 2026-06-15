import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LV PA Thüringen – Landesverband der Pflege- und Adoptivfamilien',
  description:
    'Landesverband der Pflege- und Adoptivfamilien Thüringen e.V. – Seit 1994 für Pflege- und Adoptivfamilien in Thüringen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
