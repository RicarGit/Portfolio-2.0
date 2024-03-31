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

      {isOpen &&
        <>
          <SideMenu setIsOpen={setIsOpen} />
          <SideMenuModal />
        </>
      }

      <main className='container relative h-dvh flex laptop:justify-end justify-center items-center'>

        <SocialMediaButtons />

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
