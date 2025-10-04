import { FC } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero10: FC = () => {
  return (
    <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
      <div
        className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
        style={zoomInAnimate('0ms')}
      >
        <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: '-1.7rem', left: '-1.5rem' }} />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-0.8rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/oracle-partner-logo.png"  alt="oracle" />
          <img src="/img/hero/icons/ORACLE LICENSE.jpg"  alt="oracle" />
        </figure>
        
      </div>

      <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
        <p className="display-3 mb-5" style={slideInDownAnimate('600ms')}>
        ORACLE PARTNER
        </p>

        <p className="lead fs-14 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>
        Data Intensity is an Oracle Partner with a focus on Oracle E-Business Suite (EBS) Applications, Oracle Technology Platforms, Engineered Systems, Oracle Cloud Infrastructure (OCI) IaaS, PaaS, and SaaS platforms. Data Intensity’s partner investment in supporting the Oracle Portfolio of Applications, Technology, and Cloud services is represented by over 2,800 certifications maintained by our engineering and support staff
       </p>
        <p className="lead fs-14 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>

       Data Intensity is one of the largest independent managed cloud services providers for Oracle enterprise applications, databases, and cloud solutions. Our expertise in IT infrastructure and platforms help organizations optimize the value of their software investments and business processes, achieving higher availability, performance, velocity, and scalability. We provide a complete portfolio of solutions from multi-cloud strategy development and implementation to ongoing support and lifecycle upgrades. Our services are platform agnostic and delivered across multiple consumption models — on-premises, private cloud, public cloud, or hybrid cloud. Our solutions combine best-in-category technology with world-class services delivered to the customer within a flexible business model that leverages our deep Oracle expertise gained from supporting hundreds of customers across</p>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <span style={slideInDownAnimate('1200ms')}>
            <NextLink title="Explore Now" href="#" className="btn btn-lg btn-primary rounded-pill me-2" />
          </span>

          <span style={slideInDownAnimate('1500ms')}>
            <NextLink title="Free Trial" href="#" className="btn btn-lg btn-outline-primary rounded-pill" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero10;
