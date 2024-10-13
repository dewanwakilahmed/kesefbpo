import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import './why-choose-us.css';

// Icons
import {
  CheckCircleIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

// Content
const whyChooseUs = [
  {
    title: 'Cost Efficiency',
    description:
      'Significantly reduce operational costs with our scalable BPO solutions.',
    icon: CheckCircleIcon,
  },
  {
    title: 'Expert Team',
    description:
      'Our skilled professionals bring a wealth of experience across multiple industries.',
    icon: UserGroupIcon,
  },
  {
    title: 'Global Reach',
    description:
      'We offer services globally, ensuring seamless operations regardless of location.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Proven Results',
    description:
      'Our track record speaks for itself, with numerous clients experiencing improved efficiency and growth.',
    icon: ChartBarIcon,
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className="why-choose-us-headline">Why Choose Us</h2>
        <p className="why-choose-us-intro">
          Discover the reasons why businesses trust Kesef BPO to elevate their
          operations. We are committed to delivering tangible results and value.
        </p>

        <div className="why-choose-us-grid">
          {whyChooseUs.map((item, index) => (
            <div key={`why-choose-${index}`} className="why-choose-us-card">
              <item.icon className="why-choose-us-icon" aria-hidden="true" />
              <h3 className="why-choose-us-title">{item.title}</h3>
              <p className="why-choose-us-description">{item.description}</p>
            </div>
          ))}
        </div>

        <Link href="/about-us" className="why-choose-us-cta">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;
