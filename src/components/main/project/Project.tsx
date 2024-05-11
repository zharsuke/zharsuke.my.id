import projectData from "@/data/ProjectData"


export default function Project() {
    const projects = projectData.toReversed();
    return (
        <div className="grid gap-2 md:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id} className="my-4 p-2 border-dashed border border-primary rounded-md">
                    <h1 className="font-bold text-sm md:text-lg">{project.title}</h1>
                    <p className="text-sm md:text-lg my-2">{project.subtitle}</p>
                    <div className="flex flex-row gap-2">
                        {project.tech && project.tech.map((tech) => (
                            <p className="text-xs md:text-xs p-1 border-dashed border border-primary rounded" key={tech}>{tech}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}