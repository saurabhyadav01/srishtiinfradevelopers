import { FC, ReactNode } from 'react';
import { fadeInAnimate } from 'utils/animation';

type TechSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  lead?: string;
  children?: ReactNode;
  reverse?: boolean;
  delay?: string;
};

const TechSection: FC<TechSectionProps> = ({ title, imageSrc, imageAlt, lead, children, reverse, delay = '0ms' }) => {
  return (
    <section className="wrapper">
      <div className="container pt-12 pb-6" style={{ maxWidth: '95%' }}>
        <div className={`row gx-8 gy-10 align-items-start ${reverse ? 'flex-row-reverse' : ''}`}>
          <div className="col-lg-5" style={fadeInAnimate(delay)}>
            <div className="d-flex align-items-start">
              <img 
                className="img-fluid d-inline-flex animate-fade-up" 
                src={imageSrc} 
                alt={imageAlt} 
                style={{ 
                  width: 500, 
                  height: 500, 
                  objectFit: 'contain',
                  animationDelay: delay,
                  animationDuration: '0.8s',
                  animationFillMode: 'both'
                }} 
              />
            </div>
          </div>
          <div className="col-lg-7" style={fadeInAnimate(`${parseInt(delay) + 200}ms`)}>
            <h1 className="display-6 mb-4 animate-fade-up" style={{ animationDelay: `${parseInt(delay) + 200}ms` }}>{title}</h1>
            {lead && <p className="lead animate-fade-up" style={{ animationDelay: `${parseInt(delay) + 400}ms` }}>{lead}</p>}
            <div className="animate-fade-up" style={{ animationDelay: `${parseInt(delay) + 600}ms` }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;



