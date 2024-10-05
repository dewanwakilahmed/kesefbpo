'use client';

import React, { FC, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Layouts
import SiteLayout from '@/components/Site/SiteLayout';
import AppLayout from '@/components/App/AppLayout';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isAppRoute = pathname.startsWith('/app');

  return (
    <>
      {isAppRoute ? (
        <AppLayout>{children}</AppLayout>
      ) : (
        <SiteLayout>{children}</SiteLayout>
      )}
    </>
  );
};

export default Layout;
