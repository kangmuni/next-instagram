import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.css';

import Sidebar from '@/components/Sidebar';
import AuthContext from '@/context/AuthContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Instagram',
    template: 'Instagram | %s',
  },
  description: 'Instagram Photos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="flex flex-col w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <div className="flex min-h-fit">
            <Sidebar />
            <main className="basis-11/12 m-9 max-w-screen-xl mx-auto">
              <SWRConfigContext>{children}</SWRConfigContext>
            </main>
          </div>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
