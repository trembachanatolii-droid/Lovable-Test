import { Button } from "@/components/ui/button";
import heroBuilding from "@/assets/hero-building.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBuilding}
          alt="Law firm building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center text-white py-20">
        <h1 className="mb-6 font-bold">
          Trusted Legal Counsel for Your Most Important Matters
        </h1>
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto serif-text">
          Trembach Law Firm delivers strategic legal solutions backed by decades of experience across complex business transactions, litigation, and regulatory matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white border-none px-8"
          >
            Schedule a Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-8"
          >
            Our Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
