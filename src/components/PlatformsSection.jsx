import Image from "next/image"

const PlatformsSection = () => {
  return (
    <div style={{background:'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className='bg-[#1e1f26] sm:px-1.5 text-white space-y-7 py-10'>

    <h2 className='text-4xl sm:text-2xl text-center capitalize font-bold '> <span className=' uppercase text-teal-400'>INFINITE</span> Digital Music Streaming Platforms Worldwide</h2>   
   
   <div className='w-1/2 sm:w-full md:w-2/3 m-auto sm:px-2'>
   <p className='text-center text-lg text-[#b9b6b6]'>
 {`  Distribute your music on the most popular digital music streaming platforms around the universe. 
   Emergence Music Distribution continuously adds new DSP's to our forever-growing distribution channels.`}
   </p>
   </div>

   <div className='flex items-center w-1/2 sm:w-full md:w-full m-auto sm:px-1 md:px-5 justify-center flex-wrap gap-4'>
        
       <Image className='w-32' width={100} height={100} src="/images/platforms/apple.png" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/spotify.png" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/tiktok.png" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/youtube.png" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/boomplay.png" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/amazon.svg" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/anghami.svg" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/beatport.svg" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/resso.svg" alt="" />
       <Image className='w-32' width={100} height={100} src="/images/platforms/digital.svg" alt="" />
   </div>

   </div>
  )
}

export default PlatformsSection