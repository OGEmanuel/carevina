import Link from 'next/link';
import Arrow from './jsx-icons/arrow';
import Logo from './jsx-icons/logo';
import LogoText from './jsx-icons/logo-text';

const Footer = () => {
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex justify-center bg-[#060B0F]">
      <div className="flex w-full max-w-[1440px] flex-col gap-20 px-5 pt-10 pb-8 md:px-16 md:pt-16 lg:px-20">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="flex items-start justify-between">
            <div className="flex w-full max-w-120 flex-col gap-6 md:gap-4">
              <div className="flex items-center gap-1.5">
                <Logo />
                <LogoText />
              </div>
              <p className="leading-6 tracking-[-0.01em] text-[#D9D9D9] md:text-lg/7">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. <br />{' '}
                Nunc vulputate libero et velit interdum, ac aliquet <br /> odio
                mattis.
              </p>
            </div>
            <button
              onClick={handleScrollToTop}
              className="flex cursor-pointer items-center gap-2 leading-7 tracking-[-0.01em] text-[#D9D9D9]"
            >
              <span className="max-md:hidden">SROLL TO TOP</span>
              <Arrow />
            </button>
          </div>
          <hr className="border-[0.75px] border-[#FFFFFF33]" />
          <div className="flex max-lg:gap-8 max-md:flex-col md:justify-between md:max-lg:flex-wrap [&>ul>li]:first:pt-5 [&>ul>li>a]:text-lg [&>ul>li>a]:leading-7 [&>ul>li>a]:text-[#F3F4F4]">
            <ul className="leading-6 text-[#FFFFFF80]">
              COMPANY
              <li>
                <Link href={'/about'}>About Us</Link>
              </li>
              <li className="pt-4">
                <Link href={'/careers'}>Careers</Link>
              </li>
            </ul>
            <ul className="leading-6 text-[#FFFFFF80]">
              FOLLOW US
              <li>
                <Link href={'/'}>Instagram</Link>
              </li>
              <li className="py-4">
                <Link href={'/'}>LinkedIn</Link>
              </li>
              <li>
                <Link href={'/'}>Facebook</Link>
              </li>
            </ul>
            <ul className="leading-6 text-[#FFFFFF80]">
              CONTACT
              <li>
                <Link href={'mailto:info@carevina.com'}>
                  Info@carevinahealth@gmail.com
                </Link>
              </li>
              <li className="pt-4">
                <Link href={'tel:+2347048099032'}>+2347048099032</Link>
              </li>
            </ul>
            <ul className="leading-6 text-[#FFFFFF80]">
              VISIT
              <li className="text-lg/7 tracking-[-0.01em] text-[#F3F4F4]">
                2, Ayedun street, Olowora, Lagos 11203
              </li>
              <li className="pt-4">
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=2+Ayedun+Street,+Olowora,+Lagos+11203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium underline"
                >
                  View in map
                  <Arrow className="rotate-45" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex text-[#828587] max-md:flex-col max-md:gap-6 md:items-center md:justify-between">
          <p className="leading-7 tracking-[-0.01em]">
            © {year} Carevina Behavioral Health Inc. | All Right Reserved
          </p>
          <p className="leading-7 tracking-[-0.01em]">
            Built by{' '}
            <Link href={'/'} className="text-white underline">
              Emmanuel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
