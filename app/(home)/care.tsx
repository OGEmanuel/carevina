'use client';

import FeatureCard from '@/components/feature-card';

const Care = () => {
  return (
    <section className="z-20 flex justify-center bg-white">
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
      />
    </section>
  );
};

export default Care;
