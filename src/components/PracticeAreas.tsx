import { Briefcase, Building2, FileText, Scale, ShieldCheck, Users } from "lucide-react";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Corporate & Business Law",
    description: "Comprehensive legal guidance for mergers, acquisitions, corporate governance, and commercial transactions."
  },
  {
    icon: Scale,
    title: "Litigation & Dispute Resolution",
    description: "Aggressive representation in complex commercial litigation, arbitration, and mediation matters."
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Full-service support for property transactions, development projects, and real estate financing."
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description: "Strategic counsel on navigating regulatory frameworks and ensuring corporate compliance."
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets."
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Guidance on employment agreements, workplace policies, and labor relations."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="section-spacing py-20 bg-hk-off-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold mb-4">Our Practice Areas</h2>
          <p className="text-lg text-hk-dark-gray max-w-3xl mx-auto">
            Trembach Law Firm offers sophisticated legal services across a broad spectrum of practice areas, serving clients nationally and internationally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-white p-8 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="mb-4 text-accent group-hover:text-secondary transition-smooth">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-primary font-semibold mb-3">{area.title}</h3>
                <p className="text-hk-dark-gray text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
