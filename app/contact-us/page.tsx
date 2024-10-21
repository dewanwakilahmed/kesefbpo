import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';
import ServicesWeOfferOverview from '@/components/Site/Pages/HomePage/ServicesWeOfferOverview/ServicesWeOfferOverview';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
      <ServicesWeOfferOverview />
    </main>
  );
};

export default ContactUsPage;
