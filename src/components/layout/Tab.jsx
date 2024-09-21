import { useRouter } from 'next/router'
import { FaDollarSign, FaHome, FaSuitcase } from 'react-icons/fa'
// import NavLink from '../common/NavLink';
import Link from 'next/link';

const Tab = () => {
const router = useRouter()

const scrollToTop = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
  });
  }

  return (
    <div className={`tabs ${router.pathname==='/new-artist' || router.pathname==='/emd-artist'? 'sm:hidden md:hidden':'block'}  bg-[#1e1f26] hidden sm:flex md:flex w-full justify-between items-center  fixed bottom-0 text-white`}>
       
    <Link onClick={scrollToTop} href={'/'} className={`${router.pathname === '/' ? 'active':''} flex flex-col gap-1 items-center  flex-1 md:py-3`}>
        <FaHome size={20}/>
    <span className='text-[0.625rem]'>Home</span>
    </Link>
  
    <Link onClick={scrollToTop} href={'/services'} className={`${router.pathname === '/services' ? 'active':''} flex flex-col items-center gap-1 flex-1 md:py-3`}>
    <FaDollarSign size={20}/>
    <span className='text-[0.625rem]'>Services</span>
    </Link>

    <Link onClick={scrollToTop} href={'/ambassador-clubs'} className={`${router.pathname === '/ambassador-clubs' ? 'active':''} flex flex-col items-center gap-1 flex-1 md:py-3`}>
    <FaSuitcase size={20}/>
    <span className='text-[0.625rem]'>Ambassador</span>
    </Link>

    
</div>
  )
}

export default Tab