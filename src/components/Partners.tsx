import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Award, Medal, Star, Briefcase } from "lucide-react";

const Partners = () => {
  const tiers = [
    {
      icon: Crown,
      title: "Title Partner",
      description: "Naming rights, keynote, premium branding, boardroom access",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Award,
      title: "Platinum / Industry Partner",
      description: "Prime branding, panel slot, lounge access",
      color: "text-gray-400",
      bgColor: "bg-gray-50"
    },
    {
      icon: Medal,
      title: "Gold / Silver",
      description: "On-site & digital branding, standees, newsletter features",
      color: "text-orange-400",
      bgColor: "bg-orange-50"
    },
    {
      icon: Star,
      title: "Track Partner / Hackathon Partner",
      description: "Track branding, speaking role, workshop slot",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Briefcase,
      title: "Exhibitors",
      description: "3×3 booth, lead gen, product demos",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Partners & Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Join us as a partner and connect with 2,000+ tech leaders, investors, and innovators
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card 
              key={tier.title}
              className={`hover-lift brand-shadow animate-fade-scale ${tier.bgColor} border-l-4 border-l-current`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-white shadow-sm`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <div>
                    <CardTitle className={`text-primary ${tier.color}`}>
                      {tier.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground leading-relaxed">
                  {tier.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="accent-gradient hover-scale">
            Get the Sponsorship Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;