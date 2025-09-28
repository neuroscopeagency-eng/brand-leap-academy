import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  const videoPlaceholders = [
    "Brand Psychology Fundamentals",
    "Consumer Decision Making",
    "Neuro-Marketing Strategies", 
    "Building Brand Authority"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Master Brand Psychology
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoPlaceholders.map((title, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
            >
              <div className="aspect-video bg-secondary/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;