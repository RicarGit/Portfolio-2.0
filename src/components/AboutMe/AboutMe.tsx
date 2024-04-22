import { Knowledges } from "../Knowledges/Knowledges"

export const AboutMe = () => {
  return (
    <>
      <p className="mt-4 text-center tablet:text-left desktop:w-[500px] laptop:w-[430px] w-full desktop:mr-[111px] laptop:pr-6 desktop:pr-0 text-light-green laptop:tracking-wide desktop:tracking-wider animate-fadeIn">
        Especializado em Front-End com foco na criação de interfaces dinâmicas e responsivas, estou comprometido em criar soluções web de alta qualidade, busco constantemente aprimorar a experiência do usuário através de soluções eficientes e modernas. Explore meu portfólio para ver meu trabalho em ação!
      </p>

      <Knowledges />
  )
}
