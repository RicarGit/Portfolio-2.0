import { ReactNode } from "react"

type SubTitleProps = {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-white text-3xl font-semibold mt-10 ml-4 mb-5 relative subTitleDiamond">{children}</h2>
  )
}