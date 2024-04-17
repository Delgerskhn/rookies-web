'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import { defaultLocale } from '~/locales/locale';
import { Locale } from '~/locales/getDictionary';
import Image from 'next/image';

const ToggleLocale = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const path = usePathname();
  const { replace } = useRouter();

  const currentLocale: Locale = (path.split('/')[1] as Locale) ?? defaultLocale;

  const handleOnClick = () => {
    const locale = currentLocale == 'en' ? 'mn' : 'en';
    replace(
      `/${locale}/${path
        .split('/')
        .filter((s) => s != currentLocale)
        .join('/')}`,
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={handleOnClick}
      className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {mounted ? (
        currentLocale === 'mn' ? (
          <Image src="/en.png" height={28} width={28} alt="en"></Image>
        ) : (
          <Image src="/mn.png" height={28} width={28} alt="mn"></Image>
        )
      ) : (
        <div className="h-5 w-5"></div>
      )}
    </button>
  );
};

export default ToggleLocale;
