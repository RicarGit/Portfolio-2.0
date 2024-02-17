import Image from "next/image"
import wildbeast from "/public/wildbeast.png"

export const ProjectDiamond = () => {
  return (
    <div className=" max-w-[400px] min-w-60 border-5 rounded-md border-orange bg-gradient-br-orange rotate-45 relative right-[100px] big-diamond-shadows">
      <Image src={wildbeast} width={500} height={500} alt="" className={`relative right-3 bottom-[31px] desktop:scale-[1.19] laptop:scale-[1.15] -rotate-45 `} />
    </div>
  )
}