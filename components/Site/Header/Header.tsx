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
          KESEF BPO
        </Link>

        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services-we-offer">Services</Link>
            </li>
            <li>
              <Link href="/industries-we-serve">Industries</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li className="btn btn-primary">
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
