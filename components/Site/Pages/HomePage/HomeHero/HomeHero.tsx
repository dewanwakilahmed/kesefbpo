import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './home-hero.css';

const HomeHero: FC = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-container">
        <h1 className={`home-hero-headline ${secondaryFont.className}`}>
          Streamline Operations. Accelerate Growth.
        </h1>
        <h2 className={`home-hero-subheadline ${secondaryFont.className}`}>
          Let KESEF BPO Power Your Business Growth
        </h2>
        <p className="home-hero-description">
          We handle the complex tasks so you can focus on what matters most —
          growing your business
        </p>
        <div className="home-hero-cta">
          <Link
            href="/contact-us"
            className={`home-hero-btn btn btn-primary ${secondaryFont.className}`}
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className={`home-hero-btn btn btn-secondary ${secondaryFont.className}`}
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
