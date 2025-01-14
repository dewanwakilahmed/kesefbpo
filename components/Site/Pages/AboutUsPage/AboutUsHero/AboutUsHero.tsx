import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './about-us-hero.css';

const AboutUsHero: FC = () => {
  return (
    <section className="about-us-hero">
      <div className="about-us-hero-container">
        <h1 className={`about-us-hero-headline ${secondaryFont.className}`}>
          Outsourcing Excellence for Your Business
        </h1>
        <h2 className={`about-us-hero-subheadline ${secondaryFont.className}`}>
          Our Story, Values, and Commitment to Success
        </h2>
        <p className="about-us-hero-description">
          Kesef BPO is your trusted partner, offering innovative solutions and
          expertise to help your business thrive
        </p>
        <div className="about-us-hero-cta">
          <Link
            href="/about-us/meet-the-team"
            className={`about-us-hero-btn btn btn-primary ${secondaryFont.className}`}
          >
            Meet the Team
          </Link>
          <Link
            href="/about-us/company-culture"
            className={`about-us-hero-btn btn btn-secondary ${secondaryFont.className}`}
          >
            Company Culture
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
