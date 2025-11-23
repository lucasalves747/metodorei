import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Method } from "@/components/Method";
import { Wealth } from "@/components/Wealth";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Speakers } from "@/components/Speakers";
import { FAQ } from "@/components/FAQ";
import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PainPoints />
      <Method />
      <Wealth />
      <HowItWorks /> 
      <Testimonials />
      <Speakers />
      <FAQ />
      <EventDetails />
      <Footer />
    </div>
  );
};

export default Index;
