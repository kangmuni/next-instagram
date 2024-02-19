import { ProfileUser } from '@/model/user';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
  user: ProfileUser;
};
export default function UserCard({
  user: { name, username, image, following, followers },
}: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className="flex items-center w-full mb-2 p-2 text-sm bg-white hover:bg-neutral-50 "
    >
      <Avatar image={image} />
      <div className="text-neutral-500 ml-2">
        <p className="text-black font-bold leading-4">{username}</p>
        <p>{name}</p>
      </div>
    </Link>
  );
}
