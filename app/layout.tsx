'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/lib/query-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import 'mapbox-gl/dist/mapbox-gl.css';

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
      <body className={`${inter.variable} flex flex-col antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <Navbar />
            <main className="pt-34.25">{children}</main>
            <Footer />
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
