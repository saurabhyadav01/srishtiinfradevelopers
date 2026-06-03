import { FC } from 'react';
import companyContact from 'data/contact';

const SiteTopBar: FC = () => {
  return (
    <>
      <div className="site-top-bar site-top-bar-mobile d-md-none">
        <div className="d-flex flex-column align-items-center gap-1 text-center">
          <a href={`mailto:${companyContact.email}`} className="text-white text-decoration-none">
            <i className="uil uil-envelope me-1" style={{ color: '#C8A951' }} />
            {companyContact.email}
          </a>
          <a href={`tel:${companyContact.phoneTel}`} className="text-white text-decoration-none">
            <i className="uil uil-phone me-1 site-top-bar-icon" />
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
                <i className={`${icon} site-top-bar-social-icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="site-top-bar site-top-bar-desktop d-none d-md-block">
        <div
          className="container d-flex flex-wrap justify-content-between align-items-center gap-2"
          style={{ maxWidth: '95%' }}
        >
          <div className="d-flex align-items-center gap-2">
            <i className="uil uil-map-marker site-top-bar-icon" />
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
                  <i className={`${icon} site-top-bar-social-icon`} />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${companyContact.email}`}
              className="text-white text-decoration-none d-flex align-items-center gap-1 fw-semibold"
            >
              <i className="uil uil-envelope site-top-bar-icon" />
              {companyContact.email}
            </a>
            <a
              href={`tel:${companyContact.phoneTel}`}
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <i className="uil uil-phone site-top-bar-icon" />
              {companyContact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteTopBar;
