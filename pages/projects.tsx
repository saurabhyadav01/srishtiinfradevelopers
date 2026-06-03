import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import SiteTopBar from 'components/common/SiteTopBar';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import ProjectSection from 'components/blocks/projects/ProjectSection';
import SectionIcon from 'components/blocks/projects/SectionIcon';
import { runningProjects, deliveredProjects } from 'data/real-estate-projects';

const ProjectsPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <SiteTopBar />
      <header className="wrapper mb-1" style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ maxWidth: '90%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-12 pt-md-14 pb-6" style={{ maxWidth: '90%' }}>
            <div className="row mb-4">
              <div className="col-lg-10">
                <div className="d-flex align-items-center mb-3">
                  <SectionIcon iconClass="uil uil-building" size={28} />
                  <h1 className="mb-0 ms-3">Our Projects</h1>
                </div>
                <p className="lead mb-0">
                  Explore our portfolio of residential and commercial developments across Noida, Greater Noida, and the NCR region.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-2">
              <a href="#running" className="btn btn-primary btn-sm rounded-pill">Running Projects</a>
              <a href="#delivered" className="btn btn-outline-primary btn-sm rounded-pill">Delivered Projects</a>
            </div>
          </div>
        </section>

        <section className="wrapper bg-soft-primary">
          <div className="container pb-10" style={{ maxWidth: '90%' }}>
            <ProjectSection
              id="running"
              title="Our Running Projects"
              subtitle="Currently under development — premium residential and commercial projects shaping the future of NCR real estate."
              iconClass="uil uil-hard-hat"
              projects={runningProjects}
              bgClass="bg-light"
              imageHeight={280}
            />

            <div className="mt-8">
              <ProjectSection
                id="delivered"
                title="Our Delivered Projects"
                subtitle="Successfully completed developments with happy families and thriving communities."
                iconClass="uil uil-check-circle"
                projects={deliveredProjects}
                bgClass="bg-soft-primary"
                imageHeight={280}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default ProjectsPage;
