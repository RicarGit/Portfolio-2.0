import { socialMediaData } from "@/data/socialMediaData"
import { SocialMediaButton } from "../SocialMediaButton/SocialMediaButton"

export const SocialMediaButtons = () => {
  return (
    <div className="absolute tablet:top-[10%] top-[6%] laptop:mr-2 flex desktop:gap-12 gap-10">
      {socialMediaData.map(({ image, link, alt }, index) => (
        <SocialMediaButton key={index} link={link} image={image} alt={alt} />
      ))}
    </div>
  )
}
