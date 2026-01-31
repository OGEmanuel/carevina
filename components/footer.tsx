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
    <footer className="z-30 flex justify-center bg-[#060B0F]">
      <div className="flex w-full max-w-[1440px] flex-col gap-20 px-5 pt-10 pb-8 md:px-16 md:pt-16 lg:px-20">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="flex items-start justify-between">
            <div className="flex w-full max-w-120 flex-col gap-6 md:gap-4">
              <div className="flex items-center gap-1.5">
                <Logo />
                <LogoText />
              </div>
              <p className="leading-6 tracking-[-0.01em] text-[#D9D9D9] md:text-lg/7">
                We provides compassionate behavioral health support that helps
                individuals grow with confidence and stability.
              </p>
            </div>
            <button
              onClick={handleScrollToTop}
              className="flex cursor-pointer items-center gap-2 leading-7 tracking-[-0.01em] text-[#D9D9D9]"
            >
              <span className="max-md:hidden">SCROLL TO TOP</span>
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
                <Link href={'mailto:info@carevinahealth.com'}>
                  Info@carevinahealth.com
                </Link>
              </li>
              <li className="pt-4">
                <Link href={'tel:(301) 259-1535'}>(301) 259-1535</Link>
              </li>
            </ul>
            <ul className="leading-6 text-[#FFFFFF80]">
              VISIT
              <li className="text-lg/7 tracking-[-0.01em] text-[#F3F4F4]">
                46940 S Shangri-La Drive Suite 100-13 Lexington Park, 20653 MD
              </li>
              <li className="pt-4">
                <Link
                  href="https://www.google.com/maps/place/46940+S+Shangri-La+Dr+100+13,+Lexington+Park,+MD+20653,+USA/@38.2639352,-76.458025,17z/data=!3m1!4b1!4m5!3m4!1s0x89b9df5f9a432307:0x8483df5876098f5d!8m2!3d38.2639352!4d-76.4554501?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
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
            <Link
              target="_blank"
              href={'https://emanueldev-v2.vercel.app/'}
              className="text-white underline"
            >
              Emmanuel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
