type ThumbnailListProps = {
  children: React.ReactNode
}

export const ProjectsThumbnailList = ({ children }: ThumbnailListProps) => {
  return (
    <ul className="cursor-pointer w-full pb-5">
      {children}
    </ul>
  )
}