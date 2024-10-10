import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import './industries-we-serve-overview.css';

// Icons
import {
  BanknotesIcon,
  ShoppingCartIcon,
  TruckIcon,
  BoltIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  HomeModernIcon,
  FilmIcon,
} from '@heroicons/react/24/solid';

// Content
const industriesWeServe = [
  {
    title: 'Banking, Finance, and Insurance',
    description:
      'Providing back-office support, customer service, and compliance management for the financial sector',
    icon: BanknotesIcon,
  },
  {
    title: 'Retail and E-commerce',
    description:
      'Helping retail businesses enhance customer experience and streamline operations',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Logistics and Shipping',
    description:
      'Supporting logistics companies with order processing, data management, and customer service',
    icon: TruckIcon,
  },
  {
    title: 'Utilities',
    description:
      'Delivering customer support and billing management for utility service providers',
    icon: BoltIcon,
  },
  {
    title: 'Travel and Hospitality',
    description:
      'Enhancing guest experiences with customer support and booking management services',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Telecommunications and IT Services',
    description:
      'Providing tech support and customer management solutions for IT and telecom businesses',
    icon: GlobeAltIcon,
  },
  {
    title: 'Real Estate',
    description:
      'Offering administrative support, appointment setting, and data management for real estate firms',
    icon: HomeModernIcon,
  },
  {
    title: 'Media and Entertainment',
    description:
      'Supporting media companies with content moderation, customer service, and marketing',
    icon: FilmIcon,
  },
];

const IndustriesWeServeOverview: FC = () => {
  return (
    <section className="industries-we-serve-overview">
      <div className="industries-we-serve-overview-container">
        <h2 className="industries-we-serve-overview-headline">
          Industries We Serve
        </h2>

        <p className="industries-we-serve-overview-intro">
          We partner with businesses from diverse industries to deliver tailored
          BPO services that drive efficiency and growth. Our expertise enables
          us to provide customized solutions that address the unique challenges
          and needs of each sector
        </p>

        <div className="industries-we-serve-overview-grid">
          {industriesWeServe.map((industry, index) => (
            <div
              key={`industry-${index}`}
              className="industries-we-serve-overview-card"
            >
              <industry.icon
                className="industries-we-serve-overview-icon"
                aria-hidden="true"
              />
              <h3 className="industries-we-serve-overview-title">
                {industry.title}
              </h3>
              <p className="industries-we-serve-overview-description">
                {industry.description}
              </p>
              <Link
                href="/industries-we-serve"
                className="industries-we-serve-cta"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <Link
          href="/industries-we-serve"
          className="industries-we-serve-view-all-btn"
        >
          Explore All Industries
        </Link>
      </div>
    </section>
  );
};

export default IndustriesWeServeOverview;
