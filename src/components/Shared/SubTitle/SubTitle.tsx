type SubTitleProps = {
  children: string
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <h2 className="text-white text-2xl leading-none font-semibold my-[6%] tablet:mt-[5%] ml-4 tablet:mb-5 relative subTitleDiamond">{children}</h2>
  )
}