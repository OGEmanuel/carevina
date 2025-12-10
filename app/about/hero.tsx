import HeroHeader from '@/components/hero';

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1440px] px-5 py-16 md:px-16 md:py-20 lg:px-20">
        <div>
          <h1 className="text-center text-lg/7 font-medium tracking-[-0.01em] text-[#148E91] uppercase">
            About Us
          </h1>
          <HeroHeader
            header={
              <>
                Caring for People. <br /> Supporting Every Journey.
              </>
            }
            description="Carevina was created with one purpose, to bring care, dignity, and support to individuals navigating behavioral and emotional challenges."
            src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765398729/f1f606bd8b3f850ec42f7ef8136bb798b97ddbef_nftvmw.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
