type SubTitleProps = {
  children: string
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-white text-2xl font-semibold mt-[5%] ml-4 mb-5 relative subTitleDiamond">{children}</h2>
  )
}