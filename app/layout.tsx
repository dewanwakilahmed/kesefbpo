import type { Metadata } from 'next';
import { ReactNode, FC } from 'react';
import { Open_Sans } from 'next/font/google';

import '@/app/globals.css';

const primaryFont = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Innovative BPO Solutions | Kesef BPO',
  description:
    'Transforming business operations with cutting-edge outsourcing solutions tailored to your business needs',
};

interface RootlayoutProps {
  children: ReactNode;
}

const RootLayout: FC<Readonly<RootlayoutProps>> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
