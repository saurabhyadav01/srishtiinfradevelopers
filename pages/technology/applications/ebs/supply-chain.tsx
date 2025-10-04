import { NextPage } from 'next';
import BlockLayout from 'components/layouts/BlockLayout';
import { Footer8 } from 'components/blocks/footer';
import { fadeInAnimate } from 'utils/animation';

const EBSSupplyChain: NextPage = () => {
  return (
    <BlockLayout title="EBS - Supply Chain Management">
      <section className="wrapper">
        <div className="container pt-12 pb-6" style={{ maxWidth: '95%' }}>
          <div className="row gx-8 gy-10 align-items-start">
            <div className="col-lg-12" style={fadeInAnimate('0ms')}>
              <h1 className="display-6 mb-4">Oracle E-Business Suite - Supply Chain Management</h1>
              <p>Optimize Inventory, Order Management, Advanced Pricing, Shipping, and Warehouse operations with integrated planning.</p>
              <p className="mb-0">We implement demand planning, ATP, and fulfillment automation tailored to your supply network.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer8 />
    </BlockLayout>
  );
};

export default EBSSupplyChain;



