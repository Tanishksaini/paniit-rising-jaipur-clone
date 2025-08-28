import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Partners = () => {
  const sponsors = [
    {
      title: "Supported By",
      logos: [
        "/logos/ministry-education.png",
        "/logos/ministry-defence.png",
        "/logos/department-defence.png"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Platinum Sponsors",
      logos: [
        "/logos/lexlegis.png",
        "/logos/sbi.png",
        "/logos/dubai.png"
      ],
      bgColor: "bg-yellow-50"
    },
    {
      title: "Gold Sponsor",
      logos: [
        "/logos/kotak.png"
      ],
      bgColor: "bg-orange-50"
    },
    {
      title: "Silver Sponsors",
      logos: [
        "/logos/bajaj.png",
        "/logos/aditya-birla.png"
      ],
      bgColor: "bg-gray-50"
    },
    {
      title: "Domain Sponsors",
      logos: [
        "/logos/gail.png",
        "/logos/coal-india.png",
        "/logos/nmdc.png"
      ],
      bgColor: "bg-purple-50"
    },
    {
      title: "Societal Partners",
      logos: [
        "/logos/iit-alumni.png",
        "/logos/iit-startups.png",
        "/logos/wheels.png"
      ],
      bgColor: "bg-green-50"
    },
    {
      title: "Knowledge Partners",
      logos: [
        "/logos/nishith.png",
        "/logos/avalon.png"
      ],
      bgColor: "bg-red-50"
    },
    {
      title: "Media / PR / Radio",
      logos: [
        "/logos/radio-city.png",
        "/logos/media.png",
        "/logos/pr.png"
      ],
      bgColor: "bg-pink-50"
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
            Meet our proud partners and sponsors supporting this event
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sponsors.map((tier, index) => (
            <Card
              key={tier.title}
              className={`hover-lift brand-shadow animate-fade-scale ${tier.bgColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-primary text-xl font-semibold">
                  {tier.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                  {tier.logos.map((logo, i) => (
                    <img
                      key={i}
                      src={logo}
                      alt={`${tier.title} logo`}
                      className="h-12 object-contain"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
