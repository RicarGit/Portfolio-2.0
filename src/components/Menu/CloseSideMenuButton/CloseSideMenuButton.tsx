import Image from "next/image"
import Link from "next/link"

export const CloseSideMenuButton = () => {
  return (
    <button className="absolute right-5 top-5 tablet:right-3 tablet:top-3" >
      <Link href='/' className="relative block p-4 tablet:p-3" >
        <Image src="/images/svg/close.svg" fill alt="close button" />
      </Link>
    </button>
  )
}