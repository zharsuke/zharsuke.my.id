interface ProjectDetailHeaderProps {
    project: {
        title: string,
        tech: string[]
    }
}

export default function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
    return (
        <div>
            {/* header */}
            <div className="flex flex-col justify-between md:flex-row my-5">
                <div className="md:mr-5 my-2 rounded border-dashed border border-primary p-2 md:w-3/4">
                    <h1 className="font-bold mb-2 text-xl">image</h1>
                </div>
                <div className="md:ml-5 my-2 rounded border-dashed border border-primary p-2 md:w-1/4">
                    <h1 className="font-bold mb-2 text-xl">Tech Stack</h1>
                    <ul>
                        {project?.tech.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}