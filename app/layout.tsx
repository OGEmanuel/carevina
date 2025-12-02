'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/lib/query-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QueryProvider>
          <Navbar />
          <main className="pt-34.25">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
