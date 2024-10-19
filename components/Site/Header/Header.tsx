import React, { FC, useState } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// Icons
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';

// CSS
import './header.css';

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${primaryFont.className}`}>
      <div className="header-container">
        <Link href="/" className="header-logo">
          <span className="kesef">KESEF</span> <span className="bpo">BPO</span>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="nav-link">
              <Link href="/services-we-offer">Services</Link>
            </li>
            <li className="nav-link">
              <Link href="/industries-we-serve">Industries</Link>
            </li>
            <li className="nav-link">
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link
                className="header-nav-cta btn btn-primary"
                href="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {mobileMenuOpen ? (
          <XMarkIcon
            className="mobile-nav-toggle-btn"
            onClick={toggleMobileMenu}
          />
        ) : (
          <Bars2Icon
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
                <Link href="/services-we-offer" onClick={toggleMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="mobile-nav-link">
                <Link href="/industries-we-serve" onClick={toggleMobileMenu}>
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
                  className="btn btn-primary"
                  href="/contact-us"
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
