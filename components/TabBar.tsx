"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Chat", href: "/chat", icon: "💬" },
  { label: "Settings", href: "/settings", icon: "⛭" },
]

export default function TabBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 flex h-16 items-center justify-around border-t border-gray-200 bg-white">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`flex flex-col items-center gap-1 px-4 py-2 text-xs ${pathname === tab.href ? "font-semibold text-blue-600" : "text-gray-500"}`}
        >
          <span className="text-xl">{tab.icon}</span>
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
