import React, { FC } from 'react';

// CSS
import './services-page.css';

// Sections
import ServicesHero from '@/components/Site/Pages/ServicesPage/ServicesHero/ServicesHero';
import ServicesOverview from '@/components/Site/Pages/ServicesPage/ServicesOverview/ServicesOverview';
import IndustriesWeServe from '@/components/Site/Pages/ServicesPage/IndustriesWeServe/IndustriesWeServe';
import Testimonials from '@/components/Site/Pages/ServicesPage/Testimonials/Testimonials';

const ServicesPage: FC = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesOverview />
      <IndustriesWeServe />
      <Testimonials />
    </main>
  );
};

export default ServicesPage;
