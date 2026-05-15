import "./globals.css"
import { cn } from "@/lib/utils"
import TabBar from "@/components/TabBar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased")}>
      <body className="bg-accent">
        {/* <ThemeProvider> */}
        <div className="bg-white">{children}</div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
