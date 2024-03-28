import Hexagon from "../Hexagon/Hexagon"
import hexagonGreen from "/public/hexagonGreen.svg"
import hexagonOrange from "/public/hexagonOrange.svg"

type TechnologiesProps = {
  techs: string[],
  libs: string[]
}

export const Technologies = ({ techs, libs }: TechnologiesProps) => {
  return (
    <div className="ml-4 text-white uppercase font-medium">
      {techs.length > 0 &&
        <div className="flex relative">
          {techs.map(tech =>
            <Hexagon key={tech} image={hexagonGreen} techOrLib={tech} />
          )}
        </div>
      }

      {libs.length > 0 &&
        <div className="inline-flex relative left-[50px] -top-[24px]">
          {libs.map(lib =>
            <Hexagon key={lib} image={hexagonOrange} techOrLib={lib || 'no libs'} />
          )}
        </div>
      }
    </div>
  )
}