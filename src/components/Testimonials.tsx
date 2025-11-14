import { Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

const testimonials = [
  {
    quote: "Trembach Law Firm's expertise in corporate transactions was instrumental in the successful completion of our merger. Their attention to detail and strategic thinking exceeded our expectations.",
    author: "Robert Anderson",
    position: "CEO, Anderson Technologies Inc.",
    image: client1
  },
  {
    quote: "The litigation team at Trembach delivered an outstanding result in our complex commercial dispute. Their preparation and courtroom presence were exceptional.",
    author: "Patricia Williams",
    position: "General Counsel, Williams Capital Group",
    image: client2
  },
  {
    quote: "We rely on Trembach Law Firm for all our real estate matters. Their knowledge of the market and ability to navigate complex deals is unmatched.",
    author: "James Morrison",
    position: "Managing Director, Morrison Development",
    image: client3
  }
];

const Testimonials = () => {
  return (
    <section className="section-spacing py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-white font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-hk-tertiary max-w-3xl mx-auto">
            Our clients trust us with their most important legal matters. Here's what they have to say about working with Trembach Law Firm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 relative"
            >
              <Quote className="text-accent mb-4" size={32} />
              <p className="text-hk-dark-gray mb-6 leading-relaxed italic serif-text">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-hk-medium-gray">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
