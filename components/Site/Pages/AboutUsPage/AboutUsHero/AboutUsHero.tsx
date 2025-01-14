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
          Empowering Businesses with Outsourcing Excellence
        </h1>
        <h2 className={`about-us-hero-subheadline ${secondaryFont.className}`}>
          Discover Our Story, Values, and Commitment to Your Success
        </h2>
        <p className="about-us-hero-description">
          At Kesef BPO, we&apos;re more than just an outsourcing partner —
          we&apos;re an extension of your team. Our mission is to help your
          business thrive by providing innovative solutions, unmatched
          expertise, and a dedication to delivering results
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
