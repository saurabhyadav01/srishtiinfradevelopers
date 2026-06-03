import { FC } from 'react';
import CountUp from 'react-countup';
import { homeStats } from 'data/home';

import theme from 'data/theme';

const HomeStats: FC = () => {
  return (
    <section className="wrapper" style={{ background: theme.gradientHero }}>
      <div className="container py-8 py-md-10" style={{ maxWidth: '90%' }}>
        <div className="row g-4 text-center text-white">
          {homeStats.map(({ id, value, suffix, label, icon }) => (
            <div className="col-6 col-md-3" key={id}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(200, 169, 81, 0.2)',
                    border: `2px solid ${theme.accent}`
                  }}
                >
                  <i className={`${icon}`} style={{ fontSize: '24px', color: theme.accentLight }} />
                </div>
                <h3 className="counter mb-1 text-white" style={{ fontSize: '2.2rem', fontWeight: 700 }}>
                  <CountUp end={value} duration={2.5} />
                  {suffix}
                </h3>
                <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
