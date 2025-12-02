import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Support = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-16 px-21 py-20 pb-70">
        <div className="flex flex-col items-center gap-12">
          <div className="flex w-full max-w-180 flex-col items-center gap-6 text-center">
            <h2 className="text-5xl/[3.5rem] font-bold tracking-[-0.03em] text-[#10202B]">
              Support That Builds Strength, Confidence & Stability
            </h2>
            <p className="max-w-160 text-lg/7 tracking-[-0.01em] text-[#193244]">
              Every service begins with care and grows into something stronger:
              independence, hope, and a life that feels truly yours.
            </p>
          </div>
          <div className="h-140 w-full rounded-lg bg-[#D9D9D9]"></div>
        </div>
        <div className="grid grid-cols-2 gap-y-16">
          <SupportCard
            header="Life Skills & Living Support"
            description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
            className="border-r-[0.5px] border-[#D9D9D9] pr-19"
          />
          <SupportCard
            header="Social & Emotional Support"
            description="Relationships can be difficult but no one should feel alone.
We offer guidance in building healthy connections, managing emotions, navigating conflict, and finding confidence in social settings."
            className="border-l-[0.5px] border-[#D9D9D9] pl-19"
          />
          <SupportCard
            header="Vocational & Employment Support"
            description="Everyone deserves the chance to contribute their strengths.
We assist with job readiness, resume building, interview preparation, workplace behaviors, and ongoing encouragement toward career growth."
            className="border-r-[0.5px] border-[#D9D9D9] pr-19"
          />
          <SupportCard
            header="Educational & Skill-Building Support"
            description="Learning looks different for everyone. We provide academic assistance, tutoring, skill development, and structured guidance — helping individuals grow at their pace and reach their goals."
            className="border-l-[0.5px] border-[#D9D9D9] pl-19"
          />
          <SupportCard
            header="Health, Wellness & Community Resources"
            description="Well-being includes the body, mind, and environment. We offer guidance on healthy routines, wellness education, and access to community resources for transportation, housing, food assistance, and more."
            className="border-r-[0.5px] border-[#D9D9D9] pr-19"
          />
          <SupportCard
            header="Family, Peer & Crisis Support"
            description="Healing often happens in community. We involve natural supports, family connections, peer mentorship, and structured safety planning for individuals facing behavioral or emotional challenges."
            className="border-l-[0.5px] border-[#D9D9D9] pl-19"
          />
        </div>
      </div>
    </section>
  );
};

export default Support;

const SupportCard = (props: {
  header: string;
  description: string;
  className?: string;
}) => {
  const { header, description, className } = props;

  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <h3 className="text-[2rem]/12 font-bold tracking-[-0.03em] text-[#10202B]">
        {header}
      </h3>
      <p>{description}</p>
      <Button
        asChild
        className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
      >
        <Link href={'/'}>
          Make enquiry
          <Arrow fill="#10202B" className="rotate-180" size="20" />
        </Link>
      </Button>
    </div>
  );
};
