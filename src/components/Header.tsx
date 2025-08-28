import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Agenda", href: "#agenda" },
    { name: "Speakers", href: "#speakers" },
    { name: "Partners", href: "#partners" },
    { name: "Venue", href: "#venue" }
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="bg-accent text-accent-foreground text-center py-2 text-sm">
        Rising Rajasthan is the Official Global IIT Alumni Summit
      </div>
      
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f2f56dfe-467f-4208-be4f-e2c885a82b0f.png" 
              alt="IIT Alumni Logo"
              className="h-10 w-auto animate-float"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Rising Rajasthan</h1>
              <p className="text-xs text-muted-foreground">2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Partner with Us
            </Button>
            <Button className="accent-gradient hover-scale">
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Partner with Us
                </Button>
                <Button className="w-full accent-gradient">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;