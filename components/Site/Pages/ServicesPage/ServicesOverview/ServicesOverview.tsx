import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// Icons
import { FaBullseye } from 'react-icons/fa';
import { BiHeadphone } from 'react-icons/bi';
import { MdPhoneInTalk } from 'react-icons/md';
import { HiOutlineCode } from 'react-icons/hi';

// CSS
import './services-overview.css';

// Content
const servicesOverviewContent = [
  {
    heading: 'Telemarketing & Sales',
    description:
      'Engage prospects, nurture leads, and close deals effectively with our skilled telemarketing team, trained to drive your sales growth',
    icon: <MdPhoneInTalk />,
  },
  {
    heading: 'Lead Generation',
    description:
      'We identify and qualify high-potential leads, ensuring your sales pipeline stays full and your team focuses on conversions',
    icon: <FaBullseye />,
  },
  {
    heading: 'Customer Support',
    description:
      'From 24/7 support to multi-channel communication, our customer support team ensures your clients receive prompt and professional assistance',
    icon: <BiHeadphone />,
  },
  {
    heading: 'Web Development',
    description:
      'From dynamic websites to custom applications, we build digital solutions that elevate your online presence and drive engagement',
    icon: <HiOutlineCode />,
  },
];

const ServicesOverview: FC = () => {
  return (
    <section className="services-overview">
      <div className="services-overview-container">
        <h2 className={`services-overview-heading ${secondaryFont.className}`}>
          Comprehensive BPO Services for Your Success
        </h2>
        <p className="services-overview-description">
          At KESEF BPO, we provide tailored outsourcing solutions to meet the
          unique needs of your business
        </p>
        <div className="services-overview-content">
          {servicesOverviewContent.map((service, index) => (
            <div key={index} className="service">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-heading">{service.heading}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
