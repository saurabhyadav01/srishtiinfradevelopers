import { FC } from 'react';
import { developmentProcess } from 'data/home';
import theme from 'data/theme';

const HomeProcess: FC = () => {
  return (
    <section className="wrapper" style={{ backgroundColor: theme.bg }}>
      <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
        <div className="row text-center mb-8">
          <div className="col-lg-8 mx-auto">
            <span className="section-label">How We Work</span>
            <h2 className="display-5 mb-3" style={{ color: theme.primaryDark }}>Our Development Process</h2>
            <p className="lead mb-0" style={{ color: theme.textMuted }}>
              From acquiring the right land to handing over your dream property — every step is managed with care and transparency.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {developmentProcess.map(({ id, step, title, description, icon }) => (
            <div className="col-md-6 col-lg-3" key={id}>
              <div
                className="card border-0 h-100 text-center p-4 position-relative overflow-hidden"
                style={{ backgroundColor: theme.white, boxShadow: theme.shadow }}
              >
                <span
                  className="position-absolute"
                  style={{
                    top: '-10px',
                    right: '10px',
                    fontSize: '4rem',
                    fontWeight: 800,
                    color: 'rgba(26, 54, 93, 0.06)',
                    lineHeight: 1
                  }}
                >
                  {step}
                </span>
                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary})`,
                    border: `2px solid ${theme.accent}`
                  }}
                >
                  <i className={`${icon}`} style={{ fontSize: '28px', color: theme.accentLight }} />
                </div>
                <h5 className="mb-2" style={{ color: theme.primaryDark }}>{title}</h5>
                <p className="mb-0" style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
