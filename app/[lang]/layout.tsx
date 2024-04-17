import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import { Analytics } from '@vercel/analytics/react';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import { Locale, getDictionary } from '~/locales/getDictionary';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });
import { headerData } from '~/shared/data';
import { IconBrandInstagram, IconBrandFacebook, IconBrandGithub } from '@tabler/icons-react';

export interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default async function RootLayout({ children, params: { lang } }: LayoutProps) {
  const { contact } = await getDictionary(lang);

  return (
    <html lang={lang} className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          {/* <Announcement /> */}
          <Header
            headerData={{
              links: [],
              actions: [
                {
                  text: contact.title,
                  href: '#contact',
                  targetBlank: false,
                  btnType: 'primary',
                },
              ],
              isSticky: true,
              showToggleTheme: true,
              showRssFeed: false,
              position: 'right',
            }}
          />
          <main>{children}</main>
          <Footer2
            footerData={{
              links: [],
              columns: [
                {
                  title: contact.address.title,
                  texts: contact.address.description,
                },
                {
                  title: contact.phone.title,
                  texts: contact.phone.description,
                },
                {
                  title: contact.email.title,
                  texts: ['info@rookies.mn'],
                },
              ],
              socials: [
                // { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
                { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/ai.rookies/' },
                {
                  label: 'Facebook',
                  icon: IconBrandFacebook,
                  href: 'https://www.facebook.com/profile.php?id=100092715045205',
                },
                // { label: 'RSS', icon: IconRss, href: '#' },
                { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/airookies' },
              ],
              footNote: (
                <div className="mr-4 text-sm dark:text-slate-400">
                  <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
                  Made by AI Rookies · All rights reserved.
                </div>
              ),
            }}
          />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
