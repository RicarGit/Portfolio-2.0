import Image from "next/image"
import buttonSvg from "/public/button.svg"
import Link from "next/link"

type ButtonProps = {
  color: 'green' | 'orange'
  link?: string
  callbackState?: React.Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

const buttonColors = {
  green: 'border-light-green bg-gradient-br-green',
  orange: 'border-orange bg-gradient-br-orange'
}

export const Button = ({ color, link, children }: ButtonProps) => {
  const isOrange = color === 'orange'
  const isExternalLink = link.includes('https')

  return (
    <button>
      <Link href={isExternalLink ? link : `?${link}=true`} target={isExternalLink ? '_blank' : ''} className={`relative desktop:w-36 w-28 desktop:h-10 h-8 ${isOrange ? 'desktop:mr-8 mr-5' : 'desktop:ml-8 ml-5'} flex items-center justify-center`} >
        <div className={`absolute ${isOrange ? 'desktop:right-[-25px] -right-4' : 'desktop:left-[-25px] -left-4'} buttonDiamond ${buttonColors[color]}`}></div>
        <span className={`z-10 ${isOrange ? 'text-orange' : 'text-light-green'} desktop:text-sm text-xs font-bold uppercase tracking-widest`}>{children}</span>
        <Image src={buttonSvg} fill alt="bg-button" className={`${isOrange && 'rotate-180'}`} />
      </Link>
    </button>
  )
}