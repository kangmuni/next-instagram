'use client';

import { useTransition, useState } from 'react';
import { useRouter } from 'next/navigation';

import { ProfileUser } from '@/model/user';
import Button from './ui/Button';
import useMe from '@/hooks/me';
import { PulseLoader } from 'react-spinners';

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();

  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isUpdating = isPending || isFetching;

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? '팔로잉' : '팔로우';

  const handleFollow = async () => {
    setIsFetching(true);
    toggleFollow(user.id, !following);
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      {showButton && (
        <div>
          {isUpdating && (
            <div>
              <PulseLoader size={6} />
            </div>
          )}
          <Button disabled={isUpdating} text={text} onClick={handleFollow} />
        </div>
      )}
    </>
  );
}
