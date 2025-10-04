import React from 'react';
import SectionTitle from 'components/ui/SectionTitle'; 
import Card from './Card';

const partners = [
  { image: "oracle-partner-logo.png", name: "Oracle", href: "/", linkText: "Learn more" },
  { image: "microsoft-logo-animated.gif", name: "Microsoft", href: "/", linkText: "Learn more" },
  { image: "amazon.png", name: "Amazon", href: "/", linkText: "Learn more" },
];

const Partners = () => {
  return (
    <div className='bg-gray-100 py-5'>
      <SectionTitle badgeText='Our presence is global' tagline='lorem ipsum dolor sit dfkjdi lsndjd eslkkdhj elskdhis ejsef dkjk.' title='Strategic Cloud Partners' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-6 w-11/12 mx-auto'>
        {partners.map((partner, index) => (
          <Card data={partner} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
