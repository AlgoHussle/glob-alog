import { getSortedPostsData } from '@/lib/posts'
import React from 'react'

export default async function Post({ params }: { params: { postid: string}}) {
  
    const posts = getSortedPostsData()


  return (
    <div>Post</div>
  )
}
 