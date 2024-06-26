import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { Archivo } from "next/font/google"
import "./globals.css"

const fira_code = Fira_Code({ subsets: ["latin"], variable: '--font-fira-code' })
const archivo = Archivo({ subsets: ["latin"], variable: '--font-archivo' })

import { PageDetails } from "@/components"

export const metadata: Metadata = {
  title: "Portfólio Next",
  description: "Ricardo Gava's Portfolio",
  keywords: ['Front-End Developer, Desenvolvedor Fron-End, Web Developer, Desenvolvedor Web, Portfólio Nextjs, Portfolio Nextjs'],
  authors: [{ name: 'Ricardo Augusto Gava', url: 'https://portfolio-ricardo-2-0.vercel.app/' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fira_code.variable} ${archivo.variable} bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-50% to-dark-green overflow-hidden`}>
        <>
          <PageDetails />
          {children}
        </>
      </body>
    </html>
  )
}
