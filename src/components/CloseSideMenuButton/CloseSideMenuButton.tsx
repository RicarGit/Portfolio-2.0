import Image from "next/image"
import Link from "next/link"

import close from "/public/close.svg"

export const CloseSideMenuButton = () => {
  return (
    <button className="absolute right-5 top-5 tablet:right-3 tablet:top-3" >
      <Link href='/' className="block p-4 tablet:p-3" >
        <Image src={close} fill alt="close button" />
      </Link>
    </button>
  )
}