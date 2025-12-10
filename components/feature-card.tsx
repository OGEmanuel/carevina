import Image from 'next/image';

const FeatureCard = (props: {
  header: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
  src: string;
}) => {
  const { header, description, src } = props;
  return (
    <div className="flex w-full max-w-[1440px] items-center gap-8 px-5 py-20 max-xl:flex-col md:gap-16 md:px-16 md:py-30 lg:gap-24 lg:px-20 xl:gap-40">
      <div className="flex flex-col gap-4 md:w-full md:max-w-140 md:gap-8 md:max-xl:self-start">
        <h2 className="text-[1.75rem]/9 font-bold tracking-[-0.03em] text-[#10202B] md:text-5xl/[3.5rem]">
          {header}
        </h2>
        <p className="tracking-[-0.01em] text-[#193244] max-md:leading-6 md:text-lg/7">
          {description}
        </p>
      </div>
      <div className="relative h-70 w-full shrink-0 overflow-hidden rounded-lg bg-[#D9D9D9] sm:h-120 xl:max-w-140">
        <Image
          src={src}
          alt="feature-image"
          fill
          unoptimized
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
