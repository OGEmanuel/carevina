import Badge from './jsx-icons/badge';

const Banner = () => {
  return (
    <section className="flex justify-center">
      <div className="flex w-full max-w-237.25 flex-col items-center gap-12 py-30 text-center text-lg/7 tracking-[-0.01em] text-[#193244]">
        <div className="flex items-center gap-10 text-start">
          <p>We follow trusted standards to keep care safe and respectful.</p>
          <Badge />
          <p>
            This reflects our commitment to high-quality behavioral support.
          </p>
        </div>
        <div className="flex max-w-160 flex-col gap-2">
          <h4 className="text-xl/7 font-semibold tracking-[-0.03em] text-[#10202B]">
            Accredited in Maryland
          </h4>
          <p>
            Carevina proudly serves individuals and families across Maryland,
            and we are continually growing to reach more communities that need
            compassionate behavioral health support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
