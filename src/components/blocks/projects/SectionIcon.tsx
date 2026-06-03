import { FC } from 'react';
import theme from 'data/theme';

type Props = {
  iconClass: string;
  size?: number;
};

const SectionIcon: FC<Props> = ({ iconClass, size = 24 }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center flex-shrink-0"
      style={{
        background: `linear-gradient(135deg, ${theme.primaryDark} 0%, ${theme.primary} 100%)`,
        border: `2px solid ${theme.accent}`,
        padding: '10px',
        borderRadius: '12px',
        width: size + 24,
        height: size + 24
      }}
    >
      <i className={`${iconClass}`} style={{ fontSize: size, color: theme.accentLight }} />
    </div>
  );
};

export default SectionIcon;
