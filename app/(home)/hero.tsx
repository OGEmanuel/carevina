import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1440px]">
        <div className="relative h-175 w-full">
          <span className="custom-gradient absolute bottom-0 z-10 h-140 w-full"></span>
          <Image
            src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1764681938/hero_roiq8n.jpg"
            alt="hero"
            width={0}
            height={0}
            placeholder="blur"
            loading="eager"
            fill
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            className="size-full object-cover"
          />
          <div className="absolute bottom-10 z-10 flex w-full max-w-7xl gap-4 text-white max-xl:flex-col max-md:px-5 max-md:py-10 md:bottom-20 md:left-1/2 md:-translate-x-1/2 md:gap-16 md:max-lg:px-16 lg:gap-25 lg:max-xl:px-20">
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
                <Link href={'/'}>
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
