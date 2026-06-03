import { FC } from 'react';
import companyContact from 'data/contact';

const SiteTopBar: FC = () => {
  return (
    <>
      <div
        className="d-md-none"
        style={{
          backgroundColor: '#2d3748',
          color: '#fff',
          fontSize: '0.75rem',
          padding: '5px 10px'
        }}
      >
        <div className="d-flex flex-column align-items-center gap-1 text-center">
          <a href={`mailto:${companyContact.email}`} className="text-white text-decoration-none">
            <i className="uil uil-envelope me-1" style={{ color: '#C8A951' }} />
            {companyContact.email}
          </a>
          <a href={`tel:${companyContact.phoneTel}`} className="text-white text-decoration-none">
            <i className="uil uil-phone me-1" style={{ color: '#C8A951' }} />
            {companyContact.phone}
          </a>
          <div className="d-flex align-items-center gap-3 mt-1">
            {companyContact.socialLinks.map(({ id, icon, url, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="text-white text-decoration-none"
              >
                <i className={icon} style={{ color: '#C8A951', fontSize: '1.1rem' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block"
        style={{
          backgroundColor: '#2d3748',
          color: '#fff',
          fontSize: '0.8rem',
          padding: '5px 0'
        }}
      >
        <div
          className="container d-flex flex-wrap justify-content-between align-items-center gap-2"
          style={{ maxWidth: '95%' }}
        >
          <div className="d-flex align-items-center gap-2">
            <i className="uil uil-map-marker" style={{ color: '#C8A951' }} />
            <span>{companyContact.addressShort}</span>
          </div>
          <div className="d-flex align-items-center gap-4 flex-wrap justify-content-end">
            <div className="d-flex align-items-center gap-3">
              {companyContact.socialLinks.map(({ id, icon, url, label }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-white text-decoration-none"
                >
                  <i className={icon} style={{ color: '#C8A951', fontSize: '1.05rem' }} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${companyContact.email}`}
              className="text-white text-decoration-none d-flex align-items-center gap-1 fw-semibold"
            >
              <i className="uil uil-envelope" style={{ color: '#C8A951' }} />
              {companyContact.email}
            </a>
            <a
              href={`tel:${companyContact.phoneTel}`}
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <i className="uil uil-phone" style={{ color: '#C8A951' }} />
              {companyContact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteTopBar;
