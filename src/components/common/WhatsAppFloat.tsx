import { FC } from 'react';
import companyContact from 'data/contact';

const WhatsAppFloat: FC = () => {
  return (
    <a
      href={companyContact.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Us"
      className="btn-whatsapp-float position-fixed d-flex align-items-center gap-1 text-decoration-none text-white shadow"
    >
      <i className="uil uil-whatsapp btn-whatsapp-float-icon" />
      WhatsApp Us
    </a>
  );
};

export default WhatsAppFloat;
