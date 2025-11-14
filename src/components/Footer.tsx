const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Trembach Law Firm</h3>
            <p className="text-hk-tertiary text-sm">
              Trusted legal counsel for your most important matters.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-hk-tertiary">
              <li><a href="#" className="hover:text-accent transition-smooth">Corporate Law</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Litigation</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Real Estate</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Intellectual Property</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-hk-tertiary">
              <li><a href="#" className="hover:text-accent transition-smooth">Our Firm</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Our Attorneys</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">News & Insights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-hk-tertiary">
              <li>1200 Madison Avenue</li>
              <li>New York, NY 10016</li>
              <li>(212) 555-0123</li>
              <li>info@trembach.law</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hk-secondary pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-hk-tertiary">
          <p>&copy; {currentYear} Trembach Law Firm. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-smooth">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
