import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Alexandria } from "next/font/google"

const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} font-alexandria`}>{children}</body>
    </html>
  )
}
