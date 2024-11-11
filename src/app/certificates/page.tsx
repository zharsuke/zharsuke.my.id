import Navbar from "../../components/header/Navbar"
import Footer from "../../components/footer/Footer"
import Certificates from "@/components/main/certificates/Certificates";

export default function CertificatesPage() {
    const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";
    return (
        <div className="max-w-screen-lg mx-auto">
            <Navbar hover={hover} />
            <div className="ml-2 mr-2">
                <Certificates />
                {/* footer */}
                <Footer />
            </div>
        </div>
    )
}