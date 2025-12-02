import Link from 'next/link';
import Phone from './jsx-icons/phone';
import Mail from './jsx-icons/mail';
import Location from './jsx-icons/location';
import Logo from './jsx-icons/logo';

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <address className="flex justify-center bg-[#10202B] py-2 text-white">
        <ul className="flex w-full max-w-[1440px] items-center justify-between gap-10 px-27 tracking-tight not-italic [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:p-2 [&>li>a]:leading-6">
          <li>
            <Link href="tel:+2347048099032">
              <Phone />
              +2347048099032
            </Link>
          </li>
          <li>
            <Link href="mailto:info@carevina.com">
              <Mail />
              Info@carevina.com
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=2+Ayedun+Street,+Olowora,+Lagos+11203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Location />
              2, Ayedun street, Olowora, Lagos 11203
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 leading-6">
            <Mail />
            Mon - Fri: 9:00 - 05:00 / Closed on Weekends
          </li>
        </ul>
      </address>
      <nav className="flex justify-center border-b border-[#F3F4F4] bg-white">
        <div className="flex w-full max-w-[1440px] items-center justify-between px-20 py-4">
          <Link href="/" className="flex items-center gap-1">
            <Logo />
            <div className="flex flex-col text-[#10202B]">
              <p className="text-2xl/[2rem] font-semibold tracking-[-0.03em]">
                Carevina
              </p>
              <p className="text-[7.26px]/[10.96px] font-semibold tracking-[0.20em]">
                BEHAVIORAL HEALTH
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-2">
              <li>
                <Link href={'/'} className="p-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={'/'} className="p-2">
                  Careers
                </Link>
              </li>
            </ul>
            <Link
              href={'/'}
              className="rounded-[2.3125rem] bg-[#56DCDF] px-5 py-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
