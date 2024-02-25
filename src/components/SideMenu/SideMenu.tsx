import { Contact } from "../Contact/Contact"
import { ProjectsList } from "../ProjectsList/ProjectsList"
import { SubTitle } from "../SubTitle/SubTitle"

export const SideMenu = () => {
  return (
    <aside className="fixed left-0 z-30 flex flex-col h-screen bg-dark-green border-r-[3px] border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_25%,_var(--tw-gradient-stops))] from-green via-dark-green via-70% to-dark-green">
      <SubTitle>Projetos</SubTitle>

      <nav className="text-white">
        <ProjectsList />
      </nav>

      <footer className="h-full">
        <SubTitle>Contato</SubTitle>

        <Contact contact="ricardoagava@gmail.com">Email:</Contact>
        <Contact contact="(11) 97328-3296">Whatsapp:</Contact>

        <p className="text-dark-blue text-xs tracking-wide text-center relative bottom-[-20%]">Todos os direitos reservados.</p>
      </footer>

    </aside>
  )
}