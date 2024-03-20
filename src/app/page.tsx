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

      <main className='container relative mx-auto h-screen flex justify-end items-center px-5 desktop:px-0'>

        <SocialMediaButtons />

        <div className="flex items-center">
          <div className="relative text-white">
            <p className="desktop:text-xl text-base tracking-widest">Olá!👋 Meu nome é <span className="font-extrabold bg-gradient-to-r from-orange to-transparent rounded py-0.5 pl-2 inline-block w-[36%]">Ricardo.</span></p>

            {showAboutMe
              ? <AboutMe />
              : <Title />}

            <div className="flex gap-12 mt-24">
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
