import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  socialProofData,
} from '~/shared/data';
import hero3Img from '~/assets/images/hero3.png';
import Contact from '~/components/widgets/Contact';
import { MacbookScroll } from '~/components/ui/macbook-scroll';
import { BackgroundBeams } from '~/components/ui/background-beams';
import { HeroParallax } from '~/components/ui/HeroParallax';
import { Services } from '~/data/services';
import { HoverEffect } from '~/components/ui/CardHoverEffect';
import { LayoutGridDemo } from '~/components/ui/LayoutGridDemo';
import { Solutions } from '~/components/widgets/Solutions';
import { StickyScrollRevealDemo } from '~/components/ui/StickyScrollDemo';
import { Locale, getDictionary } from '~/locales/getDictionary';
import Link from 'next/link';
import {
  IconBrain,
  IconChartArrows,
  IconClock,
  IconCode,
  IconMapPin,
  IconMovie,
  IconPhone,
  IconPhoneCall,
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: SITE.title,
};

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const { services, hero, contact, solution, mission } = await getDictionary(lang);
  const missionIcons = [IconBrain, IconChartArrows, IconMovie, IconCode];
  const missions = mission.items.map((a, i) => ({ ...a, icon: missionIcons[i] }));

  const contactData = {
    header: {
      title: contact.title,
      // subtitle: 'In hac habitasse platea dictumst',
      highlight: contact.highlight,
    },
    // content:
    //   'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
    items: [
      {
        title: contact.address.title,
        description: contact.address.description,
        icon: IconMapPin,
      },
      {
        title: contact.phone.title,
        description: contact.phone.description,
        icon: IconPhoneCall,
      },
      {
        title: contact.workhours,
        description: contact.workhours.description,
        icon: IconClock,
      },
    ],
    form: {
      title: contact.form.title,
      inputs: [
        // {
        //   type: 'text',
        //   name: 'name',
        //   autocomplete: 'given-name',
        //   placeholder: 'Your name',
        // },
        {
          id: 'email',
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: contact.form.emailPlaceholder,
        },
      ],
      textarea: {
        cols: 30,
        rows: 5,
        id: 'message',
        name: 'message',
        placeholder: contact.form.inputPlaceholder,
      },
      btn: {
        title: contact.form.sendTxt,
        type: 'submit',
      },
    },
  };

  return (
    <>
      {/* <MacbookScroll /> */}
      {/* <HeroParallax products={Services} /> */}
      <Hero
        data={{
          title: hero.title,
          subtitle: <>{hero.subtitle}</>,
          callToAction: {
            text: contact.title,
            href: '#contact',
            icon: IconPhone,
            btnType: 'primary',
          },
          callToAction2: {
            text: solution.title,
            href: '#solution',
          },
          image: {
            src: hero3Img,
            alt: 'Hero AiRookies',
          },
        }}
      />
      <BackgroundBeams />
      {/* <Content {...contentData} /> */}

      <Solutions services={services} header={solution} />
      {/* <StickyScrollRevealDemo /> */}
      {/* <LayoutGridDemo /> */}
      <Features3 items={missions} header={mission.header} />
      <SocialProof {...socialProofData} />

      {/* <HoverEffect
        items={featuresData.items.map((x) => ({
          title: x.title.toString(),
          description: x.description?.toString() ?? '',
          link: '#',
        }))}
      /> */}
      {/* <Content {...content2Data} /> */}
      {/* <Steps /> */}
      {/* <Testimonial /> */}
      {/* <FAQs2 {...faqsData2} /> */}
      {/* <Pricing {...pricingData} /> */}
      {/* <Team /> */}
      <Contact />
      {/* <CallToAction2 {...callToActionData} /> */}
    </>
  );
}
