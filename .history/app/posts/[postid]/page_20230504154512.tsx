import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

export  function generateMetadata({ params }: { params: { postId: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }

    return {
        title: post.title,
    }
}
}

export default async function Post({ params }: { params: { postId: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)
        
    const pubDate = getFormattedDate(date)

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
        <h1 className='text-4xl font-bold dark:text-white/90'>{title}</h1>
        <p className='text-sm mt-1'>{pubDate}</p>
        <article>
            <section dangerouslySetInnerHTML={{ __html:contentHtml}} />
            <p>
                <Linkink href="/">🔙 Back To Home</Link>
            </p>
        </article>
    </main>
  )
}
 