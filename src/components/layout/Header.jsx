import { usePathname } from 'next/navigation';
import NavLink from '../common/NavLink';
import Image from 'next/image';
import siteLogo from '../../images/sitelogo.svg'
import { useRouter } from 'next/router'


const Header = () => {
    const pathname = usePathname();
    const router = useRouter()
  return (
    <div style={{background: pathname==='/'? 'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)' : 'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className={`${pathname==='/new-artist' || pathname==='/emd-artist'?"hidden":null} flex items-center justify-between sm:px-2 md:px-16 px-20 py-4`}>
    <div onClick={()=>router.push('/')} className=' cursor-pointer sm:pl-1 md:pl-7'>
    <Image
    className='sm:w-5/6 sm:m-auto '
      src={siteLogo}
      quality={90}
      priority={true}
      alt="emergence music logo"
      style={{objectFit: "contain"}}
    //   loader={imageLoader}
    //   fill={true}
    />
    </div>

      <div className='nav-link text-gray-300 sm:hidden md:hidden uppercase space-x-7'>
      <NavLink href={'/'} >Home</NavLink>
        <NavLink href={'/services'} >Services</NavLink>
        <NavLink href={'/ambassador-clubs'} >Ambassador clubs</NavLink>
        {/* <Link className='hover:text-pink-700'>About us</Link> */}
      </div>
      {/* <LanguageSwitcher/> */}
  </div>
  )
}

export default Header