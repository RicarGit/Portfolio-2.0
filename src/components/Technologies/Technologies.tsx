import hexagonGreen from "/public/hexagonGreen.svg"
import hexagonOrange from "/public/hexagonOrange.svg"

import { Hexagon } from "../Hexagon/Hexagon"

type TechnologiesProps = {
  techs: string[],
  libs: string[]
}

export const Technologies = ({ techs, libs }: TechnologiesProps) => {
  return (
    <div className="mx-4 text-white uppercase w-72 laptop:w-auto text-xs laptop:text-base laptop:font-medium">
      {techs.length > 0 &&
        <div className="flex relative animate-fadeInTop">
          {techs.map(tech =>
            <Hexagon key={tech} image={hexagonGreen} techOrLib={tech} />
          )}
        </div>
      }

      {libs.length > 0 &&
        <div className="flex relative left-9 -top-[16px] laptop:left-[50px] laptop:-top-[24px] animate-fadeInBottom">
          {libs.map(lib =>
            <Hexagon key={lib} image={hexagonOrange} techOrLib={lib || 'no libs'} />
          )}
        </div>
      }
    </div>
  )
}