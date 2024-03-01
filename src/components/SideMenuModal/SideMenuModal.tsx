"use client"

import Image from "next/image"
import separator from "/public/separator.svg"

import { Button } from "../Button/Button"
import { SubTitle } from "../SubTitle/SubTitle"
import { Technologies } from "../Technologies/Technologies"
import { ProjectDiamond } from "../ProjectDiamond/ProjectDiamond"
import { ModalDetail } from "../ModalDetail/ModalDetail"

import { projetsData } from "@/data/projectsData"
import { useTabQuery } from "@/hook/useTabQuery"

export const SideMenuModal = () => {
  const { tab } = useTabQuery()
  const project = projetsData[Number(tab)]

  if (!tab) return

  return (
    <div className="absolute w-screen h-screen flex items-center z-20 backdrop-blur-sm">
      <div className="absolute z-30 w-[70%] min-h-[80%] left-[300px] grid grid-cols-2 grid-rows-2 px-5 border-3 rounded bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-50% to-dark-green">

        <ModalDetail color="green" position="top-right" />
        <ModalDetail color="blue" position="bottom-right" />

        <div className="relative">
          <SubTitle>{project.projectName}</SubTitle>

          <p className="text-light-green max-w-[600px] pl-4">{project.description}</p>

          <div className="flex gap-12 mt-14 ml-5">
            <Button link={project.codeLink} color="green">code</Button>
            <Button link={project.deployLink} color="orange">deploy</Button>
          </div>

          <Image src={separator} width={500} height={6} alt="" className="absolute bottom-[-6px]" />
        </div>

        <div className="row-span-2 flex justify-center items-center">
          <ProjectDiamond projectImage={project.projectImage} />
        </div>

        <div className="mt-2">
          <SubTitle>Principais Tecnologias</SubTitle>
          <Technologies techs={project.techs} libs={project.libs} />
        </div>

      </div>
    </div>
  )
}