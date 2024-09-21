import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={`${isActive ? 'active' : ''} hover:text-pink-700`} >
      {children}
    </Link>
  );
};

export default NavLink;

