import { Users, Mic, DollarSign, Rocket, Target, Sparkles } from "lucide-react";

const StatsRow = () => {
  const stats = [
    { 
      icon: Users, 
      value: "2,000+", 
      label: "Delegates",
      description: "Tech leaders & alumni"
    },
    { 
      icon: Mic, 
      value: "100+", 
      label: "Speakers",
      description: "Industry experts"
    },
    { 
      icon: DollarSign, 
      value: "100+", 
      label: "Investors",
      description: "VCs & super-angels"
    },
    { 
      icon: Rocket, 
      value: "150+", 
      label: "Startups",
      description: "Innovative companies"
    },
    { 
      icon: Target, 
      value: "6", 
      label: "Tracks",
      description: "Focus areas"
    },
    { 
      icon: Sparkles, 
      value: "Expo", 
      label: "Experiences",
      description: "Pitch • Gaming • Activations"
    }
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group hover-glow animate-bounce-in glow-shadow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 animate-pulse-glow gradient-border">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300 animate-float" />
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 animate-gradient bg-clip-text">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;