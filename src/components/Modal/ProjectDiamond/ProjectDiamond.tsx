import Image from "next/image"

type ProjectDiamondProps = {
  projectImage: string
}

export const ProjectDiamond = ({ projectImage }: ProjectDiamondProps) => {
  return (
    <div className="max-w-[360px] min-w-60 border-5 rounded-md border-orange bg-gradient-br-orange rotate-45 relative modal-lg:right-[20%] right-[15%] big-diamond-shadows-small animate-shadows">
      <Image
        src={projectImage}
        width={500}
        height={500}
        quality={100}
        sizes="100vw"
        alt="project image"
        className={`relative bottom-[27px] right-[3%] scale-[1.19] -rotate-45`}
      />
    </div>
  )
}