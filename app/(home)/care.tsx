import FeatureCard from '@/components/feature-card';
import Badge from '@/components/jsx-icons/badge';

const Care = () => {
  return (
    <section className="relative z-20 flex justify-center bg-white">
      <Badge className="absolute -top-30 right-10 -rotate-[17.7deg] max-md:hidden md:right-20" />
      {/* <Badge
        className="absolute -top-30 right-20 -rotate-[17.7deg] md:hidden"
        width="164"
        height="167.58"
      /> */}
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
      />
    </section>
  );
};

export default Care;
