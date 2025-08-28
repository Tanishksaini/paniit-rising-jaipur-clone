import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Mic } from "lucide-react";
import heroImage from "@/assets/hero-rising-rajasthan.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Rising Rajasthan 2025 Conference Venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <div className="w-20 h-20 rounded-full bg-accent"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 rounded-full bg-primary"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground hover-scale">
            <Users className="w-4 h-4 mr-2" />
            Global IIT Alumni Summit
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-scale">
            PAN IIT Rising 
            <span className="block text-accent">Rajasthan 2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 font-light">
            Powered by AI. Driven by Community.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">1–2 November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="font-medium">Rajasthan International Centre, Jaipur</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="accent-gradient hover-scale text-lg px-8 py-3">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover-lift text-lg px-8 py-3">
              Partner with Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 hover-lift p-4 h-auto flex-col">
              <Mic className="w-6 h-6 mb-2 text-accent" />
              <span className="text-sm">Exhibit Your Startup</span>
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 hover-lift p-4 h-auto flex-col">
              <Users className="w-6 h-6 mb-2 text-accent" />
              <span className="text-sm">Nominate to Speak</span>
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 hover-lift p-4 h-auto flex-col">
              <Calendar className="w-6 h-6 mb-2 text-accent" />
              <span className="text-sm">View Agenda</span>
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-white/10 hover-lift p-4 h-auto flex-col">
              <MapPin className="w-6 h-6 mb-2 text-accent" />
              <span className="text-sm">Venue Details</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;