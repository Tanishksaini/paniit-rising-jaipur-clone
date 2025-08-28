import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, BookOpen, Users, Trophy, Briefcase, Building2, Factory, Users2 } from "lucide-react";

const StartupSpotlight = () => {
  const features = [
    {
      icon: Mic,
      title: "Live Pitches",
      description: "Curated founders pitch to VCs & super-angels"
    },
    {
      icon: BookOpen,
      title: "Masterclasses",
      description: "Scaling Tech • B2B SaaS US GTM • Science of Fundraising • How VCs Decide"
    },
    {
      icon: Users,
      title: "Speed Dating",
      description: "1:1 investor-founder meetings"
    },
    {
      icon: Trophy,
      title: "Awards",
      description: "Tech • Product • Growth • Operations"
    }
  ];

  const exhibition = [
    {
      icon: Briefcase,
      title: "Showcase & Demos",
      description:
        "Showcase products, pilots, and research to a high-intent audience. Expect brand activations, demo pods, and AI-led experiences alongside IIT incubators & corporate innovation teams."
    },
    {
      icon: Users2,
      title: "Startups",
      description: "Innovative startups from multiple domains presenting breakthrough products and solutions."
    },
    {
      icon: Building2,
      title: "IIT Incubators",
      description: "Incubated ventures from IITs bringing cutting-edge technology to market."
    },
    {
      icon: Factory,
      title: "Corporate Innovation & Alumni",
      description: "Corporate R&D teams and alumni social initiatives showcasing impactful innovations."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Startup Spotlight Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Startup Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Connect with investors, learn from experts, and showcase your innovation
          </p>
        </div>

        {/* Spotlight Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="text-center hover-lift brand-shadow animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mb-12">
          <Button size="lg" className="accent-gradient hover-scale mr-4">
            Apply to Pitch
          </Button>
          <Button variant="outline" size="lg" className="hover-lift">
            View Investor List
          </Button>
        </div>
        {/* Exhibition Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-slide-up">
            Exhibition
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exhibition.map((item, index) => (
              <Card
                key={item.title}
                className="text-center hover-lift brand-shadow animate-fade-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
       
      </div>
    </section>
  );
};

export default StartupSpotlight;
