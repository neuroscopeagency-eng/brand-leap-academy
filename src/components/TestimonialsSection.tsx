import { Card } from "@/components/ui/card";
import { Building2, Star } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    isPlaceholder: true,
    title: "Your Business Here",
    subtitle: "Be the first founding member"
  }, {
    isPlaceholder: false,
    title: "TechStart Co.",
    subtitle: "Early Member"
  }, {
    isPlaceholder: false,
    title: "Brand Innovators",
    subtitle: "Founding Member"
  }, {
    isPlaceholder: false,
    title: "Digital Agency Pro",
    subtitle: "Charter Member"
  }, {
    isPlaceholder: false,
    title: "Growth Partners",
    subtitle: "Pioneer Member"
  }];
  return <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">First 5 Members, Get Advantage </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => <Card key={index} className={`
                bg-card-gradient border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6 text-center
                ${testimonial.isPlaceholder ? 'border-primary/50 bg-primary/5' : ''}
              `}>
              <div className="flex flex-col items-center space-y-4">
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${testimonial.isPlaceholder ? 'bg-primary/20' : 'bg-secondary'}
                `}>
                  <Building2 className={`
                    w-8 h-8 
                    ${testimonial.isPlaceholder ? 'text-primary' : 'text-muted-foreground'}
                  `} />
                </div>
                
                <div>
                  <h3 className={`
                    font-semibold text-lg
                    ${testimonial.isPlaceholder ? 'text-primary' : 'text-foreground'}
                  `}>
                    {testimonial.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.subtitle}
                  </p>
                </div>
                
                {!testimonial.isPlaceholder && <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;