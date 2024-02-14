'use client';
import { SimplePost } from '@/model/post';
import useSWR from 'swr';

export default function PostList() {
  const { data, isLoading } = useSWR<SimplePost[]>('/api/post');

  console.log(data);

  return (
    <section>
      <p>PostList</p>
    </section>
  );
}
