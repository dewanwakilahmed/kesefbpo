'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import './services-we-offer-overview.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ marginTop: '25px' }}>
        <ul style={{ margin: '0px', padding: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: '#1E40AF',
          margin: '0 7px',
        }}
      ></div>
    ),
  };

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
        <Slider {...settings} className="services-we-offer-slider">
          {servicesWeOffer.map((service, index) => (
            <div
              key={`service-${index}`}
              className="services-we-offer-overview-slide"
            >
              <div className="services-we-offer-overview-card">
                <service.icon
                  className="services-we-offer-overview-icon"
                  aria-hidden="true"
                />
                <h3 className="services-we-offer-overview-title">
                  {service.title}
                </h3>
                <p className="services-we-offer-overview-description">
                  {service.description}
                </p>
                <Link
                  href="/services-we-offer"
                  className="services-we-offer-overview-cta"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <div className="services-we-offer-overview-view-all">
          <Link
            href="/services-we-offer"
            className="services-we-offer-overview-button"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOfferOverview;
