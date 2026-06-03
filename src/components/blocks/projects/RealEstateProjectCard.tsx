import { FC } from 'react';
import theme from 'data/theme';
import { RealEstateProject } from 'data/real-estate-projects';

type Props = {
  project: RealEstateProject;
  imageHeight?: number;
};

const RealEstateProjectCard: FC<Props> = ({ project, imageHeight = 280 }) => {
  const isRunning = project.status === 'running';

  return (
    <div
      className="card border-0 h-100 overflow-hidden"
      style={{ backgroundColor: theme.white, boxShadow: theme.shadow }}
    >
      <div className="position-relative">
        <img
          className="card-img-top w-100"
          src={encodeURI(project.image)}
          alt={project.title}
          style={{ height: `${imageHeight}px`, objectFit: 'cover', objectPosition: 'center center' }}
        />
        <span
          className="badge position-absolute top-0 end-0 m-3"
          style={{
            fontSize: '0.75rem',
            padding: '6px 12px',
            backgroundColor: isRunning ? theme.primary : theme.success,
            color: theme.white
          }}
        >
          {isRunning ? 'Running' : 'Delivered'}
        </span>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex align-items-center mb-2">
          <i className="uil uil-map-marker me-1" style={{ color: theme.accent, fontSize: '1rem' }} />
          <small style={{ color: theme.textMuted, fontSize: '0.85rem', fontWeight: 500 }}>{project.location}</small>
        </div>

        <h5 className="card-title mb-2" style={{ color: theme.primaryDark, fontWeight: 700, fontSize: '1.15rem' }}>
          {project.title}
        </h5>

        <span
          className="badge align-self-start mb-3"
          style={{ backgroundColor: theme.accent, color: theme.primaryDark, fontWeight: 600, padding: '6px 12px' }}
        >
          {project.type}
        </span>

        <p className="card-text mb-3 flex-grow-1 small" style={{ color: theme.text, fontSize: '0.8rem', lineHeight: 1.5 }}>
          {project.description}
        </p>

        {project.highlights && (
          <div className="d-flex flex-wrap gap-2 mt-auto pt-2">
            {project.highlights.map((tag) => (
              <span
                key={tag}
                className="badge border"
                style={{
                  backgroundColor: theme.bgSoft,
                  color: theme.text,
                  fontWeight: 500,
                  borderColor: theme.bgWarm
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstateProjectCard;
