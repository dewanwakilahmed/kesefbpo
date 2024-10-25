import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './company-logo.css';

interface CompanyLogoProps {
  className: string;
}

const CompanyLogo: FC<CompanyLogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`${className} company-logo ${primaryFont.className}`}
    >
      <span className="kesef">Kesef</span> <span className="bpo">Bpo</span>
    </Link>
  );
};

export default CompanyLogo;
