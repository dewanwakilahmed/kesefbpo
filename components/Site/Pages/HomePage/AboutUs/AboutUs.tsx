import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import './about-us.css';

// Icons
import {
  BriefcaseIcon,
  GlobeAltIcon,
  CogIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

const AboutUsSection: FC = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h2 className="about-us-headline">Get to Know Kesef BPO</h2>

        <p className="about-us-introduction">
          At Kesef BPO, we strive to redefine business process outsourcing with
          innovative solutions and a client-centric approach that ensures
          operational excellence for our partners
        </p>

        <div className="about-us-grid">
          <div className="highlight-item">
            <BriefcaseIcon className="highlight-icon" />
            <h3 className="highlight-title">Industry Experience</h3>
            <p className="highlight-description">
              Established in 2023, Kesef BPO has rapidly gained a reputation for
              delivering high-quality business solutions
            </p>
          </div>

          <div className="highlight-item">
            <GlobeAltIcon className="highlight-icon" />
            <h3 className="highlight-title">Global Reach</h3>
            <p className="highlight-description">
              Serving clients worldwide with a network of resources that ensures
              scalability and efficiency
            </p>
          </div>

          <div className="highlight-item">
            <CogIcon className="highlight-icon" />
            <h3 className="highlight-title">Tailored Solutions</h3>
            <p className="highlight-description">
              Customizable outsourcing solutions designed to meet the specific
              needs of your business
            </p>
          </div>

          <div className="highlight-item">
            <StarIcon className="highlight-icon" />
            <h3 className="highlight-title">Client Success</h3>
            <p className="highlight-description">
              Dedicated to driving client success through measurable business
              outcomes and optimized performance
            </p>
          </div>
        </div>

        <Link href="/about-us" className="about-us-cta">
          Get to Know Us Better
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
