import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Contact9: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{ backgroundImage: 'url(/img/hero/10.jpg)' }}
    >
      <div className="container py-18">
        <div className="row text-center">
          <div className="col-lg-11 col-xl-10 col-xxl-8 mx-auto">
            <h2 className="fs-16 text-uppercase text-white mb-3">SUBSCRIBE TO OUR MAILING LIST</h2>
            <h3 className="display-4 mb-6 text-white px-lg-5 px-xxl-0">
            By signing up for our newsletter.
             We always put our customers first. Contact us by using the form below, and we will get back to you as soon as we can. you!
            </h3>
            {/* <NextLink title="Join Us" href="#" className="btn btn-white rounded-pill mb-0 text-nowrap" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact9;
