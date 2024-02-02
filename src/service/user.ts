import { client } from './sanity';

type OAuthUser = {
  id: string;
  username: string;
  email: string;
  name: string;
  image?: string | null;
};

export default function addUser({
  id,
  username,
  email,
  name,
  image,
}: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    email,
    name,
    image,
    following: [],
    follower: [],
    bookmarks: [],
  });
}

export async function getUserByUsername(username: string) {
  return client.fetch();
}
