import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToWithOffset = (element: HTMLElement, offset: number) => {
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  queryName?: string,
  queryValue?: string,
) => {
  e.preventDefault();

  const url = new URL(window.location.href);
  {
    queryName && queryValue && url.searchParams.set(queryName, queryValue);
  }
  url.hash = id;

  window.history.pushState({}, '', url.toString());

  const el = document.getElementById(id);
  if (el) scrollToWithOffset(el, 120);
};
