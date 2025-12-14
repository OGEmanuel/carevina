'use client';

import HeroHeader from '@/components/hero';
import ItemsCard from '@/components/items-card';
import Arrow from '@/components/jsx-icons/arrow';
import { Button } from '@/components/ui/button';
import { cn, handleScroll } from '@/lib/utils';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Separator } from '@/components/ui/separator';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserever';

gsap.registerPlugin(ScrollTrigger);

const Support = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>(
    undefined,
    0.25,
  );

  useGSAP(() => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) return;

    const items = gsap.utils.toArray<HTMLElement>('.grid-item');

    ScrollTrigger.create({
      trigger: '.container',
      start: 'top 25%',
      end: 'bottom 60%',
      pin: '.separator',
      pinSpacing: false,

      snap: {
        snapTo: 1 / (items.length - 1),
        duration: { min: 0.25, max: 0.6 },
        delay: 0.05,
        ease: 'power2.out',
      },
    });

    items.forEach(item => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 65%',
            end: 'top 20%',
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
        },
      });
    });
  });

  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-[1440px] flex-col gap-16 px-5 pt-10 pb-60 md:px-16 md:pt-16 md:pb-70 lg:gap-51.25 lg:px-21 lg:pt-20">
        <HeroHeader
          header="Support That Builds Strength, Confidence & Stability"
          description="Every service begins with care and grows into something stronger: independence, hope, and a life that feels truly yours."
          src='https://i.ibb.co/QV4q8Xm/72bfe4327327068d404b82589370485216d64125.jpg" alt="72bfe4327327068d404b82589370485216d64125'
        />

        {/* Mobile Only */}
        <div className="flex flex-col gap-18 md:gap-16 lg:hidden">
          <ItemsCard
            header="Life Skills & Living Support"
            description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
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

        {/* Desktop Only */}
        <div
          ref={ref}
          className="relative container flex flex-col gap-51.25 max-lg:hidden"
        >
          <Separator
            orientation="vertical"
            className={cn(
              'separator absolute left-1/2 h-66! -translate-x-1/2 border-[#D9D9D9] opacity-0 transition-opacity',
              isVisible && 'opacity-100',
            )}
          />
          <div className="grid-item flex justify-between">
            <ItemsCard
              header="Life Skills & Living Support"
              description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
              className="pr-10 xl:pr-19"
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
              className="pl-10 xl:pl-19"
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
          </div>
          <div className="grid-item flex justify-between">
            <ItemsCard
              header="Vocational & Employment Support"
              description="Everyone deserves the chance to contribute their strengths.
We assist with job readiness, resume building, interview preparation, workplace behaviors, and ongoing encouragement toward career growth."
              className="pr-10 xl:pr-19"
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
              className="pl-10 xl:pl-19"
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
          </div>
          <div className="grid-item flex justify-between">
            <ItemsCard
              header="Health, Wellness & Community Resources"
              description="Well-being includes the body, mind, and environment. We offer guidance on healthy routines, wellness education, and access to community resources for transportation, housing, food assistance, and more."
              className="pr-10 xl:pr-19"
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
              className="pl-10 xl:pl-19"
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
      </div>
    </section>
  );
};

export default Support;

const ScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const sections = [
        section1Ref.current,
        section2Ref.current,
        section3Ref.current,
      ];

      // Pin the entire container and separator
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${window.innerHeight * 3}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
      });

      // Animate each section
      sections.forEach((section, index) => {
        const isLast = index === sections.length - 1;

        // Fade in animation
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: container,
              start: `top+=${window.innerHeight * index} top`,
              end: `top+=${window.innerHeight * (index + 0.3)} top`,
              scrub: 1,
            },
          },
        );

        // Fade out animation (skip for last section)
        if (!isLast) {
          gsap.to(section, {
            opacity: 0,
            y: -50,
            scrollTrigger: {
              trigger: container,
              start: `top+=${window.innerHeight * (index + 0.7)} top`,
              end: `top+=${window.innerHeight * (index + 1)} top`,
              scrub: 1,
            },
          });
        }
      });

      // Snap scrolling
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${window.innerHeight * 3}`,
        snap: {
          snapTo: [0, 0.33, 0.66, 1],
          duration: 0.5,
          ease: 'power2.inOut',
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="bg-gray-50">
      {/* Spacer before */}
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Scroll Down</h1>
          <p className="text-gray-600">See the pinned animation in action</p>
        </div>
      </div>

      {/* Main animated section */}
      <div
        ref={containerRef}
        className="relative container mx-auto flex h-screen flex-col gap-y-18 overflow-hidden"
      >
        <Separator
          ref={separatorRef}
          orientation="vertical"
          className="absolute left-1/2 z-10 h-full -translate-x-1/2 border-[#D9D9D9]"
        />

        <div className="absolute inset-0 flex items-center">
          <div ref={section1Ref} className="w-full opacity-0">
            <div className="flex justify-between px-8">
              <ItemsCard
                header="Life Skills & Living Support"
                description="We help individuals build confidence in everyday tasks such as planning routines, managing time, communication, personal care, and independent living. Our goal is not just to teach but to empower people to live life with more ease and self-trust."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
              <ItemsCard
                header="Social & Emotional Support"
                description="Relationships can be difficult but no one should feel alone. We offer guidance in building healthy connections, managing emotions, navigating conflict, and finding confidence in social settings."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div ref={section2Ref} className="w-full opacity-0">
            <div className="flex justify-between px-8">
              <ItemsCard
                header="Vocational & Employment Support"
                description="Everyone deserves the chance to contribute their strengths. We assist with job readiness, resume building, interview preparation, workplace behaviors, and ongoing encouragement toward career growth."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
              <ItemsCard
                header="Educational & Skill-Building Support"
                description="Learning looks different for everyone. We provide academic assistance, tutoring, skill development, and structured guidance — helping individuals grow at their pace and reach their goals."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div ref={section3Ref} className="w-full opacity-0">
            <div className="flex justify-between px-8">
              <ItemsCard
                header="Health, Wellness & Community Resources"
                description="Well-being includes the body, mind, and environment. We offer guidance on healthy routines, wellness education, and access to community resources for transportation, housing, food assistance, and more."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
              <ItemsCard
                header="Family, Peer & Crisis Support"
                description="Healing often happens in community. We involve natural supports, family connections, peer mentorship, and structured safety planning for individuals facing behavioral or emotional challenges."
                className="w-[45%] border-[#D9D9D9]"
              >
                <Button className="w-max bg-[#18191A0D] hover:bg-[#18191A]/10">
                  Make enquiry
                  <Arrow fill="#10202B" className="rotate-180" size="20" />
                </Button>
              </ItemsCard>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer after */}
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">Animation Complete</h2>
          <p className="text-gray-600">Continue scrolling</p>
        </div>
      </div>
    </div>
  );
};
