import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, Users, Wifi } from "lucide-react";

const Venue = () => {
  const features = [
    {
      icon: Building,
      title: "World-Class Infrastructure",
      description: "Multiple auditoriums and exhibition halls"
    },
    {
      icon: Users,
      title: "Networking Spaces",
      description: "Landscaped areas for meaningful connections"
    },
    {
      icon: MapPin,
      title: "Central Location",
      description: "Easily accessible from across Jaipur"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed connectivity and tech facilities"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Venue
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold text-primary">
              Rajasthan International Centre (RIC), Jaipur
            </h3>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Central, world-class infrastructure, multiple auditoriums, exhibition halls, and landscaped networking spaces
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="hover-lift brand-shadow animate-fade-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-scale">
            <Card className="p-6 hover-lift brand-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Venue imagery coming soon</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    Rajasthan International Centre<br />
                    Jaipur, Rajasthan, India
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Getting There</h4>
                  <p className="text-muted-foreground">
                    Easy access from Jaipur Airport and railway station. Detailed directions will be provided upon registration.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;