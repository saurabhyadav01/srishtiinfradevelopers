import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList2 } from 'data/about';

const About6: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      {/* Left Side - Mission & Vision */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div className="card-body p-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-badge me-3" style={{ width: '50px', height: '50px', backgroundColor: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="uil uil-chart-line text-primary" style={{ fontSize: '20px' }}></i>
                  </div>
                  <h4 className="mb-0" style={{ color: '#000000', fontSize: '1.25rem', fontWeight: '600' }}>Our Mission</h4>
                </div>
                <p className="mb-0" style={{ color: '#000000', lineHeight: '1.6' }}>
                  We are a group of technology enthusiasts who believe in designing and delivering innovative and scalable solutions that exceed our client's expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: '#f8fafc', borderRadius: '12px' }}>
              <div className="card-body p-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-badge me-3" style={{ width: '50px', height: '50px', backgroundColor: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="uil uil-star text-warning" style={{ fontSize: '20px' }}></i>
                  </div>
                  <h4 className="mb-0" style={{ color: '#000000', fontSize: '1.25rem', fontWeight: '600' }}>Our Vision</h4>
                </div>
                <p className="mb-0" style={{ color: '#000000', lineHeight: '1.6' }}>
                  To be a valuable and trusted technology solutions partner to our clients. To garner a world-class reputation for quality, creativity, innovation, and commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Description & Images */}
      <div className="col-lg-6 position-relative order-lg-2">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3" style={{ color: '#000000' }}>Who Are We?</h2>

        <p className="lead fs-lg mb-4" style={{ color: '#000000' }}>
          A company driven by creativity, innovation, and strategic vision.
        </p>

        <p className="mb-6" style={{ color: '#000000' }}>
          Enterprise-grade database and cloud solutions empowering global business infrastructure. We specialize in Oracle and Microsoft technologies, providing comprehensive cloud migration, managed services, and digital transformation solutions.
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} />

        {/* Images below description */}
        <div className="mt-6">
          <Tiles5 />
        </div>
      </div>
    </div>
  );
};

export default About6;
