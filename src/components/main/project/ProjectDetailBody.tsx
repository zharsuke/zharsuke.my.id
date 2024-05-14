"use client"
import Link from "next/link"
import { Icon } from '@iconify/react';

interface ProjectDetailHeaderProps {
    project: {
        title: string,
        description: string
    }
}

export default function ProjectDetailBody({ project}: ProjectDetailHeaderProps) {
    return (
        <div>
            {/* body */}
            <div className="my-5">
                <div className="flex justify-between md:flex-row border-dashed border-b border-primary my-5">
                <h1 className="font-bold mb-2 text-xl">{project?.title}</h1>
                <div className="border-dashed border-primary border p-1">
                <Link href={''} className="flex font-bold mb-2 text-xl"><Icon icon="line-md:github-loop" />Source</Link>
                </div>
                </div>
                <p className="text-base">{project?.description}</p>
            </div>
        </div>
    )
}