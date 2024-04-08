import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';
import HeaderWidget from '../common/HeaderWidget';
import { Services } from '~/data/services';

const header = {
  title: 'Бидний шийдлүүд',
  subtitle: 'Дүрс боловсруулалтад суурилсан машин сургалтын шийдлүүд',
  highlight: 'VISION AI',
};

export function Solutions() {
  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="solution">
      <div className={` mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20 lg:px-8`}>
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}

        <BentoGrid className="mx-auto max-w-4xl">
          {Services.map((item, i) => (
            <BentoGridItem
              key={i}
              href={item.link}
              title={item.title}
              description={item.description}
              thumbnail={item.thumbnail}
              icon={null}
              className={i == 1 || i == 2 ? 'md:col-span-2' : ''}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
