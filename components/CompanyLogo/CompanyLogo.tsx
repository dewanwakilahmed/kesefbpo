import React, { FC } from 'react';
import Link from 'next/link';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './company-logo.css';

const CompanyLogo: FC = () => {
  return (
    <Link href="/" className={`company-logo ${primaryFont.className}`}>
      <span className="kesef">Kesef</span> <span className="bpo">Bpo</span>
    </Link>
  );
};

export default CompanyLogo;
