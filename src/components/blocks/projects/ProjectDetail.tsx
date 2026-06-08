import Link from 'next/link';
import { FC } from 'react';
import companyContact from 'data/contact';
import { RealEstateProject, getProjectHref } from 'data/real-estate-projects';
import theme from 'data/theme';

type Props = {
  project: RealEstateProject;
  relatedProjects: RealEstateProject[];
};

const highlightIcons: Record<string, string> = {
  Delivered: 'uil-check-circle',
  Running: 'uil-hard-hat',
  Villas: 'uil-home',
  Plots: 'uil-map',
  Township: 'uil-building',
  Community: 'uil-users-alt',
  RERA: 'uil-shield-check',
  'Gated Community': 'uil-lock',
  'Clear Titles': 'uil-file-check-alt',
  Infrastructure: 'uil-road',
  Garden: 'uil-trees',
  Commercial: 'uil-store',
  Retail: 'uil-shopping-bag'
};

const getHighlightIcon = (label: string) => highlightIcons[label] ?? 'uil-star';

const ProjectDetail: FC<Props> = ({ project, relatedProjects }) => {
  const isRunning = project.status === 'running';
  const whatsappMessage = encodeURIComponent(`Hi, I would like to enquire about ${project.title}.`);

  return (
    <div className="project-detail-page">
      {/* Hero */}
      <section className="project-detail-hero">
        <div
          className="project-detail-hero-bg"
          style={{ backgroundImage: `url("${encodeURI(project.image)}")` }}
        />
        <div className="project-detail-hero-overlay" />

        <div className="container project-detail-hero-content py-12 py-md-15">
          <nav className="project-detail-breadcrumb text-white mb-4" aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/projects">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </nav>

          <div className="row align-items-end g-4">
            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className={`project-detail-badge project-detail-badge--${project.status}`}>
                  {isRunning ? 'Running Project' : 'Delivered Project'}
                </span>
                <span className="project-detail-badge project-detail-badge--type">{project.type}</span>
              </div>

              <h1 className="project-detail-title text-white">{project.title}</h1>
              <p className="project-detail-location text-white">
                <i className="uil uil-map-marker" />
                {project.location}
              </p>
            </div>

            <div className="col-lg-4">
              <div className="project-detail-hero-actions d-flex flex-wrap gap-2 justify-content-lg-end">
                <Link href="/about/contact" className="btn btn-accent rounded-pill px-4">
                  Enquire Now
                </Link>
                <a
                  href={`${companyContact.whatsappUrl}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-hero rounded-pill px-4"
                >
                  <i className="uil uil-whatsapp me-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats strip */}
      <section className="project-detail-stats">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-md-3">
              <div className="project-detail-stat">
                <i className={`uil ${isRunning ? 'uil-hard-hat' : 'uil-check-circle'}`} />
                <span className="project-detail-stat-label">Status</span>
                <strong>{isRunning ? 'Under Development' : 'Delivered'}</strong>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="project-detail-stat">
                <i className="uil uil-estate" />
                <span className="project-detail-stat-label">Property Type</span>
                <strong>{project.type}</strong>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="project-detail-stat">
                <i className="uil uil-map-marker" />
                <span className="project-detail-stat-label">Location</span>
                <strong>{project.location.split(',')[0]}</strong>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="project-detail-stat">
                <i className="uil uil-shield-check" />
                <span className="project-detail-stat-label">Compliance</span>
                <strong>RERA Registered</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="wrapper bg-white">
        <div className="container py-10 py-md-14 project-detail-body">
          <div className="row g-5 g-xl-6">
            <div className="col-lg-8">
              <span className="section-label">Overview</span>
              <h2 className="project-detail-section-title">About This Project</h2>
              <p className="project-detail-description">{project.description}</p>

              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <span className="section-label">Features</span>
                  <h3 className="project-detail-section-title h4">Key Highlights</h3>
                  <div className="row g-3">
                    {project.highlights.map((item) => (
                      <div key={item} className="col-sm-6 col-lg-4">
                        <div className="project-detail-feature-card">
                          <span className="project-detail-feature-icon">
                            <i className={`uil ${getHighlightIcon(item)}`} />
                          </span>
                          <span className="project-detail-feature-text">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-detail-gallery">
                <span className="section-label">Gallery</span>
                <h3 className="project-detail-section-title h4">Project Photos</h3>

                <div className="project-detail-image-frame mb-4">
                  <img src={encodeURI(project.image)} alt={project.title} />
                  <div className="project-detail-image-caption">
                    <span>{project.title}</span>
                    <span>{project.location}</span>
                  </div>
                </div>

                {(project.gallery?.length ?? 0) > 1 && (
                  <div className="row g-3">
                    {project.gallery!.slice(1).map((src, index) => (
                      <div key={src} className="col-sm-6 col-lg-4">
                        <div className="project-detail-gallery-item">
                          <img src={encodeURI(src)} alt={`${project.title} photo ${index + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {project.video && (
                  <div className="project-detail-video mt-4">
                    <h4 className="h5 mb-3" style={{ color: theme.primaryDark }}>Project Video</h4>
                    <video controls className="w-100 rounded-3" style={{ maxHeight: '420px', background: '#000' }}>
                      <source src={encodeURI(project.video)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="project-detail-sidebar">
                <div className="project-detail-sidebar-head">
                  <h3 className="project-detail-sidebar-title">Interested in this project?</h3>
                  <p className="project-detail-sidebar-text">Speak with our sales team for pricing, site visits, and booking details.</p>
                </div>

                <ul className="list-unstyled project-detail-meta mb-4">
                  <li>
                    <i className="uil uil-info-circle" />
                    <div>
                      <span>Status</span>
                      <strong>{isRunning ? 'Under Development' : 'Delivered'}</strong>
                    </div>
                  </li>
                  <li>
                    <i className="uil uil-building" />
                    <div>
                      <span>Property Type</span>
                      <strong>{project.type}</strong>
                    </div>
                  </li>
                  <li>
                    <i className="uil uil-map-marker" />
                    <div>
                      <span>Location</span>
                      <strong>{project.location}</strong>
                    </div>
                  </li>
                  <li>
                    <i className="uil uil-shield-check" />
                    <div>
                      <span>Developer</span>
                      <strong>{companyContact.name}</strong>
                    </div>
                  </li>
                </ul>

                <div className="d-grid gap-2">
                  <Link href="/about/contact" className="btn btn-primary rounded-pill">
                    <i className="uil uil-envelope me-1" />
                    Enquire Now
                  </Link>
                  <a
                    href={`${companyContact.whatsappUrl}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp-side rounded-pill"
                  >
                    <i className="uil uil-whatsapp me-1" />
                    WhatsApp Us
                  </a>
                  <a href={`tel:${companyContact.phoneTel}`} className="btn btn-outline-primary rounded-pill">
                    <i className="uil uil-phone me-1" />
                    Call {companyContact.phone}
                  </a>
                </div>

                <p className="project-detail-sidebar-note mb-0">
                  <i className="uil uil-clock-eight me-1" />
                  Site visits available by appointment
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="wrapper project-detail-related">
          <div className="container py-10 py-md-12">
            <div className="text-center mb-8">
              <span className="section-label">Explore More</span>
              <h2 className="project-detail-section-title mb-2">Other Projects</h2>
              <p className="mb-0 small" style={{ color: theme.textMuted }}>
                Discover more developments by {companyContact.name}
              </p>
            </div>

            <div className="row g-4">
              {relatedProjects.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <Link href={getProjectHref(item.slug)} className="project-detail-related-card text-decoration-none">
                    <div className="project-detail-related-image">
                      <img src={encodeURI(item.image)} alt={item.title} />
                      <span className={`project-detail-related-badge project-detail-related-badge--${item.status}`}>
                        {item.status === 'running' ? 'Running' : 'Delivered'}
                      </span>
                    </div>
                    <div className="project-detail-related-body">
                      <h4>{item.title}</h4>
                      <p>
                        <i className="uil uil-map-marker" />
                        {item.location}
                      </p>
                      <span className="project-detail-related-type">{item.type}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="project-detail-cta">
        <div className="container py-10 py-md-12 text-center">
          <h2 className="project-detail-cta-title mb-3">Ready to book your property?</h2>
          <p className="project-detail-cta-text mb-4 mx-auto">
            Get in touch with {companyContact.name} for transparent pricing, registry support, and smooth possession handover.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Link href="/about/contact" className="btn btn-primary rounded-pill px-4">
              Schedule Site Visit
            </Link>
            <Link href="/projects" className="btn btn-outline-primary rounded-pill px-4">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
