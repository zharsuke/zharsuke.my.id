import Image from 'next/image'

interface ProfileImageProps {
    image: string;
}

export default function ProfileImage({ image }: ProfileImageProps) {
    return (
        <div>
            <div className="w-32 md:w-32 p-1 border border-primary rounded-md">
                <Image className="rounded-md" src={image} alt="..." width={1080} height={1080} />
            </div>
        </div>
    )
}