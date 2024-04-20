import Image from "next/image"
import profileImage from "/public/profile.png"

export const ProfileDiamond = () => {
  return (
    <div className="hidden laptop:block max-w-96 min-w-52 max-h-96 min-h-52 border-5 rounded-md border-orange bg-gradient-br-orange rotate-45 relative desktop:right-16 right-12 big-diamond-shadows-small desktop:big-diamond-shadows animate-shadows">
      <Image
        src={profileImage}
        width={500}
        height={500}
        priority
        quality={100}
        sizes="100vw"
        alt="profile image"
        className="relative right-5 bottom-5 desktop:scale-[1.13] scale-[1.19]"
      />
    </div>
  )
}