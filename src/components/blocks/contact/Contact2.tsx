import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Contact2: FC = () => {
  return (
    <div className="row gx-0">
      <div
        className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
        style={{ backgroundImage: 'url(/img/photos/tm1.jpg)' }}
      />

      <div className="col-lg-6">
        <div className="p-10 p-md-11 p-lg-13">
          <h2 className="display-4 mb-3">Connect with Us</h2>

          <p className="lead fs-lg">
            Ready to transform your business with Oracle EBS & Cloud ERP solutions? Let's discuss how we can help you achieve your goals.
          </p>

          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="icon btn btn-circle btn-primary disabled me-3">
                  <i className="uil uil-phone-volume" />
                </div>
                <div>
                  <h6 className="mb-1">Call Us</h6>
                  <p className="mb-0 text-muted">India: +91 99996 25939</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="icon btn btn-circle btn-primary disabled me-3">
                  <i className="uil uil-envelope" />
                </div>
                <div>
                  <h6 className="mb-1">Email Us</h6>
                  <p className="mb-0 text-muted">info@thissrishtiinfradevelopers.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="icon btn btn-circle btn-primary disabled me-3">
                  <i className="uil uil-clock" />
                </div>
                <div>
                  <h6 className="mb-1">Business Hours</h6>
                  <p className="mb-0 text-muted">Mon-Fri: 9AM-6PM</p>
                  <p className="mb-0 text-muted">24/7 Support Available</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="icon btn btn-circle btn-primary disabled me-3">
                  <i className="uil uil-globe" />
                </div>
                <div>
                  <h6 className="mb-1">Global Presence</h6>
                  <p className="mb-0 text-muted">USA & India Offices</p>
                  <p className="mb-0 text-muted">Remote Support Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <NextLink title="Get Started" href="/contact-1" className="btn btn-primary rounded-pill mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Contact2;
