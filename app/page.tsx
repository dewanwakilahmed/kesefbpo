import React, { FC } from 'react';

// CSS
import './home-page.css';

// Components
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';

const HomePage: FC = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeHero />
    </div>
  );
};

export default HomePage;
