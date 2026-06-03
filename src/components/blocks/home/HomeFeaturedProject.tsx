import { FC } from 'react';
import Link from 'next/link';
import { featuredProject } from 'data/home';
import theme from 'data/theme';

const HomeFeaturedProject: FC = () => {
  return (
    <section className="wrapper" style={{ backgroundColor: theme.bgSoft }}>
      <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
        <div className="row mb-6 align-items-end">
          <div className="col-lg-8">
            <span className="section-label">Featured Project</span>
            <h2 className="display-5 mb-2" style={{ color: theme.primaryDark }}>{featuredProject.title}</h2>
            <p className="lead mb-0" style={{ color: theme.textMuted }}>{featuredProject.location}</p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <span className="badge rounded-pill px-3 py-2 me-2" style={{ backgroundColor: theme.primary, color: theme.white }}>
              {featuredProject.status}
            </span>
            <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: theme.accent, color: theme.primaryDark }}>
              {featuredProject.type}
            </span>
          </div>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <div className="card border-0 h-100 overflow-hidden" style={{ boxShadow: theme.shadow }}>
              <div className="card-body p-0">
                <video
                  controls
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  poster={featuredProject.videoPoster}
                >
                  <source src={featuredProject.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 h-100 bg-white" style={{ boxShadow: theme.shadow }}>
              <img
                className="card-img-top"
                src={encodeURI(featuredProject.image)}
                alt={featuredProject.title}
                style={{ height: '360px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <p className="mb-4" style={{ lineHeight: '1.7', color: theme.text }}>
                  {featuredProject.description}
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {featuredProject.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="badge border"
                      style={{ backgroundColor: theme.bgSoft, color: theme.text, fontWeight: 500, borderColor: theme.bgWarm }}
                    >
                      <i className="uil uil-check me-1" style={{ color: theme.accent }} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto d-flex flex-wrap gap-1">
                  <Link href="/projects#running" className="btn btn-accent rounded-pill">
                    View Project Details
                  </Link>
                  <a
                    className="btn btn-outline-primary rounded-pill"
                    href={featuredProject.brochureUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProject;
