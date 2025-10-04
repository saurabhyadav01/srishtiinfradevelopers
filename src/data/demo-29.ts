// -------- icons -------- //
import BarChart from 'icons/solid/BarChart';
import CloudNetwork2 from 'icons/solid/CloudNetwork2';
import Controls from 'icons/solid/Controls';
import Lock from 'icons/solid/Lock';
import Rocket from 'icons/solid/Rocket';
import Safe from 'icons/solid/Safe';
import TouchScreen from 'icons/solid/TouchScreen';
import Checked from 'icons/solid/Checked';
import Calendar from 'icons/solid/Calendar';
import Compare from 'icons/solid/Compare';
import Currency from 'icons/solid/Currency';
import Devices from 'icons/solid/Devices';
import Search from 'icons/solid/Search';
import Server from 'icons/solid/Server';

import color from 'utils/color';

export const features = [
  { id: 1, color: color.yellow, Icon: CloudNetwork2, title: 'Real-Time Sync' },
  { id: 2, color: color.green, Icon: TouchScreen, title: 'User-Friendly Interface' },
  { id: 3, color: color.purple, Icon: Lock, title: 'Advanced Security' },
  { id: 4, color: color.pink, Icon: Rocket, title: 'Lightning-Fast Operations' },
  { id: 5, color: color.violet, Icon: BarChart, title: 'Insightful Analytics' },
  { id: 6, color: color.orange, Icon: Safe, title: 'Bank-Level Encryption' },
  { id: 7, color: color.blue, Icon: Controls, title: 'Customizable Workflows' },
  { id: 8, color: color.leaf, Icon: Checked, title: 'Comprehensive Audit Trails' }
];

export const abouts = [
  {
    id: 1,
    Icon: Calendar,
    color: color.grape,
    title: 'Automated Scheduling',
    description: `Easily set up recurring payments, reminders, and financial tasks to ensure you never miss a deadline. Stay organized with our intelligent calendar integration.`
  },
  {
    id: 2,
    Icon: Currency,
    color: color.green,
    title: 'Multi-Currency Support',
    description: `Manage accounts in over 30 global currencies with real-time exchange updates, enabling seamless cross-border transactions for global users.`
  },
  {
    id: 3,
    Icon: Server,
    color: color.pink,
    title: 'Robust Data Infrastructure',
    description: `Our platform is built on a highly scalable cloud architecture that ensures data integrity, fast access, and 99.99% uptime across all services.`
  },
  {
    id: 4,
    Icon: Devices,
    color: color.yellow,
    title: 'Cross-Device Access',
    description: `Access your dashboard from desktop, tablet, or mobile. Your data stays in sync across all devices—secure, up-to-date, and always available.`
  },
  {
    id: 5,
    Icon: Search,
    color: color.blue,
    title: 'AI-Powered Search',
    description: `Find transactions, categories, and reports instantly using our intelligent search engine, optimized for speed and accuracy.`
  },
  {
    id: 6,
    Icon: Compare,
    color: color.leaf,
    title: 'Advanced Reporting',
    description: `Generate custom reports and visual comparisons of your financial data to make smarter business decisions and track trends over time.`
  }
];

export const testimonials = [
  {
    id: 1,
    color: color.grape,
    name: 'Coriss Ambady',
    designation: 'Financial Analyst',
    review: `This platform has completely streamlined our monthly reporting. It’s intuitive, fast, and incredibly reliable for handling sensitive data.`
  },
  {
    id: 2,
    color: color.green,
    name: 'Cory Zamora',
    designation: 'Marketing Specialist',
    review: `The automation tools have saved me hours every week. I can now schedule and track all campaigns with full transparency and no hassle.`
  },
  {
    id: 3,
    color: color.orange,
    name: 'Nikolas Brooten',
    designation: 'Sales Manager',
    review: `We needed a solution that worked across our distributed team, and this delivered. The sync across devices and the analytics are top-tier.`
  },
  {
    id: 4,
    color: color.pink,
    name: 'Erica Lawrence',
    designation: 'Startup Founder',
    review: `As a startup, we needed speed and simplicity. This app gave us both—plus the scalability to grow with our team. Outstanding support too!`
  },
  {
    id: 5,
    color: color.yellow,
    name: 'Laura Widerski',
    designation: 'Sales Specialist',
    review: `Clean interface, powerful features, and no steep learning curve. It's become our go-to for everything financial planning related.`
  },
  {
    id: 6,
    color: color.blue,
    name: 'Jackie Sanders',
    designation: 'Investment Planner',
    review: `Security was our top concern, and this platform has exceeded expectations. The encryption and backup features give us total peace of mind.`
  }
];
