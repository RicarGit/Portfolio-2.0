"use client"

import { useState } from "react"

import { ProfileDiamond } from "@/components/ProfileDiamond/ProfileDiamond"
import { Button } from "@/components/Button/Button"
import { SideMenuModal } from "@/components/SideMenuModal/SideMenuModal"
import { SideMenu } from "@/components/SideMenu/SideMenu"
import { PageDetails } from "@/components/PageDetails/PageDetails"
import { SocialMediaButtons } from "@/components/SocialMediaButtons/SocialMediaButtons"
import { AboutMe } from "@/components/AboutMe/AboutMe"
import { Title } from "@/components/Title/Title"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAboutMe, setShowAboutMe] = useState(false)

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

            {showAboutMe
              ? <AboutMe />
              : <Title />}

            <div className="flex justify-center tablet:justify-normal desktop:gap-10 gap-6 desktop:mt-24 mt-16">
              <Button callbackState={setIsOpen} color="green">menu</Button>
              <Button callbackState={setShowAboutMe} color="orange">sobre</Button>
            </div>
          </div>

          <ProfileDiamond />
        </div>

      </main>
    </>
  )
}
