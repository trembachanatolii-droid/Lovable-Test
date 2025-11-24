import React from 'react';
import AboutTitle from './AboutTitle';

// Trade & Customs Law focused pillars
const JusticePillars: React.FC = () => {
  return (
    <section className="about-section">
      <AboutTitle name="Compliance" />
      <AboutTitle name="Trade Strategy" />
      <AboutTitle name="+" />
      <AboutTitle name="Recovery" />
      <AboutTitle name="Customs Defense" />
      <AboutTitle name="Global Solutions" />
    </section>
  );
};

export default JusticePillars;