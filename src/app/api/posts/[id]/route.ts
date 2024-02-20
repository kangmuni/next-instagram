import { getServerSession } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server';

import { getPost } from '@/service/post';
import authOptions from '../../auth/[...nextauth]/option';

type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  return getPost(context.params.id) //
    .then((data) => NextResponse.json(data));
}
