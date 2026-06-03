import { FC } from 'react';
import Link from 'next/link';
import { runningProjects } from 'data/real-estate-projects';
import theme from 'data/theme';

const featuredTitles = ['Sanskriti Villas', 'Sanskriti Kunj Garden', 'Sanskriti Row Houses'];
const featured = featuredTitles
  .map((title) => runningProjects.find((p) => p.title === title))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const HomeFeaturedProperties: FC = () => {
  return (
    <section className="wrapper bg-white py-10 py-md-12">
      <div className="container" style={{ maxWidth: '95%' }}>
        <div className="text-center mb-8">
          <i className="uil uil-estate d-block mb-2" style={{ fontSize: '2rem', color: theme.primary }} />
          <h2 className="mb-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>
            <span style={{ color: theme.text }}>Featured </span>
            <span style={{ color: '#C45C4C' }}>Properties</span>
          </h2>
        </div>

        <div className="row g-4">
          {featured.map((project) => (
            <div key={project.id} className="col-md-4">
              <Link href="/projects#running" className="text-decoration-none">
                <div
                  className="card border-0 h-100 overflow-hidden"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="position-relative">
                    <img
                      src={encodeURI(project.image)}
                      alt={project.title}
                      className="w-100"
                      style={{ height: '260px', objectFit: 'cover' }}
                    />
                    <span
                      className="position-absolute top-0 start-0 m-3 badge rounded-0 px-3 py-2"
                      style={{ backgroundColor: theme.primary, fontSize: '0.75rem' }}
                    >
                      Under Development
                    </span>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="mb-2" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      {project.title}
                    </h5>
                    <p className="mb-2 small" style={{ color: theme.textMuted }}>
                      <i className="uil uil-map-marker me-1" />
                      {project.location}
                    </p>
                    <span
                      className="badge rounded-0"
                      style={{ backgroundColor: '#C45C4C', color: '#fff', fontWeight: 500 }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/projects" className="btn rounded-0 px-5" style={{ backgroundColor: '#C45C4C', color: '#fff', border: 'none' }}>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProperties;
