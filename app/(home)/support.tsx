'use client';

import HeroHeader from '@/components/hero';
import ItemsCard from '@/components/items-card';
import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { handleScroll } from '@/lib/utils';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Separator } from '@/components/ui/separator';

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
  useGSAP(() => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) return;

    ScrollTrigger.create({
      trigger: '.container',
      start: 'top 25%',
      end: 'bottom 60%',
      pin: '.separator',
      pinSpacing: false,
    });

    gsap.utils.toArray('.grid-item').forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 65%',
            end: 'top 40%',
            scrub: true,
          },
        },
      );

      gsap.to(item, {
        opacity: 0,
        y: -40,
        scrollTrigger: {
          trigger: item,
          start: 'top 20%',
          end: 'top -25%',
          scrub: true,
        },
      });
    });
  });

  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-16 px-5 pt-10 pb-60 md:px-16 md:pt-16 md:pb-70 lg:px-21 lg:pt-20">
        <HeroHeader
          header="Support That Builds Strength, Confidence & Stability"
          description="Every service begins with care and grows into something stronger: independence, hope, and a life that feels truly yours."
          src='https://i.ibb.co/QV4q8Xm/72bfe4327327068d404b82589370485216d64125.jpg" alt="72bfe4327327068d404b82589370485216d64125'
        />
        <div className="relative container grid gap-y-18 md:gap-y-16 lg:grid-cols-2 lg:gap-y-36">
          <Separator
            orientation="vertical"
            className="separator absolute left-1/2 h-66! -translate-x-1/2 border-[#D9D9D9] max-lg:hidden"
          />
          <ItemsCard
            header="Life Skills & Living Support"
            description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
            className="border-[#D9D9D9] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e => {
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'life-skills-and-living-support',
                  );
                }}
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Social & Emotional Support"
            description="Relationships can be difficult but no one should feel alone.
We offer guidance in building healthy connections, managing emotions, navigating conflict, and finding confidence in social settings."
            className="border-[#D9D9D9] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e =>
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'social-and-emotional-support',
                  )
                }
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Vocational & Employment Support"
            description="Everyone deserves the chance to contribute their strengths.
We assist with job readiness, resume building, interview preparation, workplace behaviors, and ongoing encouragement toward career growth."
            className="grid-item border-[#D9D9D9] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e =>
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'vocational-and-employment-support',
                  )
                }
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Educational & Skill-Building Support"
            description="Learning looks different for everyone. We provide academic assistance, tutoring, skill development, and structured guidance — helping individuals grow at their pace and reach their goals."
            className="grid-item border-[#D9D9D9] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e =>
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'educational-and-skill-building-support',
                  )
                }
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Health, Wellness & Community Resources"
            description="Well-being includes the body, mind, and environment. We offer guidance on healthy routines, wellness education, and access to community resources for transportation, housing, food assistance, and more."
            className="grid-item border-[#D9D9D9] lg:pr-10 xl:pr-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e =>
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'health-wellness-and-community-resources',
                  )
                }
              >
                Make enquiry
                <Arrow fill="#10202B" className="rotate-180" size="20" />
              </Link>
            </Button>
          </ItemsCard>
          <ItemsCard
            header="Family, Peer & Crisis Support"
            description="Healing often happens in community. We involve natural supports, family connections, peer mentorship, and structured safety planning for individuals facing behavioral or emotional challenges."
            className="grid-item border-[#D9D9D9] lg:pl-10 xl:pl-19"
          >
            <Button
              asChild
              className="w-max bg-[#18191A0D] px-5! hover:bg-[#18191A0D]/90"
            >
              <Link
                href={'#home-form'}
                onClick={e =>
                  handleScroll(
                    e,
                    'home-form',
                    'services',
                    'family-peer-and-crisis-support',
                  )
                }
              >
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
