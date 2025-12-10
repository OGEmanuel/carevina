import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import Arrow from './jsx-icons/arrow';

const ItemsCard = (props: {
  header: string;
  description: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) => {
  const { header, description, className, children } = props;

  return (
    <div
      className={cn(
        'flex flex-col gap-5 sm:max-lg:max-w-140 md:gap-6',
        className,
      )}
    >
      <h3 className="text-2xl/8 font-bold tracking-[-0.03em] text-[#10202B] md:text-[2rem]/12">
        {header}
      </h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default ItemsCard;
