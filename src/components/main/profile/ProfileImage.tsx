import Image from 'next/image'

interface ProfileImageProps {
    image: string;
}

export default function ProfileImage({ image }: ProfileImageProps) {
    return (
        <div>
            <div className="w-32 md:w-32">
                <Image className="rounded-md" src={image} alt="..." width={1080} height={1080} />
            </div>
        </div>
    )
}