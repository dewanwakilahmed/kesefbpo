import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './about-us-mission-vision.css';

const AboutUsMissionVision: FC = () => {
  return (
    <section className="about-us-mission-vision">
      <div className="about-us-mission-vision-container">
        <h2
          className={`about-us-mission-vision-heading ${secondaryFont.className}`}
        >
          Empowering Businesses, Enriching Communities
        </h2>
        <p className="about-us-mission-vision-description">
          At KESEF BPO, our mission drives us daily, and our vision shapes the
          future we’re building—for businesses and the community alike
        </p>
        <div className="about-us-mission-vision-content">
          <div className="about-us-mission">
            <div className="about-us-mission-content">
              <h3 className="about-us-mission-heading">Our Mission</h3>
              <p className="about-us-mission-statement">
                To empower businesses with seamless outsourcing solutions that
                drive efficiency, innovation, and sustainable growth while
                fostering a skilled, modern workforce that uplifts the community
              </p>
            </div>
          </div>
          <div className="about-us-vision">
            <div className="about-us-vision-content">
              <h3 className="about-us-vision-heading">Our Vision</h3>
              <p className="about-us-vision-statement">
                To become a global leader in Business Process Outsourcing by
                expanding our services and cultivating a dynamic workforce that
                strengthens businesses and enriches the communities we serve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
