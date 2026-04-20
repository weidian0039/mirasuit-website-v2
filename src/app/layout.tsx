import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIRASUIT — 意式定制西装',
  description: '从 Milan 到上海，匠心传承三代。每一针每一线，皆为您的故事而生。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
