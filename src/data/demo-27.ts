import Shield from 'icons/lineal/Shield';
import Design from 'icons/lineal/Design';
import Target from 'icons/lineal/Target';
import Wallet from 'icons/lineal/Wallet';
import ChatTwo from 'icons/lineal/ChatTwo';
import Loyalty from 'icons/lineal/Loyalty';
import Padlock from 'icons/lineal/Padlock';
import AwardTwo from 'icons/lineal/AwardTwo';
import CheckList from 'icons/lineal/CheckList';
import Insurance from 'icons/lineal/Insurance';
import Telephone from 'icons/lineal/Telephone';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import LightBulb from 'icons/lineal/LightBulb';
import PieChartTwo from 'icons/lineal/PieChartTwo';
import CloudComputingTwo from 'icons/lineal/CloudComputingTwo';
import color from 'utils/color';
export const serviceList = [
  {
    id: 1,
    Icon: Telephone,
    color: color.blue,
    title: '24/7 Customer Support',
    description: `Get assistance anytime with our dedicated support team, ready to help you resolve issues and answer questions around the clock.`
  },
  {
    id: 2,
    Icon: Shield,
    color: color.yellow,
    title: 'Secure Payment Gateway',
    description: `We ensure every transaction is encrypted and protected using the latest security protocols, giving you total peace of mind.`
  },
  {
    id: 3,
    Icon: CloudComputingTwo,
    color: color.orange,
    title: 'Daily System Updates',
    description: `Stay ahead with daily improvements and feature updates to ensure optimal performance, reliability, and innovation.`
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.pink,
    title: 'Comprehensive Market Analytics',
    description: `Make smarter business decisions with powerful insights and real-time analytics that track customer behavior and trends.`
  },
  {
    id: 5,
    Icon: ChatTwo,
    color: color.green,
    title: 'Social Media Engagement',
    description: `Boost your online presence and build stronger customer relationships through active and automated social media interaction.`
  },
  {
    id: 6,
    Icon: Megaphone,
    color: color.purple,
    title: 'Strategic Content Marketing',
    description: `Drive more traffic and conversions with targeted content strategies tailored to your brand voice and customer base.`
  }
];
const processList = [
  {
    id: 1,
    Icon: LightBulb,
    title: 'Collect Ideas',
    description: 'Get assistance anytime with our dedicated support team, ready to help you resolve issues and answer questions around the clock. Praesent commodo cursus.'
  },
  {
    id: 2,
    Icon: PieChartTwo,
    title: 'Data Analysis',
    description: 'Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.'
  },
  {
    id: 3,
    Icon: Design,
    title: 'Magic Touch',
    description: 'Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.'
  }
];

const abouts = [
  {
    id: 1,
    Icon: Target,
    color: color.blue,
    title: 'Our Vision',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
        tellus.`
  },
  {
    id: 2,
    Icon: AwardTwo,
    color: color.green,
    title: 'Our Mission',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere  consectetur.`
  },
  {
    id: 3,
    Icon: Loyalty,
    color: color.yellow,
    title: 'Our Values',
    description: `Cloud, AI, and productivity tools built to scale enterprise performance and innovation. Praesent commodo cursus magna scelerisque.`
  }
];

const pricingList = [
  {
    price: 9,
    plan: 'Basic',
    features: ['2 Projects', '100K API Access', '100MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 19,
    plan: 'Premium',
    features: ['5 Projects', '200K API Access', '300MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 29,
    plan: 'Corporate',
    features: ['20 Projects', '300K API Access', '500MB Storage', 'Weekly Reports', '7/24 Support']
  },
  {
    price: 49,
    plan: 'Community',
    features: ['90 Projects', '900K API Access', '900MB Storage', 'Weekly Reports', '7/24 Support']
  }
];

const faqList = [
  {
    id: 1,
    Icon: CheckList,
    title: 'Can I cancel my subscription?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 2,
    Icon: Wallet,
    title: 'Which payment methods do you accept?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 3,
    Icon: Insurance,
    title: 'How can I manage my Account?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  },
  {
    id: 4,
    Icon: Padlock,
    title: 'Is my credit card information secure?',
    description: `Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.`
  }
];

export default { serviceList, processList, abouts, pricingList, faqList };
