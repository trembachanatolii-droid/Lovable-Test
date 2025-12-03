import React from 'react';
import AboutTitle from './AboutTitle';
import { MotionProvider } from './MotionContext';

// Trade & Customs Law focused pillars
const JusticePillars: React.FC = () => {
  return (
    <MotionProvider>
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
    </MotionProvider>
  );
};

export default JusticePillars;