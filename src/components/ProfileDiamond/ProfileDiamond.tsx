import Image from "next/image"
import profileImage from "/public/profile.png"

export const ProfileDiamond = () => {
  return (
    <div className="max-w-96 min-w-60 max-h-96 min-h-60 border-5 rounded-md border-orange bg-gradient-br-orange rotate-45 relative right-16 big-diamond-shadows">
      <Image src={profileImage} width={500} height={500} alt="" className="relative right-5 bottom-5 desktop:scale-[1.13] laptop:scale-[1.15]" />
    </div>
  )
}