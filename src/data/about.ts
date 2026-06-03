// -------- icons -------- //
import Lamp from 'icons/solid-mono/Lamp';
import Bulb from 'icons/solid-mono/Bulb';
import Puzzle from 'icons/solid-mono/Puzzle';
import Headphone from 'icons/solid-mono/Headphone';
import companyContact from 'data/contact';

// =========================================================================

// used in the about-2, about-8, about-11, about-13, about-15, about-17 block
export const aboutList1 = [
  ['Prime locations with excellent construction quality and on-time handover.', 'Personal relationships built on trust, integrity and transparency.'],
  ['Nature-friendly and greener environments in every home we build.', 'Value for money across residential and commercial developments.']
];

// used in the about-6, about-19 block
export const aboutList2 = [
  ['Clear land titles with full legal due diligence.', 'RERA-registered projects with transparent pricing.'],
  ['Timely possession with quality construction standards.', 'End-to-end support from booking to registry.']
];

// used in the about-11, about-19 block
export const aboutList3 = [
  {
    id: 1,
    title: 'Our Vision',
    description: `Carve out a niche in the Indian real estate industry, deliver on-time as perfect professionals, and practice eco-friendly construction for a better world.`
  },
  {
    id: 2,
    title: 'Our Mission',
    description: `Meet the housing needs of our ever-growing population with nature-friendly homes, personal customer relationships, and value for money.`
  },
  {
    id: 3,
    title: 'Our Values',
    description: `Customer satisfaction through prime locations, excellent construction quality, and on-time delivery — with care for our workforce at every step.`
  }
];

export const aboutOverview =
  `Founded in ${companyContact.foundedYear}, ${companyContact.name} is one of Noida's most pre-eminent and prolific developers. As an all-encompassing property owner, developer and manager, our visionary stance and commitment to excellence have established us as a leading force in Noida and Greater Noida real estate.`;

export const aboutValues = [
  `Customer satisfaction is of utmost importance to us and we make sure that we achieve this by providing prime locations, construction with excellent quality and handing over the properties within the promised time period.`,
  `We believe in the difference between human being and being human, that is why we take extra care of work force at the head office & construction sites to ensure dedication & hard work which in turn reflects in our performance.`
];

export const missionItems = [
  'Meet the housing needs of our ever growing population',
  'Provide nature friendly and greener environment to all homes we build',
  'Satisfy every customer and develop a personal relationship',
  'Emphasize on trust, integrity and transparency',
  'Deliver value for money'
];

export const visionItems = [
  'Carve out a niche in the Indian real estate industry',
  'Be perfect professionals and deliver on-time',
  'Honour all our commitments',
  'Achieve excellence in our field and attain new heights',
  'Practice eco-friendly construction for a better world'
];

// used in the about-20, about-21 block
export const aboutList4 = [
  {
    id: 1,
    Icon: Lamp,
    color: 'fuchsia',
    title: 'Customer Satisfaction',
    description: 'Prime locations, excellent construction quality, and properties handed over within the promised time period.'
  },
  {
    id: 2,
    Icon: Bulb,
    color: 'violet',
    title: 'Trust & Integrity',
    description: 'We emphasize trust, integrity and transparency in every dealing — from booking to possession.'
  },
  {
    id: 3,
    Icon: Puzzle,
    color: 'orange',
    title: 'On-Time Delivery',
    description: 'Perfect professionals who honour every commitment and deliver projects on schedule.'
  },
  {
    id: 4,
    Icon: Headphone,
    color: 'green',
    title: 'Eco-Friendly Homes',
    description: 'Nature-friendly, greener environments and eco-friendly construction for a better world.'
  }
];
