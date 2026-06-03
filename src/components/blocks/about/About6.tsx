import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
import theme from 'data/theme';
// -------- data -------- //
import { aboutList2, aboutOverview, missionItems, visionItems } from 'data/about';

const About6: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      {/* Left Side - Mission & Vision */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Mission Card */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: theme.bgSoft, borderRadius: '12px' }}>
              <div className="card-body p-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-badge me-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(26, 54, 93, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="uil uil-chart-line" style={{ fontSize: '20px', color: theme.primary }}></i>
                  </div>
                  <h4 className="mb-0" style={{ color: theme.primaryDark, fontSize: '1.25rem', fontWeight: '600' }}>Our Mission</h4>
                </div>
                <ul className="icon-list bullet-primary mb-0">
                  {missionItems.map((item) => (
                    <li key={item} style={{ color: theme.text, lineHeight: '1.6' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-12">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: theme.bgSoft, borderRadius: '12px' }}>
              <div className="card-body p-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-badge me-3" style={{ width: '50px', height: '50px', backgroundColor: 'rgba(200, 169, 81, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="uil uil-star" style={{ fontSize: '20px', color: theme.accentDark }}></i>
                  </div>
                  <h4 className="mb-0" style={{ color: theme.primaryDark, fontSize: '1.25rem', fontWeight: '600' }}>Our Vision</h4>
                </div>
                <ul className="icon-list bullet-primary mb-0">
                  {visionItems.map((item) => (
                    <li key={item} style={{ color: theme.text, lineHeight: '1.6' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Description & Images */}
      <div className="col-lg-6 position-relative order-lg-2">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3" style={{ color: theme.primaryDark }}>Who Are We?</h2>

        <p className="lead fs-lg mb-6" style={{ color: theme.text }}>
          {aboutOverview}
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
