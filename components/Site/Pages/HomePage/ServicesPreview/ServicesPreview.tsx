import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './services-preview.css';

const ServicesPreview: FC = () => {
  return (
    <section className="services-preview">
      <div className="services-preview-text-container">
        <h2 className={`services-preview-heading ${secondaryFont.className}`}>
          What We Offer
        </h2>
        <p className="services-preview-description">
          At KESEF BPO, we handle the operational challenges so you can focus on
          growth
        </p>
        <div className="services-preview-text-box">
          <p className="services-preview-text">
            From administrative support to customer service and
            industry-specific solutions, we provide expert-driven outsourcing
            services that empower businesses to scale seamlessly.
          </p>
          <p className="services-preview-text">
            Let us help you optimize operations and achieve your goals.
          </p>
          <div className="services-preview-cta">
            <Link
              href="/services"
              className={`services-preview-btn btn btn-secondary ${secondaryFont.className}`}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="services-preview-img-container"></div>
    </section>
  );
};

export default ServicesPreview;
