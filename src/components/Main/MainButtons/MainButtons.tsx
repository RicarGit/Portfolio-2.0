"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components"

export const MainButtons = () => {
  const searchParams = useSearchParams()
  const aboutMe = searchParams.get('aboutMe')
  const menu = searchParams.get('menu')

  return (
    <div className="flex justify-center tablet:justify-normal desktop:gap-10 gap-6 desktop:mt-24 mt-16">
      <Button
        link={`${menu ? 'home' : 'menu'}`}
        color="green"
      >
        {menu ? 'close' : 'menu'}
      </Button>

      <Button
        link={`${aboutMe ? 'home' : 'aboutMe'}`}
        color="orange"
      >
        {aboutMe ? 'home' : 'sobre'}
      </Button>
    </div>
  )
}