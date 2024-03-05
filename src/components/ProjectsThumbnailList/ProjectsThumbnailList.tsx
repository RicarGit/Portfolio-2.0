import { ProjectThumbnail } from "../ProjectThumbnail/ProjectThumbnail"
import { projectsData } from "@/data/projectsData"

export const ProjectsThumbnailList = () => {
  return (
    <ul className="cursor-pointer">
      {projectsData &&
        projectsData.map(({ projectName, thumbImage }, index) =>
          <ProjectThumbnail key={projectName} projectIndex={index.toString()} thumbImage={thumbImage}>
            {projectName}
          </ProjectThumbnail>
        )}
    </ul>
  )
}