import { Suspense } from "react"

import {
  CloseSideMenuButton,
  Contact,
  Footer,
  Introduction,
  MainButtons,
  ProfileDiamond,
  ProjectThumbnail,
  ProjectsThumbnailList,
  SideMenu,
  SideMenuModal,
  SocialMediaButtons,
  SubTitle
} from "@/components"

export default function Home() {
  return (
    <>
      <Suspense>
        <SideMenu>
          <CloseSideMenuButton />

          <SubTitle>Projetos</SubTitle>

          <nav>
            <ProjectsThumbnailList>
              <ProjectThumbnail />
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
              2024®Todos os direitos reservados.
            </p>
          </Footer>
        </SideMenu>

        <SideMenuModal />
      </Suspense>

      <main className='container relative h-dvh flex laptop:justify-end justify-center items-center'>
        <SocialMediaButtons />

        <div className="flex items-center">
          <div className="relative text-white desktop:mr-0 laptop:mr-6">
            <p className="desktop:text-xl font-medium ml-10 tablet:ml-0 tablet:text-left tracking-wide tablet:tracking-wider desktop:tracking-widest">Olá!👋 Meu nome é <span className="inline-block w-[44%] tablet:w-[36%] font-extrabold text-left bg-gradient-to-r from-orange to-transparent rounded desktop:py-0.5 pl-2 animate-widthAnimation">Ricardo.</span>
            </p>

            <Suspense>
              <Introduction />
              <MainButtons />
            </Suspense>
          </div>

          <ProfileDiamond />
        </div>

      </main>
    </>
  )
}
