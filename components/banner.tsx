'use client';

import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserever';
import Badge from './jsx-icons/badge';
import { cn } from '@/lib/utils';
import GoldBadge from './jsx-icons/gold-badge';

const Banner = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>(
    undefined,
    0.7,
  );

  return (
    <section ref={ref} className="flex justify-center">
      <div className="flex w-full max-w-237.25 flex-col items-center gap-12 py-20 text-center text-lg/7 tracking-[-0.01em] text-[#193244] max-md:px-5 md:py-30 lg:max-xl:px-12">
        <div className="flex items-center gap-10 text-start max-lg:flex-col max-lg:text-center">
          <p className="w-full max-w-80">
            We follow trusted standards to keep care safe and respectful.
          </p>
          <div className="grid-stack grid will-change-transform">
            <Badge
              className={cn(
                'grid-area-stack transition-[opacity,trasform] duration-500 will-change-transform',
                isVisible && 'scale-[0.8] opacity-0 blur-sm',
              )}
            />
            <GoldBadge
              className={cn(
                'grid-area-stack _blur-sm scale-[0.8] opacity-0 transition-[opacity,transform] duration-500 will-change-transform',
                isVisible && 'blur-out scale-100 opacity-100',
              )}
            />
          </div>
          <p className="w-full max-w-80">
            This reflects our commitment to high-quality behavioral support.
          </p>
        </div>
        <div className="flex w-full max-w-160 flex-col gap-2">
          <h4 className="text-xl/7 font-semibold tracking-[-0.03em] text-[#10202B]">
            Accredited in Maryland
          </h4>
          <p className="text-lg/7 tracking-[-0.03em]">
            Carevina proudly serves individuals and families across Maryland,
            and we are continually growing to reach more communities that need
            compassionate behavioral health support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
