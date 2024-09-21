import { features } from "@/data/features"
import FeaturesCard from "./FeaturesCard"

const FeaturesSection = () => {
  return (
    <div style={{background:'linear-gradient(90deg, #212129, #3e2b47 50%, #35222d)'}} className="flex sm:flex-col py-10 md:flex-col sm:gap-7 bg-[url('/images/30.svg')] md:bg-cover sm:px-3 bg-cover bg-no-repeat text-white ">

    <div className='space-y-10'>
    <h2 className='text-4xl sm:text-2xl capitalize text-white font-bold text-center '>
    <span className='uppercase text-yellow-500'>enter</span> the emergence music center
    </h2>

<div className='grid grid-cols-5 cursor-pointer items-center sm:grid-cols-1 md:grid-cols-3 gap-4 px-20 md:px-10 sm:px-6'>
    {
      features.map((feature, i)=>{
        return <FeaturesCard key={i} image={feature.image} title={feature.title} description={feature.description} />

      })
    }  
</div>
  
    </div>

    </div>
  )
}

export default FeaturesSection