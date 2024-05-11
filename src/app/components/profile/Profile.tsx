"use client"

import Image from "next/image"
import { Icon } from '@iconify/react';
import Link from "next/link";

interface ProfileProps {
    name: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    medium: string;
}

export default function Profile({ name, description, email, github, linkedin, twitter, medium }: ProfileProps) {
    return (
        <div className="flex flex-row gap-4 py-5 border-dashed border-b-2 border-primary">
            {/* image */}
            <div>
                <div className="w-32 md:w-32">
                    <Image className="rounded-md" src={'https://avatars.githubusercontent.com/u/68967912?v=4'} alt="..." width={1080} height={1080} />
                </div>
            </div>
            {/* name */}
            <div className="flex-col justify-between">
                <h1 className="text-base md:text-base font-bold mb-2">{name}</h1>
                <p className="text-sm sm:text-sm md:text-base mb-3">{description}</p>
                <div className="flex gap-4 mt-3">
                    <Link href={email} className="text-xl"><Icon icon="line-md:email" /></Link>
                    <Link href={github} className="text-xl"><Icon icon="line-md:github-loop" /></Link>
                    <Link href={linkedin} className="text-xl"><Icon icon="line-md:linkedin" /></Link>
                    <Link href={twitter} className="text-xl"><Icon icon="line-md:twitter" /></Link>
                    <Link href={medium} className="text-xl"><Icon icon="ri:medium-line" /></Link>
                </div>
            </div>
        </div>
    )
}