import Image from "next/image"
import Link from "next/link"

import close from "/public/close.svg"

export const CloseSideMenuButton = () => {
  return (
    <button className="absolute right-[8%] top-[2%]" >
      <Link href='/' className="block p-4" >
        <Image src={close} fill alt="close button" />
      </Link>
    </button>
  )
}