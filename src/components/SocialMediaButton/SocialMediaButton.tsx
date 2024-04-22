import Image from "next/image"
import Link from "next/link"

import { socialMediaData } from "@/data/socialMediaData"

export const SocialMediaButton = () => {
  if (socialMediaData.length < 0) return

  return (
    socialMediaData.map(({ image, link, alt }, index) => (
      <button key={index}>
        <Link href={link} target="_blank" className="desktop:w-10 w-9 desktop:h-10 h-9 border-3 border-light-green bg-gradient-br-green rounded-[3px] p-[6px] cursor-pointer desktop:shadow-[8px_-8px_0_rgba(0,0,0,.3),16px_-16px_0_rgba(0,0,0,.3)] shadow-[6px_-6px_0_rgba(0,0,0,.3),12px_-12px_0_rgba(0,0,0,.3)] animate-socialMediaRotate flex justify-center items-center">
          <Image
            height={30}
            width={30}
            src={image}
            alt={alt}
            className="animate-rotateLeft"
          />
        </Link>
      </button>
    ))
  )
}