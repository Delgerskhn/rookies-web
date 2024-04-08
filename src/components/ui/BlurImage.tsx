'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '~/utils/cn';

export const BlurImage = ({ src }: { src: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={src}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        'h-full min-h-[6rem] w-full flex-1 rounded-xl object-cover object-center transition duration-200',
        loaded ? 'blur-none' : 'blur-md',
      )}
      alt="thumbnail"
    />
  );
};
