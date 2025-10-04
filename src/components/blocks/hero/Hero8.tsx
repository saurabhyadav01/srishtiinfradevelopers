import { FC } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero8: FC = () => {
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
          <img src="/img/hero/icons/FUNCTIONAL.jpg"  alt="hero" />
        </figure>
      </div>

      <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
        <p className="display-3 mb-5" style={slideInDownAnimate('600ms')}>
        CHALLENGES OF DATABASE APPLICATIONS
        </p>

        <p className="lead fs-14 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>
        Oracle E-Business Suite (EBS) and Oracle Cloud Enterprise Resource Planning (ERP) drive a myriad of essential business functions at your organization. Return on Oracle investment value, however, regularly drops when IT struggles to provide proper EBS and ERP support. Oracle Enterprise Performance Management (EPM) is the financial engine behind ERP allowing enterprises to adjust and adapt to market changes and better understand customer consumption.
       </p>
        <p className="lead fs-14 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>

        Often, standard outsourced staffing agreements lock your unit into inflexible, overly expensive, and low-quality hourly services contracts. Consequently, internal resources either remain ill-equipped for, or entirely captive to, reactive problem-solving, abandoning proactive development. How can you optimize Oracle EBS, Oracle Fusion Cloud Applications and Oracle EPM, while freeing up internal staff and better managing spend?.</p>
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

export default Hero8;
