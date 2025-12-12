'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import Arrow from './jsx-icons/arrow';
import Image from 'next/image';
import { handleScroll } from '@/lib/utils';

const HeroHeader = (props: {
  header: string | React.ReactNode;
  description: string;
  btnLabel?: string;
  src?: string;
  link?: string;
}) => {
  const { header, description, btnLabel, src, link } = props;

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12">
      <div className="flex w-full max-w-180 flex-col items-center gap-4 text-center md:gap-6">
        <h2 className="text-[1.75rem]/9 font-bold tracking-[-0.03em] text-[#10202B] md:text-5xl/[3.5rem]">
          {header}
        </h2>
        <p className="max-w-160 tracking-[-0.01em] text-[#193244] max-md:leading-6 md:text-lg/7">
          {description}
        </p>
      </div>
      {src && (
        <div className="relative h-70 w-full overflow-hidden rounded-lg bg-[#D9D9D9] lg:h-96 xl:h-140">
          <Image
            src={src}
            alt="header"
            fill
            unoptimized
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="size-full object-cover"
          />
        </div>
      )}
      {btnLabel && link && (
        <Button asChild className="w-max px-4! md:px-5!">
          <Link
            onClick={e => handleScroll(e, link.slice(1))}
            href={link ?? '/'}
          >
            {btnLabel}
            <Arrow fill="#10202B" className="rotate-180" size="20" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default HeroHeader;
