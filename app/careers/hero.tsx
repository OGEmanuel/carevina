import HeroHeader from '@/components/hero';

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1440px] px-5 py-16 md:px-16 md:py-20 lg:px-20">
        <div>
          <h1 className="text-center text-lg/7 font-medium tracking-[-0.01em] text-[#148E91] uppercase">
            CAREERS
          </h1>
          <HeroHeader
            header="Join a team that cares and makes a real impact"
            description="We are searching for caring and committed individuals who want to support others with respect and compassion. If you believe in meaningful service, this is the place for you."
            btnLabel="Apply as a Professional"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
