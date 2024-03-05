import { SetStateAction } from "react"

type CloseSideMenuButtonProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const CloseSideMenuButton = ({ setIsOpen }: CloseSideMenuButtonProps) => {
  return (
    <button onClick={() => setIsOpen(state => !state)} className="absolute -right-[30px] top-1 max-w-2 pr-4 pl-2 py-2 leading-none bg-dark-green text-white font-medium text-sm rounded-r-md border-y-[3px] border-r-[3px] cursor-pointer overflow-hidden">
      F
      E
      C
      H
      A
      R
    </button>
  )
}