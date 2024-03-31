"use client"

import { MouseEvent, ReactNode } from "react"
import { useRouter } from "next/navigation"

type ModalBgProps = {
  children: ReactNode
}

export const ModalBackground = ({ children }: ModalBgProps) => {
  const router = useRouter()

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (event.target.id === 'modal') {
      router.replace('?menu=true')
    }
  }

  return (
    <div onClick={closeModal} id="modal" className="absolute w-screen h-screen flex items-center z-20 backdrop-blur-sm">
      {children}
    </div>
  )
}
