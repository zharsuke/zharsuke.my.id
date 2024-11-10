import Link from "next/link"

interface NavbarMenuProps {
    hover: string;
}

export default function NavbarMenuDesktop({ hover }: NavbarMenuProps) {
    return (
        <div className="hidden sm:block flex gap-4">
            <Link className={`mr-3 ${hover}`} href={'/experiences'}>Experiences</Link>
            <Link className={`mr-3 ${hover}`} href={'/projects'}>Projects</Link>
            <Link className={`mr-3 ${hover}`} href={'/certificates'}>Certificates</Link>
            <Link className={`${hover}`} href={'/posts'}>Posts</Link>
        </div>
    )
}