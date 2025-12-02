import Badge from '@/components/jsx-icons/badge';

const Care = () => {
  return (
    <section className="relative z-20 flex justify-center bg-white">
      <Badge className="absolute -top-30 right-20 -rotate-[17.7deg]" />
      <div className="flex w-full max-w-[1440px] items-center gap-40 px-20 py-30">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl/[3.5rem] font-bold tracking-[-0.03em] text-[#10202B]">
            Care that Meets You Where You Are
          </h2>
          <p className="text-lg/7 tracking-[-0.01em] text-[#193244]">
            Life can be challenging, but no one should face those challenges{' '}
            <br />
            alone. {`That’s`} why Carevina was created. We support individuals
            navigating behavioral health and life transitions by building <br />
            confidence, practical skills, and hope for the future. <br /> <br />{' '}
            Our team listens first, supports gently, and walks beside every{' '}
            <br />
            person on their path to stability.
          </p>
        </div>
        <div className="h-120 w-140 shrink-0 rounded-lg bg-[#D9D9D9]"></div>
      </div>
    </section>
  );
};

export default Care;
