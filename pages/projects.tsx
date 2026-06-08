import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import SiteTopBar from 'components/common/SiteTopBar';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import ProjectListSection from 'components/blocks/projects/ProjectListSection';
import SectionIcon from 'components/blocks/projects/SectionIcon';
import { runningProjects, deliveredProjects } from 'data/real-estate-projects';

const ProjectsPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <SiteTopBar />
      <header className="wrapper mb-1 home-header" style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <div className="container py-0" style={{ maxWidth: '90%' }}>
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
                <p className="mb-0 small" style={{ fontSize: '0.875rem' }}>
                  Explore our portfolio of residential and commercial developments across Noida, Greater Noida, and the NCR region.
                </p>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-2">
              <a href="#delivered" className="btn btn-outline-primary btn-sm rounded-pill">Our Delivered</a>
              <a href="#running" className="btn btn-primary btn-sm rounded-pill">Our Running Projects</a>
            </div>
          </div>
        </section>

        <section className="wrapper bg-soft-primary">
          <div className="container pb-10" style={{ maxWidth: '90%' }}>
            <div className="project-delivered-wrap">
              <ProjectListSection
                id="delivered"
                title="Our Delivered"
                subtitle="Successfully completed developments with happy families and thriving communities."
                iconClass="uil uil-check-circle"
                projects={deliveredProjects}
                bgClass="bg-white"
                wide
              />
            </div>

            <div className="mt-8">
              <ProjectListSection
                id="running"
                title="Our Running Projects"
                subtitle="Currently under development — Sanskriti Villas and Sanskriti Kunj Garden."
                iconClass="uil uil-hard-hat"
                projects={runningProjects}
                bgClass="bg-light"
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
