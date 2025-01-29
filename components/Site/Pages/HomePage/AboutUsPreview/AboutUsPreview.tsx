import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './about-us-preview.css';

const AboutUsPreview: FC = () => {
  return (
    <section className="about-us-preview">
      <div className="about-us-preview-img-container"></div>
      <div className="about-us-preview-text-container">
        <h2 className={`about-us-preview-heading ${secondaryFont.className}`}>
          Who We Are
        </h2>
        <p className="about-us-preview-description">
          At KESEF BPO, we believe that great partnerships are built on trust,
          expertise, and a commitment to excellence
        </p>
        <div className="about-us-preview-text-box">
          <p className="about-us-preview-text">
            At KESEF BPO, We focus on simplifying business processes so you can
            focus on what truly matters—growth and innovation.
          </p>
          <p className="about-us-preview-text">
            Learn more about our mission-driven approach, the values that guide
            us, and the team dedicated to helping your business thrive. KESEF
            BPO is more than just outsourcing; we&apos;re your partners in
            success.
          </p>
          <div className="about-us-preview-cta">
            <Link
              href="/about-us"
              className={`about-us-preview-btn btn btn-primary ${secondaryFont.className}`}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreview;
