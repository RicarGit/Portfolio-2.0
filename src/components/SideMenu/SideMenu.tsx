import { SetStateAction } from "react"

import { Contact } from "../Contact/Contact"
import { ProjectsThumbnailList } from "../ProjectsThumbnailList/ProjectsThumbnailList"
import { SubTitle } from "../SubTitle/SubTitle"
import { CloseSideMenuButton } from "../CloseSideMenuButton/CloseSideMenuButton"

type SideMenuProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const SideMenu = ({ setIsOpen }: SideMenuProps) => {
  return (
    <aside className="absolute modal:w-[230px] w-[210px] z-30 pt-7 flex flex-col h-screen bg-dark-green border-r-[3px] border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_25%,_var(--tw-gradient-stops))] from-green via-dark-green via-70% to-dark-green">
      <CloseSideMenuButton setIsOpen={setIsOpen} />

      <SubTitle>Projetos</SubTitle>

      <nav className="text-white">
        <ProjectsThumbnailList />
      </nav>

      <footer className="h-full relative">
        <SubTitle>Contato</SubTitle>

        <Contact contactType="email" contact="ricardoagava@gmail.com" >Email</Contact>
        <Contact contactType="whatsapp" contact="(11) 97328-3296" >Whatsapp</Contact>

        <p className="text-dark-blue text-xs tracking-wide absolute bottom-4 ml-4">Todos os direitos reservados.</p>
      </footer>

    </aside>
  )
}