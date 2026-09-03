import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import './Contact.css';

const sectors = ['Government', 'Commercial', 'Residential', 'Industrial', 'Institutional', 'Infrastructure', 'Other'];
const projectTypes = ['New Construction', 'Renovation', 'Infrastructure', 'Project Management', 'Engineering Services', 'Other'];

const initialForm = {
  name: '', company: '', email: '', phone: '',
  sector: '', projectType: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Please include a message.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=80"
            alt="Contact Vertex Engineering"
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span className="eyebrow" {...fadeUp(0.2)}>Get in Touch</motion.span>
          <motion.h1 className="heading-display page-hero__heading" {...fadeUp(0.35)}>
            Let&apos;s Build<br />Something Great.
          </motion.h1>
          <motion.p className="page-hero__sub" {...fadeUp(0.5)}>
            Tell us about your project and we&apos;ll be in touch to discuss how we can help.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrap">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-label">Send a Message</span>
                <h2 className="heading-md contact-form-title">Start a Conversation</h2>
              </motion.div>

              {submitted ? (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle size={48} className="contact-success__icon" />
                  <h3 className="contact-success__title">Message Received</h3>
                  <p className="contact-success__body">
                    Thank you for reaching out. A member of our team will be in touch within two business days.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Project enquiry form"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <div className="contact-form__row">
                    <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                      <label htmlFor="name" className="form-label">
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text"
                        className="form-input"
                        value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company / Organisation</label>
                      <input
                        id="company" name="company" type="text"
                        className="form-input"
                        value={form.company} onChange={handleChange}
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                      <label htmlFor="email" className="form-label">
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email"
                        className="form-input"
                        value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className="form-input"
                        value={form.phone} onChange={handleChange}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label htmlFor="sector" className="form-label">Sector</label>
                      <select
                        id="sector" name="sector"
                        className="form-input form-select"
                        value={form.sector} onChange={handleChange}
                      >
                        <option value="">Select a sector</option>
                        {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="projectType" className="form-label">Project Type</label>
                      <select
                        id="projectType" name="projectType"
                        className="form-input form-select"
                        value={form.projectType} onChange={handleChange}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                    <label htmlFor="message" className="form-label">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      className="form-input form-textarea"
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your project — scope, location, timeline or any other relevant details."
                      rows={6}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary contact-form__submit">
                    Send Enquiry
                  </button>
                </motion.form>
              )}
            </div>

            {/* Info panel */}
            <aside className="contact-info" aria-label="Contact information">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="section-label">Contact Details</span>
                <h3 className="heading-md contact-info__title">Reach Us Directly</h3>

                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <MapPin size={18} className="contact-info__icon" />
                    <div>
                      <div className="contact-info__item-label">Office</div>
                      <div className="contact-info__item-value">
                        Blue Area, Islamabad<br />Pakistan
                      </div>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <Phone size={18} className="contact-info__icon" />
                    <div>
                      <div className="contact-info__item-label">Telephone</div>
                      <a href="tel:+92511234567" className="contact-info__item-value contact-info__link">
                        +92 51 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="contact-info__item">
                    <Mail size={18} className="contact-info__icon" />
                    <div>
                      <div className="contact-info__item-label">Email</div>
                      <a href="mailto:info@vertexec.com" className="contact-info__item-value contact-info__link">
                        info@vertexec.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-info__hours">
                  <h4 className="contact-info__hours-title">Office Hours</h4>
                  <p className="contact-info__hours-text">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>

                <div className="contact-info__image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                    alt="Vertex Engineering headquarters"
                    className="contact-info__image"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
