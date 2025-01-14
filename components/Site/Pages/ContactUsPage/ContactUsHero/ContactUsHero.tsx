import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './contact-us-hero.css';

const ContactUsHero: FC = () => {
  return (
    <section className="contact-us-hero">
      <div className="contact-us-hero-container">
        <h1 className={`contact-us-hero-headline ${secondaryFont.className}`}>
          Let&apos;s Talk Business
        </h1>
        <h2
          className={`contact-us-hero-subheadline ${secondaryFont.className}`}
        >
          Get in Touch with Our Team Today
        </h2>
        <p className="contact-us-hero-description">
          From operational support to outsourcing solutions, we&apos;re here to
          make your business run smoother
        </p>
        <div className="contact-us-hero-cta">
          <Link
            href="/contact-us#contact-us-form"
            className={`contact-us-hero-btn btn btn-primary ${secondaryFont.className}`}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
