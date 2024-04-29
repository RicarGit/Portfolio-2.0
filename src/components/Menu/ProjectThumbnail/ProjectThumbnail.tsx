"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import Image from "next/image"
import Link from "next/link"

import { ModalContent } from "@/components"

type ProjectThumbnailProps = {
  projectName: string
  thumbImage: string
  projectIndex: number
}

export const ProjectThumbnail = ({ projectName, thumbImage, projectIndex }: ProjectThumbnailProps) => {
  const [userWidth, setUserWidth] = useState(0)
  const searchParams = useSearchParams()
  const project = searchParams.get('project')

  useEffect(() => {
    window.addEventListener('resize', () =>
      setUserWidth(document.documentElement.clientWidth))
    setUserWidth(document.documentElement.clientWidth)
  }, [])

  return (
    <li
      key={projectName}
      id={projectName.replaceAll(' ', '')}
      className="relative border-t-[3px] last:border-b-[3px] border-white"
    >
      <Link
        href={`${project === projectIndex.toString()
          ? '?menu=true'
          : `?project=${projectIndex}`}#${projectName.replaceAll(' ', '')}`
        }
        className="relative flex items-center modal-lg:h-20 h-full tablet:h-16"
      >
        <div className={`absolute z-10 w-full modal-lg:h-20 tablet:h-16 h-full bg-[rgba(0,0,0,.65)] laptop:hover:opacity-65 ${project === projectIndex.toString() ? 'hidden' : ''}`}></div>

        <div className={`${project === projectIndex.toString() ? "hidden tablet:block size-[26px] laptop:size-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[43px] laptop:-right-[64px] cursor-default" : ''} ${project && ' animate-sizeAnimation'}`}></div>

        <Image
          src={thumbImage}
          width={460}
          height={110}
          style={{ height: '100%' }}
          priority
          alt="project thumbnail"
        />
      </Link>

      {project === projectIndex.toString() &&
        userWidth < 460 &&
        (<ModalContent project={project} />)
      }
    </li>
  )
}
