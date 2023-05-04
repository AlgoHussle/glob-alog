import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from ""

export default async function Post({ params }: { params: { postid: string}}) {
  
    const posts = getSortedPostsData()
    const { postId } = params


  return (
    <div>Post</div>
  )
}
 