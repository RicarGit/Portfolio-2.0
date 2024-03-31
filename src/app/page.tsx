import { projectsData } from "@/data/projectsData"

import {
  AboutMe,
  Button,
  CloseSideMenuButton,
  Contact,
  Footer,
  ModalContent,
  PageDetails,
  ProfileDiamond,
  ProjectThumbnail,
  ProjectsThumbnailList,
  SideMenu,
  SideMenuModal,
  SocialMediaButton,
  SocialMediaButtons,
  SubTitle,
  Title
} from "@/components"

type HomeProps = {
  searchParams: {
    menu: boolean
    aboutMe: boolean
    project: string
  }
}

export default function Home({ searchParams }: HomeProps) {
  const { menu, aboutMe, project } = searchParams

  return (
    <>
      <PageDetails />

      {(menu || project) &&
        <SideMenu>
          <CloseSideMenuButton />

          <SubTitle>Projetos</SubTitle>

          <nav>
            <ProjectsThumbnailList>
              {projectsData &&
                projectsData.map(({ projectName, thumbImage }, index) =>
                  <ProjectThumbnail key={projectName} project={project} projectIndex={index.toString()} thumbImage={thumbImage} />
                )}
            </ProjectsThumbnailList>
          </nav>

          <Footer>
            <SubTitle>Contato</SubTitle>

            <Contact contactType="email" contact="ricardoagava@gmail.com" >Email</Contact>
            <Contact contactType="whatsapp" contact="(11) 97328-3296" >Whatsapp</Contact>

            <p className="absolute bottom-4 ml-4 text-dark-blue text-xs tracking-wide">Todos os direitos reservados.</p>
          </Footer>
        </SideMenu>
      }

      {project &&
        <SideMenuModal>
          <ModalContent project={project} />
        </SideMenuModal>
      }

      <main className='container relative h-dvh flex laptop:justify-end justify-center items-center'>

        <SocialMediaButtons>
          <SocialMediaButton src='/github.svg' link="https://github.com/RicarGit" alt='github link' />
          <SocialMediaButton src='/linkedin.svg' link="https://www.linkedin.com/in/ricardo-gava-dev/" alt='linkedin link' />
          <SocialMediaButton src='/discord.svg' link="https://discord.gg/e5djqg63u3" alt='discord link' />
          <SocialMediaButton src='/telegram.svg' link="https://t.me/RicardoGava" alt='telegram link' />
        </SocialMediaButtons>

        <div className="flex items-center">
          <div className="relative text-white desktop:mr-0 laptop:mr-6">
            <p className="desktop:text-xl tracking-wide tablet:tracking-wider desktop:tracking-widest">Olá!👋 Meu nome é <span className="font-extrabold bg-gradient-to-r from-orange to-transparent rounded desktop:py-0.5 pl-2 inline-block w-[46%] tablet:w-[36%]">Ricardo.</span></p>

            {aboutMe
              ? <AboutMe />
              : <Title />}

            <div className="flex justify-center tablet:justify-normal desktop:gap-10 gap-6 desktop:mt-24 mt-16">
              <Button link="menu" color="green">menu</Button>
              <Button link="aboutMe" color="orange">sobre</Button>
            </div>
          </div>

          <ProfileDiamond />
        </div>

      </main>
    </>
  )
}
