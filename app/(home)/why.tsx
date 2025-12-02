import Bullseye from '@/components/jsx-icons/bullseye';
import CheckGuard from '@/components/jsx-icons/check-guard';
import Checklist from '@/components/jsx-icons/checklist';
import Heart from '@/components/jsx-icons/heart';
import HelpingHand from '@/components/jsx-icons/helping-hand';
import Persons from '@/components/jsx-icons/persons';

const Why = () => {
  return (
    <section className="relative flex justify-center bg-[#10202B]">
      <div className="absolute -top-40 right-20 h-120 w-140 rounded-lg bg-[#D9D9D9]"></div>
      <div className="flex w-full max-w-[1440px] flex-col gap-30 px-20 py-30 text-white">
        <div className="flex w-full max-w-160 flex-col gap-6 pt-6">
          <h2 className="text-[2.5rem]/12 font-bold tracking-[-0.03em]">
            Why Families and Individuals <br /> Trust Carevina
          </h2>
          <p className="text-lg/7 tracking-[-0.01em] text-[#F3F4F4]">
            Our work is built not only on qualifications but on care,
            compassion, and a <br /> deep commitment to dignity.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-10 gap-y-20">
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
      <p className="text-lg/7 tracking-[-0.01em] text-[#F3F4F4]">
        {description}
      </p>
    </div>
  );
};
