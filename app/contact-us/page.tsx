import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';
import ContactUsForm from '@/components/Site/Pages/ContactUsPage/ContactUsForm/ContactUsForm';
import CompanyContactInfo from '@/components/Site/Pages/ContactUsPage/CompanyContactInfo/CompanyContactInfo';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
      <ContactUsForm />
      <CompanyContactInfo />
    </main>
  );
};

export default ContactUsPage;
