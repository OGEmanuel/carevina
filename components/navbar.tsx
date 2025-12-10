'use client';

import Link from 'next/link';
import Phone from './jsx-icons/phone';
import Mail from './jsx-icons/mail';
import Location from './jsx-icons/location';
import Logo from './jsx-icons/logo';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-100 w-full">
      <address className="flex bg-[#10202B] py-2 text-white md:justify-center">
        <ul className="flex w-full max-w-[1440px] px-3 tracking-tight not-italic max-xl:justify-end md:items-center md:gap-10 md:px-16 lg:px-27 xl:justify-between [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:p-2 [&>li>a]:leading-6">
          <li className="max-lg:hidden">
            <Link href="tel:+2347048099032">
              <Phone />
              +2347048099032
            </Link>
          </li>
          <li className="max-sm:hidden">
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
              className="text-nowrap"
            >
              <Location />
              2, Ayedun street, Olowora, Lagos 11203
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 leading-6 text-nowrap max-xl:hidden">
            <Mail />
            Mon - Fri: 9:00 - 05:00 / Closed on Weekends
          </li>
        </ul>
      </address>
      <nav className="flex justify-center border-[#F3F4F4] bg-white sm:border-b">
        <div className="flex w-full max-w-[1440px] items-center justify-between px-5 py-4 md:px-16 lg:px-20">
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
            <ul className="flex items-center gap-2 max-sm:hidden">
              <li>
                <Link href={'/about'} className="p-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={'/careers'} className="p-2">
                  Careers
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              {!open && (
                <Link
                  href={'/contact'}
                  className="rounded-[2.3125rem] bg-[#56DCDF] px-5 py-3"
                >
                  Contact Us
                </Link>
              )}
              <NavbarMobile open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

export const NavbarMobile = (props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { open, setOpen } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="rounded-full border border-[#F3F4F4] p-3.5 sm:hidden">
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </SheetTrigger>
      <SheetContent
        side="top"
        className="mt-[8.6rem] h-[calc(100vh-8.6875rem)] px-5 [&>button]:hidden"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Mobile Menu Navigation</SheetDescription>
        </SheetHeader>
        <ul className="border-t border-[#F3F4F4] px-5 py-4 [&_a]:block [&_a]:py-5 [&_a]:text-[1.75rem]/9 [&_a]:font-bold [&_a]:tracking-[-0.03em] [&_a]:text-[#10202B]">
          <li className="pb-4">
            <Link onClick={handleClick} href={'/about'}>
              About us
            </Link>
          </li>
          <li className="border-y border-dashed border-[#F3F4F4] py-4">
            <Link onClick={handleClick} href={'/careers'}>
              Careers
            </Link>
          </li>
          <li className="pt-4">
            <Link onClick={handleClick} href={'/contact'}>
              Contact us
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
