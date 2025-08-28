import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Lightbulb, Users, Award } from "lucide-react";

const Exhibition = () => {
  const exhibitorTypes = [
    {
      icon: Building,
      title: "Startups",
      description: "Showcase innovative products and solutions to investors and potential customers"
    },
    {
      icon: Lightbulb,
      title: "IIT Incubators",
      description: "Display cutting-edge research and incubated startups from IIT campuses"
    },
    {
      icon: Users,
      title: "Corporate Innovation",
      description: "Present corporate innovation labs and partnership opportunities"
    },
    {
      icon: Award,
      title: "Alumni Social Initiatives",
      description: "Highlight social impact projects and community initiatives"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Exhibition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Showcase products, pilots, and research to a high-intent audience. Expect brand activations, demo pods, and AI-led experiences alongside IIT incubators & corporate innovation teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {exhibitorTypes.map((type, index) => (
            <Card 
              key={type.title}
              className="text-center hover-lift brand-shadow animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-primary">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-primary">Who Exhibits</h3>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="bg-secondary px-4 py-2 rounded-full">Startups</span>
            <span className="bg-secondary px-4 py-2 rounded-full">IIT Incubators</span>
            <span className="bg-secondary px-4 py-2 rounded-full">Corporate Innovation</span>
            <span className="bg-secondary px-4 py-2 rounded-full">Alumni Social Initiatives</span>
          </div>
          <div className="pt-6">
            <Button size="lg" className="accent-gradient hover-scale mr-4">
              Apply to Exhibit
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              View Floor Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;