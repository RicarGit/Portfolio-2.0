import Image from "next/image"

type MediaProps = {
  src: string
  link: string
  alt: string
}

export const SocialMediaButton = ({ src, link, alt }: MediaProps) => {
  return (
    <button>
      <a href={link} className="w-10 h-10 border-3 border-light-green bg-gradient-br-green rounded-[3px] p-[6px] cursor-pointer shadow-[8px_-8px_0_rgba(0,0,0,.3),16px_-16px_0_rgba(0,0,0,.3)] rotate-45 flex justify-center items-center">
        <Image
          height={30}
          width={30}
          src={src}
          alt={alt}
          className="-rotate-45" />
      </a>
    </button>
  )
}