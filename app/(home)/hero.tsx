'use client';

import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { handleScroll } from '@/lib/utils';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative h-140 w-full md:h-175">
        <div className="animate-fade-small md:animate-fade absolute size-full bg-cover bg-center bg-no-repeat"></div>
        <span className="custom-gradient absolute bottom-0 z-10 h-4/5 w-full"></span>
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
