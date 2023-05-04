import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"

export default async function Post({ params }: { params: { postid: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === post))


  return (
    <div>Post</div>
  )
}
 