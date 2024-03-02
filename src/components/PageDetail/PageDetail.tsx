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
  ['top-right']: 'top-0 right-0',
  ['top-left']: 'top-0 left-0',
  ['bottom-right']: 'bottom-0 right-0',
  ['bottom-left']: 'bottom-0 left-0'
}

export const PageDetail = ({ color, rotate, position }: PageDetail) => {
  return (
    <div className={`absolute m-12 ${color === 'blue' ? 'w-[350px] h-44' : 'w-44 h-[350px]'} ${svgPositions[position]} ${rotate ?? 'rotate-180'}`}>
      <Image src={svgColors[color]} fill priority alt="" className="drop-shadow-[8px_8px_1px_rgba(0,0,0,.3)]" />
    </div>
  )
}