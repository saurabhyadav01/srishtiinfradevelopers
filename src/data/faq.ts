import companyContact from 'data/contact';
import { aboutOverview } from 'data/about';

// used in the faq-1 block
export const accordionList1 = [
  [
    {
      no: 'One',
      expand: false,
      heading: `What services does ${companyContact.name} provide?`,
      body: `${companyContact.name} is an all-encompassing property owner, developer and manager. We specialize in residential plots, apartments, townships, and commercial developments across Noida and Greater Noida — handling land procurement, project planning, construction, sales, and customer handover.`
    },
    {
      no: 'Two',
      expand: false,
      heading: 'How can I book a plot or apartment?',
      body: `You can visit our office, call us directly, or fill out the contact form on our website. Our sales team will guide you through available projects, pricing, payment plans, and documentation requirements.`
    },
    {
      no: 'Three',
      expand: false,
      heading: 'Are your projects RERA registered?',
      body: `Yes, all our running projects are registered under RERA (Real Estate Regulatory Authority). We maintain full transparency in pricing, project timelines, and construction progress.`
    }
  ],
  [
    {
      no: 'Four',
      expand: false,
      heading: 'What is your typical project timeline?',
      body: `Residential plot projects are typically delivered within 12–18 months. Apartment and township projects may take 24–36 months depending on scale. We provide regular construction updates and adhere to committed possession dates.`
    },
    {
      no: 'Five',
      expand: false,
      heading: 'Do you offer home loan assistance?',
      body: `Yes, we have tie-ups with leading banks and NBFCs. Our team helps you with loan documentation, approval process, and EMI planning to make your purchase smooth and hassle-free.`
    },
    {
      no: 'Six',
      expand: false,
      heading: `What makes ${companyContact.name} different?`,
      body: `${aboutOverview} We deliver prime locations, excellent construction quality, on-time handover, and personal customer relationships built on trust, integrity and transparency.`
    }
  ]
];

// used in the faq-2 block
export const accordionList2 = [
  {
    no: 'One',
    expand: false,
    heading: 'What Oracle technologies do you support?',
    body: `We support Oracle E-Business Suite, Oracle Fusion Cloud ERP, Oracle NetSuite, PeopleSoft, JD Edwards, Oracle Database, and all Oracle Cloud services. Our team is certified in multiple Oracle technologies.`
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Do you provide cloud migration services?',
    body: `Yes, we specialize in cloud migrations to Oracle Cloud, AWS, Microsoft Azure, and Google Cloud Platform. We ensure seamless transitions with minimal downtime and maximum data integrity.`
  },
  {
    no: 'Three',
    expand: false,
    heading: 'What is your pricing model?',
    body: `We offer flexible pricing models including project-based, hourly consulting, and managed services contracts. Pricing depends on project scope, complexity, and duration. Contact us for a customized quote.`
  },
  {
    no: 'Four',
    expand: false,
    heading: 'How do you ensure data security?',
    body: `We follow industry best practices for data security, including encryption, access controls, regular security audits, and compliance with relevant regulations. All our team members are security-certified.`
  }
];

// used in the faq-6 block
export const accordionList3 = [
  {
    no: 'One',
    expand: false,
    heading: 'Do you offer training and support?',
    body: `Yes, we provide comprehensive training programs for your team on Oracle technologies, cloud platforms, and best practices. We also offer ongoing support and knowledge transfer sessions.`
  },
  {
    no: 'Two',
    expand: false,
    heading: 'What is your response time for support?',
    body: `For critical issues, we respond within 1 hour. For standard support requests, we respond within 4-8 hours during business days. Our SLA guarantees specific response times based on your service level.`
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Can you help with legacy system modernization?',
    body: `Absolutely! We specialize in modernizing legacy Oracle systems, migrating to cloud platforms, and implementing modern architectures while preserving your business processes and data.`
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Do you work internationally?',
    body: `Yes, we serve clients globally. We have experience working with international teams and can accommodate different time zones for project delivery and support services.`
  }
];
