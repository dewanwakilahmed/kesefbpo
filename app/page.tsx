import React, { FC } from 'react';

// CSS
import './home-page.css';

// Sections
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUsPreview from '@/components/Site/Pages/HomePage/AboutUsPreview/AboutUsPreview';

const HomePage: FC = () => {
  return (
    <main className="home-page">
      <HomeHero />
      <AboutUsPreview />
    </main>
  );
};

export default HomePage;
