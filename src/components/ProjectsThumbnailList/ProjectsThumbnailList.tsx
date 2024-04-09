type ThumbnailListProps = {
  children: React.ReactNode
}

export const ProjectsThumbnailList = ({ children }: ThumbnailListProps) => {
  return (
    <ul className="cursor-pointer w-full pt-[2%] pb-[4%] tablet:pb-[8%]">
      {children}
    </ul>
  )
}