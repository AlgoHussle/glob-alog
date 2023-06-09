import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"

export default async function Post({ params }: { params: { postId: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }
}

export default async function Post({ params }: { params: { postId: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }


  return (
    <div>Post</div>
  )
}
 