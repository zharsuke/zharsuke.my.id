import Link from "next/link"

interface NavbarMenuProps {
    hover: string;
}

export default function NavbarMenu({ hover }: NavbarMenuProps) {
    return (
        <div className="sm:hidden">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-10 z-[1] right-0 top-0 p-3 shadow bg-base-100 rounded-box w-52">
                    <li><Link className={hover} href={'/experiences'}>Experiences</Link></li>
                    <li><Link className={hover} href={'/projects'}>Projects</Link></li>
                    <li><Link className={hover} href={'/projects'}>Posts</Link></li>
                </ul>
            </div>
        </div>
    )
}