"use client"

import { useSearchParams } from "next/navigation"

import { AboutMe } from "../AboutMe/AboutMe"
import { Title } from "../Title/Title"

export const Introduction = () => {
  const searchParams = useSearchParams()
  const aboutMe = searchParams.get('aboutMe')

  return (
    aboutMe
      ? <AboutMe />
      : <Title />
  )
}
