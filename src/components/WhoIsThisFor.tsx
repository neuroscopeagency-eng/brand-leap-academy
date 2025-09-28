import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const WhoIsThisFor = () => {
  const targetAudience = [
    "Office workers who want to escape the 9–5",
    "Managers or professionals looking to start their own business", 
    "Entrepreneurs with an idea but no formal business training",
    "SMEs that can't afford million-dollar agencies"
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Who Is This For?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetAudience.map((text, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-6"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;