"use client"

import { useState } from "react"

import { ProfileDiamond } from "@/components/ProfileDiamond/ProfileDiamond"
import { Button } from "@/components/Button/Button"
import { SideMenuModal } from "@/components/SideMenuModal/SideMenuModal"
import { SideMenu } from "@/components/SideMenu/SideMenu"
import { PageDetails } from "@/components/PageDetails/PageDetails"
import { SocialMediaButtons } from "@/components/SocialMediaButtons/SocialMediaButtons"
import AboutMe from "@/components/AboutMe/AboutMe"


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

            {!showAboutMe &&
              <h1 className="desktop:text-4xl text-2xl font-bold mt-8">Sou um<br className="mb-3" />
                <span className="desktop:text-7xl text-5xl tracking-wide font-black text-dark-green text-stroke relative z-10 bg-clip-text text-transparent bg-gradient-to-t from-green to-dark-green via-50% via-dark-green">Desenvolvedor Front-End</span>.
              </h1>
            }

            {showAboutMe &&
              <AboutMe />
            }

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
