import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './mission-vision.css';

const MissionVision: FC = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">
        <h2 className={`mission-vision-heading ${secondaryFont.className}`}>
          Empowering Businesses, Enriching Communities
        </h2>
        <p className="mission-vision-description">
          At KESEF BPO, our mission drives us daily, and our vision shapes the
          future we’re building—for businesses and the community alike
        </p>
        <div className="mission-vision-content">
          <div className="mission">
            <div className="mission-content">
              <h3 className="mission-heading">Our Mission</h3>
              <p className="mission-statement">
                To empower businesses with seamless outsourcing solutions that
                drive efficiency, innovation, and sustainable growth while
                fostering a skilled, modern workforce that uplifts the community
              </p>
            </div>
          </div>
          <div className="vision">
            <div className="vision-content">
              <h3 className="vision-heading">Our Vision</h3>
              <p className="vision-statement">
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

export default MissionVision;
