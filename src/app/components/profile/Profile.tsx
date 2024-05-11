"use client"

import Image from "next/image"
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function Profile() {
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
                <h1 className="text-base md:text-base font-bold mb-2">AL AZHAR RIZQI RIFA&apos;I FIRDAUS</h1>
                <p className="text-sm sm:text-sm md:text-base mb-3">Web Universe Enthusiast. Student at State Polytechnic of Malang.</p>
                <div className="flex gap-4 mt-3">
                    <Link href={'mailto:alazharisqi@gmail.com'} className="text-xl"><Icon icon="line-md:email" /></Link>
                    <Link href={'https://github.com/zharsuke'} className="text-xl"><Icon icon="line-md:github-loop" /></Link>
                    <Link href={'https://www.linkedin.com/in/al-azhar-rizqi-rifa-i-firdaus-384236221/'} className="text-xl"><Icon icon="line-md:linkedin" /></Link>
                    <Link href={'https://twitter.com/zharsuke'} className="text-xl"><Icon icon="line-md:twitter" /></Link>
                    <Link href={'https://medium.com/@zharsuke'} className="text-xl"><Icon icon="ri:medium-line" /></Link>
                </div>
            </div>
        </div>
    )
}