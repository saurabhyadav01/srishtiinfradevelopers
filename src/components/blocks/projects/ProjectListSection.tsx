import { FC } from 'react';
import { RealEstateProject } from 'data/real-estate-projects';
import SectionIcon from './SectionIcon';
import ProjectListRow from './ProjectListRow';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  iconClass: string;
  projects: RealEstateProject[];
  bgClass?: string;
  wide?: boolean;
};

const ProjectListSection: FC<Props> = ({ id, title, subtitle, iconClass, projects, bgClass = 'bg-light', wide = false }) => {
  return (
    <section id={id} className={`wrapper ${bgClass} rounded-3${wide ? ' project-section-wide' : ''}`}>
      <div className="container py-8 py-md-10 project-section-container">
        <div className="project-section-header">
          <div className="project-section-header-main">
            <SectionIcon iconClass={iconClass} />
            <div>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <h2 className="project-section-title mb-0">{title}</h2>
                <span className="project-section-count">{projects.length} Projects</span>
              </div>
              <p className="project-section-subtitle mb-0">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="project-list-stack">
          {projects.map((project, index) => (
            <ProjectListRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectListSection;
