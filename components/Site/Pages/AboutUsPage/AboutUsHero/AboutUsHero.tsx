import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './about-us-hero.css';

const AboutUsHero: FC = () => {
  return (
    <section className="about-us-hero">
      <div className="about-us-hero-container">
        <h1 className={`about-us-hero-headline ${primaryFont.className}`}>
          Your Trusted Partner in Business Growth
        </h1>
        <h2 className={`about-us-hero-subheadline ${primaryFont.className}`}>
          Driven by Excellence, Focused on Your Success
        </h2>
        <p className="about-us-hero-description">
          At Kesef BPO, we empower businesses to achieve more. Our team combines
          expertise and dedication to streamline your operations, allowing you
          to focus on what matters most—your growth.
        </p>
        <div className="about-us-hero-cta"></div>
      </div>
    </section>
  );
};

export default AboutUsHero;
