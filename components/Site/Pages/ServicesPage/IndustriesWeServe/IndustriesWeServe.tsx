import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './industries-we-serve.css';

const IndustriesWeServe: FC = () => {
  return (
    <section className="industries-we-serve">
      <div className="industries-we-serve-container">
        <h2
          className={`industries-we-serve-heading ${secondaryFont.className}`}
        >
          Partnering with Industries That Drive Progress
        </h2>
        <p className="industries-we-serve-description">
          At KESEF BPO, we deliver industry-focused solutions that empower
          businesses to excel
        </p>
        <div className="industries-we-serve-content">
          <div className="healthcare">
            <div className="healthcare-content">
              <h3 className="healthcare-heading">Healthcare</h3>
              <p className="healthcare-statement">
                Streamline medical billing, patient support, and appointment
                scheduling with our reliable and secure services
              </p>
            </div>
          </div>
          <div className="technology-it">
            <div className="technology-it-content">
              <h3 className="technology-it-heading">Technology & IT</h3>
              <p className="technology-it-statement">
                Enhance your tech services with our support for software
                development, technical assistance, and IT infrastructure
                management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
