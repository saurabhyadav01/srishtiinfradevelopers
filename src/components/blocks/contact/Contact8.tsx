import { FC } from 'react';
import { Tiles3 } from 'components/elements/tiles';
import NextLink from 'components/reuseable/links/NextLink';

const Contact8: FC = () => {
  return (
    <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
      <div className="col-lg-7 position-relative">
        <Tiles3 />
      </div>

      <div className="col-lg-5">
        <h2 className="display-4 mb-3">WHY CHOOSE
Arglin TECH?</h2>
<p className="lead fs-sm">
        At Arglin Tech, we don’t just implement systems — we architect enterprise-grade solutions that scale with your business. With deep domain expertise in both Oracle and Microsoft ERP ecosystems, we deliver integrated platforms that power operational efficiency, financial clarity, and data-driven decision-making.
       </p>
        <p className="lead fs-sm">
        ARGLIN Tech is an industry-leading Oracle Managed Services Provider delivering world-class expert managed services for the complex lifecycle of your Oracle-powered workloads. Offering a complete portfolio under one roof, Data Intensity provides full-stack, SLA-backed, technical and functional application managed services on your cloud of choice. Our unique differentiation future-proofs your investments in Oracle technologies and applications – from effective license position assessments to cloud-independent migration services, to 24x7 technical operational managed services and functional adaptation of your E-Business Suite – to optimally power your business. If you are running Oracle, we manage Oracle better than anyone, anywhere – period.
        </p>
  
        <h3>
        Right Cloud. Right Licensing. Right Services.
        </h3>

        {/* <NextLink title="Join Us" href="#" className="btn btn-primary rounded-pill mt-2" /> */}
      </div>
    </div>
  );
};

export default Contact8;
