import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// Icons
import { HiOutlineAdjustments } from 'react-icons/hi';
import { FiAward } from 'react-icons/fi';
import { MdOutlineTrendingUp } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';

// CSS
import './why-choose-us.css';

// Content
const whyChooseUsContent = [
  {
    heading: 'Tailored Solutions for Every Business',
    text: 'We understand that no two businesses are alike. That’s why our services are customized to meet the unique needs of your organization, ensuring maximum efficiency and impact',
    icon: <HiOutlineAdjustments />,
  },
  {
    heading: 'Unmatched Expertise and Commitment',
    text: 'Our team of dedicated professionals combines industry experience with a passion for excellence. We work as an extension of your team, delivering results you can count on',
    icon: <FiAward />,
  },
  {
    heading: 'Future-Ready Services',
    text: 'From lead generation to back-office support, we offer comprehensive solutions that grow with your business. With plans to expand into IT support, digital marketing, and more, we ensure you’re always ahead in a competitive market',
    icon: <MdOutlineTrendingUp />,
  },
  {
    heading: 'Client-Centric Approach',
    text: 'Your success is our priority. We take pride in building long-term relationships, driven by transparency, trust, and a shared commitment to achieving your goals',
    icon: <AiOutlineTeam />,
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-container">
        <h2 className={`why-choose-us-heading ${secondaryFont.className}`}>
          Discover the KESEF BPO Advantage
        </h2>
        <p className="why-choose-us-description">
          At KESEF BPO, we go beyond traditional outsourcing to become a true
          partner in your growth journey
        </p>
        <div className="why-choose-us-content">
          {whyChooseUsContent.map((point, index) => (
            <div key={index} className="why-choose-us-point">
              <div className="why-choose-us-point-icon">{point.icon}</div>
              <h3 className="why-choose-us-point-heading">{point.heading}</h3>
              <p className="why-choose-us-point-text">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
