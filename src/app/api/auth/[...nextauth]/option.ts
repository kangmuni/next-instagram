import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],

  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email) {
        return false;
      }
      addUser({
        id,
        name: email.split('@')[0] || '',
        image,
        email,
        username: email.split('@')[0] || '',
      });
      return true;
    },

    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          name: user.email?.split('@')[0] || '',
          username: user.email?.split('@')[0] || '',
        };
      }

      return session;
    },
  },

  pages: {
    signIn: '/auth/signin',
  },
};

export default authOptions;
