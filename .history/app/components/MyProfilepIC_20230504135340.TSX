import React from 'react'
import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <div>
        <Image
            src="/images/"
            alt="Picture of the author"
            width={500}
            height={500}
        />
    </div>
  )
}
