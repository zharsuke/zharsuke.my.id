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
                <Link href={email} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="Send email"><Icon icon="line-md:email"/></Link>
                <Link href={github} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="View github"><Icon icon="line-md:github-loop" /></Link>
                <Link href={linkedin} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="View linkedin"><Icon icon="line-md:linkedin" /></Link>
                <Link href={twitter} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="View twitter"><Icon icon="line-md:twitter" /></Link>
                <Link href={medium} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="View medium"><Icon icon="ri:medium-line" /></Link>
                <a href={resume} className={`border-solid border border-primary px-1 py-1 rounded-md ${hover}`} aria-label="View resume"><Icon icon="line-md:file-document" /></a>
            </div>
        </div>
    )
}