interface AboutProps {
    about: string;
}

export default function About({ about }: AboutProps) {
    return (
        <div>
            <p className="text-base">{about}</p>
        </div>
    )
}