const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-slide-up">
            About Rising Rajasthan 2025
          </h2>
          
          <div className="text-lg md:text-xl text-foreground leading-relaxed animate-fade-scale space-y-6">
            <p>
              Rising Rajasthan 2025 is the <span className="text-accent font-semibold">flagship global summit</span> of PanIIT Alumni India in collaboration with the Government of Rajasthan.
            </p>
            
            <p>
              Across two immersive days, <span className="text-primary font-semibold">IIT alumni, industry leaders, policymakers, investors, startups, and students</span> converge to explore how AI & emerging technologies can reshape governance, business, and everyday life—starting in Rajasthan, scaling to the world.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="card-gradient rounded-lg p-6 hover-lift brand-shadow">
                <div className="text-accent text-4xl font-bold mb-2">AI</div>
                <div className="text-primary font-semibold mb-2">Powered by Technology</div>
                <div className="text-muted-foreground text-sm">
                  Exploring cutting-edge AI applications across healthcare, governance, and smart cities
                </div>
              </div>
              
              <div className="card-gradient rounded-lg p-6 hover-lift brand-shadow">
                <div className="text-accent text-4xl font-bold mb-2">IIT</div>
                <div className="text-primary font-semibold mb-2">Driven by Community</div>
                <div className="text-muted-foreground text-sm">
                  Leveraging the global IIT alumni network for innovation and collaboration
                </div>
              </div>
              
              <div className="card-gradient rounded-lg p-6 hover-lift brand-shadow">
                <div className="text-accent text-4xl font-bold mb-2">RJ</div>
                <div className="text-primary font-semibold mb-2">Rooted in Rajasthan</div>
                <div className="text-muted-foreground text-sm">
                  Building on Rajasthan's heritage while pioneering its digital future
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;