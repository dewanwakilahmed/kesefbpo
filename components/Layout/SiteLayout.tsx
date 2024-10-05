import React, { FC, ReactNode } from 'react';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default SiteLayout;
