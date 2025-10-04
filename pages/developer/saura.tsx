import { NextPage } from 'next';
import BlockLayout from 'components/layouts/BlockLayout';
import { Footer8 } from 'components/blocks/footer';
import Link from 'next/link';
import TechSection from 'components/reuseable/TechSection';
import { fadeInAnimate } from 'utils/animation';

const SauraPortfolio: NextPage = () => {
  return (
    <BlockLayout title="Saurabh Yadav — Portfolio">
      <style jsx>{`
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        /* Animated gradient border for portfolio project cards */
        @keyframes border-rotate { to { transform: rotate(360deg); } }
        .project-card {
          position: relative;
          z-index: 0;
          border: 2px solid transparent;
          background:
            linear-gradient(135deg, #17203f, #0f1419) padding-box,
            conic-gradient(from 0deg, #17203f, #0ea5e9, #8b5cf6, #10b981, #17203f) border-box;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          background: radial-gradient(60% 60% at 50% 50%, rgba(23,32,63,0.35), rgba(23,32,63,0) 70%);
          filter: blur(8px);
          z-index: -1;
        }
        .badge.tech-chip {
          background: #111827 !important;
          color: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.12);
        }
        @keyframes pulse {
          0% { transform: scale(1.1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
          100% { transform: scale(1.1); opacity: 1; }
        }
        .skill-category:hover .badge {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        .timeline {
          position: relative;
          padding-left: 30px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #667eea, #f093fb, #4facfe);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
        }
        .timeline-marker {
          position: absolute;
          left: -22px;
          top: 20px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        }
        .timeline-content {
          margin-left: 20px;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2) !important;
        }
        .badge:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <section className="wrapper position-relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        minHeight: '100vh'
      }}>
        {/* Technology Background Pattern */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1
        }}></div>
        
        {/* Floating Tech Icons */}
        <div className="position-absolute floating-icon" style={{ top: '10%', left: '10%', zIndex: 2, opacity: 0.1, animationDelay: '0s' }}>
          <i className="fab fa-react" style={{ fontSize: '3rem', color: '#61dafb' }}></i>
        </div>
        <div className="position-absolute floating-icon" style={{ top: '20%', right: '15%', zIndex: 2, opacity: 0.1, animationDelay: '1.5s' }}>
          <i className="fab fa-node-js" style={{ fontSize: '3rem', color: '#68a063' }}></i>
        </div>
        <div className="position-absolute floating-icon" style={{ bottom: '20%', left: '20%', zIndex: 2, opacity: 0.1, animationDelay: '3s' }}>
          <i className="fab fa-js-square" style={{ fontSize: '3rem', color: '#f7df1e' }}></i>
        </div>
        <div className="position-absolute floating-icon" style={{ bottom: '30%', right: '10%', zIndex: 2, opacity: 0.1, animationDelay: '4.5s' }}>
          <i className="fab fa-python" style={{ fontSize: '3rem', color: '#3776ab' }}></i>
        </div>
        
        <div className="container pt-16 pb-12 position-relative" style={{ maxWidth: '90%', zIndex: 3 }}>
          <div className="row align-items-center gx-8 gy-8">
            <div className="col-md-5 text-center text-md-start" style={fadeInAnimate('0ms')}>
              <div className="position-relative d-inline-block">
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-circle" style={{ 
                  background: 'linear-gradient(45deg, #3b82f6, #10b981, #8b5cf6)', 
                  transform: 'scale(1.1)', 
                  zIndex: -1,
                  animation: 'pulse 3s infinite'
                }}></div>
                <div 
                  className="rounded-circle animate-fade-up d-flex align-items-center justify-content-center" 
                  style={{ 
                    width: 300, 
                    height: 300, 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '4px solid rgba(59, 130, 246, 0.3)', 
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(59, 130, 246, 0.2)',
                    animationDelay: '200ms'
                  }} 
                >
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="60" fill="#3b82f6" fillOpacity="0.1"/>
                    <circle cx="60" cy="45" r="20" fill="#3b82f6"/>
                    <path d="M30 95c0-16.569 13.431-30 30-30s30 13.431 30 30" fill="#3b82f6"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-7" style={fadeInAnimate('400ms')}>
              <div className="text-white">
                <h1 className="display-3 mb-4 animate-fade-up" style={{ 
                  animationDelay: '600ms', 
                  fontWeight: '800',
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)'
                }}>
                  Saurabh Yadav
                </h1>
                <p className="lead mb-4 animate-fade-up" style={{ 
                  animationDelay: '800ms', 
                  opacity: 0.95,
                  fontWeight: '600',
                  color: '#10b981',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontSize: '14px'
                }}>
                  Full‑Stack Developer
                </p>
                <div className="mb-4 animate-fade-up" style={{ animationDelay: '1000ms' }}>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="badge bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-2" style={{ 
                      borderRadius: '20px', 
                      fontSize: '1rem',
                      fontWeight: '500',
                      border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}>
                      Next.js
                    </span>
                    <span className="badge bg-blue-600 bg-opacity-20 text-blue-200 px-3 py-2" style={{ 
                      borderRadius: '20px', 
                      fontSize: '1rem',
                      fontWeight: '500',
                      border: '1px solid rgba(37, 99, 235, 0.3)'
                    }}>
                      TypeScript
                    </span>
                    <span className="badge bg-green-500 bg-opacity-20 text-green-300 px-3 py-2" style={{ 
                      borderRadius: '20px', 
                      fontSize: '1rem',
                      fontWeight: '500',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      Node.js
                    </span>
                    <span className="badge bg-purple-500 bg-opacity-20 text-purple-300 px-3 py-2" style={{ 
                      borderRadius: '20px', 
                      fontSize: '1rem',
                      fontWeight: '500',
                      border: '1px solid rgba(139, 92, 246, 0.3)'
                    }}>
                      Cloud‑native
                    </span>
                  </div>
                  <p className="mb-0" style={{ 
                    opacity: 0.9,
                    color: '#cbd5e1',
                    fontWeight: '400',
                    fontSize: '14px'
                  }}>
                    Building scalable web applications with modern technologies
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-3 mt-5 animate-fade-up" style={{ animationDelay: '1200ms' }}>
                  <a className="btn btn-primary btn-lg px-5 py-3" href="tel:+917518553073" style={{ 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #17203f, #0f1419)',
                    border: 'none',
                    boxShadow: '0 8px 16px rgba(23, 32, 63, 0.4)',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fa fa-phone me-2"></i>+91 7518553073
                  </a>
                  <a className="btn btn-outline-light btn-lg px-5 py-3" href="mailto:sy966051@gmail.com" style={{ 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #17203f, #0f1419)',
                    border: '2px solid rgba(23, 32, 63, 0.5)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fa fa-envelope me-2"></i>Email
                  </a>
                  <a className="btn btn-outline-light btn-lg px-5 py-3" href="https://www.linkedin.com/in/saurabh-yadav-7795731a2/" target="_blank" rel="noreferrer" style={{ 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #17203f, #0f1419)',
                    border: '2px solid rgba(23, 32, 63, 0.5)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-linkedin me-2"></i>LinkedIn
                  </a>
                  <a className="btn btn-outline-light btn-lg px-5 py-3" href="https://github.com/saurabhyadav01" target="_blank" rel="noreferrer" style={{ 
                    borderRadius: '12px', 
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #17203f, #0f1419)',
                    border: '2px solid rgba(23, 32, 63, 0.5)',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechSection
        title="About Saurabh"
        imageSrc="/img/avatars/avatar.jpg"
        imageAlt="Saurabh Avatar"
        lead="Experienced Full‑Stack Developer with 3.5+ years across MERN, Laravel, Node.js, TypeScript, PostgreSQL, and Docker."
      >
        <p>Delivered 20+ live projects in market research, e‑commerce, and cyber intelligence. Skilled in building scalable web apps with robust backends and responsive UIs using React and Tailwind CSS.</p>
        <p>Proficient in RESTful APIs, SQL/NoSQL design, and cloud deployments (AWS, Docker, Nginx, Cloudflare). Strong knowledge of CI/CD, testing (Jest, PHPUnit), and IaC (Terraform). Fast learner and collaborative team player focused on high‑quality, secure, maintainable solutions.</p>
        <p className="mb-0"><strong>Location:</strong> Noida • <strong>Languages:</strong> English, Hindi</p>
      </TechSection>

      <section className="wrapper bg-light">
        <div className="container pb-8" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row gx-8 gy-8 align-items-start">
            <div className="col-lg-6" style={fadeInAnimate('0ms')}>
              <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-6 text-white">
                  <div className="d-flex align-items-center mb-4 animate-fade-up">
                    <div className="icon-badge me-3 icon-animate" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '12px' }}>
                      <img src="/img/icons/lineal/tools.svg" alt="Skills Icon" width={24} height={24} />
                    </div>
                    <h3 className="mb-0 text-white">Core Skills</h3>
                  </div>
                  <div className="row g-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
                    <div className="col-12">
                      <div className="skill-category mb-3">
                        <h6 className="text-white-50 mb-2">Frontend</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'Material UI', 'Tailwind CSS'].map((skill, index) => (
                            <span key={skill} className="badge bg-white text-dark px-3 py-2" style={{ borderRadius: '20px', fontSize: '0.85rem' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="skill-category mb-3">
                        <h6 className="text-white-50 mb-2">Backend</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {['Node.js', 'Laravel', 'Express', 'REST APIs', 'JWT', 'SSR/ISR'].map((skill, index) => (
                            <span key={skill} className="badge bg-white text-dark px-3 py-2" style={{ borderRadius: '20px', fontSize: '0.85rem' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="skill-category mb-3">
                        <h6 className="text-white-50 mb-2">Databases</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'].map((skill, index) => (
                            <span key={skill} className="badge bg-white text-dark px-3 py-2" style={{ borderRadius: '20px', fontSize: '0.85rem' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="skill-category">
                        <h6 className="text-white-50 mb-2">DevOps & Cloud</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {['AWS', 'Docker', 'Nginx', 'Terraform', 'CI/CD', 'GitHub Actions', 'Razorpay', 'PM2'].map((skill, index) => (
                            <span key={skill} className="badge bg-white text-dark px-3 py-2" style={{ borderRadius: '20px', fontSize: '0.85rem' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={fadeInAnimate('400ms')}>
              <div className="card h-100 border-0 shadow-lg" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-6 text-white">
                  <div className="d-flex align-items-center mb-4 animate-fade-up">
                    <div className="icon-badge me-3 icon-animate" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '12px' }}>
                      <img src="/img/icons/lineal/startup.svg" alt="Projects Icon" width={24} height={24} />
                    </div>
                    <h3 className="mb-0 text-white">Key Projects</h3>
                  </div>
                  <div className="animate-fade-up" style={{ animationDelay: '600ms' }}>
                    <div className="project-item mb-4 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                      <h6 className="text-white mb-2">UnivDatos – Market Research Platform</h6>
                      <p className="text-white-50 small mb-0">SEO‑ready publishing with Strapi CMS, Stripe subscriptions, Docker + Nginx, AWS RDS/S3, Terraform</p>
                    </div>
                    <div className="project-item mb-4 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                      <h6 className="text-white mb-2">OSINT Cybercrime Intelligence</h6>
                      <p className="text-white-50 small mb-0">Real‑time monitoring with keyword tracking, sentiment analysis, Dockerized microservices</p>
                    </div>
                    <div className="project-item mb-4 p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                      <h6 className="text-white mb-2">Co‑Parent Mobile App</h6>
                      <p className="text-white-50 small mb-0">Cross‑platform app for shared custody scheduling, chat, expense tracking</p>
                    </div>
                    <div className="project-item p-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                      <h6 className="text-white mb-2">Social Media Monitoring Desktop</h6>
                      <p className="text-white-50 small mb-0">Desktop analytics app for brand mentions, sentiment, and alerts with real‑time charts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper bg-light">
        <div className="container pb-8" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row mb-8" style={fadeInAnimate('0ms')}>
            <div className="col-lg-12 text-center">
              <div className="d-inline-flex align-items-center mb-3">
                <div className="icon-badge me-3 icon-animate" style={{ backgroundColor: '#667eea', padding: '12px', borderRadius: '12px' }}>
                  <img src="/img/icons/lineal/briefcase.svg" alt="Case Studies Icon" width={24} height={24} />
                </div>
                <h2 className="mb-0">Selected Case Studies</h2>
              </div>
              <p className="lead text-muted">Showcasing diverse projects across web development, mobile apps, and enterprise solutions</p>
            </div>
          </div>
          <div className="row gx-6 gy-6">
            <div className="col-md-6" style={fadeInAnimate('200ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/server.svg" width={20} height={20} alt="UnivDatos" />
                    </div>
                    <h5 className="mb-0 text-white">UnivDatos – Market Research</h5>
                  </div>
                  <p className="text-white-50 mb-3">Strapi CMS + Stripe + Razorpay; Dockerized Node & Nginx; AWS RDS/S3; IaC via Terraform; TypeSense search.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Next.js', 'Strapi', 'PostgreSQL', 'Docker', 'AWS', 'Terraform'].map((tech) => (
                      <span key={tech} className="badge tech-chip px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={fadeInAnimate('400ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/analytics.svg" width={20} height={20} alt="OSINT" />
                    </div>
                    <h5 className="mb-0 text-white">OSINT Intelligence Platform</h5>
                  </div>
                  <p className="text-white-50 mb-3">Backend for iGAT OSINT app enabling real‑time monitoring; keyword tracking, sentiment analysis, dashboards.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Node.js', 'MySQL', 'Docker', 'PM2', 'Jest', 'Postman'].map((tech) => (
                      <span key={tech} className="badge tech-chip px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={fadeInAnimate('600ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/shop.svg" width={20} height={20} alt="E‑Commerce" />
                    </div>
                    <h5 className="mb-0 text-white">Kenoxis – E‑Commerce</h5>
                  </div>
                  <p className="text-white-50 mb-3">Secure store with auth, product management, Razorpay; live order tracking; CI/CD via GitHub Actions; PHPUnit.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Laravel', 'MySQL', 'Tailwind', 'Razorpay', 'Docker', 'GitHub Actions'].map((tech) => (
                      <span key={tech} className="badge tech-chip px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={fadeInAnimate('800ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/handshake.svg" width={20} height={20} alt="Arglin" />
                    </div>
                    <h5 className="mb-0 text-white">Arglin Tech Solution</h5>
                  </div>
                  <p className="text-white-50 mb-3">Enterprise cloud & Oracle managed services content, covering migration, managed services, licensing, engineered systems.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Oracle', 'Multi‑cloud', 'Infra Mgmt', 'Strategy', 'Lifecycle Mgmt'].map((tech) => (
                      <span key={tech} className="badge bg-dark text-white px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={fadeInAnimate('1000ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/smartphone.svg" width={20} height={20} alt="Mobile"/>
                    </div>
                    <h5 className="mb-0 text-white">Co‑Parent Mobile App</h5>
                  </div>
                  <p className="text-white-50 mb-3">Cross‑platform app for shared custody: schedules, messaging, expense logs, and document sharing with role‑based access.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['React Native', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Push'].map((tech) => (
                      <span key={tech} className="badge tech-chip px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={fadeInAnimate('1200ms')}>
              <div className="card shadow-lg h-100 border-0 project-card" style={{ borderRadius: '16px', transition: 'all 0.3s ease', cursor: 'pointer', background: 'linear-gradient(135deg, #17203f 0%, #0f1419 100%)' }}>
                <div className="card-body p-5 text-white">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-badge me-3" style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}>
                      <img src="/img/icons/lineal/computer.svg" width={20} height={20} alt="Desktop"/>
                    </div>
                    <h5 className="mb-0 text-white">Social Media Monitoring (Desktop)</h5>
                  </div>
                  <p className="text-white-50 mb-3">Desktop app tracking brand mentions & sentiment across platforms with real‑time charts and alerting.</p>
                  <div className="d-flex flex-wrap gap-2">
                    {['Electron', 'React', 'Node.js', 'WebSockets', 'SQLite'].map((tech) => (
                      <span key={tech} className="badge tech-chip px-3 py-1" style={{ borderRadius: '15px', fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="wrapper bg-light">
        <div className="container pb-8" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row mb-8" style={fadeInAnimate('0ms')}>
            <div className="col-lg-12 text-center">
              <div className="d-inline-flex align-items-center mb-3">
                <div className="icon-badge me-3 icon-animate" style={{ backgroundColor: '#667eea', padding: '12px', borderRadius: '12px' }}>
                  <img src="/img/icons/lineal/agenda.svg" width={24} height={24} alt="Experience" />
                </div>
                <h2 className="mb-0">Professional Experience</h2>
              </div>
              <p className="lead text-muted">Building innovative solutions across diverse industries and technologies</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                <div className="timeline-item" style={fadeInAnimate('200ms')}>
                  <div className="timeline-marker" style={{ backgroundColor: '#667eea' }}></div>
                  <div className="timeline-content">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="mb-1">Full Stack Developer</h5>
                          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1" style={{ borderRadius: '15px' }}>Current</span>
                        </div>
                        <h6 className="text-primary mb-2">Blacktronics Investigation Labs, UP</h6>
                        <p className="text-muted mb-2">09/2022 – Present</p>
                        <p className="mb-0">Led Phase 2 of a MERN project; built OSINT tools; revamped features for performance; fixed critical bugs to improve stability.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" style={fadeInAnimate('400ms')}>
                  <div className="timeline-marker" style={{ backgroundColor: '#f093fb' }}></div>
                  <div className="timeline-content">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="mb-1">MERN Stack Developer</h5>
                          <span className="badge bg-secondary bg-opacity-10 text-secondary px-3 py-1" style={{ borderRadius: '15px' }}>Remote</span>
                        </div>
                        <h6 className="text-primary mb-2">Visionvertex</h6>
                        <p className="text-muted mb-2">02/2022 – 02/2023</p>
                        <p className="mb-0">Developed and maintained live MERN websites and client projects; integrated OSINT tools; enhanced performance and UX.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="timeline-item" style={fadeInAnimate('600ms')}>
                  <div className="timeline-marker" style={{ backgroundColor: '#4facfe' }}></div>
                  <div className="timeline-content">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="mb-1">Full Stack Web Development</h5>
                          <span className="badge bg-success bg-opacity-10 text-success px-3 py-1" style={{ borderRadius: '15px' }}>Training</span>
                        </div>
                        <h6 className="text-primary mb-2">Masai, Bengaluru</h6>
                        <p className="text-muted mb-2">07/2021 – 02/2022</p>
                        <p className="mb-0">Completed intensive MERN training with individual and team projects using React, Node.js, Express, MongoDB.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Project Highlights */}
      <section className="wrapper bg-light">
        <div className="container pb-6" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row mb-4">
            <div className="col-lg-12 d-flex align-items-center">
              <img src="/img/icons/lineal/clipboard.svg" width={24} height={24} className="me-2 icon-animate" alt="Details" />
              <h3 className="mb-0">Project Details</h3>
            </div>
          </div>
          <div className="row gx-6 gy-6">
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">UnivDatos – Market Research</h5>
                  <ul className="mb-0">
                    <li>Multi-tenant publishing with Strapi; role-based access and editorial workflow.</li>
                    <li>Subscriptions via Stripe; regional payment support with Razorpay.</li>
                    <li>SEO: dynamic sitemap server (Node.js), OpenGraph/Twitter cards, schema markup.</li>
                    <li>Infrastructure: Docker, Nginx, Cloudflare CDN; AWS RDS/S3; Terraform provisioning; blue/green deploys.</li>
                    <li>Observability: structured logs, error tracking, uptime checks; <em>TTR reduced by ~40%</em>.</li>
                  </ul>
                  <div className="small text-muted mt-2">Stack: Next.js, Strapi, PostgreSQL (RDS), Stripe, Razorpay, Docker, Nginx, Cloudflare, AWS S3, Terraform, TypeSense</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">OSINT Intelligence Platform</h5>
                  <ul className="mb-0">
                    <li>Keyword tracking, entity extraction, sentiment analysis, and investigation timelines.</li>
                    <li>Event-driven microservices with queues (retry, DLQ) and idempotent consumers.</li>
                    <li>AuthN/Z with JWT and scoped API keys; audit logs and SIEM-friendly structured logs.</li>
                    <li>Comprehensive tests with Jest; Postman collections and Newman CI step.</li>
                    <li>Delivered <em>~15% faster</em> ingestion throughput after index tuning and batching.</li>
                  </ul>
                  <div className="small text-muted mt-2">Stack: Node.js, MySQL, Redis, Docker, PM2, Nginx, Jest, Postman</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">Co‑Parent Mobile App</h5>
                  <ul className="mb-0">
                    <li>Shared custody calendars with conflict detection and requests.</li>
                    <li>Secure chat, expense approvals, and receipt uploads.</li>
                    <li>Push notifications and offline-first data sync (conflict resolution).</li>
                    <li>End‑to‑end encryption for sensitive attachments; PII-safe logging.</li>
                  </ul>
                  <div className="small text-muted mt-2">Stack: React Native, TypeScript, Node.js, Express, PostgreSQL, JWT, Firebase Cloud Messaging</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">Social Media Monitoring (Desktop)</h5>
                  <ul className="mb-0">
                    <li>Streams brand mentions with WebSockets; real-time charts and filters.</li>
                    <li>Alerting on spikes/negative sentiment; CSV/PDF exports.</li>
                    <li>Local-first storage with sync; auto-update pipeline and crash recovery.</li>
                    <li>Modular data connectors (Twitter/X, Reddit, RSS) with backfill jobs.</li>
                  </ul>
                  <div className="small text-muted mt-2">Stack: Electron, React, Node.js, WebSockets, SQLite, Playwright (smoke tests)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Applications (React & Python Desktop) */}
      <section className="wrapper bg-light">
        <div className="container pb-10" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row mb-4">
            <div className="col-lg-12 d-flex align-items-center">
              <img src="/img/icons/lineal/laptop.svg" width={24} height={24} className="me-2 icon-animate" alt="Apps" />
              <h3 className="mb-0">More Applications</h3>
            </div>
          </div>
          <div className="row gx-6 gy-6">
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">React Apps</h5>
                  <ul className="mb-0">
                    <li>Task Tracker Pro (Next.js + Prisma): team tasks, sprints, real-time presence.</li>
                    <li>Realtime Chat (React + Socket.IO): DMs, groups, file share, read receipts.</li>
                    <li>Admin Analytics Dashboard (React + ECharts): role-based widgets and drilldowns.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h5 className="mb-2">Python Desktop Apps</h5>
                  <ul className="mb-0">
                    <li>Data Scraper Studio (PyQt): scheduler, parsers, export to CSV/DB.</li>
                    <li>Invoice Generator (Tkinter): templates, tax rules, PDF output.</li>
                    <li>System Monitor (PyQt): CPU/mem/net graphs, notifications.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="wrapper bg-light">
        <div className="container pb-10" style={{ maxWidth: '90%', color: '#000' }}>
          <div className="row mb-4">
            <div className="col-lg-12 d-flex align-items-center">
              <img src="/img/icons/lineal/certificate.svg" width={24} height={24} className="me-2" alt="Education" />
              <h3 className="mb-0">Education</h3>
            </div>
          </div>
          <ul className="icon-list bullet-primary mb-0">
            <li><strong>Government Polytechnic Ghaziabad</strong> — Information Technology (07/2021)</li>
            <li><strong>Sant Pushapa Inter College</strong> — Science (07/2018)</li>
          </ul>
        </div>
      </section>

      <section className="wrapper">
        <div className="container pb-10" style={{ maxWidth: '90%' }}>
          <div className="row gx-8 gy-6 align-items-start">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <img src="/img/icons/lineal/server.svg" alt="Tech Areas Icon" width={24} height={24} className="me-2" />
                <h3 className="mb-0">Technology Areas</h3>
              </div>
              <ul className="icon-list bullet-primary mb-0">
                <li><Link href="/technology/applications">Applications</Link></li>
                <li><Link href="/technology/databases">Databases</Link></li>
                <li><Link href="/technology/integration-platforms">Integration Platforms</Link></li>
                <li><Link href="/technology/bi-analytics">BI / Analytics</Link></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <img src="/img/icons/lineal/handshake.svg" alt="Partners Icon" width={24} height={24} className="me-2" />
                <h3 className="mb-0">Partner Work</h3>
              </div>
              <p className="mb-3">Experience delivering solutions across partner ecosystems including Oracle, Microsoft, and AWS—aligning to best‑practice reference architectures.</p>
              <Link className="btn btn-primary btn-sm" href="/partner">View Partners</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer8 />
    </BlockLayout>
  );
};

export default SauraPortfolio;


