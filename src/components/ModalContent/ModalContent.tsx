import Image from "next/image"
import separator from "/public/separator.svg"

import { projectsData } from "@/data/projectsData"

import {
  Button,
  ModalDetail,
  ProjectDiamond,
  SubTitle,
  Technologies
} from '@/components'

type ModalContentProps = {
  project: string
}

export const ModalContent = ({ project }: ModalContentProps) => {
  const {
    projectName,
    description,
    myImprovements,
    codeLink,
    deployLink,
    projectImage,
    techs,
    libs
  } = projectsData[Number(project)]

  return (
    <div className="relative tablet:absolute items-center modal:items-stretch z-30 tablet:mr-5 tablet:max-w-[70%] h-full tablet:h-[90%] modal-lg:h-[80%] modal-lg:left-[270px] tablet:left-[236px] laptop:left-[250px] tablet:grid grid-cols-1 modal:grid-cols-[minmax(560px,_1fr)_minmax(200px,_500px)] modal:grid-rows-2 pr-3 laptop:px-5 border-t-[0] tablet:border-x-[3px] tablet:border-y-[3px] tablet:rounded tablet:bg-[radial-gradient(circle_at_85%_15%,_var(--tw-gradient-stops))] laptop:bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green laptop:via-50% via-45% to-dark-green overflow-auto laptop:overflow-hidden animate-modalAnimation" >
      <ModalDetail color="green" position="top-right" />
      <ModalDetail color="blue" position="bottom-right" />

      <div className="relative">
        <SubTitle>{projectName}</SubTitle>

        <p className="text-light-green max-w-[600px] ml-5 animate-fadeInTop">{description}</p>

        <p className="text-light-green max-w-[600px] ml-5 mt-5 animate-fadeIn">
          <span className="text-orange font-medium">{myImprovements && 'Minhas melhorias: '}</span>
          {myImprovements}
        </p>


        <div className="flex flex-wrap justify-center laptop:justify-start gap-6 mt-8 tablet:ml-5">
          <Button link={codeLink} color="green">código</Button>
          <Button link={deployLink} color="orange">visitar</Button>
        </div>

        <Image src={separator} width={500} height={6} alt="project description separator" className="relative tablet:absolute pt-5 pb-8 tablet:pt-0 tablet:pb-0 w-[85%] modal:w-[75%] modal:bottom-[-14px] -bottom-5 tablet:-bottom-8 left-1/2 modal:left-0 -translate-x-1/2 modal:translate-x-0" />
      </div>

      <div className="hidden modal:flex row-span-2 justify-center items-center">
        <ProjectDiamond projectImage={projectImage} />
      </div>

      <div className="mt-2">
        <SubTitle>Principais Tecnologias</SubTitle>
        <Technologies techs={techs} libs={libs} />
      </div>
    </div>
  )
}
