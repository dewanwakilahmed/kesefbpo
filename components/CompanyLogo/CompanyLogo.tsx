import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './company-logo.css';

interface CompanyLogoProps {
  className: string;
}

const CompanyLogo: FC<CompanyLogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${className} company-logo ${secondaryFont.className}`}
    >
      <span className="kesef">Kesef</span> <span className="bpo">Bpo</span>
    </Link>
  );
};

export default CompanyLogo;
