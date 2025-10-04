import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: '#' },
  { id: 2, icon: 'uil uil-facebook-f', url: '#' },
  { id: 3, icon: 'uil uil-linkedin', url: '#' },
  { id: 4, icon: 'uil uil-instagram', url: '#' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
