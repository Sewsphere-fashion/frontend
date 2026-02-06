import type { Metadata } from 'next'
import "./globals.css";

export const metadata: Metadata = {
  title: 'SewSphere',
  description: 'A fashion platform connecting clients with verified designers for custom and ready-made outfits. Nigeria first, diaspora next.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
