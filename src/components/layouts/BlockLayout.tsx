import { FC, Fragment, ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import SiteTopBar from 'components/common/SiteTopBar';
import NextLink from 'components/reuseable/links/NextLink';

// ====================================================
type Links = { title: string; url: string }[];

type BlockLayoutProps = {
  children: ReactNode;
  headingColClass?: string;
  title: string | ReactElement;
};
// ====================================================

const filters = [
  { id: 1, title: 'About', url: '/docs/blocks/about' },
  { id: 2, title: 'Blog', url: '/docs/blocks/blog' },
  { id: 3, title: 'Call to Action', url: '/docs/blocks/call-to-action' },
  { id: 4, title: 'Clients', url: '/docs/blocks/clients' },
  { id: 5, title: 'Contact Us', url: '/docs/blocks/contact' },
  { id: 6, title: 'Facts', url: '/docs/blocks/facts' },
  { id: 7, title: 'FAQ', url: '/docs/blocks/faq' },
  { id: 8, title: 'Features', url: '/docs/blocks/features' },
  { id: 9, title: 'Footer', url: '/docs/blocks/footer' },
  { id: 10, title: 'Hero', url: '/docs/blocks/hero' },
  // { id: 11, title: 'Misc', url: '/docs/blocks/misc' },
  { id: 12, title: 'Navbar', url: '/docs/blocks/navbar' },
  { id: 13, title: 'Portfolio', url: '/docs/blocks/portfolio' },
  { id: 14, title: 'Pricing', url: '/docs/blocks/pricing' },
  { id: 15, title: 'Process', url: '/docs/blocks/process' },
  { id: 16, title: 'Team', url: '/docs/blocks/team' },
  { id: 17, title: 'Testimonials', url: '/docs/blocks/testimonials' }
];

const BlockLayout: FC<BlockLayoutProps> = ({ title, children }) => {
  const { pathname } = useRouter();

  return (
    <Fragment>
      <PageProgress />
      <SiteTopBar />

      <div className="content-wrapper">
        {/* ========== header ========== */}
        <header className="wrapper mb-1" style={{ background: '#fff', boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}>
        <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
       </header>

        {/* ========== page heading ========== */}
        <section className="wrapper position-relative overflow-hidden" style={{ 
          backgroundImage: 'linear-gradient(rgba(15,23,42,.8), rgba(15,23,42,.8)), url(/img/pexels-sevenstormphotography-443383.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '60vh'
        }}>
          <div className="container py-14 py-md-16 text-center d-flex align-items-center" style={{ maxWidth: '95%', minHeight: '60vh' }}>
            {/* decorative shapes */}
            <img src="/img/svg/blob.svg" alt="" className="position-absolute d-none d-md-block" style={{ top: '-20%', left: '-10%', width: '30%', opacity: 0.1 }} />
            <img src="/img/svg/hex.svg" alt="" className="position-absolute d-none d-md-block" style={{ bottom: '-15%', right: '-8%', width: '22%', opacity: 0.1 }} />

            <div className="row justify-content-center w-100">
              <div className="col-lg-8 col-xl-7">
                <div className="text-white">
                  <h1 className="display-2 mb-4 text-white">{title}</h1>
                  <p className="lead mb-0 px-xxl-10 text-white-70">
                    Professional partnership solutions designed to accelerate your digital transformation journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== filter navs ========== */}
        {/* <section className="wrapper bg-light wrapper-border">
          <div className="container py-11">
            <h2 className="h5">Filter Blocks:</h2>
            <ul className="list-inline mb-0">
              {filters.map(({ id, title, url }) => (
                <li className="list-inline-item me-1 mb-2" key={id}>
                  <NextLink
                    href={url}
                    title={title}
                    className={`btn btn-soft-ash btn-sm rounded ${pathname === url ? 'text-primary pe-none' : ''}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section> */}

        {/* ========== main content ========== */}
        {children}
      </div>

      {/* ========== footer banner ========== */}
      {/* <section className="wrapper bg-dark text-white">
        <div className="container pt-14 pt-md-16 text-center">
          <div className="row">
            <div className="col-md-10 col-lg-9 col-xl-8 col-xxl-7 mx-auto">
              <h2 className="display-3 text-white mt-3 mb-3 px-lg-8">
                Think unique and be creative. Make a difference with Sandbox.
              </h2>

              <p className="lead fs-lg mb-6">
                Everything you need to create your next unique and professional website, including impressive and
                ready-made blocks and pages.
              </p>

              <a href="#" target="_blank" className="btn btn-lg btn-white rounded-pill mb-10" rel="noreferrer">
                Buy Sandbox
              </a>
            </div>
          </div>

          <img className="img-fluid" src="/img/demos/f1.png" srcSet="/img/demos/f1@2x.png 2x" alt="demo" />
        </div>
      </section> */}
    </Fragment>
  );
};

export default BlockLayout;
