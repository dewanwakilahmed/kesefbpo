import React, { FC } from 'react';

// CSS
import './services-page.css';

// Sections
import ServicesHero from '@/components/Site/Pages/ServicesPage/ServicesHero/ServicesHero';
import ServicesOverview from '@/components/Site/Pages/ServicesPage/ServicesOverview/ServicesOverview';
import IndustriesWeServe from '@/components/Site/Pages/ServicesPage/IndustriesWeServe/IndustriesWeServe';
import WhyChooseUs from '@/components/Site/Pages/AboutUsPage/WhyChooseUs/WhyChooseUs';

const ServicesPage: FC = () => {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesOverview />
      <IndustriesWeServe />
      <WhyChooseUs />
    </main>
  );
};

export default ServicesPage;
