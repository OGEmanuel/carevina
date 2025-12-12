'use client';

import FeatureCard from '@/components/feature-card';
import Badge from '@/components/jsx-icons/badge';
import BadgeMobile from '@/components/jsx-icons/badge-mobile';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserever';
import { cn } from '@/lib/utils';
import { useHeightStore } from '@/store/get-height-store';
import { useEffect, useState } from 'react';

const Care = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { height } = useHeightStore();

  const { ref, isVisible } = useIntersectionObserver(undefined, 0.3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        marginTop: `${height}px`,
      }}
      className="z-20 flex justify-center bg-white"
    >
      <FeatureCard
        header={
          <>
            Care that Meets You <br className="md:hidden" /> Where You Are
          </>
        }
        description={
          <>
            Life can be challenging, but no one should face those challenges{' '}
            <br className="max-md:hidden" />
            alone. {`That’s`} why Carevina was created. We support individuals
            navigating behavioral health and life transitions by building{' '}
            <br className="max-md:hidden" />
            confidence, practical skills, and hope for the future. <br /> <br />{' '}
            Our team listens first, supports gently, and walks beside every{' '}
            <br className="max-md:hidden" />
            person on their path to stability.
          </>
        }
        src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765398729/f1f606bd8b3f850ec42f7ef8136bb798b97ddbef_nftvmw.jpg"
        className="relative"
      >
        {isMobile
          ? isVisible && (
              <BadgeMobile
                className={cn(
                  'absolute -top-24 right-7 z-20',
                  isVisible && 'animate-scale-badge',
                )}
              />
            )
          : isVisible && (
              <Badge
                className={cn(
                  'absolute -top-30 right-10 z-10 -rotate-[17.7deg] md:right-20',
                  isVisible && 'animate-scale-badge',
                )}
              />
            )}
      </FeatureCard>
    </section>
  );
};

export default Care;
