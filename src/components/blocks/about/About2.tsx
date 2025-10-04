import { FC } from 'react';
import { Banner4 } from '../banner';
import ListColumn from 'components/reuseable/ListColumn';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- data -------- //
import { aboutList1 } from 'data/about';

const About2: FC = () => {
  // used for video light box
  useLightBox();

  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <Banner4 />
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Who Are We?</h2>
        <h3 className="display-4 mb-6">Company that believes in the power of creative strategy.</h3>

        <p className="mb-6">
        We are a forward-thinking digital agency committed to delivering innovative solutions that drive growth and
            engagement. Our team blends creativity with strategic insight to help brands navigate the digital
            landscape, create compelling experiences, and build lasting customer relationships.
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList1} />
      </div>
    </div>
  );
};

export default About2;
