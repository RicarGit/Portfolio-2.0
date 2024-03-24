import { SocialMediaButton } from "../SocialMediaButton/SocialMediaButton"

export const SocialMediaButtons = () => {
  return (
    <div className="absolute tablet:top-[10%] top-[6%] laptop:mr-2 flex desktop:gap-12 gap-10">
      <SocialMediaButton src='/github.svg' link="https://github.com/RicarGit" alt='github link' />
      <SocialMediaButton src='/linkedin.svg' link="https://www.linkedin.com/in/ricardo-gava-dev/" alt='linkedin link' />
      <SocialMediaButton src='/discord.svg' link="https://discord.gg/e5djqg63u3" alt='discord link' />
      <SocialMediaButton src='/telegram.svg' link="https://t.me/RicardoGava" alt='telegram link' />
    </div>
  )
}
