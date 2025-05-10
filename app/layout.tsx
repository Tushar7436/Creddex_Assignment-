import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
  description:
    "SoftSell helps businesses sell their unused software licenses at the best market rates. Turn your idle software assets into cash with our secure and efficient platform.",
  keywords: [
    "software license resale",
    "sell software licenses",
    "unused software licenses",
    "software asset management",
    "license valuation",
  ],
  authors: [{ name: "SoftSell" }],
  creator: "SoftSell",
  publisher: "SoftSell",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softsell.example.com",
    title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
    description: "Turn your idle software assets into cash with our secure and efficient platform.",
    siteName: "SoftSell",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Maximize the Value of Your Unused Software Licenses",
    description: "Turn your idle software assets into cash with our secure and efficient platform.",
    creator: "@softsell",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
