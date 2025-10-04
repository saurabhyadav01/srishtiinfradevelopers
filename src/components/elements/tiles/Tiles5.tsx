import { FC, Fragment } from 'react';

const Tiles5: FC = () => {
  const images = ['about25', 'pexels-pixabay-164572'];

  return (
    <Fragment>
      <div className="shape bg-dot primary rellax w-16 h-20" style={{ top: '3rem', left: '5.5rem' }} />

      <div className="overlap-grid overlap-grid-2">
        {images.map((item, i) => (
          <div className="item" key={item + i}>
            <figure className="rounded shadow">
              <img 
                src={item === 'pexels-pixabay-164572' ? `/img/${item}.jpg` : `/img/photos/${item}.jpg`} 
                srcSet={item === 'pexels-pixabay-164572' ? `/img/${item}.jpg` : `/img/photos/${item}@2x.jpg 2x`} 
                alt={item} 
              />
            </figure>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Tiles5;
