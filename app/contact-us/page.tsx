import React, { FC } from 'react';

// CSS
import './contact-us-page.css';

// Sections
import ContactUsHero from '@/components/Site/Pages/ContactUsPage/ContactUsHero/ContactUsHero';
import ContactUsForm from '@/components/Site/Pages/ContactUsPage/ContactUsForm/ContactUsForm';
import CompanyContactInformation from '@/components/Site/Pages/ContactUsPage/CompanyContactInformation/CompanyContactInformation';

const ContactUsPage: FC = () => {
  return (
    <main className="contact-us-page">
      <ContactUsHero />
      <ContactUsForm />
      <CompanyContactInformation />
    </main>
  );
};

export default ContactUsPage;
