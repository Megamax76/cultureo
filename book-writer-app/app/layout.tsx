import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Writer - Écrivez vos livres',
  description: 'Application d\'écriture de livres professionnelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-serif">{children}</body>
    </html>
  )
}
