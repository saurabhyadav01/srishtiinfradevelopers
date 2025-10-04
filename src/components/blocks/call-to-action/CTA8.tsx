import { FC } from 'react';

const CTA8: FC = () => {
  return (
    <div className="container">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
        style={{ backgroundImage: 'url(/img/photos/bg16.png)' }}
      >
        <div className="card-body p-10 p-xl-12">
          <div className="row text-center">
            <div className="col-xl-11 col-xxl-9 mx-auto">
              <h2 className="fs-16 text-uppercase text-white mb-3">REFERRAL PARTNERS</h2>
              <p className="display-3 mb-8 px-lg-8 text-white">
              Data Intensity partners with innovative solutions providers to best meet client needs and to enable organizations to grow and extend market presence
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <span>
              <a className="btn btn-white rounded">Join Us</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA8;
