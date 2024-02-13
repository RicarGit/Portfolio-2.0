import Image from "next/image"
import { ReactNode } from "react"

type ProjectThumbnailProps = {
  children: ReactNode
  hidden?: boolean
  thumbName: 'dogsSocialMedia' | 'wildbeast' | 'galeriaFotos' | 'devMemory' | 'calculadoraIMC' | 'albumFotos'
}

import dogsSocialMedia from "/public/dogsSocialMedia.jpg"
import wildbeast from "/public/wildbeast.jpg"
import galeriaFotos from "/public/galeriaFotos.jpg"
import devMemory from "/public/devMemory.jpg"
import calculadoraIMC from "/public/calculadoraIMC.jpg"
import albumFotos from "/public/albumFotos.jpg"

const thumbnails = {
  dogsSocialMedia,
  wildbeast,
  galeriaFotos,
  devMemory,
  calculadoraIMC,
  albumFotos
}

export const ProjectThumbnail = ({ thumbName, hidden, children }: ProjectThumbnailProps) => {
  return (
    <li className="relative w-[230px] h-20 flex justify-center items-center border-t-[3px] last:border-b-[3px] border-white box-content">
      <div className={`absolute z-10 w-[230px] h-20 bg-[rgba(0,0,0,.5)] ${hidden && 'hidden'}`}></div>
      <h3 className="text-lg font-medium relative z-20">{children}</h3>
      <Image src={thumbnails[thumbName]} fill alt="" />
    </li>
  )
}