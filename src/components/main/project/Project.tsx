import projectData from "@/data/ProjectData"
import Link from "next/link";

export default function Project() {
    const projects = projectData.toReversed();
    return (
        <div className="grid gap-4 md:grid-cols-3 mb-4">
            {projects.map((project) => (
                <div key={project.id} className="p-2 border-dashed border border-primary rounded-md">
                    <Link href={`/projects/${project.id}`}>
                        <div className="flex flex-col h-full justify-between rounded-md">
                            <div>
                                <h1 className="font-bold text-sm md:text-lg">{project.title}</h1>
                                <p className="text-sm md:text-lg my-2">{project.subtitle}</p>
                                <div className="flex flex-row gap-2">
                                    <p className="font-bold hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300">Read More...</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech && project.tech.map((tech) => (
                                    <p className="text-xs md:text-xs p-1 border-dashed border border-primary rounded" key={tech}>
                                        {tech}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}