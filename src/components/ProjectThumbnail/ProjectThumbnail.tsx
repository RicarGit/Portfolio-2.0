import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type ProjectThumbnailProps = {
  project: string
  projectIndex: string
  thumbImage: StaticImageData
}

export const ProjectThumbnail = ({ thumbImage, projectIndex, project }: ProjectThumbnailProps) => {
  const isActive = project === projectIndex

  return (
    <li className="border-t-[3px] last:border-b-[3px] border-white">
      <Link href={`?project=${projectIndex}`} className="relative flex items-center modal-lg:h-20 h-16" >
        <div className={`absolute z-10 w-full modal-lg:h-20 h-16 bg-[rgba(0,0,0,.65)] hover:opacity-65 ${isActive ? 'hidden' : ''}`}></div>
        <div className={`${isActive ? "h-10 w-10 absolute border-b-[3px] border-l-[3px] rounded-sm rotate-45 bg-dark-green -right-[64px] cursor-default" : ''}`}></div>
        <Image src={thumbImage} fill priority alt="project thumbnail" />
      </Link>
    </li>
  )
}