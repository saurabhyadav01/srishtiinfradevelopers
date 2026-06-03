import companyContact from 'data/contact';

const officeSliderImages = [
  '/img/WhatsApp Image 2025-11-05 at 17.52.44.jpeg',
  '/img/WhatsApp Image 2025-11-05 at 17.52.45 (1).jpeg',
  '/img/WhatsApp Image 2025-11-05 at 17.52.45 (2).jpeg',
  '/img/WhatsApp Image 2025-11-05 at 17.52.45.jpeg'
] as const;

const officeSliderCopy = [
  {
    headline: 'Villas & Residential Plots in Sector 16B, Noida Extension',
    subline: `${companyContact.name} — ${companyContact.tagline}`
  },
  {
    headline: 'Trusted Real Estate in Noida & Greater Noida',
    subline: 'Prime locations, quality construction, and on-time delivery'
  },
  {
    headline: 'Your Dream Home Starts Here',
    subline: 'Residential plots, villas, apartments & commercial projects'
  },
  {
    headline: 'Building Communities Since 2002',
    subline: 'Nature-friendly homes with value for money across NCR'
  }
] as const;

export const heroSlides = officeSliderImages.map((image, index) => ({
  id: index + 1,
  image,
  headline: officeSliderCopy[index].headline,
  subline: officeSliderCopy[index].subline
}));

export const featuredProperties = [
  {
    id: 1,
    title: 'Sanskriti Villas',
    location: 'Greater Noida West',
    type: 'Residential Villas',
    image: '/img/projects/WhatsApp Image 2026-05-31 at 18.30.13.jpeg'
  },
  {
    id: 2,
    title: 'Sanskriti Residency',
    location: 'Noida, Uttar Pradesh',
    type: 'Residential Apartments',
    image: '/img/projects/WhatsApp Image 2026-05-31 at 18.30.12.jpeg'
  }
];

export const homeStats = [
  { id: 1, value: new Date().getFullYear() - companyContact.foundedYear, suffix: '+', label: 'Years of Experience', icon: 'uil-calendar-alt' },
  { id: 2, value: 7, suffix: '+', label: 'Total Projects', icon: 'uil-building' },
  { id: 3, value: 500, suffix: '+', label: 'Happy Families', icon: 'uil-users-alt' },
  { id: 4, value: 100, suffix: '%', label: 'RERA Compliant', icon: 'uil-shield-check' }
];

export const developmentProcess = [
  {
    id: 1,
    step: '01',
    title: 'Land Procurement',
    description: 'Strategic acquisition with verified titles, legal due diligence, and location analysis across Noida & NCR.',
    icon: 'uil-map-marker'
  },
  {
    id: 2,
    step: '02',
    title: 'Planning & Approvals',
    description: 'Layout design, RERA registration, and all regulatory approvals handled end-to-end by our expert team.',
    icon: 'uil-ruler-combined'
  },
  {
    id: 3,
    step: '03',
    title: 'Construction',
    description: 'Quality construction with modern infrastructure — roads, drainage, electricity, and water supply.',
    icon: 'uil-hard-hat'
  },
  {
    id: 4,
    step: '04',
    title: 'Sales & Handover',
    description: 'Transparent booking, registry support, and smooth possession handover to every customer.',
    icon: 'uil-key-skeleton'
  }
];

export const featuredProject = {
  title: 'Sanskriti Villas — Greater Noida West',
  location: 'Greater Noida West, Uttar Pradesh',
  type: 'Residential Villas',
  status: 'Running',
  description:
    'Our flagship running project offering affordable luxury villas with modern architecture, gated community entrance, and premium living in Greater Noida West. Currently under active development with flexible payment plans.',
  highlights: ['Under Development', 'Gated Community', 'Affordable Living', 'Greater Noida West'],
  videoPoster: '/img/logo.jpg',
  videoSrc: '/img/N-237 Srishti Infra Plots Sector 12 Noida Video.mp4',
  brochureUrl: '/img/Designs.pdf',
  image: '/img/projects/WhatsApp Image 2026-05-31 at 18.30.13.jpeg'
};
