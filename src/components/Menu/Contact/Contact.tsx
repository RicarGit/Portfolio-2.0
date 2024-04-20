type ContactProps = {
  contactType: 'email' | 'whatsapp'
  contact: string
  children: string
}

export const Contact = ({ contactType, contact, children }: ContactProps) => {
  return (
    <div className="text-light-green mb-4 ml-4">
      <p>{children}:</p>

      <a className="underline" target="_blank" href={
        contactType === 'email'
          ? `mailto:${contact}`
          : 'https://wa.me/5511973283296'} >
        {contact}
      </a>
    </div>
  )
}