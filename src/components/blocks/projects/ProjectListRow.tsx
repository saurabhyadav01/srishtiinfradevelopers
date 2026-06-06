import { CSSProperties, FC } from 'react';
import theme from 'data/theme';
import { RealEstateProject } from 'data/real-estate-projects';

type Props = {
  project: RealEstateProject;
  index: number;
};

const ProjectListRow: FC<Props> = ({ project, index }) => {
  const isRunning = project.status === 'running';

  return (
    <article
      className={`project-list-row project-list-row--${project.status}`}
      style={{ '--row-accent': isRunning ? theme.primary : theme.success } as CSSProperties}
    >
      <div className="project-list-index">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className="project-list-icons">
        {(project.highlights ?? []).slice(0, 4).map((item) => (
          <span key={item} className="project-list-chip" title={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="project-list-info">
        <span className={`project-list-badge project-list-badge--${project.status}`}>
          {isRunning ? 'Running' : 'Delivered'}
        </span>
        <h4 className="project-list-title">{project.title}</h4>
        <p className="project-list-location">
          <i className="uil uil-map-marker" />
          {project.location}
        </p>
        <span className="project-list-type">{project.type}</span>
      </div>

      <div className="project-list-action">
        <i className="uil uil-arrow-right" />
      </div>
    </article>
  );
};

export default ProjectListRow;
