import { SocialMediaButton } from "../SocialMediaButton/SocialMediaButton"

export const SocialMediaButtons = () => {
  return (
    <div className="absolute top-[10%] right-0 flex gap-12 justify-end">
      <SocialMediaButton src='/github.svg' link="https://github.com/RicarGit" alt='github link' />
      <SocialMediaButton src='/linkedin.svg' link="https://www.linkedin.com/in/ricardo-gava-dev/" alt='linkedin link' />
      <SocialMediaButton src='/discord.svg' link="https://discord.gg/e5djqg63u3" alt='discord link' />
      <SocialMediaButton src='/telegram.svg' link="https://t.me/RicardoGava" alt='telegram link' />
    </div>
  )
}
