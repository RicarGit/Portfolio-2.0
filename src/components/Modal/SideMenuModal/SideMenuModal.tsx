"use client"

import { MouseEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ModalContent } from "../ModalContent/ModalContent"

export const SideMenuModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const project = searchParams.get('project')

  if (!project) return

  const closeModal = (event: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (event.target.id === 'modal') {
      router.replace('?menu=true')
    }
  }

  return (
    <div onClick={closeModal} id="modal" className="hidden absolute w-dvw h-dvh tablet:flex items-center z-20 backdrop-blur-sm">
      <ModalContent project={project} />
    </div>
  )
}