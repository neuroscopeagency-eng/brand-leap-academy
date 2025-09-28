import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-hero-gradient">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card-gradient border-border shadow-glow p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            Don't waste <span className="text-primary">$100k</span> on an MBA.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Learn from proven billion-dollar brand research.
          </p>
          
          <Button 
            variant="cta" 
            size="xl"
            className="animate-glow text-lg px-12 py-6 h-auto"
          >
            Invest Now
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join the founding members who are already building billion-dollar brands
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CtaSection;