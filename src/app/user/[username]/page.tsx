<<<<<<< HEAD
import UserProfile from '@/components/UserProfile';
=======
import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';

>>>>>>> 1488880 (사용자 프로필 서비스,컴포넌트,스타일링)
import { getUserForProfile } from '@/service/user';
import { notFound } from 'next/navigation';

type Props = { params: { username: string } };
export default async function UserPage({ params: { username } }: Props) {
  // 상단: 사용자의 프로필 이미지와 정보(username, name, 숫자)
  // 하단: 3개의 탭 (posts, liked, bookmarks)
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }

<<<<<<< HEAD
  return <UserProfile user={user} />;
=======
  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
>>>>>>> 1488880 (사용자 프로필 서비스,컴포넌트,스타일링)
}
