import React, { FC } from 'react';

// CSS
import './about-us-page.css';

// Sections
import AboutUsHero from '@/components/Site/Pages/AboutUsPage/AboutUsHero/AboutUsHero';

const AboutUsPage: FC = () => {
  return (
    <main className="about-us-page">
      <AboutUsHero />
    </main>
  );
};

export default AboutUsPage;
