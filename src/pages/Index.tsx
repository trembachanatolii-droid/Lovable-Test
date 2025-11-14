import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Attorneys from "@/components/Attorneys";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Attorneys />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
