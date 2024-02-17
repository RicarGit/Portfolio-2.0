import Image from "next/image"
import modalDetailGreen from "/public/modalDetailGreen.svg"
import modalDetailBlue from "/public/modalDetailBlue.svg"

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
    <Image src={isGreen ? modalDetailGreen : modalDetailBlue} width={`${isGreen ? 130 : 250}`} height={`${isGreen ? 250 : 130}`} alt="" className={`absolute m-8 ${svgPositions[position]}`} />
  )
}