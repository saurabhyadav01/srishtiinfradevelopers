import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';

const latestImages: string[] = [
  '/img/WhatsApp Image 2025-09-29 at 11.56.20.jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.21.jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.21 (1).jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.21 (2).jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.21 (3).jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.22.jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.22 (1).jpeg',
  '/img/WhatsApp Image 2025-09-29 at 11.56.22 (2).jpeg',
  '/img/WhatsApp Image 2025-10-04 at 13.39.11.jpeg',
  '/img/WhatsApp Image 2025-10-04 at 13.39.12.jpeg',
  '/img/WhatsApp Image 2025-10-04 at 13.39.12 (1).jpeg',
  '/img/WhatsApp Image 2025-10-04 at 13.39.12 (2).jpeg',
  '/img/WhatsApp Image 2025-10-04 at 13.39.13.jpeg'
];

const ProjectsPage: NextPage = () => {
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
                <img src="/img/icons/lineal/portfolio.svg" alt="Projects Icon" width={28} height={28} className="me-2" />
                <h1 className="mb-0">Projects</h1>
              </div>
            </div>

            <div className="row g-4">
              {latestImages.map((src, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img className="card-img-top" src={encodeURI(src)} alt={`Project ${idx + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectsPage;


