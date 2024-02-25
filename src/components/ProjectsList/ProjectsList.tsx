import { ProjectThumbnail } from "../ProjectThumbnail/ProjectThumbnail"

export const ProjectsList = () => {
  return (
    <ul className="cursor-pointer">
      <ProjectThumbnail thumbName="dogsSocialMedia">Dogs Social Media</ProjectThumbnail>
      <ProjectThumbnail thumbName="wildbeast">Wildbeast</ProjectThumbnail>
      <ProjectThumbnail thumbName="galeriaFotos">Galeria de Fotos</ProjectThumbnail>
      <ProjectThumbnail thumbName="devMemory">DevMemory</ProjectThumbnail>
      <ProjectThumbnail thumbName="calculadoraIMC">Calculadora de IMC</ProjectThumbnail>
      <ProjectThumbnail thumbName="albumFotos">Álbum de Fotos</ProjectThumbnail>
    </ul>
  )
}