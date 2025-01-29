import React, { FC } from 'react';
import Image from 'next/image';

// Font
import { secondaryFont } from '@/public/fonts/fonts';

// CSS
import './testimonials.css';

// Content
const testimonialsContent = [
  {
    quote:
      'KESEF BPO transformed the way we handle customer inquiries. Their team is professional, efficient, and always delivers results!',
    author: '- Emily R.',
    role: 'E-commerce Business Owner',
    image: '/images/testimonial-emily.webp',
  },
  {
    quote:
      'Thanks to KESEF BPO’s lead generation services, our sales pipeline is always full. Their expertise has been a game-changer for us',
    author: '- Mark L.',
    role: 'Sales Manager, Real Estate',
    image: '/images/testimonial-mark.webp',
  },
  {
    quote:
      'We partnered with KESEF BPO for web development, and they delivered beyond our expectations. Our online presence has never been stronger!',
    author: '- Sophia T.',
    role: 'IT Startup Founder',
    image: '/images/testimonial-sophia.webp',
  },
  {
    quote:
      'The level of customer support provided by KESEF BPO is outstanding. Our clients consistently praise the responsiveness and professionalism of their team.',
    author: '- Daniel H.',
    role: 'Healthcare Services Manager',
    image: '/images/testimonial-daniel.webp',
  },
];

const Testimonials: FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className={`testimonials-heading ${secondaryFont.className}`}>
          What Our Clients Say
        </h2>
        <p className="testimonials-description">
          Hear how KESEF BPO has empowered businesses to achieve their goals
        </p>
        <div className="testimonials-content">
          {testimonialsContent.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-img-container">
                <Image
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.author}`}
                  width={80}
                  height={80}
                  className="testimonial-img"
                />
              </div>
              <p className={`testimonial-quote ${secondaryFont.className}`}>
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="testimonial-author">
                <h4 className="testimonial-author-name">
                  {testimonial.author}
                </h4>
                <p className="testimonial-author-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
