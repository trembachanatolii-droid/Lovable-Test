
import React, { memo } from 'react';
import { PracticeArea } from '../types';
import PracticeCard from './PracticeCard';

const practiceAreasData: PracticeArea[] = [
{
title: 'Customs Audits & CBP Verification Defense',
subheading: 'Expert CF-28/CF-29 Response & Focused Assessment Representation',
description: 'Navigate CBP audits with confidence. We defend importers facing CF-28 questionnaires, CF-29 notices, and Focused Assessments with strategic responses that minimize duty exposure and prevent penalties.',
tags: ['CF-28 Response', 'CF-29 Defense', 'Focused Assessments', 'Quick Response Audits'],
imageSlug: 'customs-audits',
imageAlt: 'Two workers in safety gear walking beside stacked shipping containers at a sunlit shipping yard',
slug: 'customs-audits',
imageUrl: '/images/customs-audits.jpg',
},
{
title: 'Section 301 Tariffs & Exclusion Strategies',
subheading: 'Minimize Costs from China Trade War Tariffs',
description: 'Strategic counsel on Section 301 tariff mitigation, exclusion requests, and classification strategies to reduce duty burden from China imports. We help businesses navigate the complex Section 301 landscape.',
tags: ['Section 301', 'China Tariffs', 'Exclusion Requests', 'Tariff Engineering'],
imageSlug: 'section-301-tariffs',
imageAlt: 'Section 301 tariff attorney analyzing China import duties and exclusion strategies',
slug: 'retaliatory-tariffs',
imageUrl: '/images/section-301-tariffs.jpg',
},
{
title: 'Export Controls & Sanctions Compliance',
subheading: 'Navigate EAR, ITAR & OFAC Regulations',
description: 'Comprehensive export controls and sanctions compliance counsel. We guide companies through BIS export licensing, ITAR registration, OFAC sanctions screening, and voluntary disclosures to prevent costly violations.',
tags: ['EAR Compliance', 'ITAR', 'OFAC', 'Export Licensing', 'Voluntary Disclosure'],
imageSlug: 'export-controls',
imageAlt: 'Export controls attorney advising on EAR ITAR OFAC sanctions compliance',
slug: 'export-controls-sanctions',
imageUrl: '/images/export-controls.jpg',
},
{
title: 'Duty Drawback Programs & Recovery',
subheading: 'Recover Millions in Previously Paid Import Duties',
description: 'Maximize refunds through strategic duty drawback programs. We help manufacturers and exporters reclaim duties on unused merchandise, rejected goods, and manufacturing drawback claims.',
tags: ['Manufacturing Drawback', 'Unused Merchandise', 'Rejected Goods', 'Duty Refunds'],
imageSlug: 'duty-drawback',
imageAlt: 'Duty drawback attorney helping recover import duty refunds for manufacturers',
slug: 'duty-drawback',
imageUrl: '/images/duty-drawback.jpg',
},
{
title: 'USMCA & Free Trade Agreement Optimization',
subheading: 'Eliminate Duties Through Trade Agreement Qualification',
description: 'Leverage USMCA and other FTAs to reduce or eliminate import duties. Expert analysis of rules of origin, substantial transformation, and certificate of origin requirements for duty-free treatment.',
tags: ['USMCA', 'Rules of Origin', 'Certificates of Origin', 'FTA Qualification'],
imageSlug: 'usmca-fta',
imageAlt: 'USMCA attorney advising on free trade agreement qualification and certificates of origin',
slug: 'usmca-free-trade-agreements',
imageUrl: '/images/usmca-fta.jpg',
},
{
title: 'Forced Labor Compliance & WRO Defense',
subheading: 'Navigate UFLPA & Supply Chain Due Diligence',
description: 'Defend against Withhold Release Orders and ensure UFLPA compliance. We help importers conduct supply chain due diligence, respond to CBP detentions, and implement forced labor risk mitigation strategies.',
tags: ['UFLPA', 'Withhold Release Orders', 'Supply Chain Due Diligence', 'Forced Labor Defense'],
imageSlug: 'forced-labor-compliance',
imageAlt: 'Forced labor compliance attorney defending importers against UFLPA Withhold Release Orders',
slug: 'entry-wro',
imageUrl: '/images/forced-labor-compliance.jpg',
},
];

const PracticeAreasSection: React.FC = () => {
return (
<section id="practice-areas-section" className="py-20 px-6 bg-white" aria-labelledby="practice-heading">
<div className="max-w-[1376px] mx-auto">
<header className="text-center max-w-[720px] mx-auto mb-20">
<div className="w-20 h-1 bg-primary-navy mx-auto mb-6"></div>
<span className="inline-block text-xl font-semibold text-navy-medium mb-3 tracking-wide" aria-hidden="true">
Our Expertise
</span>
<h2 id="practice-heading" className="font-display text-[42px] font-bold leading-tight text-text-primary mb-5 tracking-tighter">
International Trade & Customs Law Services
</h2>
<p className="text-[21px] leading-relaxed text-text-secondary m-0">
Expert counsel across the most critical areas of international trade compliance, from customs audits to export controls, helping businesses navigate complex regulations while minimizing costs and risks.
</p>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-20">
      {practiceAreasData.map((area) => (
        <PracticeCard key={area.slug} practiceArea={area} />
      ))}
    </div>

    <div className="text-center">
      <a
        href="#practice-areas"
        onClick={(e) => {
           e.preventDefault();
           window.location.hash = '#practice-areas';
        }}
        className="inline-flex items-center gap-3 py-4 px-8 bg-gold-primary text-navy-primary text-[17px] font-semibold rounded-full no-underline transition-all duration-200 hover:bg-gold-bright hover:scale-[1.02] focus:outline focus:outline-3 focus:outline-navy-medium focus:outline-offset-4"
      >
        View All Practice Areas
      </a>
    </div>
  </div>
</section>
);
};

export default memo(PracticeAreasSection);
