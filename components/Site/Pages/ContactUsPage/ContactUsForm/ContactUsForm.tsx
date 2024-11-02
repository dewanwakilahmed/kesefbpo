'use client';

import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './contact-us-form.css';

const ContactUsForm: FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    contactReason: 'general',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <section className="contact-us-form" id="contact-us-form">
      <div className="contact-us-form-container">
        <h3 className={`contact-us-form-heading ${primaryFont.className}`}>
          We&apos;re Here to Help
        </h3>
        <p className="contact-us-form-description">
          Let us know how we can assist. Whether it&apos;s an inquiry,
          suggestion, or request, we&apos;ll respond within 24 hours
        </p>
        <form
          className={`form ${primaryFont.className}`}
          onSubmit={handleSubmit}
        >
          <div className="form-group full-name-group">
            <label htmlFor="fullName" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="form-input"
              required
            />
          </div>

          <div className="form-group company-name-group">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Your Company"
              className="form-input"
            />
          </div>

          <div className="form-group email-group">
            <label htmlFor="email" className="form-label">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
              className="form-input"
              required
            />
          </div>

          <div className="form-group phone-number-group">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              className="form-input"
            />
          </div>

          <div className="form-group contact-reason-group">
            <label htmlFor="contactReason" className="form-label">
              Reason for Contacting
            </label>
            <select
              id="contactReason"
              name="contactReason"
              value={form.contactReason}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="general">General Inquiry</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group message-group">
            <label htmlFor="message" className="form-label">
              Tell Us How We Can Help
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we assist you? Let us know!"
              className="form-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="form-btn btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
