import experienceData from "@/data/ExperienceData"

export default function Experience() {
    const experience = experienceData.toReversed();
    return (
        <div>
            {experience.map((exp) => (
                <div key={exp.id} className="my-4 p-2 border-dashed border border-primary rounded-md">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-sm md:text-lg">{exp.title}</h1>
                        <p className="text-xs p-1 bg-primary rounded">{exp.tag}</p>
                    </div>
                    <p className="text-sm md:text-lg my-2">{exp.position}</p>
                    <p className="text-sm md:text-lg my-2">{exp.description}</p>
                    <p className="text-sm md:text-lg my-2">{exp.start}{exp.end ? ` - ${exp.end}` : ""}</p>
                    <div className="flex flex-row gap-2">
                        {exp.tech && exp.tech.map((tech) => (
                            <p className="text-xs md:text-xs p-1 border-dashed border border-primary rounded" key={tech}>{tech}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}