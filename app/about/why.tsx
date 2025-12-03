import FeatureCard from '@/components/feature-card';
import ItemsCard from '@/components/items-card';

const Why = () => {
  return (
    <section className="flex flex-col justify-center">
      <FeatureCard
        header={<>Why we care at carevina Health</>}
        description={
          <>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </>
        }
      />
      <div className="w-full max-w-[1440px] px-5 pb-20 md:px-16 lg:px-20">
        <div className="grid gap-y-18 md:gap-y-16 lg:grid-cols-2">
          <ItemsCard
            header="Our Mission"
            description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            className="border-[#D9D9D9] lg:border-r-[0.5px] lg:pr-10 xl:pr-19"
          />

          <ItemsCard
            header="Our Vision"
            description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            className="border-[#D9D9D9] lg:border-l-[0.5px] lg:pl-10 xl:pl-19"
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
