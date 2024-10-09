import React, { FC } from 'react';

// CSS
import './home-page.css';

// Components
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUsOverview from '@/components/Site/Pages/HomePage/AboutUsOverview/AboutUsOverview';
import ServicesWeOfferOverview from '@/components/Site/Pages/HomePage/ServicesWeOfferOverview/ServicesWeOfferOverview';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <AboutUsOverview />
      <ServicesWeOfferOverview />
    </div>
  );
};

export default HomePage;
