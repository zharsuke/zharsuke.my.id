import Link from "next/link"

interface NavbarMenuProps {
    hover: string;
}

export default function NavbarMenu({ hover }: NavbarMenuProps) {
    return (
        <div className="flex gap-4">
            <Link className={hover} href={'/projects'}>Projects</Link>
            <Link className={hover} href={'/posts'}>Posts</Link>
        </div>
    )
}