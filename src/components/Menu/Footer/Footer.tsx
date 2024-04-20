type FooterProps = {
  children: React.ReactNode
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="h-full relative">
      {children}
    </footer>
  )
}
