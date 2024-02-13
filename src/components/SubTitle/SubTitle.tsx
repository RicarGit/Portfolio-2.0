import { ReactNode } from "react"

type SubTitleProps = {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-white text-3xl font-semibold mt-[60px] mb-5 ml-3 relative subTitleDiamond">{children}</h2>
  )
}