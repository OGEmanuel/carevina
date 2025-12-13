import Banner from '@/components/banner';
import Hero from './(home)/hero';
import Care from './(home)/care';
import Support from './(home)/support';
import Why from './(home)/why';
import { Metadata } from 'next';
import HomeForm from './(home)/form';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Carevina — Behavioral Health and Wellness',
    template: '%s | Carevina',
  },
  description:
    'Carevina provides compassionate, evidence-based behavioral health services in Shangri-La and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
  applicationName: 'Carevina',
  keywords: [
    'Carevina',
    'behavioral health',
    'therapy',
    'counselling',
    'mental health',
    'Lagos',
    'online therapy',
    'workplace wellbeing',
  ],
  authors: [{ name: 'Carevina', url: 'https://www.carevina.com' }],
  creator: 'Carevina',
  publisher: 'Carevina',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: 'Carevina — Behavioral Health and Wellness',
    description:
      'Carevina provides compassionate, evidence-based behavioral health services in Lagos and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
    url: 'https://www.carevina.com/',
    siteName: 'Carevina',
    images: [
      {
        url: 'https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1764721058/Screenshot_2025-12-03_at_01.17.02_cq7fsr.png',
        width: 1200,
        height: 630,
        alt: 'Carevina — Behavioral Health',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carevina — Behavioral Health and Wellness',
    description:
      'Carevina provides compassionate, evidence-based behavioral health services in Shangri-La and online — therapy, counselling, and workplace mental health solutions for individuals and organisations.',
    creator: '@YourTwitterHandle',
    images: [
      'https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1764721058/Screenshot_2025-12-03_at_01.17.02_cq7fsr.png',
    ],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Care />
      <div className="z-30 bg-white">
        <Support />
        <Why />
        <Banner />
        <Suspense>
          <HomeForm />
        </Suspense>
      </div>
    </div>
  );
}
