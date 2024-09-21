import { usePathname } from 'next/navigation';
import NavLink from '../common/NavLink';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
 
  return (
    <div style={{background: pathname==='/'? 'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)' : 'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className={`${pathname==='/new-artist' || pathname==='/emd-artist'?"hidden":null} flex items-center justify-between sm:px-2 md:px-16 px-20 py-4`}>
    <div className=' cursor-pointer sm:pl-4 '>
    <Image
    className='sm-w-4/5'
      src="/images/sitelogo.svg"
      width={280}
      height={280}
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