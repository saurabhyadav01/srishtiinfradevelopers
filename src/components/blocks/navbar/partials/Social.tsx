import companyContact from 'data/contact';

const Social = () => {
  return (
    <li className="nav-item">
      <nav className="nav social social-muted justify-content-end text-end">
        {companyContact.socialLinks.map(({ id, icon, url, label }) => (
          <a href={url} key={id} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <i className={icon} />
          </a>
        ))}
      </nav>
    </li>
  );
};

export default Social;
