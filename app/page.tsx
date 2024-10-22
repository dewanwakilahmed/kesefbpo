import React, { FC } from 'react';

// CSS
import './home-page.css';

// Sections
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUsOverview from '@/components/Site/Pages/HomePage/AboutUsOverview/AboutUsOverview';
import ServicesWeOfferOverview from '@/components/Site/Pages/HomePage/ServicesWeOfferOverview/ServicesWeOfferOverview';
import IndustriesWeServeOverview from '@/components/Site/Pages/HomePage/IndustriesWeServeOverview/IndustriesWeServeOverview';
import WhyChooseUs from '@/components/Site/Pages/HomePage/WhyChooseUs/WhyChooseUs';

const HomePage: FC = () => {
  return (
    <main className="home-page">
      <HomeHero />
      {/* <AboutUsOverview /> */}
      {/* <ServicesWeOfferOverview /> */}
      {/* <WhyChooseUs /> */}
      {/* <IndustriesWeServeOverview /> */}
    </main>
  );
};

export default HomePage;
