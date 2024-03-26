"use client"

import { MouseEvent, useRef } from "react"

import Image from "next/image"
import separator from "/public/separator.svg"

import { Button } from "../Button/Button"
import { SubTitle } from "../SubTitle/SubTitle"
import { Technologies } from "../Technologies/Technologies"
import { ProjectDiamond } from "../ProjectDiamond/ProjectDiamond"
import { ModalDetail } from "../ModalDetail/ModalDetail"

import { projectsData } from "@/data/projectsData"
import { useTabQuery } from "@/hook/useTabQuery"

export const SideMenuModal = () => {
  const { tab, removeTab } = useTabQuery()
  const project = projectsData[Number(tab)]
  const modalBgRef = useRef<HTMLDivElement>(null)

  if (!tab) return

  const closeModal = (event: MouseEvent) => {
    if (event.target === modalBgRef.current) {
      removeTab()
    }
  }

  return (
    <div onClick={closeModal} ref={modalBgRef} className="absolute w-screen h-screen flex items-center z-20 backdrop-blur-sm">
      <div className="absolute z-30 mr-5 modal:w-[70%] min-w-[530px] h-[90%] modal-lg:h-[80%] modal-lg:left-[270px] left-[250px] grid grid-cols-1 modal:grid-cols-[minmax(560px,_1fr)_minmax(200px,_500px)] modal:grid-rows-2 px-5 border-3 rounded bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-50% to-dark-green overflow-hidden">

        <ModalDetail color="green" position="top-right" />
        <ModalDetail color="blue" position="bottom-right" />

        <div className="relative">
          <SubTitle>{project.projectName}</SubTitle>

          <p className="text-light-green max-w-[600px] pl-4">{project.description}</p>
          {project.myImprovements &&
            <p className="text-light-green max-w-[600px] pl-4 pt-5">
              <span className="text-orange">Minhas melhorias: </span>
              {project.myImprovements}
            </p>
          }

          <div className="flex gap-6 mt-8 ml-5">
            <Button link={project.codeLink} color="green">código</Button>
            <Button link={project.deployLink} color="orange">visitar</Button>
          </div>

          <Image src={separator} width={500} height={6} alt="project description separator" className="absolute w-full modal:w-[75%] modal:bottom-[-14px] -bottom-5" />
        </div>

        <div className="hidden modal:flex row-span-2 justify-center items-center">
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