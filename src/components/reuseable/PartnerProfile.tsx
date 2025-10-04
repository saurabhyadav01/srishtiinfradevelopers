import Image from 'next/image';
import { FC } from 'react';
import { fadeInAnimate, zoomInAnimate } from 'utils/animation';

type PartnerProfileProps = {
  logoSrc: string;
  logoAlt: string;
  title: string;
  topContent: string;
  mainTitle?: string;
  paragraphs: string[];
};

const PartnerProfile: FC<PartnerProfileProps> = ({ logoSrc, logoAlt, title, topContent, mainTitle, paragraphs }) => {
  return (
    <>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-n7 mb-md-n10 mb-lg-n16" style={{ width: '90%' }}>
        <div className="row align-items-center gy-6">
          <div className="col-lg-10 mx-auto">
            <div className="row align-items-center gx-6 gy-6">
              <div className="col-md-3 text-center text-md-start" style={zoomInAnimate('0ms')}>
                <Image src={logoSrc} alt={logoAlt} width={320} height={120} style={{ height: 'auto', width: '100%' }} />
              </div>
              <div className="col-md-9" style={fadeInAnimate('150ms')}>
                <h1 className="display-4 mb-4 mb-md-3">{title}</h1>
                <p className="lead mb-0">{topContent}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pt-md-5 pb-10 pb-md-10">
        <div className="container" style={{ width: '90%' }}>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {mainTitle && <h3 className="mb-4">{mainTitle}</h3>}
              {paragraphs.map((text, idx) => (
                <p key={idx} className={idx === paragraphs.length - 1 ? 'mb-0' : undefined} style={fadeInAnimate(`${200 + idx * 100}ms`)}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerProfile;


