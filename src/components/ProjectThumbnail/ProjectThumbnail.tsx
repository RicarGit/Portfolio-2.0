"use client"

import Image, { StaticImageData } from "next/image"
import { ReactNode, useEffect, useState } from "react"
import { useTabQuery } from "@/hook/useTabQuery"

type ProjectThumbnailProps = {
  children: ReactNode
  projectIndex: string
  thumbImage: StaticImageData
}

export const ProjectThumbnail = ({ thumbImage, projectIndex, children }: ProjectThumbnailProps) => {
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
    <li onClick={toogleActive} className="relative w-[230px] h-20 flex justify-center items-center border-t-[3px] last:border-b-[3px] border-white box-content">
      <div className={`absolute z-10 w-[230px] h-20 bg-[rgba(0,0,0,.6)] hover:bg-[rgba(0,0,0,.45)] ${isActive && 'hidden'}`}></div>
      <div className={`${isActive && "h-10 w-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[91px]"}`}></div>
      <h3 className={`text-lg font-medium relative z-20 ${isActive && 'hidden'}`}>{children}</h3>
      <Image src={thumbImage} fill alt="" />
    </li>
  )
}