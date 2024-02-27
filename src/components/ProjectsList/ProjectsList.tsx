import { ProjectThumbnail } from "../ProjectThumbnail/ProjectThumbnail"
import { projetsData } from "@/data/projectsData"

export const ProjectsList = () => {
  return (
    <ul className="cursor-pointer">
      {projetsData &&
        projetsData.map(({ projectName, thumbImage }, index) =>
          <ProjectThumbnail key={projectName} projectIndex={index.toString()} thumbImage={thumbImage}>
            {projectName}
          </ProjectThumbnail>
        )}
    </ul>
  )
}