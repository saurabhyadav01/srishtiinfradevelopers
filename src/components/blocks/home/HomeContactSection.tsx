import { FC } from 'react';
import Link from 'next/link';
import companyContact from 'data/contact';
import theme from 'data/theme';

const HomeContactSection: FC = () => {
  return (
    <section className="wrapper" style={{ backgroundColor: theme.bgSoft }}>
      <div className="container py-10 py-md-12" style={{ maxWidth: '95%' }}>
        <div className="text-center mb-8">
          <span className="section-label">Get In Touch</span>
          <h2 className="mb-2" style={{ color: theme.primaryDark, fontFamily: "'Playfair Display', serif" }}>
            Visit Our Sales Office
          </h2>
          <p style={{ color: theme.textMuted, maxWidth: '560px', margin: '0 auto' }}>
            Connect with us for site visits, pricing, and booking at Sanskriti Garden, Noida Extension.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="card border-0 h-100 shadow-sm">
              <div className="card-body p-5">
                <div
                  className="d-flex align-items-center justify-content-center mb-4 rounded-circle mx-auto"
                  style={{ width: 64, height: 64, backgroundColor: 'rgba(26, 54, 93, 0.1)' }}
                >
                  <i className="uil uil-map-marker" style={{ fontSize: '1.75rem', color: theme.primary }} />
                </div>
                <h5 className="text-center mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                  Office Address
                </h5>
                <p className="text-center mb-0" style={{ color: theme.text, lineHeight: 1.8 }}>
                  {companyContact.address}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 h-100 shadow-sm">
              <div className="card-body p-5 d-flex flex-column align-items-center justify-content-center text-center">
                <div
                  className="d-flex align-items-center justify-content-center mb-4 rounded-circle"
                  style={{ width: 64, height: 64, backgroundColor: 'rgba(200, 169, 81, 0.2)' }}
                >
                  <i className="uil uil-phone" style={{ fontSize: '1.75rem', color: theme.accentDark }} />
                </div>
                <h5 className="mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                  Call Us
                </h5>
                <a
                  href={`tel:${companyContact.phoneTel}`}
                  className="d-block mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: 700, color: theme.primary, textDecoration: 'none' }}
                >
                  {companyContact.phone}
                </a>
                <a
                  href={companyContact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent rounded-pill"
                >
                  <i className="uil uil-whatsapp me-1" />
                  WhatsApp Us
                </a>
                <p className="mt-4 mb-0 small" style={{ color: theme.textMuted }}>
                  <a href={`mailto:${companyContact.email}`} style={{ color: theme.primary }}>
                    {companyContact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/about/contact" className="btn btn-outline-primary rounded-pill">
            Contact Form
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
