import certificatesData from "@/data/CertificatesData"
import Image from "next/image"

export default function Certificates() {
    const certificates = certificatesData;
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {certificates.map((certificate) => (
                <div key={certificate.id} className="mx-2 p-2 border-dashed border border-primary rounded-md">
                    <Image className="rounded w-full" src={certificate.image} alt="..." height={400} width={400}></Image>
                    <div className="flex-col">
                        <h1 className="font-bold text-sm md:text-lg my-2">{certificate.title}</h1>
                        <div className="flex flex-row gap-2">
                            <p className="text-xs md:text-xs p-1 badge badge-primary">{certificate.tag}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}