import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';
import ContactUsForm from '@/components/Site/Pages/ContactUsPage/ContactUsForm/ContactUsForm';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
      <ContactUsForm />
    </main>
  );
};

export default ContactUsPage;
