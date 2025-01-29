import React, { FC } from 'react';

// CSS
import './home-page.css';

// Sections
import HomeHero from '@/components/Site/Pages/HomePage/HomeHero/HomeHero';
import AboutUsPreview from '@/components/Site/Pages/HomePage/AboutUsPreview/AboutUsPreview';
import ServicesPreview from '@/components/Site/Pages/HomePage/ServicesPreview/ServicesPreview';
import ContactUsPreview from '@/components/Site/Pages/HomePage/ContactUsPreview/ContactUsPreview';

const HomePage: FC = () => {
  return (
    <main className="home-page">
      <HomeHero />
      <AboutUsPreview />
      <ServicesPreview />
      <ContactUsPreview />
    </main>
  );
};

export default HomePage;
