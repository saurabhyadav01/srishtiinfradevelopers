import { FC, Fragment } from 'react';

const images = [
  {
    src: '/img/deliveredproject/DELIVERED1.jpeg',
    alt: 'Sanskriti Centrum Plaza'
  },
  {
    src: '/img/deliveredproject/DELIVERED2.jpeg',
    alt: 'Sanskriti Sanskar Heights'
  }
];

const Tiles5: FC = () => {
  return (
    <Fragment>
      <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: '3rem', left: '5.5rem' }} />

      <div className="overlap-grid overlap-grid-2">
        {images.map(({ src, alt }, i) => (
          <div className="item" key={alt + i}>
            <figure className="rounded shadow">
              <img src={encodeURI(src)} alt={alt} className="w-100" style={{ objectFit: 'cover' }} />
            </figure>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Tiles5;
