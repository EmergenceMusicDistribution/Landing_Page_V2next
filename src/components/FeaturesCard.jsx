import Image from 'next/image'
import React from 'react'

const FeaturesCard = ({image, title, description}) => {
  return (
    <div className='feature text-white hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:-translate-y-3 py-3 px-2 sm:px-4 space-y-4 text-center'>

    <Image
    className='w-[4.4rem] m-auto'
    src={image}
    width={600}
    height={600}
    alt="Artist Image"
    style={{objectFit: "contain"}}
    />
    <h2 className='text-xl font-medium capitalize'>{title}</h2>
    <p className='text-gray-400'>
     {description}
    </p>

</div>
  )
}

export default FeaturesCard