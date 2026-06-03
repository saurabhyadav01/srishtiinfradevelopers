import { FC } from 'react';
import companyContact from 'data/contact';

const WhatsAppFloat: FC = () => {
  return (
    <a
      href={companyContact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Us"
      className="position-fixed d-flex align-items-center gap-2 text-decoration-none text-white shadow-lg"
      style={{
        bottom: '24px',
        right: '24px',
        zIndex: 1050,
        backgroundColor: '#25D366',
        padding: '12px 20px',
        borderRadius: '50px',
        fontWeight: 600,
        fontSize: '0.95rem'
      }}
    >
      <i className="uil uil-whatsapp" style={{ fontSize: '1.5rem' }} />
      WhatsApp Us
    </a>
  );
};

export default WhatsAppFloat;
