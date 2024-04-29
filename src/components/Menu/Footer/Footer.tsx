import { Contact, SubTitle } from "@/components"

export const Footer = () => {
  return (
    <footer className="h-full relative">
      <SubTitle>Contato</SubTitle>

      <Contact contactType="email" contact="ricardoagava@gmail.com" >
        Email
      </Contact>

      <Contact contactType="whatsapp" contact="(11) 97328-3296" >
        Whatsapp
      </Contact>

      <p className="tablet:absolute mt-20 tablet:bottom-2 modal-lg:bottom-5 mb-2 tablet:mb-0 ml-4 text-dark-blue text-center text-xs tracking-wide" >
        2024®Todos os direitos reservados.
      </p>
    </footer>
  )
}
