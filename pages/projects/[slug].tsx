import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import SiteTopBar from 'components/common/SiteTopBar';
import WhatsAppFloat from 'components/common/WhatsAppFloat';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import ProjectDetail from 'components/blocks/projects/ProjectDetail';
import companyContact from 'data/contact';
import { RealEstateProject, getProjectBySlug, uniqueProjects } from 'data/real-estate-projects';

type Props = {
  project: RealEstateProject;
  relatedProjects: RealEstateProject[];
};

const ProjectPage: NextPage<Props> = ({ project, relatedProjects }) => {
  return (
    <Fragment>
      <Head>
        <title>{`${project.title} | ${companyContact.name}`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <PageProgress />
      <SiteTopBar />

      <header className="wrapper mb-0 home-header" style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <div className="container py-0" style={{ maxWidth: '90%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
      </header>

      <main className="content-wrapper project-detail-page">
        <ProjectDetail project={project} relatedProjects={relatedProjects} />
        <WhatsAppFloat />
      </main>

      <Footer8 />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: uniqueProjects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { notFound: true };
  }

  const relatedProjects = uniqueProjects.filter((item) => item.slug !== slug);

  return { props: { project, relatedProjects } };
};

export default ProjectPage;
