import { FC, ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

// Layout
import Layout from '@/components/Layout';

// Font
import { primaryFont } from '@/public/fonts/fonts';

// CSS
import './globals.css';

export const metadata: Metadata = {
  title: 'Streamlining Business - KESEF BPO',
  description: 'Effortless outsourcing solutions to help your business grow.',
};

export const viewport: Viewport = {
  themeColor: '#1F2937',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`body ${primaryFont.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
