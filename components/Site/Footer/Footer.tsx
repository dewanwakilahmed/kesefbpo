import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// Icons
import {
  RiPhoneFill,
  RiMailFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiFacebookFill,
  RiInstagramFill,
  RiCopyrightLine,
} from 'react-icons/ri';

// CSS
import './footer.css';

// Component
import CompanyLogo from '@/components/CompanyLogo/CompanyLogo';

// Content
const quickLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];

const servicesLinks = [
  {
    label: 'Sales & Telemarketing',
    href: '/services/sales-telemarketing',
  },
  {
    label: 'Back Office Support',
    href: '/services/back-office-support',
  },
  {
    label: 'Virtual Assistance',
    href: '/services/virtual-assistance',
  },
  {
    label: 'Customer Support',
    href: '/services/customer-support',
  },
  {
    label: 'IT & Technical Support',
    href: '/services/it-technical-support',
  },
  {
    label: 'Digital Marketing',
    href: '/services/digital-marketing',
  },
  {
    label: 'Data Entry & Management',
    href: '/services/data-entry-management',
  },
  {
    label: 'Finance & Accounting',
    href: '/services/finance-accounting',
  },
];

const industriesLinks = [
  {
    label: 'Banking, Finance, and Insurance',
    href: '/industries/banking-finance-insurance',
  },
  {
    label: 'Retail and E-commerce',
    href: '/industries/retail-ecommerce',
  },
  {
    label: 'Logistics and Shipping',
    href: '/industries/logistics-shipping',
  },
  {
    label: 'Utilities',
    href: '/industries/utilities',
  },
  {
    label: 'Travel and Hospitality',
    href: '/industries/travel-hospitality',
  },
  {
    label: 'Telecommunications and IT Services',
    href: '/industries/telecommunications-it-services',
  },
  {
    label: 'Real Estate',
    href: '/industries/real-estate',
  },
  {
    label: 'Media and Entertainment',
    href: '/industries/media-entertainment',
  },
];

const usefulLinks = [
  {
    label: 'Terms of Service',
    href: '/terms-of-service',
  },
  {
    label: 'Legal Disclaimer',
    href: '/legal-disclaimer',
  },
  {
    label: 'Cookies Policy',
    href: '/cookies-policy',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },
  {
    label: 'Sitemap',
    href: '/sitemap',
  },
];

const socialLinks = [
  {
    icon: <RiTwitterXFill />,
    href: 'https://www.x.com',
  },
  {
    icon: <RiLinkedinFill />,
    href: 'https://www.linkedin.com',
  },
  {
    icon: <RiFacebookFill />,
    href: 'https://www.facebook.com',
  },
  {
    icon: <RiInstagramFill />,
    href: 'https://www.instagram.com',
  },
];

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className={`footer-container ${primaryFont.className}`}>
        <div className="footer-company-info">
          <div className="footer-company-seal">
            <CompanyLogo className="footer-company-logo" />
            <p className="footer-company-description">
              Empowering your business with top-notch outsourcing solutions
            </p>
          </div>
          <p className="footer-phone">
            <RiPhoneFill className="footer-phone-icon" />
            <a className="footer-phone-number" href="tel:+12345678900">
              +1 (234) 567-8900
            </a>
          </p>
          <p className="footer-email">
            <RiMailFill className="footer-email-icon" />
            <a className="footer-email-address" href="mailto:info@kesefbpo.com">
              info@kesefbpo.com
            </a>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-quick-links">
            <h4 className="footer-quick-links-heading">Quick Links</h4>
            <ul className="footer-quick-links-list">
              {quickLinks.map((link, index) => (
                <li
                  key={`footer-quick-link-${index}`}
                  className="footer-quick-links-list-item"
                >
                  <Link className="footer-quick-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services-links">
            <h4 className="footer-services-links-heading">Services We Offer</h4>
            <ul className="footer-services-links-list">
              {servicesLinks.map((link, index) => (
                <li
                  key={`footer-services-link-${index}`}
                  className="footer-services-links-list-item"
                >
                  <Link className="footer-service-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-industries-links">
            <h4 className="footer-industries-links-heading">
              Industries We Serve
            </h4>
            <ul className="footer-industries-links-list">
              {industriesLinks.map((link, index) => (
                <li
                  key={`footer-industries-link-${index}`}
                  className="footer-industries-links-list-item"
                >
                  <Link className="footer-industry-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-useful-links">
            <h4 className="footer-useful-links-heading">Useful Links</h4>
            <ul className="footer-useful-links-list">
              {usefulLinks.map((link, index) => (
                <li
                  key={`footer-useful-link-${index}`}
                  className="footer-useful-links-list-item"
                >
                  <Link className="footer-useful-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-links">
            <h4 className="footer-social-links-heading">Follow Us</h4>
            <ul className="footer-social-links-list">
              {socialLinks.map((link, index) => (
                <li
                  key={`footer-social-link-${index}`}
                  className="footer-social-links-list-item"
                >
                  <a
                    className="footer-social-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-text">
            <RiCopyrightLine className="footer-copyright-icon" />
            2023 - {new Date().getFullYear()} KESEF BPO
          </p>
          <p className="footer-rights-reserved">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
