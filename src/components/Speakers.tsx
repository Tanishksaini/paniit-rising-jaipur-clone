import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Spotlighting IIT alumni leaders, unicorn founders, policy architects, and global tech voices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <Card 
              key={index}
              className="hover-lift brand-shadow animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 animate-shimmer"></div>
                <CardTitle className="text-primary">Speaker {index}</CardTitle>
                <CardDescription>Title & Company</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm">
                  Bio and expertise details coming soon
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Final speaker lineup will be announced soon. Stay tuned for exciting announcements!
          </p>
          <Button size="lg" className="accent-gradient hover-scale">
            Nominate a Speaker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;