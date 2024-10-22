import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
      <div className="bg-blue-400 h-96"></div>
    </main>
  );
};

export default ContactUsPage;
