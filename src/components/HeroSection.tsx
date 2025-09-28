import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Skip the <span className="text-primary">$100k MBA</span>.{" "}
          <br className="hidden sm:block" />
          Learn brand psychology in{" "}
          <span className="text-primary">minutes</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Neuro Scope Research helps you apply billion-dollar brand strategies 
          without wasting years in classrooms.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="animate-glow text-lg px-12 py-6 h-auto"
        >
          Invest Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;