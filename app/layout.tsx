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
  ]
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
