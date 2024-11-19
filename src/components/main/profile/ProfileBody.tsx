import { Icon } from '@iconify/react';
import Link from "next/link";

interface ProfileBodyProps {
    name: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    medium: string;
    hover: string;
    resume: string;
}

export default function ProfileBody({ name, description, email, github, linkedin, twitter, medium, hover, resume }: ProfileBodyProps) {
    return (
        <div className="flex-col justify-between">
            <h1 className="text-base md:text-base font-bold mb-2">{name}</h1>
            <p className="text-sm sm:text-sm md:text-base mb-3">{description}</p>
            <div className="flex gap-2 mt-3 text-base">
                <Link href={email} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="line-md:email" aria-label="Send email"/></Link>
                <Link href={github} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="line-md:github-loop" aria-label="View github" /></Link>
                <Link href={linkedin} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="line-md:linkedin" aria-label="View linkedin" /></Link>
                <Link href={twitter} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="line-md:twitter" aria-label="View twitter" /></Link>
                <Link href={medium} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="ri:medium-line" aria-label="View medium" /></Link>
                <a href={resume} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`}><Icon icon="line-md:file-document" aria-label="View resume" /></a>
            </div>
        </div>
    )
}