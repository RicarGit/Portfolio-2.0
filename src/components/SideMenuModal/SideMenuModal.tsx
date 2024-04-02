"use client"

import { MouseEvent, ReactNode } from "react"
import { useRouter } from "next/navigation"

type MenuModaLProps = {
  children: ReactNode
}

export const SideMenuModal = ({ children }: MenuModaLProps) => {
  const router = useRouter()

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (event.target.id === 'modal') {
      router.replace('?menu=true')
    }
  }

  return (
    <div onClick={closeModal} id="modal" className="hidden absolute w-screen h-screen tablet:flex items-center z-20 backdrop-blur-sm">
      {children}
    </div>
  )
}