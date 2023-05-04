import { getSortedPostsData } from "@/lib/posts"

export default function Posts() {
    const posts = getSortedPostsData()


    return (
        <section className="">
            <h2 className="text-4xl font-bolddark:text-white/90">Blog</h2>
            <ul>
        </section>
}