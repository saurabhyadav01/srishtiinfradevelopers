import { FC } from 'react';
import IconProps from 'types/icon';
import { LinkType } from 'types/demo-1';
import NextLink from '../links/NextLink';
import Image from 'next/image';

// ===============================================================
type ServiceCard1Props = {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: string; 
};
// ===============================================================
const ServiceCard1: FC<ServiceCard1Props> = (props) => {
  const { title, description, Icon, linkUrl, linkType, cardClassName = '', iconClassName } = props;

  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
        <Image src={`${Icon}`} alt="" width={100} height={80} />
          <h4>{title}</h4>
          <p className="mb-2">{description}</p>
          <NextLink title="Learn More" href={linkUrl} className="more hover" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard1;
