import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Routine - Seu monitoramento semanal',
  description: 'Um projeto desenvolvido no intuito de ajudar as pessoas a terem controle sobre suas rotinas, hábitos e, assim, melhorar o gerenciamento de tempo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
