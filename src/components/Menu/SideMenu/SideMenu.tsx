"use client"

import { useSearchParams } from "next/navigation"
import { useUserHeight } from "@/hook/useUserHeight"

import {
  CloseSideMenuButton,
  Footer,
  ProjectsThumbnailList,
  SubTitle
} from "@/components"

export const SideMenu = () => {
  const searchParams = useSearchParams()
  const menu = searchParams.get('menu')
  const project = searchParams.get('project')

  const userHeight = useUserHeight()

  return (
    <aside className={`${(menu || project) ? 'translate-x-0' : '-translate-x-full'} ${userHeight < 810 && 'overflow-x-hidden'} absolute modal-lg:w-[230px] w-full tablet:w-[210px] z-30 pt-7 flex flex-col h-dvh bg-dark-green border-x-[3px] tablet:border-l-0 border-y-[3px] rounded-r bg-[radial-gradient(circle_at_0_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-65% to-dark-green overflow-y-auto tablet:overflow-y-visible -translate-x-full transition-all ease duration-700`}>
      <CloseSideMenuButton />

      <SubTitle>Projetos</SubTitle>

      <nav>
        <ProjectsThumbnailList />
      </nav>

      <Footer />
    </aside>
  )
}
