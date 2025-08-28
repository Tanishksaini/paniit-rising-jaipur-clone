import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import Agenda from "@/components/Agenda";
import StartupSpotlight from "@/components/StartupSpotlight";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import Speakers from "@/components/Speakers";
import Partners from "@/components/Partners";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StatsRow />
        <About />
        <Tracks />
        <Agenda />
        <StartupSpotlight />
        <WhoShouldAttend />
        <Speakers />
        <Partners />
        <Venue />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
