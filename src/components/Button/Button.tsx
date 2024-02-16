import Image from "next/image"
import buttonSvg from "/public/button.svg"
import { ReactNode } from "react"

type ButtonProps = {
  color: 'green' | 'orange'
  children: ReactNode
}

const buttonColors = {
  green: 'border-light-green bg-gradient-br-green',
  orange: 'border-orange bg-gradient-br-orange'
}

export const Button = ({ color, children }: ButtonProps) => {
  const isOrange = color === 'orange'

  return (
    <button className={`relative w-36 h-10 py-2 ${isOrange ? 'mr-8' : 'ml-8'} flex items-center justify-center`}>
      <div className={`absolute ${isOrange ? 'right-[-25px]' : 'left-[-25px]'} buttonDiamond ${buttonColors[color]}`}></div>
      <span className={`z-10 ${isOrange ? 'text-orange' : 'text-light-green'} text-sm font-semibold uppercase tracking-widest`}>{children}</span>
      <Image src={buttonSvg} fill alt="bg-button" className={`${isOrange && 'rotate-180'}`} />
    </button>
  )
}