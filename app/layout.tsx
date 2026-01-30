'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import QueryProvider from '@/lib/query-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Toaster } from '@/components/ui/sonner';
import { useEffect } from 'react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const IMAGES = [
  {
    url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765381647/12_duhjqh.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565150/025649b3f2f17fa7321a65592f580c028bbb36e3_pftzny.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565164/85d8caffa8349907f02e3f2b954be47e90eceb8c_orkzcr.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565142/25168eed63ef5253defc8a807c66bd3198463420_aaq8n5.jpg',
  },
  {
    url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765404934/35e11be8a0a41877a6b2a4568f7c6b987949d4b9_rzqark.jpg',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    IMAGES.forEach(image => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image.url;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.variable} flex flex-col antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <Navbar />
            <main className="pt-34.25">{children}</main>
            <Footer />
            <Toaster />
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
