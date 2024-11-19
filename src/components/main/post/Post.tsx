import postdata from "@/data/PostData"
import Link from "next/link";
import Image from "next/image"

export default function PostHome() {
    const posts = postdata;
    return (
        <div className="grid gap-4 md:grid-cols-3 mb-4">
            {posts.map((post) => (
                <div key={post.id} className="h-full mx-2 p-2 border-dashed border border-primary rounded-md">
                    <Image className="rounded w-full" src={post.image} alt="..." height={300} width={300}></Image>
                    <div className="mt-5">
                        <h2 className="font-bold text-sm md:text-lg my-2">{post.title}</h2>
                        <div className="flex justify-end">
                            <Link href={post.link} className="text-xs md:text-sm p-1 bg-primary rounded text-primary-content">View Here...</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}