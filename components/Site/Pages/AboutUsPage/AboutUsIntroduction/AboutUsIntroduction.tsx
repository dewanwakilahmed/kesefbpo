import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './about-us-introduction.css';

const AboutUsIntroduction: FC = () => {
  return (
    <section className="about-us-introduction">
      <div className="about-us-introduction-container">
        <h2
          className={`about-us-introduction-heading ${secondaryFont.className}`}
        >
          Driving Business Growth with Tailored BPO Solutions
        </h2>
        <p className="about-us-introduction-description">
          Comprehensive outsourcing services designed to streamline operations
          and fuel your business success
        </p>

        <div className="about-us-introduction-box">
          <div className="about-us-introduction-img-box"></div>
          <div className="about-us-introduction-text-box">
            <p className="about-us-introduction-text">
              At KESEF BPO, we specialize in delivering comprehensive business
              process outsourcing solutions designed to help businesses thrive.
              Our current services include Lead Generation, Sales &
              Telemarketing, Back Office Support, Virtual Assistance, and
              Customer Support.
            </p>
            <p className="about-us-introduction-text">
              Looking ahead, we&apos;re excited to gradually expand into IT &
              Technical Support, Web Development, App Development, and Digital
              Marketing, ensuring we provide holistic solutions to support your
              business at every stage of growth.
            </p>
            <div className="about-us-introduction-cta">
              <Link
                href="/about-us/services"
                className={`about-us-introduction-btn btn btn-primary ${secondaryFont.className}`}
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntroduction;
