import NavbarMenu from "./NavbarMenu"
import NavbarTitle from "./NavbarTitle"

interface NavbarProps {
    hover: string;
}

export default function Navbar({ hover }: NavbarProps) {
    return (
        <div className="navbar bg-base-100">
            <NavbarTitle hover={hover}/>
            <NavbarMenu hover={hover}/>
        </div>
    )
}