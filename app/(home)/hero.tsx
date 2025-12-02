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
          <div className="absolute bottom-20 left-1/2 z-10 flex w-full max-w-7xl -translate-x-1/2 gap-25 text-white">
            <h1 className="pr-20 text-[4rem]/[4.5rem] font-bold tracking-[-0.03em]">
              Empowering Lives. Inspiring Growth. Creating Stability.
            </h1>
            <div className="flex flex-col gap-7 pt-3">
              <p className="text-xl/7 tracking-[-0.01em]">
                At Carevina, we believe that care changes everything. We provide
                compassionate behavioral health support for individuals who
                deserve to feel seen, heard, and valued.{' '}
              </p>
              <Button asChild className="w-max px-5!">
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
