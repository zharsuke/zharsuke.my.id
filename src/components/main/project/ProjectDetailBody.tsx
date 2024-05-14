"use client"
import Link from "next/link"
import { Icon } from '@iconify/react';

interface ProjectDetailHeaderProps {
    project: {
        title: string,
        description: string,
        source: string
    }
}

export default function ProjectDetailBody({ project }: ProjectDetailHeaderProps) {
    return (
        <div>
            {/* body */}
            <div className="">
                <div className="flex justify-between md:flex-row my-5">
                    <h1 className="font-bold mt-3 text-xl">{project?.title}</h1>
                    <div className="border-dashed border-primary border p-2 rounded">
                        <Link href={project.source} className="flex font-bold text-xl"><Icon className="mt-1" icon="line-md:github-loop" />Source</Link>
                    </div>
                </div>
                <p className="text-base border-dashed border-t border-primary py-5">{project?.description}</p>
            </div>
        </div>
    )
}