import Image from "next/image"
import { Button } from "../Button/Button"
import { SubTitle } from "../SubTitle/SubTitle"

import separator from "/public/separator.svg"
import { Technologies } from "../Technologies/Technologies"
import { ProjectDiamond } from "../ProjectDiamond/ProjectDiamond"
import { ModalDetail } from "../ModalDetail/ModalDetail"

export const SideMenuModal = () => {
  return (
    <div className="absolute w-screen h-screen flex items-center z-20 backdrop-blur-sm">
      <div className="absolute z-30 w-[70%] min-h-[80%] left-[300px] grid grid-cols-2 grid-rows-2 px-5 border-3 rounded bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-50% to-dark-green">

        <ModalDetail color="green" position="top-right" />
        <ModalDetail color="blue" position="bottom-right" />

        <div className="relative">
          <SubTitle>Wildbeast</SubTitle>

          <p className="text-light-green max-w-[600px] pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue non tellus pharetra laoreet. Sed venenatis aliquet scelerisque. Integer aliquet cursus est, ac placerat neque tempor eleifend. Nulla non facilisis neque, at venenatis turpis, Nulla non facilisis neque, at venenatis turpis.
          </p>

          <div className="flex gap-12 mt-14 ml-5">
            <Button color="green">code</Button>
            <Button color="orange">deploy</Button>
          </div>

          <Image src={separator} width={500} height={6} alt="" className="absolute bottom-[-6px]" />
        </div>

        <div className="row-span-2 flex justify-center items-center">
          <ProjectDiamond />
        </div>

        <div className="mt-2">
          <SubTitle>Principais Tecnologias</SubTitle>
          <Technologies techs={['html', 'css', 'ts', 'react']} libs={['axios', 'zustand', 'router dom', 'hook form']} />
        </div>

      </div>
    </div>
  )
}