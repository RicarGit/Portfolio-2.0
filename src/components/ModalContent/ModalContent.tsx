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
    <div className="absolute z-30 mr-5 modal:max-w-[70%] h-[90%] modal-lg:h-[80%] modal-lg:left-[270px] left-[236px] laptop:left-[250px] grid grid-cols-1 modal:grid-cols-[minmax(560px,_1fr)_minmax(200px,_500px)] modal:grid-rows-2 pr-3 laptop:px-5 border-3 rounded bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-green via-dark-green via-50% to-dark-green overflow-auto laptop:overflow-hidden" >
      <ModalDetail color="green" position="top-right" />
      <ModalDetail color="blue" position="bottom-right" />

      <div className="relative">
        <SubTitle>{projectName}</SubTitle>

        <p className="text-light-green max-w-[600px] ml-5">{description}</p>
        {myImprovements &&
          <p className="text-light-green max-w-[600px] ml-5 mt-5">
            <span className="text-orange">Minhas melhorias: </span>
            {myImprovements}
          </p>
        }

        <div className="flex flex-wrap justify-center laptop:justify-start gap-6 mt-8 ml-5">
          <Button link={codeLink} color="green">código</Button>
          <Button link={deployLink} color="orange">visitar</Button>
        </div>

        <Image src={separator} width={500} height={6} alt="project description separator" className="absolute w-[70%] ml-10 modal:w-[75%] modal:bottom-[-14px] -bottom-5" />
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
