import { FC } from 'react';
import theme from 'data/theme';

const images = [
  {
    id: 1,
    className: 'col-md-6 align-self-end',
    src: '/img/deliveredproject/DELIVERED1.jpeg',
    alt: 'Sanskriti Centrum Plaza',
    title: 'Sanskriti Centrum Plaza',
    type: 'Commercial Complex'
  },
  {
    id: 2,
    className: 'col-md-6 align-self-end',
    src: '/img/deliveredproject/DELIVERED2.jpeg',
    alt: 'Sanskriti Sanskar Heights',
    title: 'Sanskriti Sanskar Heights',
    type: 'Residential & Commercial'
  },
  {
    id: 3,
    className: 'col-md-6 offset-md-1',
    src: '/img/projects/WhatsApp Image 2026-05-31 at 18.30.11.jpeg',
    alt: 'Sanskriti Row Houses',
    title: 'Sanskriti Row Houses',
    type: 'Row Houses',
    description: 'Elegant row house design with arched windows, private balconies, and rooftop pergolas.'
  },
  {
    id: 4,
    className: 'col-md-4 align-self-start',
    src: '/img/projects/WhatsApp Image 2026-05-31 at 18.30.12.jpeg',
    alt: 'Sanskriti Residency',
    title: 'Sanskriti Residency',
    type: 'Under Construction'
  }
];

const Tiles4: FC = () => {
  return (
    <div className="row gx-md-5 gy-5">
      {images.map(({ id, className, src, alt, title, type, description }) => (
        <div className={className} key={id}>
          <figure className="rounded overflow-hidden shadow-sm mb-0 bg-white">
            <img
              src={encodeURI(src)}
              alt={alt}
              className="w-100"
              style={{ height: '220px', objectFit: 'cover', display: 'block' }}
            />
            <figcaption className="p-3">
              <h6 className="mb-1" style={{ color: theme.primaryDark, fontWeight: 700 }}>{title}</h6>
              <span
                className="badge mb-2"
                style={{ backgroundColor: theme.accent, color: theme.primaryDark, fontWeight: 600 }}
              >
                {type}
              </span>
              {description && (
                <p className="mb-0" style={{ color: theme.text, fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {description}
                </p>
              )}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Tiles4;
