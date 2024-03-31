import Link from "next/link"

export const CloseSideMenuButton = () => {
  return (
    <button className="absolute -right-[30px] top-1 leading-none bg-dark-green text-white font-medium text-sm rounded-r-md border-y-[3px] border-r-[3px] cursor-pointer overflow-hidden">
      <Link href='/' className="block max-w-2 pr-4 pl-2 py-2" >
        F
        E
        C
        H
        A
        R
      </Link>
    </button>
  )
}