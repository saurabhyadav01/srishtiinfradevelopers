import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';

const ContactThree: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
      <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
      </header>

      <main className="content-wrapper">
        {/* Hero header */}
        <section className="wrapper" style={{
          backgroundImage: 'linear-gradient(rgba(15,23,42,.65), rgba(15,23,42,.65)), url(/img/hero/07.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="container text-center text-white py-18 py-md-20">
            <h1 className="display-2 fw-bold mb-2 text-white">Connect with us</h1>
            <p className="lead mb-0">We are here to help you with solutions tailored to your needs.</p>
          </div>
        </section>

        {/* Locations strip */}
        <section className="wrapper bg-light">
          <div className="container py-6 py-md-8">
            <div className="row g-4 g-lg-5 align-items-stretch">
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-5">
                    <h6 className="text-primary fw-semibold mb-2">USA</h6>
                    <h5 className="mb-2">Srishti Infra Developers</h5>
                    <p className="mb-3">56 Tisdale Drive, Dover, MA 02030, USA</p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="uil uil-phone-volume text-primary me-2" />
                      <span>+1&nbsp;302&nbsp;5203&nbsp;211</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="uil uil-envelope text-primary me-2" />
                      <a href="mailto:info@thissrishtiinfradevelopers.com">info@thissrishtiinfradevelopers.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-5">
                    <h6 className="text-primary fw-semibold mb-2">INDIA</h6>
                    <h5 className="mb-2">Srishti Infra Developers</h5>
                    <p className="mb-3">4th Floor, Urbtech Trade Center, Sector 153, Noida, India</p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="uil uil-phone-volume text-primary me-2" />
                      <span>+91&nbsp;88846&nbsp;30503</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="uil uil-envelope text-primary me-2" />
                      <a href="mailto:info@thissrishtiinfradevelopers.com">info@thissrishtiinfradevelopers.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact content + form (left content, right form) */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row gx-6 gy-6 align-items-start">
              {/* Left content */}
              <div className="col-lg-6">
                <h3 className="mb-3">Connect with us</h3>
                <p className="lead mb-4">Obtain further information by getting in touch with experienced team.</p>
                <ul className="icon-list bullet-primary mb-4">
                  <li>Solution consulting for Cloud, Applications and Databases</li>
                  <li>RFP/RFI responses and capability presentations</li>
                  <li>Estimate, timelines and engagement models</li>
                </ul>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex align-items-center">
                    <i className="uil uil-envelope text-primary me-2" />
                    <a href="mailto:info@thissrishtiinfradevelopers.com">info@thissrishtiinfradevelopers.com</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="uil uil-phone-volume text-primary me-2" />
                    <span>USA: +1-603-9300-375 | India: +91 96506 23339</span>
                  </div>
                </div>
              </div>

              {/* Right form */}
              <div className="col-lg-6">
                <div className="card shadow-lg border-0">
                  <div className="card-body p-4 p-md-5">
                    <form action="#" method="post" className="row g-3">
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Enter your name" required />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Enter your Company Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Enter your email address" required />
                      </div>
                      <div className="col-md-6">
                        <input type="tel" className="form-control" placeholder="Enter your contact Number" />
                      </div>
                      <div className="col-12">
                        <select className="form-select">
                          <option value="" defaultValue="">Select a Service</option>
                          <option>Cloud & Infrastructure</option>
                          <option>Applications (Oracle / Microsoft)</option>
                          <option>Database & Data Platforms</option>
                          <option>Managed Services</option>
                          <option>Licensing & Advisory</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea className="form-control" rows={5} placeholder="Please describe what you need" />
                      </div>
                      <div className="col-12 text-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ContactThree;
