import { FC } from 'react';
import companyContact from 'data/contact';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {companyContact.socialLinks.map(({ id, icon, url, label }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer" aria-label={label} title={label}>
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
