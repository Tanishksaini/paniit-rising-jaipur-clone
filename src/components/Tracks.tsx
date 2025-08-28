import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Building, Cpu, Rocket, Leaf, Factory } from "lucide-react";

const Tracks = () => {
  const tracks = [
    {
      icon: Heart,
      title: "Healthcare & AI",
      description: "Predictive diagnostics, telemedicine at scale, mental-health tech, clinical AI.",
      color: "text-red-500"
    },
    {
      icon: Building,
      title: "Governance & AI",
      description: "Policy frameworks, energy, infra, skilling, and citizen services.",
      color: "text-blue-500"
    },
    {
      icon: Cpu,
      title: "Smart Cities & Better Living",
      description: "Jaipur/Jodhpur/Udaipur as AI-enabled urban hubs.",
      color: "text-purple-500"
    },
    {
      icon: Rocket,
      title: "Startups & MSMEs",
      description: "Scaling playbooks, B2B SaaS GTM, capital & customers.",
      color: "text-orange-500"
    },
    {
      icon: Leaf,
      title: "Energy, Climate & Sustainability",
      description: "Green energy, climate resilience, circular economy.",
      color: "text-green-500"
    },
    {
      icon: Factory,
      title: "Carbon Capital & Future Industries",
      description: "Defence, aerospace, advanced manufacturing.",
      color: "text-gray-600"
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Conference Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Six focused tracks exploring how AI and emerging technologies are transforming key sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card 
              key={track.title}
              className="hover-lift brand-shadow animate-fade-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-300`}>
                    <track.icon className={`w-8 h-8 ${track.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
                      {track.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {track.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;