import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/contact';
import { Footer8, Footer9 } from 'components/blocks/footer';
import ContactForm from 'components/common/ContactForm';

const About: NextPage = () => {
  return (
    <BlockLayout title="About Us">
      <style jsx>{`
        .mission-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .philosophy-box {
          background: linear-gradient(135deg, #17203f 0%, #0ea5e9 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }
        .philosophy-box::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(180deg)} }
        .icon-badge {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
      `}</style>

      

      {/* Our Story Section */}
      <section className="wrapper">
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex align-items-start" style={{ marginBottom: '40px' }}>
                <div className="me-4" style={{ width: '4px', height: '50px', background: '#3b82f6' }}></div>
                <div>
                  <h6 className="mb-3" style={{ fontSize: '14px', fontWeight: '500', color: '#3b82f6', margin: '0' }}>About Us</h6>
                  <h2 className="mb-0" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', lineHeight: '1.2' }}>Our Story</h2>
                </div>
              </div>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#4a5568', marginBottom: '30px' }}>
                We are a Digital First company that believes in designing creative strategies along with our clients at each step. 
                We are a technology startup born in the heart of India, catering to a wide range of clients including large businesses, 
                service providers, individuals, and communities.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#4a5568', marginBottom: '30px' }}>
                We help our clients digitize and digitalize their way of work and make their business more structured, quantifiable, 
                monitorable, and impactful. Our team has over 30 years experience in learning and working with new-age technologies 
                and provides futuristic ready-to-implement solutions.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#4a5568', marginBottom: '0' }}>
                Our leadership team has successfully managed large teams of over 100 members with member diversity. We follow a hybrid 
                approach of defined processes (like a large organization) and agility (like a startup), allowing for adaptability and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="wrapper" style={{ backgroundColor: '#f7fafc' }}>
        <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="row text-center" style={{ marginBottom: '80px' }}>
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', lineHeight: '1.2' }}>Mission & Vision</h2>
              <p className="mb-0" style={{ fontSize: '18px', color: '#718096', lineHeight: '1.6' }}>Be Creative! Be Innovative!</p>
            </div>
          </div>

          <div className="row gx-lg-8 gy-8">
            {/* Mission & Vision Cards */}
            <div className="col-lg-6">
              <div className="d-flex flex-column h-100" style={{ gap: '30px' }}>
                <div className="flex-fill">
                  <div className="mission-card text-center bg-white rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center" style={{ padding: '30px', minHeight: '200px' }}>
                    <div className="icon-badge" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', backgroundColor: '#dbeafe', color: '#3b82f6' }}>
                      <i className="uil uil-chart-line" style={{ fontSize: '24px' }}></i>
                    </div>
                    <h4 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', lineHeight: '1.3' }}>Our Mission</h4>
                    <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568' }}>We are a group of technology enthusiasts who believe in designing and delivering innovative and scalable solutions that exceed our client's expectations.</p>
                  </div>
                </div>
                <div className="flex-fill">
                  <div className="mission-card text-center bg-white rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center" style={{ padding: '30px', minHeight: '200px' }}>
                    <div className="icon-badge" style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', backgroundColor: '#fef3c7', color: '#f59e0b' }}>
                      <i className="uil uil-star" style={{ fontSize: '24px' }}></i>
                    </div>
                    <h4 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1a202c', lineHeight: '1.3' }}>Our Vision</h4>
                    <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.7', color: '#4a5568' }}>To be a valuable and trusted technology solutions partner to our clients. To garner a world-class reputation for quality, creativity, innovation, and commitment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Box */}
            <div className="col-lg-6">
              <div className="philosophy-box text-white h-100 d-flex flex-column justify-content-center" style={{ padding: '40px', background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)', borderRadius: '16px', minHeight: '500px' }}>
                <div className="position-relative d-flex flex-column justify-content-center h-100">
                  <div className="mb-4" style={{ fontSize: '50px', color: 'rgba(255,255,255,0.3)', lineHeight: '1' }}>"</div>
                  <h4 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', lineHeight: '1.3' }}>Our Philosophy</h4>
                  <p className="mb-0" style={{ fontSize: '16px', lineHeight: '1.7', color: 'white' }}>We believe in putting creativity at the center of our development process in an industry that combines innovation and technology. We place our team at the core of our values and with a combined strength of creativity and our team's capabilities, we develop solutions that are recognizable to our clients and help them in connecting with us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Srishti Infra Developers Section */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <div className="row gx-lg-8 gy-8 align-items-center">
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="shape bg-dot white rellax w-16 h-17" style={{ top: '-1rem', left: '-1rem', zIndex: 0 }} />
                <div className="shape rounded-circle bg-white rellax w-16 h-16" style={{ bottom: '-1rem', right: '-1rem', zIndex: 0 }} />
                <div className="position-relative">
                  <h6 className="mb-2" style={{ color: '#000000' }}>Why</h6>
                  <h2 className="display-5 mb-6" style={{ color: '#000000' }}>Srishti Infra Developers</h2>
                  <div className="row g-4">
                    <div className="col-12">
                      <p className="mb-4" style={{ color: '#000000' }}>We are a Digital-first company that believes in designing creative strategies along with our clients at each step.</p>
                    </div>
                    <div className="col-12">
                      <p className="mb-4" style={{ color: '#000000' }}>In order to deliver quality products to our clients, we build an agile team of experienced learners who are keen to take up new challenges.</p>
                    </div>
                    <div className="col-12">
                      <p className="mb-0" style={{ color: '#000000' }}>Our engineers apart from knowing coding functions, are experts at designing seamless integration systems across platforms. They also are comfortable taking full ownership of doing things end-to-end as well as visualizing and strategizing the end product from server to end customer level.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="text-center p-4 bg-white rounded-4 shadow-sm">
                    <div className="fs-32 text-primary mb-2">30+</div>
                    <div className="text-muted">Years Experience</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-white rounded-4 shadow-sm">
                    <div className="fs-32 text-yellow mb-2">100+</div>
                    <div className="text-muted">Team Members</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-white rounded-4 shadow-sm">
                    <div className="fs-32 text-green mb-2">500+</div>
                    <div className="text-muted">Projects Delivered</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-4 bg-white rounded-4 shadow-sm">
                    <div className="fs-32 text-red mb-2">50+</div>
                    <div className="text-muted">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row gx-6 gy-6 align-items-start">
            {/* Left content */}
            <div className="col-lg-6">
              <h3 className="mb-3">Work with Srishti Infra Developers</h3>
              <p className="mb-4">Share your requirement and our team will reach out with the best approach, timeline and commercials.</p>
              <ul className="icon-list bullet-primary mb-4">
                <li>Solution consulting for Cloud, Applications and Databases</li>
                <li>POC/Prototype and modernization roadmaps</li>
                <li>Managed services and cost optimization engagements</li>
              </ul>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center">
                  <i className="uil uil-envelope text-primary me-2" />
                  <a href="mailto:info@thissrishtiinfradevelopers.com">info@thissrishtiinfradevelopers.com</a>
                </div>
                <div className="d-flex align-items-center">
                  <i className="uil uil-phone-volume text-primary me-2" />
                  <span>+91&nbsp;88846&nbsp;30503</span>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="col-lg-6">
              <div className="card shadow-lg border-0">
                <div className="card-body p-4 p-md-5">
                  <form action="#" method="post" className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Enter your Company Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Enter your email address" required />
                    </div>
                    <div className="col-md-6">
                      <input type="tel" className="form-control" placeholder="Enter your contact Number" />
                    </div>
                    <div className="col-12">
                      <select className="form-select">
                        <option value="" defaultValue="">Select a Service</option>
                        <option>Cloud & Infrastructure</option>
                        <option>Applications (Oracle / Microsoft)</option>
                        <option>Database & Data Platforms</option>
                        <option>Managed Services</option>
                        <option>Licensing & Advisory</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={5} placeholder="Please describe what you need" />
                    </div>
                    <div className="col-12 text-end">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
      <Footer8 />
    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode };

const Block: FC<BlockProps> = ({ id, children }) => {
  // markup
  const markup = `import { Contact${id} } from 'components/blocks/contact';

<Contact${id} />
`;

  return (
    <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
      {children}

      <div className="container pb-15 pb-md-17 position-relative" style={{ zIndex: 3 }}>
        <div className="card">
          <div className="card-footer border-0 position-relative">
            <a
              className="collapse-link collapsed stretched-link"
              data-bs-toggle="collapse"
              href={`#collapse-snippet-${id}`}
            >
              View example's code
            </a>
          </div>

          <div id={`collapse-snippet-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default About;
