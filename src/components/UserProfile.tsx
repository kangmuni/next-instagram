import { ProfileUser } from '@/model/user';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

type Props = {
  user: ProfileUser;
};

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: '게시물', data: posts },
    { title: '팔로워', data: followers },
    { title: '팔로우', data: following },
  ];
  return (
<<<<<<< HEAD
    <section className="w-full flex flex-col items-center md:flex-row md:justify-start">
      <Avatar image={image} highlight size="large" />
      <div className="basis-3/5 mx-9 mt-3">
=======
    <section className="w-full flex flex-col items-center md:flex-row md:justify-center mb-24">
      <Avatar image={image} highlight size="large" />
      <div className="mx-9 mt-3">
>>>>>>> 1488880 (사용자 프로필 서비스,컴포넌트,스타일링)
        <div className="flex flex-col items-center md:flex-row">
          <h1 className="px-2 py-1 mr-2 text-lg">{username}</h1>
          <FollowButton user={user} />
        </div>

<<<<<<< HEAD
        <ul className="flex mx-2 m-5">
=======
        <ul className="flex mx-auto m-5">
>>>>>>> 1488880 (사용자 프로필 서비스,컴포넌트,스타일링)
          {info.map(({ title, data }, index: number) => (
            <li key={index} className="mr-9 text-md font-medium">
              <span>
                {title} {data}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
