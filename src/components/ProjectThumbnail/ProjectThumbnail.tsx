"use client"

import Image from "next/image"
import Link from "next/link"

import { projectsData } from "@/data/projectsData"

type ProjectThumbnailProps = {
  project: string
  children: React.ReactNode
}

export const ProjectThumbnail = ({ project, children }: ProjectThumbnailProps) => {
  if (!projectsData) return

  return (
    projectsData.map(({ projectName, thumbImage }, index) => (
      <li key={projectName} id={projectName.replaceAll(' ', '')} className="relative border-t-[3px] last:border-b-[3px] border-white">
        <Link href={`${project === index.toString() ? '?menu=true' : `?project=${index}`}#${projectName.replaceAll(' ', '')}`} className="relative flex items-center modal-lg:h-20 h-full tablet:h-16" >
          <div className={`absolute z-10 w-full modal-lg:h-20 tablet:h-16 h-full bg-[rgba(0,0,0,.65)] laptop:hover:opacity-65 ${project === index.toString() ? 'hidden' : ''}`}></div>

          <div className={`${project === index.toString() ? "hidden tablet:block size-[26px] laptop:size-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[43px] laptop:-right-[64px] cursor-default" : ''}`}></div>

          <Image src={thumbImage} style={{ height: '100%' }} priority alt="project thumbnail" />
        </Link>

        {project === index.toString() && window.innerWidth < 460 && children}
      </li>
    )))
}
