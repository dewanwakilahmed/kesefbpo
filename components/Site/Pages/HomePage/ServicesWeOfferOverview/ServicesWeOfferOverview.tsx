'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import './services-we-offer-overview.css';

import {
  ClipboardIcon,
  PhoneIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';

const servicesWeOffer = [
  {
    title: 'Customer Support',
    description:
      'Deliver exceptional customer experiences with our dedicated support teams.',
    icon: PhoneIcon,
  },
  {
    title: 'Human Resources (HR) Services',
    description:
      'Optimize your HR processes and streamline talent management with our specialized HR support.',
    icon: UserGroupIcon,
  },
  {
    title: 'Finance & Accounting',
    description:
      'Professional financial services to manage accounting, payroll, and financial reporting.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'IT & Technical Support',
    description:
      'Access top-notch technical support and IT services for seamless operations.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Data Entry & Management',
    description:
      'Efficient data entry and management services to keep your business running smoothly.',
    icon: ClipboardIcon,
  },
  {
    title: 'Digital Marketing',
    description:
      'Enhance your digital presence with our comprehensive marketing strategies.',
    icon: ChartBarIcon,
  },
  {
    title: 'Back Office Support',
    description:
      'Reduce your workload with back-office support that handles administrative tasks efficiently.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Sales & Telemarketing',
    description:
      'Boost your sales pipeline with our professional sales and telemarketing teams.',
    icon: BriefcaseIcon,
  },
];

const ServicesWeOfferOverview: FC = () => {
  return (
    <section className="services-we-offer-overview">
      <div className="services-we-offer-overview-container">
        <h2 className="services-we-offer-overview-headline">
          Our Services at a Glance
        </h2>
        <p className="services-we-offer-overview-intro">
          Discover our wide range of services designed to optimize your business
          operations, enhance efficiency, and drive success across multiple
          functions.
        </p>

        <div className="services-we-offer-grid">
          {servicesWeOffer.map((service, index) => (
            <div key={`service-${index}`} className="services-we-offer-card">
              <service.icon
                className="services-we-offer-icon"
                aria-hidden="true"
              />
              <h3 className="services-we-offer-title">{service.title}</h3>
              <p className="services-we-offer-description">
                {service.description}
              </p>
              <Link href="/services-we-offer" className="services-we-offer-cta">
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="services-we-offer-view-all">
          <Link href="/services-we-offer" className="services-we-offer-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOfferOverview;
