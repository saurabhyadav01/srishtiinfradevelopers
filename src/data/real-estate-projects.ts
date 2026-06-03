export type ProjectStatus = 'running' | 'delivered';

export type RealEstateProject = {
  id: number;
  title: string;
  location: string;
  type: string;
  status: ProjectStatus;
  image: string;
  description: string;
  highlights?: string[];
};

const runningImage = (filename: string) => `/img/projects/${filename}`;

export const runningProjects: RealEstateProject[] = [
  {
    id: 1,
    title: 'Sanskriti Villas',
    location: 'Greater Noida West',
    type: 'Residential Villas',
    status: 'running',
    image: runningImage('WhatsApp Image 2026-05-31 at 18.30.13.jpeg'),
    description: 'Affordable luxury villas with modern architecture, gated community entrance, and premium living in Greater Noida West.',
    highlights: ['Under Development', 'Gated Entry', 'Affordable Living']
  },
  {
    id: 3,
    title: 'Sanskriti Residency',
    location: 'Noida, Uttar Pradesh',
    type: 'Residential Apartments',
    status: 'running',
    image: runningImage('WhatsApp Image 2026-05-31 at 18.30.12.jpeg'),
    description: 'Active construction of multi-storey residential units with contemporary facade, balconies, and quality structural work.',
    highlights: ['Under Construction', 'Quality Build', 'Timely Progress']
  },
  {
    id: 4,
    title: 'Sanskriti Enclave',
    location: 'Noida, Uttar Pradesh',
    type: 'Independent Floors',
    status: 'running',
    image: runningImage('WhatsApp Image 2026-05-31 at 18.30.12 (1).jpeg'),
    description: 'Independent floor units with arched entryways, decorative balconies, and modern architectural detailing.',
    highlights: ['Independent Floors', 'Arched Design', 'Spacious Layout']
  },
  {
    id: 8,
    title: 'Sanskriti Kunj Garden',
    location: 'Sanskriti Garden, Sector 16B, Noida Extension',
    type: 'Residential Plots & Gardens',
    status: 'running',
    image: '/img/WhatsApp Image 2025-11-05 at 17.52.45.jpeg',
    description:
      'Residential plots and garden homes in Sanskriti Kunj Garden, Noida Extension — green surroundings, clear titles, and modern community planning near PNB Branch, Roja Yakubpur.',
    highlights: ['Plots Available', 'Garden Community', 'Noida Extension']
  }
];

export const deliveredProjects: RealEstateProject[] = [
  {
    id: 6,
    title: 'Sanskriti Centrum Plaza',
    location: 'Noida, Uttar Pradesh',
    type: 'Commercial Complex',
    status: 'delivered',
    image: '/img/deliveredproject/DELIVERED1.jpeg',
    description: 'Modern two-storey commercial shopping complex with premium retail outlets, HDFC Bank, and leading brand stores. Fully developed and operational.',
    highlights: ['Fully Delivered', 'Retail & Banking', 'Prime Commercial Hub']
  },
  {
    id: 7,
    title: 'Sanskriti Sanskar Heights',
    location: 'Noida, Uttar Pradesh',
    type: 'Residential & Commercial',
    status: 'delivered',
    image: '/img/deliveredproject/DELIVERED2.jpeg',
    description: 'Premium residential towers with ground-floor commercial shops, rooftop gardens, children play areas, and gated community living.',
    highlights: ['Fully Delivered', 'Rooftop Amenities', 'Shop & Live Complex']
  }
];

export const allProjects = [...runningProjects, ...deliveredProjects];

export const realEstateServices = [
  {
    title: 'Land Procurement',
    description: 'Strategic land acquisition with clear titles, due diligence, and legal compliance across Noida and NCR.'
  },
  {
    title: 'Project Planning & Approvals',
    description: 'End-to-end planning, layout design, and regulatory approvals including RERA registration and NOCs.'
  },
  {
    title: 'Construction & Development',
    description: 'Quality construction with modern infrastructure, roads, drainage, and utility connections.'
  },
  {
    title: 'Sales & Handover',
    description: 'Transparent sales process, registry support, and smooth possession handover to every customer.'
  }
];
