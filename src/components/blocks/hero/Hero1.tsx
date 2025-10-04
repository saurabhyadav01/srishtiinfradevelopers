import { FC } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero1: FC = () => {
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
          <img src="/img/hero/icons/DATA-DATABASE.jpg"  alt="hero" />
        </figure>
      </div>

      <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
        <p className="display-3 mb-5" style={slideInDownAnimate('600ms')}>
        CHALLENGES OF MANAGING DATABASES
        </p>

        <p className="lead fs-14 lh-sm mb-7 px-md-10 px-lg-0" style={slideInDownAnimate('900ms')}>
        Managing your critical database-driven workloads has everything to do with keeping up with the frenetic pace of change, including security patching, new features, new versions, upgrades, end-of-life versions, new offerings, low-code/no-code implementations, and a variety of licensing impacts along your growth curve. Organizations need the right database technology that ensures cost efficiency, capability, capacity, and coverage mapped to their specific needs. Finding the right data solution is hinged on key important factors, including availability, performance, the ability to respond to incidents, compliance, upgrades, security, and disaster recovery responsiveness.

       Finding the time and resources to balance database administration activities with implementing new cutting-edge data management projects is a critical factor responsible for slowing the pace of growing businesses. Optimal database performance, security, and scalability are key challenges that need to be addressed as organizations look to capitalize on Digital Transformation initiatives
        </p>

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

export default Hero1;
