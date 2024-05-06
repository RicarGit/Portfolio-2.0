"use client"

import { Contact, SubTitle } from "@/components"
import { useUserHeight } from "@/hook/useUserHeight"

export const Footer = () => {
  const userHeight = useUserHeight()

  return (
    <footer className="h-full relative">
      <SubTitle>Contato</SubTitle>

      <Contact contactType="email" contact="ricardoagava@gmail.com" >
        Email
      </Contact>

      <Contact contactType="whatsapp" contact="(11) 97328-3296" >
        Whatsapp
      </Contact>

      <p className={`${userHeight < 810 && '!relative'} tablet:absolute w-full m-auto mt-20 tablet:bottom-2 modal-lg:bottom-5 mb-2 tablet:mb-0 text-dark-blue text-center text-xs tracking-wide`} >
        2024®Todos os direitos reservados.
      </p>
    </footer>
  )
}
