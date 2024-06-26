import Image from "next/image"

type ModalDetailProps = {
  color: 'green' | 'blue'
  position: "top-right" | 'bottom-right'
}

const svgPositions = {
  ['top-right']: 'top-0 right-0',
  ['bottom-right']: 'bottom-0 right-0',
}

export const ModalDetail = ({ color, position }: ModalDetailProps) => {
  const isGreen = color === 'green'

  return (
    <Image
      src={isGreen ? "/images/svg/modalDetailGreen.svg" : "/images/svg/modalDetailBlue.svg"}
      width={`${isGreen ? 130 : 250}`}
      height={`${isGreen ? 250 : 130}`}
      alt="modal detail"
      className={`absolute hidden laptop:block m-4 modal:m-8 drop-shadow-[8px_8px_1px_rgba(0,0,0,.3)] animate-shadows ${svgPositions[position]}`}
    />
  )
}