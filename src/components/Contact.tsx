import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing py-20 bg-hk-off-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-hk-dark-gray mb-8">
              Get in touch with our team to discuss your legal needs. We're here to provide the guidance and representation you deserve.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Our Office</h3>
                  <p className="text-hk-dark-gray">
                    1200 Madison Avenue<br />
                    New York, NY 10016
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-hk-dark-gray">(212) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-hk-dark-gray">info@trembach.law</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8">
            <h3 className="text-primary font-semibold text-xl mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="border-hk-light-gray"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-hk-light-gray"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  className="border-hk-light-gray"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border-hk-light-gray"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-accent text-white border-none"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
