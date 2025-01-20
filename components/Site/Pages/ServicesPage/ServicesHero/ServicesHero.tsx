import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './services-hero.css';

const ServicesHero: FC = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-container">
        <h1 className={`services-hero-headline ${secondaryFont.className}`}>
          BPO Solutions That Drive Growth
        </h1>
        <h2 className={`services-hero-subheadline ${secondaryFont.className}`}>
          Streamline, optimize, and thrive with our expert services
        </h2>
        <p className="services-hero-description">
          Tailored solutions for customer support and back-office management
        </p>
        <div className="services-hero-cta">
          <Link
            href="/contact-us"
            className={`services-hero-btn btn btn-primary ${secondaryFont.className}`}
          >
            Get Started
          </Link>
          <Link
            href="/services#services-overview"
            className={`services-hero-btn btn btn-secondary ${secondaryFont.className}`}
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
