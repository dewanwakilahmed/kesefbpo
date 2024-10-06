import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import './home-hero.css';

const HomeHero: FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-headline">Accelerate. Optimize. Grow.</h1>
        <h2 className="hero-subheadline">With Kesef BPO at the Helm</h2>
        <p className="hero-description">
          Leave the operational challenges to us, so you can focus on driving
          business growth.
        </p>
        <div className="hero-buttons">
          <Link href="/contact" className="hero-button hero-button-primary">
            Get Started
          </Link>
          <Link href="/services" className="hero-button hero-button-secondary">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
