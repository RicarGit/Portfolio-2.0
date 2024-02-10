import Image from "next/image"

type MediaProps = {
  src: string
  alt: string
}

export const SocialMediaButton = ({ src, alt }: MediaProps) => {
  return (
    <Image
      height={40}
      width={40}
      src={src}
      alt={alt}
      className="border-3 border-light-green bg-gradient-b-green rounded-[3px] p-[5px] cursor-pointer" />
  )
}