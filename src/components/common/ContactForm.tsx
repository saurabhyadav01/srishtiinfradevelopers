import React, { FC, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const emailjsConfig = {
    serviceID: 'service_ok4fq8q',
    templateID: 'template_4i6ry2h',
    userID: '-4IgKH_kPsVwf2FfT',
    toEmail: 'inf@srishtiinfradevelopers.com',
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const form = e.currentTarget;
    
    try {
      const response = await emailjs.sendForm(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        form, // Pass the form element here
        emailjsConfig.userID
      );
      console.log('Email sent successfully!', response);
      setMessage('Your message has been sent successfully.');
    } catch (error) {
      console.error('Email sending failed:', error);
      setMessage('Sorry, there was an error sending your message.');
    } finally {
      setLoading(false);
    }
  
    form.reset();
  };
  

  return (
    <div>
      {loading && <div className="spinner-border" role="status"></div>}
      {message && (
        <div className={`alert ${message.includes('error') ? 'alert-danger' : 'alert-success'}`}>
          {message}
        </div>
      )}
      <form className="contact-form needs-validation" method="post" onSubmit={sendEmail}>
        <div className="messages"></div>
        <div className="row gx-4">
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="name"
                id="form_name"
                placeholder="First Name"
                className="form-control"
              />
              <label htmlFor="form_name">First Name *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please enter your first name. </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="surname"
                placeholder="Last Name"
                id="form_lastname"
                className="form-control"
              />
              <label htmlFor="form_name">Last Name *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please enter your last name. </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="email"
                name="email"
                id="form_email"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
                <label htmlFor="form_name">Email Id *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>

          

          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="email"
                name="companyEmail"
                id="form_company_email"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
              <label htmlFor="form_company_email">Company Email *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>

         
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="country"
                id="form_country"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
              <label htmlFor="form_country">Country *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>
            <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="department"
                id="form_department"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
              <label htmlFor="form_department">Dpartment *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="website"
                id="form_website"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
              <label htmlFor="form_website">Website *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-4">
              <input
                required
                type="text"
                name="phone"
                id="form_Phone"
                className="form-control"
                placeholder="jane.doe@example.com"
              />
              <label htmlFor="form_Phone">Phone *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please provide a valid email address. </div>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating mb-4">
              <textarea
                required
                name="message"
                id="form_message"
                className="form-control"
                placeholder="Your message"
                style={{ height: 150 }}
              />
              <label htmlFor="form_message">Message *</label>
              <div className="valid-feedback"> Looks good! </div>
              <div className="invalid-feedback"> Please enter your message. </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <input
              type="submit"
              value="Send message"
              className="btn btn-primary rounded-pill btn-send mb-3"
            />
            <p className="text-muted">
              <strong>*</strong> These fields are required.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
