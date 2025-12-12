import Bullseye from '@/components/jsx-icons/bullseye';
import CheckGuard from '@/components/jsx-icons/check-guard';
import Checklist from '@/components/jsx-icons/checklist';
import Heart from '@/components/jsx-icons/heart';
import HelpingHand from '@/components/jsx-icons/helping-hand';
import Persons from '@/components/jsx-icons/persons';
import Image from 'next/image';

const Why = () => {
  return (
    <section className="flex justify-center bg-[#10202B]">
      <div className="relative flex w-full max-w-[1440px] flex-col gap-20 px-5 pt-54 pb-20 text-white md:gap-30 md:px-16 lg:px-20 lg:py-64 xl:py-30">
        <div className="absolute -top-36 h-80 w-[calc(100%-2.5rem)] overflow-hidden rounded-lg bg-[#D9D9D9] sm:w-140 md:-top-64 md:right-16 md:h-120 lg:-top-60 lg:right-20 xl:-top-40">
          <Image
            src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765399631/dc35d26e4e4db4e2012b90324d2d898d9836122c_ieau1x.jpg"
            alt="hero"
            fill
            unoptimized
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="size-full object-cover"
          />
        </div>
        <div className="flex w-full max-w-160 flex-col gap-5 pt-6 md:gap-6 xl:max-2xl:pt-20">
          <h2 className="text-[1.75rem]/9 font-bold tracking-[-0.03em] md:text-[2.5rem]/12">
            Why Families and Individuals <br className="max-md:hidden" /> Trust
            Carevina
          </h2>
          <p className="tracking-[-0.01em] text-[#F3F4F4] max-md:leading-6 md:text-lg/7">
            Our work is built not only on qualifications but on care,
            compassion, and a <br className="max-md:hidden" /> deep commitment
            to dignity.
          </p>
        </div>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
          <WhyCard
            title="Skilled & Caring Support Team"
            description="Our team is trained, compassionate, and guided by experience. We listen deeply and support without judgment."
          >
            <Heart />
          </WhyCard>
          <WhyCard
            title="Support for Youth & Adults"
            description="We work with individuals across different ages and stages of life, guiding them through every transition with care."
          >
            <Persons />
          </WhyCard>
          <WhyCard
            title="CARF-Aligned Quality & Standards"
            description="Our approach follows CARF principles and standards ensuring safety, professionalism, and quality at every step."
          >
            <CheckGuard />
          </WhyCard>
          <WhyCard
            title="Person-Centered & Respectful"
            description="Every plan is tailored to the individual. We focus on strengths, not labels because every story deserves respect."
          >
            <Bullseye />
          </WhyCard>
          <WhyCard
            title="Practical Skills for Real Life"
            description="We teach skills that improve daily living, from communication and behavior to independence and community life."
          >
            <Checklist />
          </WhyCard>
          <WhyCard
            title="Compassion Before Everything"
            description="We don’t just provide services, we build relationships. Care always comes first, and judgment never has a place here."
          >
            <HelpingHand />
          </WhyCard>
        </div>
      </div>
    </section>
  );
};

export default Why;

const WhyCard = (props: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  const { children, title, description } = props;

  return (
    <div className="flex flex-col gap-3">
      {children}
      <p className="text-xl/7 font-semibold tracking-[-0.03em] text-[#FFFFFF]">
        {title}
      </p>
      <p className="tracking-[-0.01em] text-[#F3F4F4] max-md:leading-6 md:text-lg/7">
        {description}
      </p>
    </div>
  );
};
