import React, { FC } from 'react';

// CSS
import './about-us.css';

const AboutUs: FC = () => {
  return (
    <section className="about-us-section py-16 px-4 sm:px-8 lg:px-16 bg-neutral">
      {/* Introduction Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
          Empowering Your Business Growth
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Delivering excellence through tailored business process outsourcing
          solutions that empower businesses to achieve more.
        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="mission-section mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-success mb-3 text-center">
          Our Mission
        </h3>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center">
          To partner with businesses in creating seamless and efficient
          operational processes, enabling them to focus on their core strengths
          and achieve their strategic goals.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="core-values-section bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-lg p-8 mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="value-item">
            <h4 className="text-lg font-semibold text-gray-900">Integrity</h4>
            <p className="text-sm text-gray-600">
              We uphold the highest standards of integrity in all of our
              actions.
            </p>
          </div>
          <div className="value-item">
            <h4 className="text-lg font-semibold text-gray-900">Innovation</h4>
            <p className="text-sm text-gray-600">
              We foster innovation to drive continuous improvement.
            </p>
          </div>
          <div className="value-item">
            <h4 className="text-lg font-semibold text-gray-900">
              Customer-Centric
            </h4>
            <p className="text-sm text-gray-600">
              Our customers are at the heart of everything we do.
            </p>
          </div>
          <div className="value-item">
            <h4 className="text-lg font-semibold text-gray-900">Excellence</h4>
            <p className="text-sm text-gray-600">
              We strive for excellence in every project and every service.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section bg-indigo-100 p-10 rounded-lg">
        <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4 text-center">
          Why Choose Kesef BPO?
        </h3>
        <ul className="list-none text-center text-gray-800 space-y-4 max-w-2xl mx-auto">
          <li>
            <span className="font-bold text-primary">Expertise</span> - We bring
            years of industry experience to every engagement.
          </li>
          <li>
            <span className="font-bold text-primary">Efficiency</span> - Our
            processes are optimized to deliver results quickly and effectively.
          </li>
          <li>
            <span className="font-bold text-primary">Reliability</span> - You
            can trust us to be your dependable outsourcing partner.
          </li>
          <li>
            <span className="font-bold text-primary">Scalability</span> - Our
            solutions are designed to scale as your business grows.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
