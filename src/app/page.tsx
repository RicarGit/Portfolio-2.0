import {
  AboutMe,
  Button,
  CloseSideMenuButton,
  Contact,
  Footer,
  ModalContent,
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
      <SideMenu menu={menu} project={project} >
        <CloseSideMenuButton />

        <SubTitle>Projetos</SubTitle>

        <nav>
          <ProjectsThumbnailList>
            <ProjectThumbnail project={project} >
              <ModalContent project={project} />
            </ProjectThumbnail>
          </ProjectsThumbnailList>
        </nav>

        <Footer>
          <SubTitle>Contato</SubTitle>

          <Contact contactType="email" contact="ricardoagava@gmail.com" >
            Email
          </Contact>

          <Contact contactType="whatsapp" contact="(11) 97328-3296" >
            Whatsapp
          </Contact>

          <p className="tablet:absolute mt-20 tablet:bottom-2 modal-lg:bottom-5 mb-2 tablet:mb-0 ml-4 text-dark-blue text-center text-xs tracking-wide" >
            Todos os direitos reservados.
          </p>
        </Footer>
      </SideMenu>

      {project &&
        <SideMenuModal>
          <ModalContent project={project} />
        </SideMenuModal>
      }

      <main className='container relative h-dvh flex laptop:justify-end justify-center items-center'>

        <SocialMediaButtons>
          <SocialMediaButton
            src="/images/svg/github.svg"
            link="https://github.com/RicarGit"
            alt="github link"
          />

          <SocialMediaButton
            src="/images/svg/linkedin.svg"
            link="https://www.linkedin.com/in/ricardo-gava-dev/"
            alt="linkedin link"
          />

          <SocialMediaButton
            src="/images/svg/discord.svg"
            link="https://discord.gg/e5djqg63u3"
            alt="discord link"
          />

          <SocialMediaButton
            src="/images/svg/telegram.svg"
            link="https://t.me/RicardoGava"
            alt="telegram link"
          />
        </SocialMediaButtons>

        <div className="flex items-center">
          <div className="relative text-white desktop:mr-0 laptop:mr-6">
            <p className="desktop:text-xl font-medium ml-10 tablet:ml-0 tablet:text-left tracking-wide tablet:tracking-wider desktop:tracking-widest">Olá!👋 Meu nome é <span className="inline-block w-[44%] tablet:w-[36%] font-extrabold text-left bg-gradient-to-r from-orange to-transparent rounded desktop:py-0.5 pl-2 animate-widthAnimation">Ricardo.</span></p>

            {aboutMe
              ? <AboutMe />
              : <Title />
            }

            <div className="flex justify-center tablet:justify-normal desktop:gap-10 gap-6 desktop:mt-24 mt-16">
              <Button
                link={`${menu ? 'home' : 'menu'}`}
                color="green">{menu ? 'close' : 'menu'}
              </Button>

              <Button
                link={`${aboutMe ? 'home' : 'aboutMe'}`}
                color="orange">{aboutMe ? 'home' : 'sobre'}
              </Button>
            </div>
          </div>

          <ProfileDiamond />
        </div>

      </main>
    </>
  )
}
