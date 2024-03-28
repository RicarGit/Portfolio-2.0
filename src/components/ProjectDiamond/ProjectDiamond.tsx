import Image from "next/image"
import { StaticImageData } from "next/image"

type ProjectDiamondProps = {
  projectImage: StaticImageData
}

export const ProjectDiamond = ({ projectImage }: ProjectDiamondProps) => {
  return (
    <div className="max-w-[360px] min-w-60 border-5 rounded-md border-orange bg-gradient-br-orange rotate-45 relative modal-lg:right-[20%] right-[15%] big-diamond-shadows-small">
      <Image src={projectImage} width={500} height={500} alt="project image" className={`relative bottom-[27px] right-[3%] scale-[1.19] -rotate-45`} />
    </div>
  )
}