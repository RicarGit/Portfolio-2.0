"use client"

import Image, { StaticImageData } from "next/image"
import { ReactNode, useEffect, useState } from "react"
import { useTabQuery } from "@/hook/useTabQuery"

type ProjectThumbnailProps = {
  projectIndex: string
  thumbImage: StaticImageData
}

export const ProjectThumbnail = ({ thumbImage, projectIndex }: ProjectThumbnailProps) => {
  const [isActive, setIsActive] = useState(false)
  const { setTab, tab, removeTab } = useTabQuery()

  const toogleActive = () => {
    setTab(projectIndex)

    if (isActive) {
      removeTab()
    }

    setIsActive(state => !state)
  }

  useEffect(() => {
    setIsActive(tab === projectIndex.toString())
  }, [tab, projectIndex])

  return (
    <li onClick={toogleActive} className="relative w-full modal-lg:h-20 h-16 flex justify-center items-center border-t-[3px] last:border-b-[3px] border-white box-content">
      <div className={`absolute z-10 w-full modal-lg:h-20 h-16 bg-[rgba(0,0,0,.65)] hover:opacity-65 ${isActive && 'hidden'}`}></div>
      <div className={`${isActive && "h-10 w-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[64px] cursor-default"}`}></div>
      <Image src={thumbImage} fill priority alt="project thumbnail" />
    </li>
  )
}