import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import SectionIcon from 'components/blocks/projects/SectionIcon';
import HomeSectionHeader from 'components/blocks/home/HomeSectionHeader';
import { aboutOverview, aboutValues, missionItems, visionItems } from 'data/about';
import companyContact from 'data/contact';
import theme from 'data/theme';

const AboutPage: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />
      <header className="wrapper mb-1">
        <div className="container" style={{ maxWidth: '90%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
      </header>

      <main className="content-wrapper">
        {/* Hero / Overview */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-12 pt-md-14 pb-10" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center">
                <SectionIcon iconClass="uil uil-estate" size={28} />
                <h1 className="mb-0 ms-3">About {companyContact.name}</h1>
              </div>
            </div>

            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <p className="lead mb-4">{aboutOverview}</p>
              </div>
              <div className="col-lg-6">
                <div className="card shadow-sm border-0">
                  <img
                    className="card-img-top"
                    src={encodeURI('/img/deliveredproject/DELIVERED1.jpeg')}
                    alt="Sanskriti Centrum Plaza"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="wrapper">
          <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
            <HomeSectionHeader
              label="What We Stand For"
              title="Our Values"
              iconClass="uil uil-heart"
            />
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {aboutValues.map((paragraph, index) => (
                  <p key={index} className="mb-4" style={{ fontSize: '17px', lineHeight: '1.7', color: theme.text }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="wrapper" style={{ backgroundColor: theme.bgSoft }}>
          <div className="container py-10 py-md-12" style={{ maxWidth: '90%' }}>
            <HomeSectionHeader
              label="Our Purpose"
              title="Mission & Vision"
              subtitle="Building communities with trust, quality, and a greener future."
              iconClass="uil uil-target"
              centered
            />

            <div className="row gx-lg-8 gy-8">
              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-5">
                    <div className="d-flex align-items-center mb-4">
                      <SectionIcon iconClass="uil uil-chart-line" size={22} />
                      <h3 className="mb-0 ms-3" style={{ color: theme.primaryDark }}>Our Mission</h3>
                    </div>
                    <ul className="icon-list bullet-primary mb-0">
                      {missionItems.map((item) => (
                        <li key={item} style={{ color: theme.text }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-5">
                    <div className="d-flex align-items-center mb-4">
                      <SectionIcon iconClass="uil uil-star" size={22} />
                      <h3 className="mb-0 ms-3" style={{ color: theme.primaryDark }}>Our Vision</h3>
                    </div>
                    <ul className="icon-list bullet-primary mb-0">
                      {visionItems.map((item) => (
                        <li key={item} style={{ color: theme.text }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer8 />
    </Fragment>
  );
};

export default AboutPage;
