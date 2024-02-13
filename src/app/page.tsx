import Followingbar from '@/components/Followingbar';
import MiniProfile from '@/components/MiniProfile';
import PostList from '@/components/PostList';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <main className="w-full flex flex-col lg:flex-row max-w-[700px]">
      <article className="w-full basis-3/4">
        <Followingbar />
        <PostList />
      </article>
      <article className="basis-1/4 ml-5">
        <MiniProfile user={user} />
      </article>
    </main>
  );
}
