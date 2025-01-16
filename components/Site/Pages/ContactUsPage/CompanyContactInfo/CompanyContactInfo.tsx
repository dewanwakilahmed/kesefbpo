import React, { FC } from 'react';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// Icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

// CSS
import './company-contact-info.css';

const CompanyContactInfo: FC = () => {
  return (
    <section className="company-contact-info">
      <div className="company-contact-info-container">
        <h2
          className={`company-contact-info-heading ${secondaryFont.className}`}
        >
          Reach Out to Us Directly
        </h2>
        <p className="company-contact-info-description">
          Have questions or need assistance? Reach out directly for quick and
          personalized support
        </p>

        <div className={`company-contact-details ${secondaryFont.className}`}>
          <div className="company-contact-email">
            <FaEnvelope className="company-contact-email-icon" />
            <p>
              <a
                className="company-contact-email-address"
                href="mailto:info@kesefbpo.com"
              >
                info@kesefbpo.com
              </a>
            </p>
          </div>
          <div className="company-contact-phone">
            <FaPhoneAlt className="company-contact-phone-icon" />
            <a
              href="tel:+8801799674891"
              className="company-contact-phone-number"
            >
              +88 017 9967 4891
            </a>
          </div>
          <div className="company-contact-hours">
            <FaClock className="company-contact-hours-icon" />
            <p className="company-contact-hours-details">
              Mon-Fri: 8 PM - 5 AM GMT+6
            </p>
          </div>
        </div>

        <div className={`company-location ${secondaryFont.className}`}>
          <div className="company-location-address">
            <FaMapMarkerAlt className="company-location-address-icon" />
            <p className="company-location-address-details">
              House # 58, Road # 13, Sector # 12, Uttara Model Town, Dhaka -
              1230
            </p>
          </div>
          <div className="company-location-map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Sector 12, Uttara, Dhaka&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyContactInfo;
