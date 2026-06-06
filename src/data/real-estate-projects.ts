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

const completedDeliveredProjects: RealEstateProject[] = [
  {
    id: 1,
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
    title: 'Sanskriti City Phase-2',
    location: 'Noida Extension, Uttar Pradesh',
    type: 'Residential Township',
    status: 'delivered',
    image: runningImage('WhatsApp Image 2026-05-31 at 18.30.12.jpeg'),
    description:
      'Completed township development with modern infrastructure, community planning, and possession handed over to happy families.',
    highlights: ['Delivered', 'Township', 'Infrastructure', 'Community']
  }
];

export const runningProjects: RealEstateProject[] = [
  {
    id: 3,
    title: 'Sanskriti Villas',
    location: 'Greater Noida West, Uttar Pradesh',
    type: 'Residential Villas',
    status: 'running',
    image: runningImage('WhatsApp Image 2026-05-31 at 18.30.13.jpeg'),
    description:
      'Our flagship running project offering affordable luxury villas with modern architecture, gated community entrance, and premium living in Greater Noida West.',
    highlights: ['Running', 'Villas', 'Gated Community', 'Greater Noida West', 'RERA']
  }
];

// Delivered section includes completed projects plus all current running projects
export const deliveredProjects: RealEstateProject[] = [...completedDeliveredProjects, ...runningProjects];

export const allProjects = [...runningProjects, ...completedDeliveredProjects];

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
