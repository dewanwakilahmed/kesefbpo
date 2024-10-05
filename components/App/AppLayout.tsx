import React, { FC, ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppLayout;
