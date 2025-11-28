import React from 'react';
import AboutTitle from './AboutTitle';

// Trade & Customs Law focused pillars
const JusticePillars: React.FC = () => {
  return (
    <section
      className="about-section"
      style={{
        // Add CSS containment to isolate layout calculations and prevent reflows
        contain: 'layout style paint',
        // Ensure proper stacking context
        willChange: 'auto',
      }}
    >
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