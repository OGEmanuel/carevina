'use client';

import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { handleScroll } from '@/lib/utils';
import { useHeightStore } from '@/store/get-height-store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { height, setHeight } = useHeightStore();

  useEffect(() => {
    if (sectionRef.current) {
      setHeight(sectionRef.current.clientHeight);
    }
  }, [sectionRef.current]);

  return (
    <section ref={sectionRef} className="fixed w-full">
      <div className="relative h-175 w-full">
        <span className="custom-gradient absolute bottom-0 z-10 h-140 w-full"></span>
        <Image
          src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765381647/12_duhjqh.jpg"
          alt="hero"
          fill
          unoptimized
          placeholder="blur"
          loading="eager"
          sizes="(max-width: 1200px) 100vw, 1200px"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          className="size-full object-cover max-md:hidden"
        />
        <Image
          src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765404934/35e11be8a0a41877a6b2a4568f7c6b987949d4b9_rzqark.jpg"
          alt="hero"
          fill
          unoptimized
          placeholder="blur"
          loading="eager"
          sizes="(max-width: 1200px) 100vw, 1200px"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="size-full object-cover md:hidden"
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
