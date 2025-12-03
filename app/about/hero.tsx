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
            header="Forem ipsum dolor sit amet, consectetur adipiscing elit."
            description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
