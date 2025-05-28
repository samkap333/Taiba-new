import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface AnimatedHeroQuestionsProps {
  onOpenModal: () => void;
}

const questions = [
  "Are you tired of hearing 'maybe later'?",
  "Struggling to close high-value deals?",
  "Need confidence in sales conversations?",
  "Want to triple your revenue this year?"
];

export default function AnimatedHeroQuestions({ onOpenModal }: AnimatedHeroQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-soft-blush/40 to-abby-pink/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative h-32 mb-8">
          {questions.map((question, index) => (
            <h2 
              key={index}
              className={`absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-charcoal transition-all duration-1000 transform ${
                index === currentQuestion 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                animationDelay: `${index * 0.5}s`
              }}
            >
              {question}
            </h2>
          ))}
        </div>
        
        <div className="space-y-6">
          <p className="text-xl text-gray-600 animate-fade-in">
            Transform your sales approach with proven psychology-based strategies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onOpenModal}
              className="bg-deep-pink text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-bounce"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Yes, I Need Help!
            </Button>
            
            <div className="text-sm text-gray-500">
              Free 30-minute clarity call • No commitment required
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-2xl font-bold text-deep-pink">15 min</div>
            <div className="text-sm text-gray-600">Average call booking time</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-2xl font-bold text-deep-pink">24 hrs</div>
            <div className="text-sm text-gray-600">Response guarantee</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-2xl font-bold text-deep-pink">100%</div>
            <div className="text-sm text-gray-600">Confidential</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <div className="text-2xl font-bold text-deep-pink">Free</div>
            <div className="text-sm text-gray-600">No strings attached</div>
          </div>
        </div>
      </div>
    </section>
  );
}