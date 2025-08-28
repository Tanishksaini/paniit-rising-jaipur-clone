import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, DollarSign, Building, Users, GraduationCap, BookOpen, School } from "lucide-react";

const WhoShouldAttend = () => {
  const attendees = [
    {
      icon: Rocket,
      title: "Startups & Founders",
      description: "Scale your startup, find investors, and connect with mentors",
      color: "text-orange-500"
    },
    {
      icon: DollarSign,
      title: "Investors & VCs",
      description: "Discover promising startups and investment opportunities",
      color: "text-green-500"
    },
    {
      icon: Building,
      title: "Corporates & CXOs",
      description: "Explore partnerships and innovation opportunities",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Policymakers & Civil Servants",
      description: "Shape policies for tech-enabled governance",
      color: "text-purple-500"
    },
    {
      icon: BookOpen,
      title: "Academics & Researchers",
      description: "Bridge research with real-world applications",
      color: "text-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "IIT Alumni",
      description: "Connect with your global network and give back",
      color: "text-red-500"
    },
    {
      icon: School,
      title: "Students",
      description: "Learn from industry leaders and explore opportunities",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Who Should Attend
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Rising Rajasthan brings together diverse stakeholders in the innovation ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {attendees.map((attendee, index) => (
            <Card 
              key={attendee.title}
              className="hover-lift brand-shadow animate-fade-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-secondary group-hover:scale-110 transition-transform duration-300`}>
                    <attendee.icon className={`w-8 h-8 ${attendee.color}`} />
                  </div>
                </div>
                <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300">
                  {attendee.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="leading-relaxed">
                  {attendee.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;