import postdata from "@/data/PostData"
import Link from "next/link";

export default function PostHome() {
    const posts = postdata;
    return (
        <div className="grid gap-4 md:grid-cols-3 mb-4">
            {posts.map((post) => (
                <div key={post.id} className="card bg-base-100 w-full shadow-xl flex flex-col justify-between h-full">
                    <div>
                        <figure>
                            <img className="w-full rounded"
                                src={post.image}
                                alt="..." />
                        </figure>
                    </div>
                    <div>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <div className="card-actions justify-end">
                            <Link href={post.link} className="btn btn-primary text-white">Read More...</Link>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}