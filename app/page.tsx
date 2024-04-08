import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
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
import Contact from '~/components/widgets/Contact';
import { MacbookScroll } from '~/components/ui/macbook-scroll';
import { BackgroundBeams } from '~/components/ui/background-beams';
import { HeroParallax } from '~/components/ui/HeroParallax';
import { Services } from '~/data/services';
import { HoverEffect } from '~/components/ui/CardHoverEffect';
import { LayoutGridDemo } from '~/components/ui/LayoutGridDemo';
import { Solutions } from '~/components/widgets/Solutions';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      {/* <MacbookScroll /> */}
      <BackgroundBeams />
      {/* <HeroParallax products={Services} /> */}
      <Hero data={heroData} />
      <SocialProof {...socialProofData} />
      {/* <Content {...contentData} /> */}
      <Solutions />
      {/* <LayoutGridDemo /> */}
      <Features3 {...featuresData} />
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
