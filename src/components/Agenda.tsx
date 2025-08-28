import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Coffee, Utensils, Gamepad2 } from "lucide-react";

const Agenda = () => {
  const [activeTab, setActiveTab] = useState("day1");

  const day1Events = [
    {
      time: "07:00",
      title: "Registrations & Welcome",
      description: "Rajasthani stoles, tote kits, chai/coffee",
      icon: Coffee,
      type: "registration"
    },
    {
      time: "09:00-10:00",
      title: "Opening Ceremony",
      description: "Folk-fusion, addresses by IIT alumni & state leadership, lamp lighting, AV launch: 'Rising Rajasthan: Powered by AI, Driven by Community'",
      icon: Users,
      type: "ceremony"
    },
    {
      time: "10:00-11:00",
      title: "Networking Break",
      description: "Chai, coffee, local savories",
      icon: Coffee,
      type: "break"
    },
    {
      time: "11:00-12:00",
      title: "Panel 1: AI in Healthcare",
      description: "Predictive diagnosis, rural telemedicine, robotic surgeries",
      icon: Users,
      type: "panel"
    },
    {
      time: "12:15-13:15",
      title: "Panel 2: Governance & AI",
      description: "Policy frameworks; Rajasthan as a governance innovation lab",
      icon: Users,
      type: "panel"
    },
    {
      time: "13:00-15:00",
      title: "Exhibition + Lunch Networking",
      description: "Rajasthani delicacies",
      icon: Utensils,
      type: "meal"
    },
    {
      time: "15:00-16:00",
      title: "Panel 3: AI & Quantum for Cybersecurity & Energy",
      description: "Cyber defence, energy savings",
      icon: Users,
      type: "panel"
    },
    {
      time: "16:15-17:15",
      title: "Panel 4: AI Smart City & Urban Development",
      description: "Traffic, resource allocation, urban safety",
      icon: Users,
      type: "panel"
    },
    {
      time: "17:15",
      title: "High Tea with Live Music",
      description: "Networking and cultural entertainment",
      icon: Coffee,
      type: "break"
    }
  ];

  const parallelExperiences = [
    {
      title: "Startup Pitch Arena",
      location: "Conf Hall 2",
      description: "~12 startups, 30-min slots with VCs/accelerators"
    },
    {
      title: "Exhibition Halls 1 & 2",
      location: "Main Halls",
      description: "Startup booths, sponsor activations, AI demos"
    },
    {
      title: "LAN Gaming Arena",
      location: "Gaming Zone",
      description: "Counter-Strike, AOE, NFS (IIT nostalgia)"
    },
    {
      title: "Garden Activations",
      location: "Outdoor Areas",
      description: "Memory Wall • Chai Sutra Corners • Table Tennis • Chill Lounge • AI Photo Pods • Beer Garden"
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Event Agenda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Two days of immersive sessions, networking, and cultural experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="day1" className="text-s md:text-lg">Day 1 - Sat, 1 Nov 2025</TabsTrigger>
              <TabsTrigger value="day2" className="text-s md:text-lg">Day 2 - Sun, 2 Nov 2025</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1" className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-secondary rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-medium">RIC Jaipur</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Schedule */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-primary mb-4">Main Schedule</h3>
                  {day1Events.map((event, index) => (
                    <Card 
                      key={index}
                      className="hover-lift animate-fade-scale"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start space-x-4">
                          <div className="flex items-center space-x-2 text-accent font-mono text-sm bg-secondary rounded px-2 py-1">
                            <Clock className="w-4 h-4" />
                            {event.time}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-primary">{event.title}</CardTitle>
                            <CardDescription className="mt-1">{event.description}</CardDescription>
                          </div>
                          <event.icon className="w-6 h-6 text-accent flex-shrink-0" />
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {/* Parallel Experiences */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary mb-4">Parallel Experiences</h3>
                  <div className="bg-accent/5 rounded-lg p-1">
                    <div className="text-center text-accent font-semibold mb-4 bg-accent/10 rounded p-2">
                      All-Day Experiences
                    </div>
                    {parallelExperiences.map((experience, index) => (
                      <Card 
                        key={index}
                        className="mb-4 hover-lift animate-fade-scale"
                        style={{ animationDelay: `${(index + 10) * 0.05}s` }}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base text-primary">{experience.title}</CardTitle>
                          <div className="flex items-center space-x-1 text-sm text-accent">
                            <MapPin className="w-3 h-3" />
                            <span>{experience.location}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-sm">{experience.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="day2" className="space-y-6">
              <div className="text-center py-16">
                <div className="inline-flex items-center space-x-2 bg-secondary rounded-full px-4 py-2 mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-medium">RIC Jaipur</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Day 2 Schedule</h3>
                <p className="text-muted-foreground">
                  Detailed agenda for Day 2 will be announced soon. Stay tuned for more exciting sessions, workshops, and networking opportunities.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Agenda;