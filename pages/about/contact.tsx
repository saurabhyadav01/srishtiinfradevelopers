import { NextPage } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import SiteTopBar from 'components/common/SiteTopBar';
import WhatsAppFloat from 'components/common/WhatsAppFloat';
import SectionIcon from 'components/blocks/projects/SectionIcon';
import companyContact from 'data/contact';
import theme from 'data/theme';

const inquiryOptions = [
  'Residential Plots',
  'Villas & Row Houses',
  'Apartments',
  'Commercial Property',
  'Site Visit Request',
  'General Enquiry'
];

const ContactPage: NextPage = () => {
  const heroImage = encodeURI('/img/WhatsApp Image 2025-11-05 at 17.52.44.jpeg');

  return (
    <Fragment>
      <PageProgress />
      <SiteTopBar />

      <header className="wrapper mb-0 home-header" style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <div className="container py-0" style={{ maxWidth: '95%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
      </header>

      <main className="content-wrapper">
        {/* Hero */}
        <section
          className="wrapper position-relative"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 36, 64, 0.72), rgba(15, 36, 64, 0.72)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container text-center text-white py-14 py-md-16" style={{ maxWidth: '90%' }}>
            <SectionIcon iconClass="uil uil-phone-volume" size={32} />
            <h1 className="display-4 fw-bold mb-3 text-white mt-3">Contact Us</h1>
            <p className="mb-4 mx-auto small" style={{ maxWidth: '620px', opacity: 0.92, fontSize: '0.95rem' }}>
              Schedule a site visit, ask about pricing, or book your plot at {companyContact.addressShort}.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <a href={companyContact.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-accent rounded-0">
                <i className="uil uil-whatsapp me-1" />
                WhatsApp Us
              </a>
              <a href={`tel:${companyContact.phoneTel}`} className="btn btn-outline-light rounded-0">
                <i className="uil uil-phone me-1" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="wrapper" style={{ backgroundColor: theme.bgSoft }}>
          <div className="container py-10 py-md-12" style={{ maxWidth: '95%' }}>
            <div className="text-center mb-8">
              <span className="section-label">Get In Touch</span>
              <h2 className="mb-2" style={{ color: theme.primaryDark }}>
                Visit Our Sales Office
              </h2>
              <p className="mb-0 small mx-auto" style={{ color: theme.textMuted, maxWidth: '560px' }}>
                {companyContact.name} — {companyContact.tagline}
              </p>
            </div>

            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card border-0 h-100 shadow-sm">
                  <div className="card-body p-4 p-md-5 text-center">
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 rounded-circle mx-auto"
                      style={{ width: 56, height: 56, backgroundColor: 'rgba(26, 54, 93, 0.1)' }}
                    >
                      <i className="uil uil-map-marker" style={{ fontSize: '1.5rem', color: theme.primary }} />
                    </div>
                    <h5 className="mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      Office Address
                    </h5>
                    <p className="mb-0 small" style={{ color: theme.text, lineHeight: 1.7 }}>
                      {companyContact.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 h-100 shadow-sm">
                  <div className="card-body p-4 p-md-5 text-center d-flex flex-column align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 rounded-circle"
                      style={{ width: 56, height: 56, backgroundColor: 'rgba(200, 169, 81, 0.2)' }}
                    >
                      <i className="uil uil-phone" style={{ fontSize: '1.5rem', color: theme.accentDark }} />
                    </div>
                    <h5 className="mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      Call Us
                    </h5>
                    <a
                      href={`tel:${companyContact.phoneTel}`}
                      className="mb-3"
                      style={{ fontSize: '1.15rem', fontWeight: 700, color: theme.primary, textDecoration: 'none' }}
                    >
                      {companyContact.phone}
                    </a>
                    <a
                      href={companyContact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-accent rounded-pill mt-auto"
                    >
                      <i className="uil uil-whatsapp me-1" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 h-100 shadow-sm">
                  <div className="card-body p-4 p-md-5 text-center">
                    <div
                      className="d-flex align-items-center justify-content-center mb-3 rounded-circle mx-auto"
                      style={{ width: 56, height: 56, backgroundColor: 'rgba(26, 54, 93, 0.1)' }}
                    >
                      <i className="uil uil-envelope" style={{ fontSize: '1.5rem', color: theme.primary }} />
                    </div>
                    <h5 className="mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      Email & Social
                    </h5>
                    <a href={`mailto:${companyContact.email}`} className="d-block mb-3 small" style={{ color: theme.primary }}>
                      {companyContact.email}
                    </a>
                    <div className="d-flex justify-content-center gap-3">
                      {companyContact.socialLinks.map(({ id, icon, url, label }) => (
                        <a
                          key={id}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={label}
                          title={label}
                          style={{ color: theme.primary, fontSize: '1.25rem' }}
                        >
                          <i className={icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form + info */}
        <section className="wrapper bg-white">
          <div className="container py-10 py-md-12 pb-14" style={{ maxWidth: '95%' }}>
            <div className="row gx-lg-8 gy-8 align-items-start">
              <div className="col-lg-5">
                <span className="section-label">Enquiry</span>
                <h3 className="mb-3" style={{ color: theme.primaryDark }}>
                  How Can We Help You?
                </h3>
                <p className="mb-4 small" style={{ color: theme.text, lineHeight: 1.7 }}>
                  Share your requirement and our sales team will contact you with project details, payment plans,
                  and site visit scheduling.
                </p>
                <ul className="icon-list bullet-primary mb-5">
                  <li className="small">Free site visits for running projects</li>
                  <li className="small">Transparent pricing and RERA-registered developments</li>
                  <li className="small">Assistance with home loan and documentation</li>
                  <li className="small">Plots, villas, apartments & commercial options</li>
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  <Link href="/projects#running" className="btn btn-outline-primary rounded-pill">
                    Running Projects
                  </Link>
                  <Link href="/projects#delivered" className="btn btn-outline-primary rounded-pill">
                    Delivered Projects
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4 p-md-5">
                    <h4 className="mb-4" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      Send Us a Message
                    </h4>
                    <form
                      action={`mailto:${companyContact.email}`}
                      method="post"
                      encType="text/plain"
                      className="row g-3"
                    >
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Your Name *</label>
                        <input type="text" name="name" className="form-control" placeholder="Full name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label small fw-semibold">Phone Number *</label>
                        <input type="tel" name="phone" className="form-control" placeholder="+91" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Email Address</label>
                        <input type="email" name="email" className="form-control" placeholder="your@email.com" />
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Interested In</label>
                        <select name="interest" className="form-select" defaultValue="">
                          <option value="">Select property type</option>
                          {inquiryOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label small fw-semibold">Your Message *</label>
                        <textarea
                          name="message"
                          className="form-control"
                          rows={4}
                          placeholder="Tell us about your requirement, preferred location, or budget..."
                          required
                        />
                      </div>
                      <div className="col-12 d-flex flex-wrap gap-2 justify-content-between align-items-center">
                        <button type="submit" className="btn btn-accent rounded-0">
                          Submit Enquiry
                        </button>
                        <span className="small text-muted">Or reach us instantly on WhatsApp</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
      <WhatsAppFloat />
    </Fragment>
  );
};

export default ContactPage;
