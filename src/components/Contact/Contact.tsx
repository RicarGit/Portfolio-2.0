import { ReactNode } from "react"

type ContactProps = {
  contact: string
  children: ReactNode
}

export const Contact = ({ contact, children }: ContactProps) => {
  return (
    <div className="text-light-green mb-4 ml-4">
      <p>{children}</p>
      <a className="underline">{contact}</a>
    </div>
  )
}