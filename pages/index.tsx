import { NextPage } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { About6 } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import WhatsAppFloat from 'components/common/WhatsAppFloat';
import SiteTopBar from 'components/common/SiteTopBar';
import HomeHeroBanner from 'components/blocks/home/HomeHeroBanner';
import HomeFeaturedProperties from 'components/blocks/home/HomeFeaturedProperties';
import HomeContactSection from 'components/blocks/home/HomeContactSection';
import HomeStats from 'components/blocks/home/HomeStats';
import HomeProcess from 'components/blocks/home/HomeProcess';
import HomeFeaturedProject from 'components/blocks/home/HomeFeaturedProject';
import HomeInquiryBanner from 'components/blocks/home/HomeInquiryBanner';
import HomeSectionHeader from 'components/blocks/home/HomeSectionHeader';
import ProjectSection from 'components/blocks/projects/ProjectSection';
import * as All from 'components/blocks/services';
import * as Alls from 'components/blocks/faq';
import { fadeInAnimate } from 'utils/animation';
import { runningProjects, deliveredProjects, realEstateServices } from 'data/real-estate-projects';
import companyContact from 'data/contact';
import theme from 'data/theme';


const HomePage: NextPage = () => {
  return (
    <Fragment>
      <style jsx global>{`
        .home-page-nav .nav-link {
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
        }
        .home-page-nav .nav-link[href='/'],
        .home-page-nav a[href='/'].nav-link {
          color: #c45c4c !important;
          border-bottom: 2px solid #c45c4c;
        }
        .home-header {
          background: #fff;
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }
        .home-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .home-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(26, 54, 93, 0.12) !important;
        }
        .service-item {
          padding: 16px;
          border-radius: 12px;
          transition: background 0.2s ease;
        }
        .service-item:hover {
          background: rgba(200, 169, 81, 0.08);
        }
        @keyframes homeSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .home-animate-section {
          animation: homeSlideUp 0.75s ease forwards;
        }
      `}</style>

      <PageProgress />
      <SiteTopBar />

      <header className="home-header wrapper mb-0">
        <div className="container py-0" style={{ maxWidth: '95%' }}>
          <div className="home-page-nav">
            <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none py-0" />
          </div>
        </div>
      </header>

      <main className="content-wrapper">
        <HomeHeroBanner />
        <div className="home-animate-section">
          <HomeFeaturedProperties />
        </div>
        <div className="home-animate-section" style={{ animationDelay: '0.1s' }}>
          <HomeContactSection />
        </div>
        <div className="home-animate-section" style={{ animationDelay: '0.15s' }}>
          <HomeStats />
        </div>

        <section className="wrapper bg-soft-primary angled lower-end realestate-bg">
          <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
            <div style={fadeInAnimate('0ms')}>
              <HomeSectionHeader
                label="Who We Are"
                title={`About ${companyContact.name}`}
                subtitle="Founded in 2002 — a leading property owner, developer and manager across Noida and Greater Noida."
                iconClass="uil uil-estate"
              />
              <About6 />
            </div>

            <div className="mt-12" style={fadeInAnimate('200ms')}>
              <ProjectSection
                id="running"
                title="Our Running Projects"
                subtitle="Active developments across Noida Extension and Greater Noida West — including Sanskriti Villas, Sanskriti Kunj Garden, and more."
                iconClass="uil uil-hard-hat"
                projects={runningProjects}
                bgClass="bg-light"
                imageHeight={320}
              />
              <div className="text-center pt-2 pb-4">
                <Link href="/projects#running" className="btn btn-accent rounded-pill">
                  View All Running Projects
                </Link>
              </div>
            </div>

            <div className="mt-6" style={fadeInAnimate('300ms')}>
              <ProjectSection
                id="delivered"
                title="Our Delivered Projects"
                subtitle="Successfully completed developments with families already living in thriving communities."
                iconClass="uil uil-check-circle"
                projects={deliveredProjects}
                bgClass="bg-white"
                imageHeight={280}
              />
              <div className="text-center pt-2 pb-4">
                <Link href="/projects#delivered" className="btn btn-outline-primary rounded-pill">
                  View All Delivered Projects
                </Link>
              </div>
            </div>

            <div className="row mt-12 g-4" style={fadeInAnimate('400ms')}>
              <div className="col-lg-7">
                <div className="card home-card shadow-sm border-0 h-100 overflow-hidden">
                  <img
                    className="card-img-top"
                    src={encodeURI('/img/projects/WhatsApp Image 2026-05-31 at 18.30.13.jpeg')}
                    alt="Sanskriti Villas — Greater Noida West"
                    style={{ minHeight: '440px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card home-card h-100 shadow-sm border-0 bg-white">
                  <div className="card-body d-flex flex-column justify-content-center p-5">
                    <span className="section-label">What We Do</span>
                    <h3 className="mb-3" style={{ color: theme.primaryDark, fontWeight: 700 }}>
                      Complete Real Estate Development
                    </h3>
                    <p className="mb-4" style={{ color: theme.textMuted, lineHeight: 1.7 }}>
                      From land procurement to possession handover — we manage every stage with transparency, quality, and customer trust.
                    </p>
                    <div className="d-flex flex-column" style={{ gap: '8px' }}>
                      {realEstateServices.map(({ title, description }) => (
                        <div key={title} className="service-item d-flex align-items-start">
                          <div
                            className="me-3 d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '12px',
                              background: theme.gradientHero,
                              border: `2px solid ${theme.accent}`
                            }}
                          >
                            <i className="uil uil-check" style={{ color: theme.accentLight }} />
                          </div>
                          <div>
                            <h6 className="mb-1" style={{ fontWeight: 600, color: theme.primaryDark }}>{title}</h6>
                            <p className="mb-0" style={{ color: theme.textMuted, fontSize: '0.9rem', lineHeight: 1.6 }}>
                              {description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeProcess />
        <HomeFeaturedProject />

        <section className="wrapper bg-white">
          <div className="container py-12 py-md-14" style={{ maxWidth: '90%' }}>
            <HomeSectionHeader
              label="Our Expertise"
              title="Our Services"
              subtitle="End-to-end real estate services tailored for homebuyers, investors, and landowners across NCR."
              iconClass="uil uil-briefcase"
            />
            <All.Services8 />
          </div>
        </section>

        <section className="wrapper bg-soft-primary realestate-bg">
          <div className="container py-12 py-md-14" style={{ maxWidth: '90%' }}>
            <HomeSectionHeader
              label="Got Questions?"
              title="Frequently Asked Questions"
              subtitle={`Everything you need to know about buying property with ${companyContact.name}.`}
              iconClass="uil uil-question-circle"
              centered
            />
            <Alls.FAQ1 />
          </div>
        </section>

        <HomeInquiryBanner />
      </main>

      <Footer8 />
      <WhatsAppFloat />
    </Fragment>
  );
};

export default HomePage;
