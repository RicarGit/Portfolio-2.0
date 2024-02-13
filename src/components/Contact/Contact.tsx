import { ReactNode } from "react"

type ContactProps = {
  contact: string
  children: ReactNode
}

export const Contact = ({ contact, children }: ContactProps) => {
  return (
    <div className="text-light-green mb-4 ml-3">
      <p>{children}</p>
      <a>{contact}</a>
    </div>
  )
}