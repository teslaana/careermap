import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CareerMap AI',
  description: 'Your AI-powered career guidance platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
