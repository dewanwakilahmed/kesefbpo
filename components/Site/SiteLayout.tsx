import React, { FC, ReactNode } from 'react';

// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
