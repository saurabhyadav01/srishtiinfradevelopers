import { FC } from 'react';
import SectionIcon from 'components/blocks/projects/SectionIcon';
import theme from 'data/theme';

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  iconClass: string;
  centered?: boolean;
};

const HomeSectionHeader: FC<Props> = ({ label, title, subtitle, iconClass, centered = false }) => {
  return (
    <div className={`row mb-6 ${centered ? 'justify-content-center text-center' : ''}`}>
      <div className={centered ? 'col-lg-8' : 'col-lg-9'}>
        <span className="section-label">{label}</span>
        <div className={`d-flex align-items-center mb-3 ${centered ? 'justify-content-center' : ''}`}>
          <SectionIcon iconClass={iconClass} />
          <h2 className="mb-0 ms-3" style={{ color: theme.primaryDark }}>{title}</h2>
        </div>
        {subtitle && (
          <p className="lead mb-0" style={{ color: theme.textMuted }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default HomeSectionHeader;
