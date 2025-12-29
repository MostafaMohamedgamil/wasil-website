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
  title: "7 Solutions",
  description:
    "Professional construction and contracting services including general contracting, infrastructure, residential, commercial, and industrial projects.",
  generator: "wasil.app",
  icons: {
    icon: [
      {
        url: "https://cdn.breadfast.com/wp-content/uploads/2019/02/cropped-favicon-1-150x150-1-32x32.png",
        sizes: "32x32",
      },
      {
        url: "https://cdn.breadfast.com/wp-content/uploads/2019/02/cropped-favicon-1-150x150-1-192x192.png",
        sizes: "192x192",
      },
    ],
    apple: {
      url: "https://cdn.breadfast.com/wp-content/uploads/2019/02/cropped-favicon-1-150x150-1-180x180.png",
    },
    other: {
      rel: "msapplication-TileImage",
      url: "https://cdn.breadfast.com/wp-content/uploads/2019/02/cropped-favicon-1-150x150-1-270x270.png",
    },
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
