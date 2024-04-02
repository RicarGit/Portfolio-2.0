import Image from "next/image"
import Link from "next/link"

import { projectsData } from "@/data/projectsData"

type ProjectThumbnailProps = {
  project: string
}

export const ProjectThumbnail = ({ project }: ProjectThumbnailProps) => {
  if (!projectsData) return

  return (
    projectsData.map(({ projectName, thumbImage }, index) => (
      <li key={projectName} className="h-28 tablet:h-auto border-t-[3px] last:border-b-[3px] border-white">
        <Link href={`?project=${index}`} className="relative flex items-center modal-lg:h-20 h-full tablet:h-16" >
          <div className={`absolute z-10 w-full modal-lg:h-20 tablet:h-16 h-full bg-[rgba(0,0,0,.65)] hover:opacity-65 ${project === index.toString() ? 'hidden' : ''}`}></div>

          <div className={`${project === index.toString() ? "hidden tablet:block h-10 w-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[64px] cursor-default" : ''}`}></div>

          <Image src={thumbImage} fill priority alt="project thumbnail" />
        </Link>
      </li>
    )))
}
