import Image from "next/image"
import pageDetailGreen from "/public/pageDetailGreen.svg"
import pageDetailBlue from "/public/pageDetailBlue.svg"

type PageDetail = {
  color: 'green' | 'blue'
  position: "top-right" | 'top-left' | 'bottom-right' | 'bottom-left'
  rotate?: boolean
}

const svgColors = {
  green: pageDetailGreen,
  blue: pageDetailBlue
}

const svgPositions = {
  ['top-right']: 'top-[5%] right-[2.5%]',
  ['top-left']: 'top-[5%] left-[2.5%]',
  ['bottom-right']: 'bottom-[5%] right-[2.5%]',
  ['bottom-left']: 'bottom-[5%] left-[2.5%]'
}

export const PageDetail = ({ color, rotate, position }: PageDetail) => {
  return (
    <div className={`absolute ${color === 'blue' ? 'w-[350px] h-44' : 'w-44 h-[350px]'} ${svgPositions[position]} ${rotate ?? 'rotate-180'}`}>
      <Image
        src={svgColors[color]}
        fill
        priority
        alt="page detail"
        className="drop-shadow-[8px_8px_1px_rgba(0,0,0,.3)]" />
    </div>
  )
}