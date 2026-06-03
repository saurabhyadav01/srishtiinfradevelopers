import { FC } from 'react';
import Link from 'next/link';

import theme from 'data/theme';

const HomeInquiryBanner: FC = () => {
  return (
    <section className="wrapper" style={{ background: theme.gradientAccent }}>
      <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
        <div className="row align-items-center">
          <div className="col-lg-7 text-white mb-4 mb-lg-0">
            <h2 className="display-5 mb-3 text-white">Ready to Invest in Your Dream Property?</h2>
            <p className="lead mb-0" style={{ opacity: 0.9 }}>
              Schedule a free site visit, explore our running projects, or speak with our sales team today.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
              <a href="tel:+919999625939" className="btn btn-accent btn-lg rounded-pill">
                <i className="uil uil-phone me-2" />
                +91 99996 25939
              </a>
              <Link href="/about/contact" className="btn btn-outline-white btn-lg rounded-pill">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInquiryBanner;
