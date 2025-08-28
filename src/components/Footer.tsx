import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    "Event": [
      { name: "About", href: "#about" },
      { name: "Tracks", href: "#tracks" },
      { name: "Agenda", href: "#agenda" },
      { name: "Speakers", href: "#speakers" }
    ],
    "Participate": [
      { name: "Register", href: "#register" },
      { name: "Partnership", href: "#partners" },
      { name: "Exhibition", href: "#exhibition" },
      { name: "Speaking", href: "#speakers" }
    ],
    "Information": [
      { name: "Venue", href: "#venue" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
      { name: "Updates", href: "#updates" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f2f56dfe-467f-4208-be4f-e2c885a82b0f.png" 
                alt="IIT Alumni Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Rising Rajasthan 2025</h3>
                <p className="text-primary-foreground/70 text-sm">Powered by AI. Driven by Community.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              The flagship global summit of PanIIT Alumni India in collaboration with the Government of Rajasthan. Join 2,000+ delegates for two days of innovation, networking, and transformation.
            </p>
            <div className="text-sm text-primary-foreground/70">
              <p className="mb-1">📅 1–2 November 2025</p>
              <p>📍 Rajasthan International Centre, Jaipur</p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/70">
            <p>&copy; 2025 Pan IIT Alumni India. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;