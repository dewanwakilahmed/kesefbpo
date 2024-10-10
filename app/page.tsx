import React, { FC } from 'react';

// CSS
import './home-page.css';

// Components
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUsOverview from '@/components/Site/Pages/HomePage/AboutUsOverview/AboutUsOverview';
import ServicesWeOfferOverview from '@/components/Site/Pages/HomePage/ServicesWeOfferOverview/ServicesWeOfferOverview';
import IndustriesWeServeOverview from '@/components/Site/Pages/HomePage/IndustriesWeServeOverview/IndustriesWeServeOverview';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <AboutUsOverview />
      <ServicesWeOfferOverview />
      <IndustriesWeServeOverview />
    </div>
  );
};

export default HomePage;
