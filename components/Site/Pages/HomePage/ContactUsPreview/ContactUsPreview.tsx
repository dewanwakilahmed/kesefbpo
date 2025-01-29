import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './contact-us-preview.css';

const ContactUsPreview: FC = () => {
  return (
    <section className="contact-us-preview">
      <div className="contact-us-preview-img-container"></div>
      <div className="contact-us-preview-text-container">
        <h2 className={`contact-us-preview-heading ${secondaryFont.className}`}>
          Get in Touch
        </h2>
        <p className="contact-us-preview-description">
          KESEF BPO is committed to providing expert support and tailored
          solutions for your business
        </p>
        <div className="contact-us-preview-text-box">
          <p className="contact-us-preview-text">
            Ready to take your business to the next level? Whether you have
            questions or need a customized outsourcing solution, our team is
            here to help.
          </p>
          <p className="contact-us-preview-text">
            Reach out to us, and let&apos;s discuss how we can help streamline
            your operations and fuel your business growth. Let&apos;s start a
            conversation today!
          </p>
          <div className="contact-us-preview-cta">
            <Link
              href="/contact-us"
              className={`contact-us-preview-btn btn btn-secondary ${secondaryFont.className}`}
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPreview;
