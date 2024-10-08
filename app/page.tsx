import React, { FC } from 'react';

// CSS
import './home-page.css';

// Components
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUs from '@/components/Site/Pages/HomePage/AboutUs/AboutUs';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <AboutUs />
    </div>
  );
};

export default HomePage;
