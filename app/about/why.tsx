import FeatureCard from '@/components/feature-card';
import ItemsCard from '@/components/items-card';

const Why = () => {
  return (
    <section className="flex flex-col items-center">
      <FeatureCard
        header={<>Why we care at carevina Health</>}
        description={
          <>
            We started Carevina because we believe that every person deserves
            care that honors their strength, their voice, and their potential.
            Many individuals face behavioral and emotional challenges that can
            feel overwhelming, but with the right support, growth becomes
            possible.
          </>
        }
        src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765400149/35aeb19d37c413e28937f71685106cf259703c09_xwbspg.jpg"
      />
      <div className="w-full max-w-[1440px] px-5 pb-20 md:px-16 lg:px-20">
        <div className="grid gap-y-18 md:gap-y-16 lg:grid-cols-2">
          <ItemsCard
            header="Our Mission"
            description={
              <>
                Our mission is to empower individuals to unlock their inner
                strength, regain confidence, and achieve emotional and social
                stability. We provide compassionate, person-centered
                psychosocial rehabilitation that promotes independence,
                wellness, and hope. <br /> <br /> Our aim reflects our
                commitment to fostering emotional resilience, social stability,
                and personal empowerment for every individual we work with.
              </>
            }
            className="border-[#D9D9D9] lg:border-r-[0.5px] lg:pr-10 xl:pr-19"
          />

          <ItemsCard
            header="Our Vision"
            description={
              <>
                Our vision reflects the world we are working toward, a world
                where no one feels defined by their challenges. We believe that
                care can transform lives, and we are committed to building a
                community where people are not only supported, but strengthened.
                <br /> <br /> We envision a future where people thrive beyond
                their diagnosis, equipped with the confidence, skills, and
                resilience to live meaningful, self-directed lives.
              </>
            }
            className="border-[#D9D9D9] lg:border-l-[0.5px] lg:pl-10 xl:pl-19"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
