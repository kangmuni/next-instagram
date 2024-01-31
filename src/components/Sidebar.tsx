'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomeIcon from './ui/HomeIcon';
import HomeFillIcon from './ui/HomeFillIcon';
import SearchIcon from './ui/SearchIcon';
import SearchFillIcon from './ui/SearchFillIcon';
import NewIcon from './ui/NewIcon';
import NewFillIcon from './ui/NewFillIcon';
import LoginOrLogoutButton from './LoginOrLogoutButton';

import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './Avatar';

export default function Sidebar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  const user = session?.user;

  const icons = [
    {
      icon: <HomeIcon />,
      clickedIcon: <HomeFillIcon />,
      href: '/',
    },
    {
      icon: <SearchIcon />,
      clickedIcon: <SearchFillIcon />,
      href: '/search',
    },
    {
      icon: <NewIcon />,
      clickedIcon: <NewFillIcon />,
      href: '/new',
    },
  ];

  return (
    <div className="p-9 pr-24 border-left border-solid border-r-2 border-slate-200 basis-1/12">
      <Link href="/" className="text-2xl font-semibold">
        Instagram
      </Link>

      <nav className="mt-9">
        <ul>
          {icons?.map((icon) => (
            <li key={icon?.href} className="pb-9">
              <Link href={icon?.href}>
                {pathName === icon?.href ? icon?.clickedIcon : icon?.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {session ? (
        <LoginOrLogoutButton onClick={() => signOut()} />
      ) : (
        <LoginOrLogoutButton onClick={() => signIn()} />
      )}

      {user && (
        <Link href={`/user/${user.username}`}>
          <Avatar image={user?.image} size="small" />
        </Link>
      )}
    </div>
  );
}
