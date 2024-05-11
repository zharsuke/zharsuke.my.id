"use client"
import ProfileImage from "./ProfileImage";
import ProfileBody from "./ProfileBody";

interface ProfileProps {
    image: string
    name: string;
    description: string;
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
    medium: string;
}

export default function Profile({ image, name, description, email, github, linkedin, twitter, medium }: ProfileProps) {
    return (
        <div className="flex flex-row gap-4 py-5 border-dashed border-b-2 border-primary">
            <ProfileImage image={image} />
            <ProfileBody name={name} description={description} email={email} github={github} linkedin={linkedin} twitter={twitter} medium={medium} />
        </div>
    )
}