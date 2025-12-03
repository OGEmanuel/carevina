import HeroHeader from '@/components/hero';
import ItemsCard from '@/components/items-card';
import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Support = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-16 px-5 pt-10 pb-60 md:px-16 md:pt-16 md:pb-70 lg:px-21 lg:pt-20">
        <HeroHeader
          header="Support That Builds Strength, Confidence & Stability"
          description="Every service begins with care and grows into something stronger: independence, hope, and a life that feels truly yours."
        />
        <div className="grid gap-y-18 md:gap-y-16 lg:grid-cols-2">
          <ItemsCard
            header="Life Skills & Living Support"
            description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
            className="border-[#D9D9D9] lg:border-r-[0.5px] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Social & Emotional Support"
            description="Relationships can be difficult but no one should feel alone.
We offer guidance in building healthy connections, managing emotions, navigating conflict, and finding confidence in social settings."
            className="border-[#D9D9D9] lg:border-l-[0.5px] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Vocational & Employment Support"
            description="Everyone deserves the chance to contribute their strengths.
We assist with job readiness, resume building, interview preparation, workplace behaviors, and ongoing encouragement toward career growth."
            className="border-[#D9D9D9] lg:border-r-[0.5px] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Educational & Skill-Building Support"
            description="Learning looks different for everyone. We provide academic assistance, tutoring, skill development, and structured guidance — helping individuals grow at their pace and reach their goals."
            className="border-[#D9D9D9] lg:border-l-[0.5px] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Health, Wellness & Community Resources"
            description="Well-being includes the body, mind, and environment. We offer guidance on healthy routines, wellness education, and access to community resources for transportation, housing, food assistance, and more."
            className="border-[#D9D9D9] lg:border-r-[0.5px] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Family, Peer & Crisis Support"
            description="Healing often happens in community. We involve natural supports, family connections, peer mentorship, and structured safety planning for individuals facing behavioral or emotional challenges."
            className="border-[#D9D9D9] lg:border-l-[0.5px] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link href={'/'}>
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
        </div>
      </div>
    </section>
  );
};

export default Support;
