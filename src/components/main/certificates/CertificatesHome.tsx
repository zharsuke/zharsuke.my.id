import certificatesData from "@/data/CertificatesData"
import Image from "next/image"

export default function CertificatesHome() {
    const certificates = certificatesData.slice(0, 4);
    return (
        <div className="md:carousel my-4 carousel w-full">
            {certificates.map((certificate) => (
                <div key={certificate.id} className="carousel-item mx-2 p-2 border-dashed border border-primary rounded-md">
                    <div className="flex flex-col">
                        <Image className="rounded" src={certificate.image} alt="..." height={400} width={400}></Image>
                        <div className="flex-col">
                            <h1 className="font-bold text-sm md:text-lg my-2">{certificate.title}</h1>
                            <div className="flex flex-row gap-2">
                                <p className="text-xs md:text-xs p-1 badge badge-primary">{certificate.tag}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}