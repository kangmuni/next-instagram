import Signin from '@/components/Signin';

import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Signup or Login to Instagram',
};

type Props = { searchParams: { callbackUrl: string } };

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="mt-[30%] flex justify-center">
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}
