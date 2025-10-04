import Target from 'icons/lineal/Target';
import AwardTwo from 'icons/lineal/AwardTwo';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';

const clients = [
  { id: 1, image: '/img/brands/c1.png' },
  { id: 2, image: '/img/brands/c2.png' },
  { id: 3, image: '/img/brands/c3.png' },
  { id: 4, image: '/img/brands/c4.png' },
  { id: 5, image: '/img/brands/c5.png' },
  { id: 6, image: '/img/brands/c6.png' },
  { id: 7, image: '/img/brands/c7.png' },
  { id: 8, image: '/img/brands/c8.png' }
];

const whatWeAre = [
  { id: 1, Icon: Target, title: 'Our Mission', description: 'We put our customers at the heart of everything we do. Their success is our success.' },
  { id: 2, Icon: AwardTwo, title: 'Our Values', description: 'We bring solutions to make life easier for our customers.' }
];

const services = [
  { id: 1, Icon: Megaphone, title: 'Marketing', description: 'Get assistance anytime with our dedicated support team, ready to help you resolve issues and answer questions around the clock.' },
  { id: 2, Icon: Target, title: 'Strategy', description: 'Vivamus sagittis lacus augue laoreet vel.' },
  { id: 3, Icon: SettingsThree, title: 'Development', description: 'Cras mattis consectetur purus sit amet.' },
  { id: 4, Icon: BarChart, title: 'Data Analysis', description: 'Aenean lacinia bibendum nulla sed consectetur.' }
];
const teams = [
  {
    id: 1,
    name: 'Rekha Chaudhar',
    designation: 'Financial Analyst',
    image: { '1x': '/img/avatars/t1.jpg', '2x': '/img/avatars/t1@2x.jpg 2x' }
  },
  {
    id: 2,
    name: 'Dinesh Singh',
    designation: 'Marketing Specialist',
    image: { '1x': '/img/avatars/t2.jpg', '2x': '/img/avatars/t2@2x.jpg 2x' }
  },
  {
    id: 3,
    name: 'Vaibhav Singh',
    designation: 'Sales Manager',
    image: { '1x': '/img/avatars/t3.jpg', '2x': '/img/avatars/t3@2x.jpg 2x' }
  },
  {
    id: 4,
    name: 'Nettu Singh',
    designation: 'Project Manager',
    image: { '1x': '/img/avatars/t4.jpg', '2x': '/img/avatars/t4@2x.jpg 2x' }
  },
  {
    id: 5,
    name: 'Gaurav Singh',
    designation: 'Investment Planner',
    image: { '1x': '/img/avatars/t5.jpg', '2x': '/img/avatars/t5@2x.jpg 2x' }
  }
];


const progressList = [
  { id: 1, percent: 100, title: 'Marketing' },
  { id: 2, percent: 80, title: 'Strategy' },
  { id: 3, percent: 85, title: 'Development' }
];

const pricingList = [
  {
    monthlyPrice: 19,
    yearlyPrice: 199,
    planName: 'Premium',
    features: ['5 Projects', '100K API Access', '200MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    monthlyPrice: 49,
    yearlyPrice: 499,
    planName: 'Corporate',
    features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
  }
];

const accordions = [
  {
    no: 'One',
    expand: false,
    heading: 'How do I get my subscription receipt?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Are there any discounts for people in need?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Do you offer a free trial edit?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'How do I reset my Account password?',
    body: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.'
  }
];

export { clients, whatWeAre, services, teams, progressList, pricingList, accordions };
