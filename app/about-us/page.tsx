import React, { FC } from 'react';

// CSS
import './about-us-page.css';

// Sections
import AboutUsHero from '@/components/Site/Pages/AboutUsPage/AboutUsHero/AboutUsHero';
import AboutUsIntroduction from '@/components/Site/Pages/AboutUsPage/AboutUsIntroduction/AboutUsIntroduction';

const AboutUsPage: FC = () => {
  return (
    <main className="about-us-page">
      <AboutUsHero />
      <AboutUsIntroduction />
    </main>
  );
};

export default AboutUsPage;
