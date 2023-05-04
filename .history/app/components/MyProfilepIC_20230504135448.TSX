import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image
            src="/images/profile-pic.jpg"
            alt="Picture of the author"
            width={200}
        />
    </section>
  )
}
