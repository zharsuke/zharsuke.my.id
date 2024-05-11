import Link from "next/link"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost text-xl font-bold">Home</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={'/projects'}>Projects</Link></li>
                    <li><Link href={'/posts'}>Posts</Link></li>
                </ul>
            </div>
        </div>
    )
}