import React, { FC } from 'react';

// CSS
import './services-page.css';

// Sections
import ServicesHero from '@/components/Site/Pages/ServicesPage/ServicesHero/ServicesHero';
import ServicesOverview from '@/components/Site/Pages/ServicesPage/ServicesOverview/ServicesOverview';

const ServicesPage: FC = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesOverview />
    </main>
  );
};

export default ServicesPage;
