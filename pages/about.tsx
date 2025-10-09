import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <header className="wrapper mb-1">
        <div className="container" style={{ maxWidth: '90%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-12 pt-md-14 pb-10" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center">
                <img src="/img/icons/lineal/rocket.svg" alt="About Icon" width={28} height={28} className="me-2" />
                <h1 className="mb-0">About Srishti Infra Developers</h1>
              </div>
            </div>

            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <p className="lead mb-4">
                  We are committed to delivering quality plots and real estate solutions, ensuring transparency,
                  trust, and long-term value for our customers.
                </p>
                <p>
                  Our team brings experience across site development, documentation, and customer service so you can
                  focus on choosing the right investment with confidence.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-sm border-0">
                  <img className="card-img-top" src={encodeURI('/img/WhatsApp Image 2025-10-04 at 13.39.13.jpeg')} alt="About Srishti Infra" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default AboutPage;


