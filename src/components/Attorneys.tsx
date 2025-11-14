import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";
import attorney4 from "@/assets/attorney-4.jpg";

const attorneys = [
  {
    name: "Michael Trembach",
    title: "Managing Partner",
    specialization: "Corporate Law & M&A",
    image: attorney1,
    bio: "Over 25 years of experience advising Fortune 500 companies on complex transactions."
  },
  {
    name: "Sarah Richardson",
    title: "Senior Partner",
    specialization: "Commercial Litigation",
    image: attorney2,
    bio: "Nationally recognized trial lawyer with numerous multi-million dollar verdicts."
  },
  {
    name: "David Chen",
    title: "Partner",
    specialization: "Intellectual Property",
    image: attorney3,
    bio: "Former USPTO examiner with deep technical expertise in patent prosecution."
  },
  {
    name: "Jennifer Martinez",
    title: "Partner",
    specialization: "Real Estate & Finance",
    image: attorney4,
    bio: "Extensive experience in commercial real estate development and financing."
  }
];

const Attorneys = () => {
  return (
    <section id="attorneys" className="section-spacing py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold mb-4">Our Attorneys</h2>
          <p className="text-lg text-hk-dark-gray max-w-3xl mx-auto">
            Our team of accomplished attorneys brings decades of combined experience and a commitment to achieving exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-primary font-semibold text-lg mb-1">{attorney.name}</h3>
              <p className="text-accent font-semibold text-sm mb-1">{attorney.title}</p>
              <p className="text-hk-medium-gray text-sm mb-3">{attorney.specialization}</p>
              <p className="text-hk-dark-gray text-sm leading-relaxed">
                {attorney.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
