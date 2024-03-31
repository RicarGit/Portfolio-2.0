type FooterProps = {
  children: React.ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="h-full relative">
      {children}
    </footer>
  )
}
