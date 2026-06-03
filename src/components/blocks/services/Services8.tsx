import { FC } from 'react';
import { Tiles4 } from 'components/elements/tiles';
import IconBox from 'components/reuseable/IconBox';
import { ServiceCard3 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList2 } from 'data/service';

const Services8: FC = () => {
  return (
    <div className="row gx-lg-8 gy-8 mt-5 mt-md-12 mt-lg-0 mb-15 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <Tiles4 />
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">What We Do?</h2>
        <p className="lead fs-lg mb-8 pe-xxl-2">
          Complete real estate development services — from <span className="underline">land acquisition</span> to
          possession handover across Noida and NCR.
        </p>

        <div className="row gx-xl-10 gy-6">
          {serviceList2.map(({ title, id, icon, description }) => (
            <div className="col-md-6 col-lg-12 col-xl-6" key={id}>
              <ServiceCard3
                title={title}
                description={description}
                Icon={<IconBox icon={icon} className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5" />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services8;
