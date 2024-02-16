import { Contact } from "../Contact/Contact"
import { ProjectThumbnail } from "../ProjectThumbnail/ProjectThumbnail"
import { SubTitle } from "../SubTitle/SubTitle"

export const SideMenu = () => {
  return (
    <aside className="fixed left-0 z-20 flex flex-col h-screen bg-dark-green border-r-[3px] border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_25%,_var(--tw-gradient-stops))] from-green via-dark-green via-70% to-dark-green">
      <SubTitle>Projetos</SubTitle>

      <nav className="text-white">
        <ul className="">
          <ProjectThumbnail thumbName="dogsSocialMedia">Dogs Social Media</ProjectThumbnail>
          <ProjectThumbnail active thumbName="wildbeast">Wildbeast</ProjectThumbnail>
          <ProjectThumbnail thumbName="galeriaFotos">Galeria de fotos</ProjectThumbnail>
          <ProjectThumbnail thumbName="devMemory">DevMemory</ProjectThumbnail>
          <ProjectThumbnail thumbName="calculadoraIMC">Calculadora de IMC</ProjectThumbnail>
          <ProjectThumbnail thumbName="albumFotos">Álbum de fotos</ProjectThumbnail>
        </ul>
      </nav>

      <footer className="h-full">
        <SubTitle>Contato</SubTitle>

        <Contact contact="ricardoagava@gmail.com">Email:</Contact>
        <Contact contact="(11) 97328-3296">Whatsapp</Contact>

        <p className="text-dark-blue text-xs tracking-wide text-center relative bottom-[-20%]">Todos os direitos reservados.</p>
      </footer>

    </aside>
  )
}