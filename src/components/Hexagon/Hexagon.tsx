import Image, { StaticImageData } from "next/image"

type HexagonProps = {
  techOrLib: string,
  image: StaticImageData
}

export default function Hexagon({ techOrLib, image }: HexagonProps) {
  return (
    <div key={techOrLib} className="flex relative justify-center items-center">
      <p className="absolute px-1 text-center">{techOrLib}</p>
      <Image key={techOrLib} src={image} width={100} height={100} alt={techOrLib} />
    </div>
  )
}
