import { getSortedPostsData } from "@/lib/posts"

export default function Posts() {
    const posts = getSortedPostsData()


    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bolddark:text-white/90">Blog</h2>
            <ul>
                {posts.map(({ id, date, title }) => (
                    <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    )
}