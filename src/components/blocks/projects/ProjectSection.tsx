import { FC } from 'react';
import { RealEstateProject } from 'data/real-estate-projects';
import theme from 'data/theme';
import RealEstateProjectCard from './RealEstateProjectCard';
import SectionIcon from './SectionIcon';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  iconClass: string;
  projects: RealEstateProject[];
  bgClass?: string;
  imageHeight?: number;
  featured?: boolean;
};

const ProjectSection: FC<Props> = ({
  id,
  title,
  subtitle,
  iconClass,
  projects,
  bgClass = 'bg-light',
  imageHeight,
  featured = false
}) => {
  return (
    <section id={id} className={`wrapper ${bgClass} rounded-3`}>
      <div className="container py-8 py-md-10" style={{ maxWidth: '100%' }}>
        <div className="row mb-6 align-items-center">
          <div className="col-lg-12">
            <div className="d-flex align-items-center mb-3">
              <SectionIcon iconClass={iconClass} />
              <h2 className="mb-0 ms-3" style={{ color: theme.primaryDark }}>{title}</h2>
            </div>
            <p className="lead mb-0" style={{ color: theme.textMuted }}>{subtitle}</p>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={featured ? 'col-12' : 'col-12 col-sm-6 col-lg-4'}
            >
              <RealEstateProjectCard
                project={project}
                imageHeight={imageHeight ?? (featured ? 480 : 320)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
