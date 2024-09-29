import { ReusableForm } from '@/components/Form';
import { emdArtistSchema } from '@/schemas';
import Image from 'next/image';
import Link from 'next/link';
import siteLogo from '../images/sitelogo.svg'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { toast } from 'react-toastify';

const EmdArtist = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data) => {

    const postData = async()=>{
      setIsLoading(true)
        try {
          const response = await fetch('/api/emd-artist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
          const result = await response.json();
            console.log(result)
          if (response.ok) {
            // console.log('New artist created:', result)
            setIsLoading(false)
            window.location.href = 'https://calendly.com/emergencemusicdistribution/30min?month=2024-09';
          } else {
          setIsLoading(false)
          toast.error(result.error)
          }
        } catch (error) {
          setIsLoading(false)
          console.log(error)
          toast.error("An unexpected Error Occured")
          // Show error message
        }
      }
      postData()
    };

      const fields = [
        { name: 'firstName', label: 'First Name', type: 'text' },
        { name: 'lastName', label: 'Last Name', type: 'text' },
        { name: 'location', label: 'Location', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
        { name: 'artistName', label: 'Artist Name / Label Name / Music Group Name', type: 'text' },
        { name: 'musicGenre', label: 'Music Genre', type: 'text' },
        { name: 'spotifyLink', label: 'Spotify Page Link', type: 'text' },
        { name: 'instagramLink', label: 'Instagram Page Link', type: 'text' },
      ];
    
  return (

    <>
    <div className='grid grid-cols-12 sm:grid-cols-1 md:grid-cols-1'>

<div className='space-y-5 pt-8 px-6 sm:px-6 md:px-8 col-span-4 bg-[#1e1f26]'>
  <h2 className='text-3xl font-bold text-white'>Welcome to <Link href={'/'} className='text-pink-600'>Emergence</Link> </h2>
    <h3 className='text-lg text-white'>Please fill the form with your information!</h3>

    <div className='pb-8'>
     <ReusableForm onSubmit={onSubmit} isLoading={isLoading} schema={emdArtistSchema} fields={fields} />
   </div>
       
</div>

<div onClick={()=>router.push('/')} className='bg-gradient-to-r from-[#35222d] to-[#3e2b47] md:hidden sm:hidden col-span-8 flex justify-center items-start' >
<Image  className='mt-80 cursor-pointer' src={siteLogo} alt="Emergence music logo" />
</div>

    </div>
    </>

  )
}

export default EmdArtist