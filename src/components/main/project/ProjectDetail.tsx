import ProjectDetailHeader from "./ProjectDetailHeader"
import ProjectDetailBody from "./ProjectDetailBody"

interface ProjectDetailProps {
    project: {
        id: number,
        image: string | null,
        title: string,
        subtitle: string,
        description: string,
        tech: string[]
    }
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    return (
        <div>
            <ProjectDetailHeader project={project} />
            <ProjectDetailBody project={project} />
        </div>
    )
}