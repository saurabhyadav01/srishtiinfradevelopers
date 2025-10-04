import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //

import { Team3, Team6, Team8 } from 'components/blocks/team';
import Link from 'next/link';
import { Hero15 } from 'components/blocks/hero';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8, Footer9 } from 'components/blocks/footer';
import { Process7 } from 'components/blocks/process';
import { Contact7, Contact9 } from 'components/blocks/contact';
import { CTA5 } from 'components/blocks/call-to-action';
import { Testimonial5 } from 'components/blocks/testimonial';
import { Blog6 } from 'components/blocks/blog';
import PageProgress from 'components/common/PageProgress';
import Slider from 'components/blocks/home/slider';
import Partners from 'components/blocks/home/partners';
import Partner1 from 'components/blocks/home/partners/partnar';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/services';
import * as Alls from 'components/blocks/faq';
import * as Allss from 'components/blocks/contact';
import { fadeInAnimate } from 'utils/animation';

const Demo15: NextPage = () => {

  
  return (
    <Fragment>
      <style jsx>{`
        .tech-card:hover, .app-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        /* Remove animated borders from homepage cards */
        .icon-badge {
          transition: all 0.3s ease;
        }
        /* Animated border utility for headings/containers */
        .animated-border {
          position: relative;
        }
        .animated-border::after {
          content: '';
          position: absolute;
          left: -10px; right: -10px; top: -8px; bottom: -8px;
          border-radius: 14px;
          z-index: -1;
          background: conic-gradient(from 0deg, #17203f, #0ea5e9, #8b5cf6, #10b981, #17203f);
          animation: border-rotate 6s linear infinite;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          padding: 2px;
        }
        .icon-badge:hover {
          transform: scale(1.1);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-icon {
          animation: pulse 3s ease-in-out infinite;
        }
        .rotate-icon {
          animation: rotate 8s linear infinite;
        }
        .bounce-icon {
          animation: bounce 2s infinite;
        }
        .tech-bg {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          position: relative;
          overflow: hidden;
        }
        .tech-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
          z-index: 1;
        }
        .tech-bg > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <PageProgress />

      {/* ========== header ========== */}
      
       <header className="wrapper mb-1">
        <div className="container" style={{ maxWidth: '90%' }}>
          <Navbar social navClassName="navbar navbar-expand-lg center-nav navbar-light caret-none" />
        </div>
       </header>
      {/* ========== main content ========== */}
      <main className="content-wrapper ">
        {/* ========== hero sections ========== */}
        <Slider />

        <section className="wrapper bg-soft-primary angled lower-end tech-bg">
          {/* Floating Tech Icons */}
         
          <div className="position-absolute floating-icon" style={{ top: '20%', right: '8%', zIndex: 1, opacity: 0.1, animationDelay: '2s' }}>
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="position-absolute floating-icon" style={{ bottom: '15%', left: '10%', zIndex: 1, opacity: 0.1, animationDelay: '4s' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#8b5cf6" strokeWidth="2"/>
              <path d="M9 9H15V15H9V9Z" stroke="#8b5cf6" strokeWidth="2"/>
            </svg>
          </div>
          <div className="position-absolute floating-icon" style={{ bottom: '25%', right: '5%', zIndex: 1, opacity: 0.1, animationDelay: '1s' }}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="container py-6 py-md-8" style={{ maxWidth: '90%' }}>
            <div className="row mb-6" style={fadeInAnimate('0ms')}>
              <div className="col-lg-12 d-flex align-items-center">
                <div className="icon-badge me-3 icon-animate pulse-icon" style={{ backgroundColor: '#17203f', padding: '12px', borderRadius: '12px' }}>
                  <img src="/img/icons/lineal/rocket.svg" alt="About Icon" width={24} height={24} style={{ filter: 'invert(1)', opacity: 0.95 }} />
                </div>
                <h2 className="mb-0 animate-fade-up" style={{ animationDelay: '200ms' }}>About Srishti Infra Developers</h2>
              </div>
            </div>
            <div style={fadeInAnimate('400ms')}>
              <About6 />
            </div>

            {/* Srishti Infra: Featured Video & Brochure */}
            <div className="row mt-10" style={fadeInAnimate('400ms')}>
              <div className="col-lg-7">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-0">
                    <video controls style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }} poster="/img/logo.jpg">
                      <source src="/img/N-237 Srishti Infra Plots Sector 12 Noida Video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h3 className="mb-3">Srishti Infra Developers Brochure</h3>
                    <p className="mb-4">Download our latest designs and offering details.</p>
                    <a className="btn btn-primary" href="/img/Designs.pdf" target="_blank" rel="noreferrer">View / Download PDF</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner ecosystem section removed per request */}

            {/* Application technology spotlight removed per request */}
           
        
           
             
 
            {/* ========== process section ========== */}
            {/* <Process7 /> */}
          </div>
        </section>
      {/* ========== process section ==========    */}

      {/* <div className="pt-10 pt-md-12 pb-10 pb-md-12">
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row mb-6">
            <div className="col-lg-12 d-flex align-items-center animate-fade-up">
              <img src="/img/icons/lineal/tools.svg" alt="Services Icon" width={28} height={28} className="me-2" />
              <h2 className="mb-0">Our Services</h2>
            </div>
          </div>
          <All.Services1 />

          
        </div>
      </div> */}

        {/* Brand logos / partners strip removed to avoid duplication */}


        <section className="wrapper bg-soft-primary">
          <div className="container pt-12 pt-md-14 pb-13 pb-md-15 mb-n15" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center animate-fade-up">
                <img src="/img/icons/lineal/briefcase.svg" alt="Solutions Icon" width={28} height={28} className="me-2" />
                <h2 className="mb-0">Solutions</h2>
              </div>
            </div>
            <All.Services8 />
          </div>
        </section>
  {/* contact section removed per request */}

        {/* testimonial section removed per request */}

        {/* ========== team section ========== */}


        {/* ========== facts section ========== */}
        {/* <Facts5 /> */}

        {/* ========== contact section ========== */}
        {/* <Contact7 /> */}

        {/* ========== call to action section ========== */}
    
      </main>
      {/* <section className="wrapper bg-light">
        <div className="container py-12 py-md-14" style={{ maxWidth: '90%' }}>
          <div className="row mb-6">
            <div className="col-lg-12 d-flex align-items-center animate-fade-up">
              <img src="/img/icons/lineal/team.svg" alt="Team Icon" width={28} height={28} className="me-2" />
              <h2 className="mb-0">Our Team</h2>
            </div>
          </div>
          <Team8 />
        </div>
      </section> */}
       
       
        <section className="wrapper bg-soft-primary">
          <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n22 mb-xl-n24" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center animate-fade-up">
                <img src="/img/icons/lineal/startup.svg" alt="Case Studies Icon" width={28} height={28} className="me-2" />
                <h2 className="mb-0">Case Studies</h2>
              </div>
            </div>
            <All.Services9 />
          </div>
        </section>

        {/* ========== latest insights / blog ========== */}
        {/* Insights section linking to Technology removed per request */}
        <section className="wrapper bg-light tech-bg">
          {/* Floating Tech Icons for FAQ Section */}
          <div className="position-absolute floating-icon" style={{ top: '10%', left: '5%', zIndex: 1, opacity: 0.08, animationDelay: '1s' }}>
           
          </div>
          <div className="position-absolute floating-icon" style={{ top: '30%', right: '8%', zIndex: 1, opacity: 0.08, animationDelay: '3s' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2"/>
              <path d="M8 12L11 15L16 9" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="position-absolute floating-icon" style={{ bottom: '15%', left: '10%', zIndex: 1, opacity: 0.08, animationDelay: '5s' }}>
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#8b5cf6" strokeWidth="2"/>
              <path d="M9 9H15V15H9V9Z" stroke="#8b5cf6" strokeWidth="2"/>
            </svg>
          </div>

          <div className="container pt-15 pt-md-17 pb-13 pb-md-15" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center">
                <div className="icon-badge me-3 icon-animate bounce-icon" style={{ backgroundColor: '#17203f', padding: '12px', borderRadius: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
               
              </div>
            </div>
            <Alls.FAQ1 />
          </div>
        </section>
        {/* <div className="pb-13 pb-md-15">
          <Allss.Contact12 />
        </div> */}
        <section className="wrapper bg-soft-primary">
          <div className="container py-12 py-md-14" style={{ maxWidth: '90%' }}>
            <div className="row mb-6">
              <div className="col-lg-12 d-flex align-items-center">
                <img src="/img/icons/lineal/megaphone.svg" alt="CTA Icon" width={28} height={28} className="me-2" />
                <h2 className="mb-0">Ready to Start?</h2>
              </div>
            </div>
            <CTA5 />
          </div>
        </section>
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default Demo15;