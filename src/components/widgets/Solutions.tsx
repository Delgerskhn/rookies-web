import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';
import HeaderWidget from '../common/HeaderWidget';
import { Service, Services } from '~/data/services';
import { Locale, getDictionary } from '~/locales/getDictionary';
import { defaultLocale } from '~/locales/locale';

const HEADER = {
  title: 'Бидний шийдлүүд',
  subtitle: 'Дүрс боловсруулалтад суурилсан машин сургалтын шийдлүүд',
  highlight: 'VISION AI',
};

export function Solutions({
  header = HEADER,
  services,
}: {
  header?: {
    title: string;
    subtitle: string;
    highlight: string;
  };
  services: Service[];
}) {
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="solution">
      <div className={` mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20 lg:px-8`}>
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}

        <BentoGrid className="mx-auto">
          {services.map((item, i) => (
            <BentoGridItem
              key={i}
              href={item.link}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              icon={null}
              className={item.wide ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
