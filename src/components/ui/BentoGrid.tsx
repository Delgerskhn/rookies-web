import { cn } from '~/utils/cn';
import { BlurImage } from './BlurImage';
import Link from 'next/link';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[28rem] md:grid-cols-3 ', className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  thumbnail,
  href,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail: string;
  icon?: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-slate-900 ',
        className,
      )}
    >
      <BlurImage src={thumbnail} />
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 text-lg font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
        <div className="font-normal text-neutral-600 dark:text-neutral-300">{description}</div>
      </div>
    </Link>
  );
};
