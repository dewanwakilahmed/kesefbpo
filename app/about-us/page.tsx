import React, { FC } from 'react';

// CSS
import './about-us-page.css';

// Sections
import AboutUsHero from '@/components/Site/Pages/AboutUsPage/AboutUsHero/AboutUsHero';
import AboutUsIntroduction from '@/components/Site/Pages/AboutUsPage/AboutUsIntroduction/AboutUsIntroduction';
import MissionVision from '@/components/Site/Pages/AboutUsPage/MissionVision/MissionVision';
import WhyChooseUs from '@/components/Site/Pages/AboutUsPage/WhyChooseUs/WhyChooseUs';

const AboutUsPage: FC = () => {
  return (
    <main className="about-us-page">
      <AboutUsHero />
      <AboutUsIntroduction />
      <MissionVision />
      <WhyChooseUs />
    </main>
  );
};

export default AboutUsPage;
