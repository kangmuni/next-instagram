import Followingbar from '@/components/Followingbar';
import MiniProfile from '@/components/MiniProfile';
import PostList from '@/components/PostList';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import authOptions from './api/auth/[...nextauth]/option';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <main className="w-full flex flex-col lg:flex-row max-w-[600px]">
      <article className="w-full basis-4/5 lg:min-w-[600px]">
        <Followingbar />
        <PostList />
      </article>
      <article className="basis-1/5 ml-4">
        <MiniProfile user={user} />
      </article>
    </main>
  );
}
