'use client';

import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { cn, handleScroll } from '@/lib/utils';
import { useHeightStore } from '@/store/get-height-store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const IMAGES = [
  'https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765381647/12_duhjqh.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565150/025649b3f2f17fa7321a65592f580c028bbb36e3_pftzny.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565164/85d8caffa8349907f02e3f2b954be47e90eceb8c_orkzcr.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565142/25168eed63ef5253defc8a807c66bd3198463420_aaq8n5.jpg',
];

const IMAGESmall = [
  'https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765404934/35e11be8a0a41877a6b2a4568f7c6b987949d4b9_rzqark.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565150/025649b3f2f17fa7321a65592f580c028bbb36e3_pftzny.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565164/85d8caffa8349907f02e3f2b954be47e90eceb8c_orkzcr.jpg',
  'https://res.cloudinary.com/dl56ef7sx/image/upload/v1765565142/25168eed63ef5253defc8a807c66bd3198463420_aaq8n5.jpg',
];

const Hero = () => {
  const [url, setUrl] = useState(IMAGES[0]);
  const [urlSmall, setUrlSmall] = useState(IMAGESmall[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUrl(prev => {
        let next = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        while (next === prev) {
          next = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        }
        return next;
      });

      setUrlSmall(prev => {
        let next = IMAGESmall[Math.floor(Math.random() * IMAGESmall.length)];
        while (next === prev) {
          next = IMAGESmall[Math.floor(Math.random() * IMAGESmall.length)];
        }
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="relative h-140 w-full md:h-175">
        <span className="custom-gradient absolute bottom-0 z-10 h-4/5 w-full"></span>
        <Image
          src={url}
          alt="hero"
          fill
          unoptimized
          placeholder="blur"
          loading="eager"
          sizes="(max-width: 1200px) 100vw, 1200px"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className={cn(
            'animate-scale fade-image size-full object-cover max-md:hidden',
          )}
        />
        <Image
          src={urlSmall}
          alt="hero"
          fill
          unoptimized
          placeholder="blur"
          loading="eager"
          sizes="(max-width: 1200px) 100vw, 1200px"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="animate-scale size-full object-cover md:hidden"
        />
        <div className="absolute bottom-10 z-10 flex w-full max-w-7xl gap-4 text-white max-xl:flex-col max-md:px-5 max-md:py-10 md:bottom-20 md:left-1/2 md:-translate-x-1/2 md:max-lg:px-16 lg:max-xl:px-20 xl:gap-25">
          <h1 className="text-[2rem]/10 font-bold tracking-[-0.03em] max-md:w-full max-md:max-w-160 md:pr-20 md:text-[4rem]/[4.5rem]">
            Empowering Lives. <br className="hidden sm:block xl:hidden" />{' '}
            Inspiring Growth. <br className="hidden sm:block xl:hidden" />{' '}
            Creating Stability.
          </h1>
          <div className="flex flex-col gap-7 max-xl:w-full max-xl:max-w-135 md:pt-3">
            <p className="tracking-[-0.01em] max-md:leading-6 md:text-xl/7">
              At Carevina, we believe that care changes everything. We provide
              compassionate behavioral health support for individuals who
              deserve to feel seen, heard, and valued.{' '}
            </p>
            <Button asChild className="w-max px-4! md:px-5!">
              <Link
                href={'#home-form'}
                onClick={e => handleScroll(e, 'home-form')}
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
