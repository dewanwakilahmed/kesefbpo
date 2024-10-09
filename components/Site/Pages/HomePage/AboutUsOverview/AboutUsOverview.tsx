import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import './about-us-overview.css';

// Icons
import {
  BriefcaseIcon,
  GlobeAltIcon,
  CogIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

// Content
const aboutUsHighlights = [
  {
    title: 'Industry Experience',
    description:
      'Established in 2023, Kesef BPO has rapidly gained a reputation for delivering high-quality business solutions.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Global Reach',
    description:
      'Serving clients worldwide with a network of resources that ensures scalability and efficiency.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Tailored Solutions',
    description:
      'Customizable outsourcing solutions designed to meet the specific needs of your business.',
    icon: CogIcon,
  },
  {
    title: 'Client Success',
    description:
      'Dedicated to driving client success through measurable business outcomes and optimized performance.',
    icon: StarIcon,
  },
];

const AboutUsOverview: FC = () => {
  return (
    <section className="about-us-overview-section">
      <div className="about-us-overview-container">
        <h2 className="about-us-overview-headline">Get to Know Kesef BPO</h2>

        <p className="about-us-overview-introduction">
          At Kesef BPO, we strive to redefine business process outsourcing with
          innovative solutions and a client-centric approach that ensures
          operational excellence for our partners.
        </p>

        <div className="about-us-overview-grid">
          {aboutUsHighlights.map((highlight, index) => (
            <div key={`highlight-${index}`} className="highlight-item">
              <highlight.icon className="highlight-icon" aria-hidden="true" />
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        <Link href="/about-us" className="about-us-overview-btn">
          Get to Know Us Better
        </Link>
      </div>
    </section>
  );
};

export default AboutUsOverview;
