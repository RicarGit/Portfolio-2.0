import { projectsData } from "@/data/projectsData"
import { ProjectThumbnail } from "@/components"

export const ProjectsThumbnailList = () => {
  if (projectsData.length < 0) return

  return (
    <ul className="cursor-pointer w-full pt-[2%] pb-[4%] tablet:pb-[8%]">
      {projectsData.map(({ projectName, thumbImage }, index) => (
        <ProjectThumbnail
          key={index}
          projectName={projectName}
          thumbImage={thumbImage}
          projectIndex={index}
        />
      ))}
    </ul>
  )
}
