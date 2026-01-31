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
import { useEffect, useRef, useState } from 'react';
import LogoText from './jsx-icons/logo-text';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-100 w-full">
      <AddressCarousel />
      <address className="flex bg-[#10202B] py-2 text-white max-lg:hidden md:justify-center">
        <AddressList />
      </address>
      <nav className="flex justify-center border-[#F3F4F4] bg-white sm:border-b">
        <div className="flex w-full max-w-[1440px] items-center justify-between px-5 py-4 md:px-16 lg:px-20">
          <Link href="/" className="flex items-center gap-1.5">
            <Logo />
            <LogoText fill={'#10202B'} />
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

const AddressList = (props: {
  className?: string;
  ref?: React.Ref<HTMLUListElement>;
}) => {
  const { className, ref } = props;
  return (
    <ul
      ref={ref}
      className={cn(
        'flex w-full max-w-[1440px] items-center gap-10 px-3 tracking-tight not-italic md:px-16 lg:justify-center lg:px-27 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:p-2 [&>li>a]:leading-6',
        className,
      )}
    >
      <li>
        <Link href="tel:(301) 259-1535" className="text-nowrap">
          <Phone />
          (301) 259-1535
        </Link>
      </li>
      <li>
        <Link href="mailto:Info@carevinahealth.com">
          <Mail />
          Info@carevinahealth.com
        </Link>
      </li>
      <li>
        <Link
          href="https://www.google.com/maps/place/46940+S+Shangri-La+Dr+100+13,+Lexington+Park,+MD+20653,+USA/@38.2639352,-76.458025,17z/data=!3m1!4b1!4m5!3m4!1s0x89b9df5f9a432307:0x8483df5876098f5d!8m2!3d38.2639352!4d-76.4554501?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap"
        >
          <Location />
          46940 S Shangri-La Drive Suite 100-13 Lexington Park, 20653 MD
        </Link>
      </li>
    </ul>
  );
};

const AddressCarousel = () => {
  const scrollersRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLUListElement>(null);

  const addAnimation = () => {
    if (scrollersRef.current) {
      scrollersRef.current.setAttribute('data-animated', 'true');
      if (scrollerInnerRef.current) {
        const scrollerContent = Array.from(scrollerInnerRef.current.children);

        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLDivElement).setAttribute(
            'aria-hidden',
            'true',
          );
          scrollerInnerRef.current?.appendChild(duplicatedItem);
        });
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (scrollerInnerRef.current)
        scrollerInnerRef.current.classList.add('animate-scroll');
      addAnimation();
    }
  }, []);

  return (
    <address
      ref={scrollersRef}
      className="scroller flex bg-[#10202B] py-2 text-white lg:hidden"
    >
      <AddressList ref={scrollerInnerRef} className="scroller__inner" />
    </address>
  );
};
