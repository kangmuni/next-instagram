'use client';

import { ProfileUser } from '@/model/user';
import { FormEvent, useState } from 'react';

import useSWR from 'swr';
import GridSpinner from './GridSpinner';
import UserCard from './UserCard';

export default function UserSearch() {
  const [keyword, setKeyword] = useState('');
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<ProfileUser[]>(`/api/search/${keyword}`);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <section className="w-full max-w-2xl my-4 flex flex-col items-center">
      <form className="w-full mb-4" onSubmit={onSubmit}>
        <input
          className="w-full text-sm p-3 outline-none bg-gray-200 rounded-lg"
          type="text"
          autoFocus
          placeholder="검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
      {error && <p>에러가 발생하였습니다.</p>}
      {isLoading && <GridSpinner />}
      {!isLoading && !error && users?.length === 0 && (
        <p>찾는 사용자가 존재하지 않습니다.</p>
      )}
      <ul className="w-full">
        {users &&
          users.map((user) => (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  );
}
