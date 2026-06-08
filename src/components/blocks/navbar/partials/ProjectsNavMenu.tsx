import Link from 'next/link';
import { FC, ReactNode } from 'react';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
import { deliveredProjects, getProjectHref, runningProjects } from 'data/real-estate-projects';

const Level2Toggle: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <a href="#" className={`dropdown-item projects-nav-level2-toggle ${className}`} onClick={(e) => e.preventDefault()}>
    {children}
  </a>
);

const ProjectsNavMenu = () => {
  return (
    <li className="nav-item dropdown projects-nav d-none d-lg-block">
      <DropdownToggleLink title="PROJECTS" className="nav-link dropdown-toggle" />

      <div className="dropdown-menu projects-nav-menu border-0 p-0">
        <div className="projects-nav-header">
          <span className="projects-nav-header-title">Explore Our Portfolio</span>
          <span className="projects-nav-header-sub">Select a category to view projects</span>
        </div>

        <ul className="projects-nav-level2 list-unstyled mb-0 d-flex">
          <li className="dropdown dropdown-submenu dropend projects-nav-group projects-nav-delivered">
            <Level2Toggle className="p-0 border-0">
              <span className="projects-nav-level2-btn">
                <span className="projects-nav-icon">
                  <i className="uil uil-check-circle" />
                </span>
                <span>
                  <span className="projects-nav-heading">Our Delivered</span>
                  <span className="projects-nav-count">{deliveredProjects.length} Projects</span>
                </span>
                <i className="uil uil-angle-right-b projects-nav-chevron" />
              </span>
            </Level2Toggle>

            <ul className="dropdown-menu projects-nav-level3 border-0 shadow-lg py-2">
              <li className="projects-nav-level3-title px-3 pb-2">Delivered Projects</li>
              {deliveredProjects.map((project) => (
                <li key={project.id}>
                  <Link href={getProjectHref(project.slug)} className="dropdown-item projects-nav-link">
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <hr className="dropdown-divider my-2" />
              </li>
              <li>
                <Link href="/#delivered" className="dropdown-item projects-nav-viewall-inline">
                  View All Delivered
                  <i className="uil uil-arrow-right ms-1" />
                </Link>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-submenu dropend projects-nav-group projects-nav-running">
            <Level2Toggle className="p-0 border-0">
              <span className="projects-nav-level2-btn">
                <span className="projects-nav-icon projects-nav-icon-running">
                  <i className="uil uil-hard-hat" />
                </span>
                <span>
                  <span className="projects-nav-heading">Our Running Projects</span>
                  <span className="projects-nav-count">{runningProjects.length} Projects</span>
                </span>
                <i className="uil uil-angle-right-b projects-nav-chevron" />
              </span>
            </Level2Toggle>

            <ul className="dropdown-menu projects-nav-level3 border-0 shadow-lg py-2">
              <li className="projects-nav-level3-title px-3 pb-2">Running Projects</li>
              {runningProjects.map((project) => (
                <li key={project.id}>
                  <Link href={getProjectHref(project.slug)} className="dropdown-item projects-nav-link">
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <hr className="dropdown-divider my-2" />
              </li>
              <li>
                <Link href="/#running" className="dropdown-item projects-nav-viewall-inline projects-nav-viewall-accent">
                  View All Running
                  <i className="uil uil-arrow-right ms-1" />
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ProjectsNavMenu;
