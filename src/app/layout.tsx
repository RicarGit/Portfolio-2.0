import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { Roboto_Slab } from "next/font/google"
import "./globals.css"

const fira_code = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' })
const roboto_slab = Roboto_Slab({ subsets: ["latin"], variable: '--font-roboto-slab' })

export const metadata: Metadata = {
  title: "Portfólio Next",
  description: "Ricardo Gava's Portfólio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fira_code.variable} ${roboto_slab.variable}`}>{children}</body>
    </html>
  )
}
