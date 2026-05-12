import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import TabBar from "@/components/TabBar"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <header className="bg-[#1d70b8] px-4 pt-10 pb-4">
            <h1 className="mb-3 text-center text-3xl font-bold text-white">
              GOV<span className="text-[#00e5c0]">·</span>UK
            </h1>
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-full bg-white px-4 py-2 text-gray-700"
            />
          </header>
          <main className="pb-16">{children}</main>
          <TabBar />
        </ThemeProvider>
      </body>
    </html>
  )
}
