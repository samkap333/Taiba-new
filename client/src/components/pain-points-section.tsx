import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, TrendingDown, Clock, Target } from "lucide-react";

interface PainPointsSectionProps {
  onOpenModal: () => void;
}

const painPoints = [
  {
    icon: XCircle,
    question: "Are you struggling with sales?",
    description: "Feeling overwhelmed by rejection and unsure how to approach potential clients confidently?",
    image: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: TrendingDown,
    question: "Not able to close deals?",
    description: "Getting plenty of interest but struggling to convert prospects into paying clients?",
    image: "https://images.pexels.com/photos/7640443/pexels-photo-7640443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Clock,
    question: "Sales taking too much time?",
    description: "Spending countless hours on prospects who never convert, leaving you exhausted and frustrated?",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    icon: Target,
    question: "Can't handle objections?",
    description: "Feeling stuck when prospects say 'maybe later' or 'I need to think about it'?",
    image: "https://images.pexels.com/photos/4491471/pexels-photo-4491471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function PainPointsSection({ onOpenModal }: PainPointsSectionProps) {
  return (
    <section className="py-24 bg-premium-gradient relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxjaXJjbGUgZmlsbD0iI0FEMTM1NyIgY3g9IjUwIiBjeT0iNTAiIHI9IjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-nykaa-gradient text-white px-8 py-3 rounded-full text-sm font-bold mb-8 border border-accent-pink/30 shadow-lg">
            Sales Challenges You Face
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-tight">
            Does This Sound <span className="text-deep-pink font-serif italic">Familiar?</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            You're not alone. These common challenges hold most entrepreneurs back from their true potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {painPoints.map((point, index) => (
            <Card 
              key={index}
              className="bg-white/90 backdrop-blur-sm border border-deep-pink/10 hover:bg-white transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group overflow-hidden shadow-lg hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={point.image} 
                  alt={`${point.question} illustration`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-pink/80 via-accent-pink/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <point.icon className="text-white text-3xl mb-3" />
                  <div className="inline-block bg-white text-accent-pink px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    SOUND FAMILIAR?
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-charcoal group-hover:text-deep-pink transition-colors duration-300">
                  {point.question}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl max-w-4xl mx-auto border border-deep-pink/10">
            <h3 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Ready to Transform These Struggles?
            </h3>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In just 30 minutes, discover how to turn every sales conversation into confident, authentic success.
            </p>
<Button 
  onClick={onOpenModal}
  size="lg"
  className="bg-nykaa-gradient text-white text-sm sm:text-base md:text-xl font-semibold sm:font-bold px-4 sm:px-8 md:px-12 py-3 sm:py-5 md:py-6 rounded-full w-[90%] sm:w-auto mx-auto flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
>
  Get My Free Breakthrough Session
</Button>

            <div className="mt-6 text-accent-pink font-medium">
              Limited spots available this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}