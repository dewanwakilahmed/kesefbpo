import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './header.css';

const Header: FC = () => {
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
              <Link className="btn btn-primary" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
