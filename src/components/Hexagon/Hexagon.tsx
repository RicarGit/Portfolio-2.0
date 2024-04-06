import Image, { StaticImageData } from "next/image"

type HexagonProps = {
  techOrLib: string,
  image: StaticImageData
}

export const Hexagon = ({ techOrLib, image }: HexagonProps) => {
  return (
    <div key={techOrLib} className="flex w-[72px] laptop:w-[100px] h-20 laptop:h-[110px] relative justify-center items-center">
      <p className="absolute z-10 px-1 text-center">{techOrLib}</p>
      <Image key={techOrLib} src={image} fill alt={techOrLib} />
    </div>
  )
}
