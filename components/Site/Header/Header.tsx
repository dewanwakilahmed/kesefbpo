import React, { FC, useState } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// Icons
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

// CSS
import './header.css';

// Component
import CompanyLogo from '@/components/CompanyLogo/CompanyLogo';

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className={`header-container ${secondaryFont.className}`}>
        <CompanyLogo className="header_container" />

        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="nav-link">
              <Link href="/services">Services</Link>
            </li>
            <li className="nav-link">
              <Link href="/industries">Industries</Link>
            </li>
            <li className="nav-link">
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="header-nav-cta btn btn-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {mobileMenuOpen ? (
          <RiCloseFill
            className="mobile-nav-toggle-btn"
            onClick={toggleMobileMenu}
          />
        ) : (
          <RiMenu3Fill
            className="mobile-nav-toggle-btn"
            onClick={toggleMobileMenu}
          />
        )}

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <hr className="mobile-nav-divider" />
            <ul className="mobile-nav-links">
              <li className="mobile-nav-link">
                <Link href="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="mobile-nav-link">
                <Link href="/about-us" onClick={toggleMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="mobile-nav-link">
                <Link href="/services" onClick={toggleMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="mobile-nav-link">
                <Link href="/industries" onClick={toggleMobileMenu}>
                  Industries
                </Link>
              </li>
              <li className="mobile-nav-link">
                <Link href="/careers" onClick={toggleMobileMenu}>
                  Careers
                </Link>
              </li>
              <li className="mobile-nav-link mobile-nav-cta">
                <Link
                  href="/contact-us"
                  className="btn btn-primary"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
