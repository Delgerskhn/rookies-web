import { hostname } from '~/utils/get-hostname';

export type Service = {
  title: string;
  link: string;
  thumbnail: string;
};

export const Services: Service[] = [
  {
    title: 'Банкны дансны дугаар танилт',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Faceternity.com%2Fimages%2Fproducts%2Fthumbnails%2Fnew%2Fcursor.png&w=640&q=75',
  },
  {
    title: 'Замын хөдөлгөөний хяналт',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Faceternity.com%2Fimages%2Fproducts%2Fthumbnails%2Fnew%2Fmoonbeam.png&w=1200&q=75',
  },
  {
    title: 'И-Баримт унших, таних',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1554080353-a576cf803bda%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=640&q=75',
  },
  {
    title: 'EKYC',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Faceternity.com%2Fimages%2Fproducts%2Fthumbnails%2Fnew%2Fcursor.png&w=640&q=75',
  },
  {
    title: 'Хиймэл оюун ассистант систем',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Faceternity.com%2Fimages%2Fproducts%2Fthumbnails%2Fnew%2Fmoonbeam.png&w=1200&q=75',
  },
  {
    title: 'Хөдөө аж ахуй, ХАА',
    link: `${hostname}/social-pay-app`,
    thumbnail:
      'https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1554080353-a576cf803bda%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=640&q=75',
  },
];
