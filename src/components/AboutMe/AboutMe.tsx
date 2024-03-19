import Image from "next/image"
import html5 from '/public/html5-original.svg'
import css from '/public/css3-original.svg'
import javascript from '/public/javascript-original.svg'
import typescript from '/public/typescript-original.svg'
import react from '/public/react-original.svg'
import next from '/public/nextjs-original.svg'
import tailwind from '/public/tailwindcss-original.svg'
import styledComponents from '/public/styled-components.svg'

export function AboutMe() {
  return (
    <>
      <p className="mt-4 w-[500px] mr-[138px] text-light-green tracking-wider">
        Especializado em Front-End com foco na criação de interfaces dinâmicas e responsivas, estou comprometido em criar soluções web de alta qualidade, busco constantemente aprimorar a experiência do usuário através de soluções eficientes e modernas. Explore meu portfólio para ver meu trabalho em ação!
      </p>

      <div>
        <h3 className='text-lg text-orange mt-8 justify-center'>Conhecimentos: </h3>

        <div className='flex gap-3 mt-3'>
          <Image src={html5} width={40} height={40} alt="html5 icon" />
          <Image src={css} width={40} height={40} alt="css icon" />
          <Image src={javascript} width={40} height={40} alt="javascript icon" />
          <Image src={typescript} width={40} height={40} alt="typescript icon" />
          <Image src={react} width={40} height={40} alt="react icon" />
          <Image src={next} width={40} height={40} alt="next icon" />
          <Image src={tailwind} width={40} height={40} alt="tailwind icon" />
          <Image src={styledComponents} width={40} height={40} alt="styled-components icon" />
        </div>
      </div>
    </>
  )
}
