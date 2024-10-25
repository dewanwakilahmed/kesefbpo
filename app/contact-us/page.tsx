import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
    </main>
  );
};

export default ContactUsPage;
