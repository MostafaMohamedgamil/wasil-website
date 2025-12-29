import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuilderCo - Leading Construction & Contracting Company",
  description:
    "Professional construction and contracting services including general contracting, infrastructure, residential, commercial, and industrial projects.",
  generator: "wasil.app",
  icons: {
    icon: [
      {
        url: "/",
        media: "",
      },
      {
        url: "/",
        media: "",
      },
      {
        url: "/",
        type: "",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
