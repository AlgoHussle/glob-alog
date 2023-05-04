import React from 'react'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

  return (
    <li className='mt-4 text-2xl dark:text'>
  )
}