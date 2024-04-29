import { Suspense } from "react"

import {
  Introduction,
  MainButtons,
  ProfileDiamond,
  SideMenu,
  SideMenuModal,
  SocialMediaButtons
} from "@/components"

export default function Home() {
  return (
    <>
      <Suspense>
        <SideMenu />
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
