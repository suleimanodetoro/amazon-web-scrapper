import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Amazon Web Scrapper',
  description: 'Web scrapping tool, Suleiman Odetoro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
