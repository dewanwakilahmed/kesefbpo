import React, { FC } from 'react';

// CSS
import './about-us-page.css';

// Sections
import AboutUsHero from '@/components/Site/Pages/AboutUsPage/AboutUsHero/AboutUsHero';
import AboutUsIntroduction from '@/components/Site/Pages/AboutUsPage/AboutUsIntroduction/AboutUsIntroduction';
import MissionVision from '@/components/Site/Pages/AboutUsPage/MissionVision/MissionVision';

const AboutUsPage: FC = () => {
  return (
    <main className="about-us-page">
      <AboutUsHero />
      <AboutUsIntroduction />
      <MissionVision />
    </main>
  );
};

export default AboutUsPage;
