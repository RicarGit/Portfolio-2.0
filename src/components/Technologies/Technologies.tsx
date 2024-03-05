import Image from "next/image"
import hexagonGreen from "/public/hexagonGreen.svg"
import hexagonOrange from "/public/hexagonOrange.svg"

type TechnologiesProps = {
  techs: string[],
  libs: string[]
}

export const Technologies = ({ techs, libs }: TechnologiesProps) => {
  return (
    <div className="ml-4 text-white uppercase font-medium text-lg">
      {techs.length > 0 &&
        <div className="flex relative gap-2">
          {techs.map(tech =>
            <div key={tech} className="flex relative justify-center items-center">
              <p className="absolute text-center">{tech}</p>
              <Image key={tech} src={hexagonGreen} width={120} height={120} alt={tech} />
            </div>
          )}
        </div>
      }

      {libs.length > 0 &&
        <div className="flex gap-2 relative left-[64px] -top-7">
          {libs.map(lib =>
            <div key={lib} className="flex relative justify-center items-center">
              <p className="absolute px-2 text-center">{lib || 'sem libs'}</p>
              <Image src={hexagonOrange} width={120} height={120} alt={lib} />
            </div>
          )}
        </div>
      }
    </div>
  )
}