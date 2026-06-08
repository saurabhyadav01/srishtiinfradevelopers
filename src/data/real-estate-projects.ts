export type ProjectStatus = 'running' | 'delivered';

export type RealEstateProject = {
  id: number;
  slug: string;
  title: string;
  location: string;
  type: string;
  status: ProjectStatus;
  image: string;
  gallery?: string[];
  video?: string;
  description: string;
  highlights?: string[];
};

const asset = (slug: string, file: string) => `/img/projects/${slug}/${file}`;

const images = (slug: string, count: number) =>
  Array.from({ length: count }, (_, i) => asset(slug, `${String(i + 1).padStart(2, '0')}.jpg`));

const completedDeliveredProjects: RealEstateProject[] = [
  {
    id: 1,
    slug: 'sanskriti-garden-phase-1',
    title: 'Sanskriti Garden Phase-I',
    location: 'Sanskriti Garden, Sector 16B, Noida Extension',
    type: 'Residential Plots',
    status: 'delivered',
    image: '/img/deliveredproject/DELIVERED2.jpeg',
    description:
      'Successfully delivered residential plots in Sanskriti Garden Phase-I with developed roads, utilities, and thriving families.',
    highlights: ['Delivered', 'Clear Titles', 'Plots', 'Noida Extension', 'RERA']
  },
  {
    id: 2,
    slug: 'sanskriti-city-phase-2',
    title: 'Sanskriti Garden Phase-2',
    location: 'Noida Extension, Uttar Pradesh',
    type: 'Residential Township',
    status: 'delivered',
    image: asset('sanskriti-city-phase-2', '01.jpg'),
    gallery: images('sanskriti-city-phase-2', 4),
    description:
      'Completed township development with modern infrastructure, community planning, and possession handed over to happy families.',
    highlights: ['Delivered', 'Township', 'Infrastructure', 'Community']
  },
  {
    id: 4,
    slug: 'sanskriti-green-1',
    title: 'Sanskriti Green I',
    location: 'Noida Extension, Uttar Pradesh',
    type: 'Residential Plots',
    status: 'delivered',
    image: asset('sanskriti-green-1', '01.jpg'),
    gallery: images('sanskriti-green-1', 5),
    description:
      'Delivered green residential plots with nature-friendly planning, clear titles, and excellent connectivity across Noida Extension.',
    highlights: ['Delivered', 'Green Plots', 'Nature Friendly', 'Clear Titles']
  },
  {
    id: 5,
    slug: 'sanskriti-green-2',
    title: 'Sanskriti Green II',
    location: 'Noida Extension, Uttar Pradesh',
    type: 'Residential Plots',
    status: 'delivered',
    image: asset('sanskriti-green-2', '01.jpg'),
    gallery: images('sanskriti-green-2', 21),
    video: asset('sanskriti-green-2', '22.mp4'),
    description:
      'Phase II of Sanskriti Green — successfully delivered premium plots with modern layout design and timely development.',
    highlights: ['Delivered', 'Plots', 'Layout', 'Quality Build']
  },
  {
    id: 6,
    slug: 'sanskriti-centrum-plaza',
    title: 'Sanskriti Centrum Plaza',
    location: 'Noida, Uttar Pradesh',
    type: 'Commercial Complex',
    status: 'delivered',
    image: asset('sanskriti-centrum-plaza', '01.jpg'),
    gallery: images('sanskriti-centrum-plaza', 4),
    description:
      'Delivered commercial complex with premium retail outlets, banking, and leading brand stores in a prime Noida location.',
    highlights: ['Delivered', 'Commercial', 'Retail', 'Prime Location']
  },
  {
    id: 7,
    slug: 'sanskriti-kunj-garden',
    title: 'Sanskriti Kunj Garden',
    location: 'Sanskriti Garden, Sector 16B, Noida Extension',
    type: 'Residential Plots & Gardens',
    status: 'delivered',
    image: asset('sanskriti-kunj-garden', '01.jpg'),
    gallery: images('sanskriti-kunj-garden', 21),
    description:
      'Residential plots and garden homes in Sanskriti Kunj Garden — green surroundings, clear titles, and modern community planning.',
    highlights: ['Delivered', 'Garden', 'Plots', 'Noida Extension', 'Site Visit']
  }
];

export const runningProjects: RealEstateProject[] = [
  {
    id: 3,
    slug: 'sanskriti-villas',
    title: 'Sanskriti Villas',
    location: 'Greater Noida West, Uttar Pradesh',
    type: 'Residential Villas',
    status: 'running',
    image: asset('sanskriti-villas', '01.jpg'),
    gallery: images('sanskriti-villas', 7),
    description:
      'Our flagship running project offering affordable luxury villas with modern architecture, gated community entrance, and premium living in Greater Noida West.',
    highlights: ['Running', 'Villas', 'Gated Community', 'Greater Noida West', 'RERA']
  },
  {
    id: 8,
    slug: 'sanskriti-kunj-garden',
    title: 'Sanskriti Kunj Garden',
    location: 'Sanskriti Garden, Sector 16B, Noida Extension',
    type: 'Residential Plots & Gardens',
    status: 'running',
    image: asset('sanskriti-kunj-garden', '01.jpg'),
    gallery: images('sanskriti-kunj-garden', 21),
    description:
      'Active development of residential plots and garden homes in Sanskriti Kunj Garden — green surroundings, clear titles, and modern community planning in Noida Extension.',
    highlights: ['Running', 'Garden', 'Plots', 'Noida Extension', 'Site Visit']
  }
];

// One detail page per slug — running entries that share a slug with delivered use the delivered record
export const uniqueProjects: RealEstateProject[] = [
  ...completedDeliveredProjects,
  ...runningProjects.filter((project) => !completedDeliveredProjects.some((delivered) => delivered.slug === project.slug))
];

// Delivered list: completed projects + running projects not already listed as delivered
export const deliveredProjects: RealEstateProject[] = [
  ...completedDeliveredProjects,
  ...runningProjects.filter((project) => !completedDeliveredProjects.some((delivered) => delivered.slug === project.slug))
];

export const allProjects = uniqueProjects;

export const getProjectHref = (slug: string) => `/projects/${slug}`;

export const getProjectBySlug = (slug: string): RealEstateProject | undefined =>
  uniqueProjects.find((project) => project.slug === slug);

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
