'use client';
<<<<<<< HEAD
=======

>>>>>>> 1488880 (사용자 프로필 서비스,컴포넌트,스타일링)
import { HomeUser, ProfileUser } from '@/model/user';
import useSWR from 'swr';
import Button from './ui/Button';

type Props = {
  user: ProfileUser;
};
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<HomeUser>('/api/me');

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);

  const text = following ? '팔로잉' : '팔로우';

  return <>{showButton && <Button text={text} onClick={() => {}} />}</>;
}
