import Image from 'next/image'
import React from 'react'

const LastSection = () => {
  return (
    <div style={{background:'linear-gradient(90deg, #1d1315, #241c30)'}} className='bg-slate-900 text-white md:px-7 pb-10'>

    <div className='flex flex-col'>
    <h2 className='text-4xl sm:text-2xl order-2 font-bold sm:px-4 capitalize py-6 text-center'>distribute and sell your music video</h2> 
    <p className='w-1/2 md:w-full order-3 sm:px-3 text-center m-auto text-l text-[#a1a1a1] sm:w-full '>With our exclusive video channel partnerships. Access and take advantage of our unique network to increase your revenue as an Emergence artist. Get your videos seen and heard universally.</p>
    <Image width={500} height={500} className='w-[16.9rem] sm:w-1/2 order-1 m-auto mt-7' src="/images/vevo.png" alt="Vevo" />
    </div>

    <div className='flex sm:flex-col md:flex-col justify-center gap-6 sm:px-5 px-20 md:px-0 sm:pt-10 md:pt-10'>
    <div className='md:w-full sm:w-full space-y-2 flex-1'>
        <Image width={100} height={100} className='w-[16.3rem] sm:w-1/2 m-auto'  src="/images/emerge.svg" alt="Emerge" />
        <h3 className='text-3xl sm:text-2xl capitalize font-bold text-center'>emerge with us</h3>
        <p className=' text-center  text-l text-[#a1a1a1] md:w-full sm:w-full'>
        {`Distribute your music on the most popular digital music streaming platforms 
        around the universe. Emergence Music Distribution 
        continuously adds new dsp's to our forever-growing distribution channels.`}
        </p>
    </div>

    <div className='md:w-full sm:w-full space-y-2 flex-1'>
        <Image width={100} height={100} className='w-[16.3rem] sm:w-1/2 m-auto'  src="/images/develop.svg" alt="develope" />
        <h2 className='text-3xl sm:text-2xl font-bold capitalize text-center'>how to develop your music career</h2>
        <p className='text-center  text-l text-[#a1a1a1] md:w-full sm:w-full'>
        Emergence Music Distribution offers you a variety of services, 
        to transition successfully to a professional digital music career. 
        Tips on how to position yourself on social media and which specific promotional tools to use.
         To assist you in the process of improving your brand awareness as an artist,
          regardless of your musical genre. Don’t fall behind the pack, be ahead of the curve 
        with emergence music distribution and emerge your digital musical future now.</p>
    </div>

    </div>

 
</div>
  )
}

export default LastSection