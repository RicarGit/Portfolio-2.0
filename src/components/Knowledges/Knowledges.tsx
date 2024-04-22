import Image from "next/image"
import { learnedTechs } from "@/data/learnedTechs"

export const Knowledges = () => {
  return (
    <>
      <h3 className='desktop:text-lg text-center tablet:text-left text-orange desktop:mt-8 mt-6 animate-hidden'>Conhecimentos: </h3>

      <div className='flex w-80 desktop:w-[420px] desktop:gap-3 mt-3 desktop:h-10 h-8 overflow-x-hidden animate-widthAnimation'>
        {learnedTechs.length > 0 &&
          learnedTechs.map(({ image, alt }, index) => (
            <Image
              key={index}
              src={image}
              width={40}
              height={40}
              alt={alt}
            />
          ))}
      </div>
    </>
  )
}