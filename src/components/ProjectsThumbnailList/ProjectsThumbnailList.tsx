type ThumbnailListProps = {
  children: React.ReactNode
}

export const ProjectsThumbnailList = ({ children }: ThumbnailListProps) => {
  return (
    <ul className="cursor-pointer w-full tablet:pb-[8%]">
      {children}
    </ul>
  )
}