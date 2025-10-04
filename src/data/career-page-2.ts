import Alarm from 'icons/solid-mono/Alarm';
import Share from 'icons/solid-mono/Share';
import Target from 'icons/solid-mono/Target';
import Wallet from 'icons/solid-mono/Wallet';
import VideoCall from 'icons/solid-mono/VideoCall';
import PartnerShip from 'icons/solid-mono/PartnerShip';

const facilities = [
  {
    id: 1,
    Icon: Target,
    title: 'Career Growth',
    description: `We don’t just offer jobs — we build careers. We believe that when our people grow, our business grows. That’s why we invest in every team member’s personal and professional development from day one.`
  },
  {
    id: 2,
    Icon: VideoCall,
    title: 'Work From Anywhere',
    description: `We believe that great work isn’t confined by geography. That’s why we embrace a Work From Anywhere culture — empowering our teams to deliver exceptional results, no matter where they are.`
  },
  {
    id: 3,
    Icon: Wallet,
    title: 'Smart Salary',
    description: `We believe compensation should be more than competitive — it should be intelligent, transparent, and growth-aligned. Our Smart Salary approach reflects our commitment to rewarding impact, not just titles or tenure.`
  },
  {
    id: 4,
    Icon: Alarm,
    title: 'Flexible Hours',
    description: `NOur focus is on outcomes, not hours. Whether you're an early riser or a night owl, we give you the freedom to structure your day around peak productivity — without compromising team collaboration or delivery goals.`
  }
];

const services = [
  {
    id: 1,
    Icon: Share,
    title: 'Our Mission',
    description: 'We put our customers at the heart of everything we do. Their success is our success.'
  },
  {
    id: 2,
    Icon: PartnerShip,
    title: 'Our Values',
    description: 'We bring solutions to make life easier for our customers.'
  }
];

const designJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'GD',
    time: 'Full Time',
    avatarColor: 'bg-red',
    location: 'San Francisco, US',
    title: 'Senior Graphic Designer'
  },
  {
    id: 2,
    link: '#',
    avatar: 'UX',
    time: 'Remote',
    location: 'Anywhere',
    title: 'UI/UX Designer',
    avatarColor: 'bg-green'
  },
  {
    id: 3,
    link: '#',
    avatar: 'AN',
    time: 'Full Time',
    avatarColor: 'bg-yellow',
    location: 'Birmingham, UK',
    title: 'Multimedia Artist & Animator'
  }
];

const developmentJobList = [
  {
    id: 1,
    link: '#',
    avatar: 'FD',
    time: 'Part Time',
    location: 'Sydney, AU',
    avatarColor: 'bg-purple',
    title: 'Front End Developer'
  },
  {
    id: 2,
    link: '#',
    avatar: 'MD',
    time: 'Full Time',
    avatarColor: 'bg-orange',
    title: 'Mobile Developer',
    location: 'San Francisco, US'
  },
  {
    id: 3,
    link: '#',
    avatar: 'NT',
    time: 'Full Time',
    avatarColor: 'bg-pink',
    title: '.NET Developer',
    location: 'Manchester, UK'
  }
];

const positionOptions = [
  { id: 0, title: 'Position', value: '' },
  { id: 1, title: 'Design', value: 'design' },
  { id: 2, title: 'Finance', value: 'finance' },
  { id: 3, title: 'Business', value: 'business' },
  { id: 4, title: 'Marketing', value: 'marketing' },
  { id: 5, title: 'Development', value: 'development' },
  { id: 6, title: 'Engineering', value: 'engineering' }
];

const typeOptions = [
  { id: 0, title: 'Type', value: '' },
  { id: 1, title: 'Full-time', value: 'full-time' },
  { id: 2, title: 'Part-time', value: 'part-time' },
  { id: 3, title: 'Remote', value: 'remote' }
];

const locationOptions = [
  { id: 0, title: 'Location', value: '' },
  { id: 1, title: 'Chicago, US', value: 'chicago' },
  { id: 2, title: 'Michigan, US', value: 'michigan' },
  { id: 3, title: 'New York, US', value: 'new-york' },
  { id: 4, title: 'Los Angles, US', value: 'los-angles' },
  { id: 5, title: 'Moscow, Russia', value: 'Moscow' },
  { id: 6, title: 'Sydney, Australia', value: 'sydney' },
  { id: 7, title: 'Birmingham, UK', value: 'birmingham' },
  { id: 8, title: 'Manchester, UK', value: 'manchester' },
  { id: 9, title: 'Beijing, China', value: 'beijing' }
];

export default {
  services,
  facilities,
  typeOptions,
  designJobList,
  positionOptions,
  locationOptions,
  developmentJobList
};
