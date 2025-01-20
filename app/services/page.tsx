import React, { FC } from 'react';

// CSS
import './services-page.css';

// Sections
import ServicesHero from '@/components/Site/Pages/ServicesPage/ServicesHero/ServicesHero';

const ServicesPage: FC = () => {
  return (
    <main className="services-page">
      <ServicesHero />
    </main>
  );
};

export default ServicesPage;
