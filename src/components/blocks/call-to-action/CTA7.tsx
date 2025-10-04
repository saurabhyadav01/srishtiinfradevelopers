import { FC } from 'react';

const CTA7: FC = () => {
  return (
    <div className="container-card">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mb-14"
        style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
      >
        <div className="card-body py-14 px-0">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-11 col-xxl-9 mx-auto">
                <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">REFERRAL PARTNERS
</h2>
                <p className="display-6 mb-2 px-lg-10">
                Arglin Tech  partners with innovative solutions providers to best meet client needs and to enable organizations to grow and extend market presence.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-6">
              <a className="btn btn-lg btn-primary rounded-pill px-6" href="/contact">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA7;
