import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VideoSection />
      <WhoIsThisFor />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
};

export default Index;
