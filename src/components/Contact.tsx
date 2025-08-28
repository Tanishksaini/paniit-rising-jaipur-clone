import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "piwot@paniit.org",
      href: "mailto:piwot@paniit.org"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 81786 74744",
      href: "tel:+918178674744"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "112, Nalanda Apartments, IIT Delhi, Hauz Khas, New Delhi – 110016",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Twitter, name: "X (Twitter)", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-up">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-scale">
            Get in touch with the Pan IIT Alumni India team
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Pan IIT Alumni India</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={info.title}
                      className="hover-lift brand-shadow animate-fade-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-primary">{info.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {info.href.startsWith('#') ? (
                                info.detail
                              ) : (
                                <a 
                                  href={info.href} 
                                  className="text-accent hover:underline"
                                >
                                  {info.detail}
                                </a>
                              )}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Website</h4>
                <a 
                  href="https://piwot.paniit.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium"
                >
                  piwot.paniit.org
                </a>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      className="hover-scale animate-fade-scale"
                      style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <Card className="hover-lift brand-shadow animate-fade-scale" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="text-primary">Quick Actions</CardTitle>
                  <CardDescription>Get started with Rising Rajasthan 2025</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full accent-gradient hover-scale">
                    Register Now
                  </Button>
                  <Button variant="outline" className="w-full hover-lift">
                    Partnership Enquiry
                  </Button>
                  <Button variant="outline" className="w-full hover-lift">
                    Speaker Nomination
                  </Button>
                  <Button variant="outline" className="w-full hover-lift">
                    Startup Exhibition
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift brand-shadow animate-fade-scale" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <CardTitle className="text-primary">Stay Updated</CardTitle>
                  <CardDescription>Get the latest updates about the event</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Follow our social media channels and visit our website for the latest announcements, speaker reveals, and event updates.
                  </p>
                  <Button variant="outline" className="w-full hover-lift">
                    Subscribe to Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;