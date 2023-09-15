import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Free QR Code Generator - Generate QR Codes Quickly and Easily',
  description: 'Generate QR codes for free with our fast and user-friendly QR code generator. Create custom QR codes for URLs, contact information, and more.',
  keywords: 'QR code generator, free QR codes, QR code creator, QR code maker, custom QR codes, QR code generator online',
  openGraph: {
    title: "Free QR Code Generator - Generate QR Codes Quickly and Easily",
    description: "Generate QR codes for free with our fast and user-friendly QR code generator. Create custom QR codes for URLs, contact information, and more.",
    url: "https://generator.estebanarriaga.com",
    images: "https://chart.googleapis.com/chart?chl=generator.estebanarriaga.com&choe=UTF-8&chs=300x300&cht=qr&chld=L",
    type: "website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
