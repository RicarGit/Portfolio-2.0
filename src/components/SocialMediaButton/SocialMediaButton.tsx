import Image from "next/image"

type MediaProps = {
  src: string
  link: string
  alt: string
}

export const SocialMediaButton = ({ src, link, alt }: MediaProps) => {
  return (
    <button>
      <a href={link} target="_blank" className="desktop:w-10 w-9 desktop:h-10 h-9 border-3 border-light-green bg-gradient-br-green rounded-[3px] p-[6px] cursor-pointer desktop:shadow-[8px_-8px_0_rgba(0,0,0,.3),16px_-16px_0_rgba(0,0,0,.3)] shadow-[6px_-6px_0_rgba(0,0,0,.3),12px_-12px_0_rgba(0,0,0,.3)] animate-socialMediaRotate flex justify-center items-center">
        <Image
          height={30}
          width={30}
          src={src}
          alt={alt}
          className="animate-rotateLeft" />
      </a>
    </button>
  )
}