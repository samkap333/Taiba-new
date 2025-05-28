import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-20 pb-20 min-h-screen bg-gradient-to-br from-rose-50 to-blue-50 overflow-hidden">
      {/* Beautiful Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional business coach" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-rose-50/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="text-charcoal animate-slide-in-left">
            <div className="inline-block bg-nykaa-gradient backdrop-blur-sm px-8 py-4 rounded-full text-sm font-bold mb-8 text-white border border-accent-pink/30 shadow-lg">
              #1 Sales Coach for Women Entrepreneurs
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Transform Your
              <span className="block text-deep-pink font-serif italic">Sales Confidence</span>
              <span className="block">Forever</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Join 500+ entrepreneurs who've 3X'd their revenue with psychology-based selling strategies that feel authentic & powerful.
            </p>
            
            <div className="mb-12">
              <Button 
                onClick={onOpenModal}
                size="lg"
                className="bg-nykaa-gradient text-white px-12 py-6 rounded-full hover:scale-105 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Free Strategy Call
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-accent-pink/20 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-deep-pink">500+</div>
                <div className="text-sm text-gray-600 font-medium">Entrepreneurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-pink">300%</div>
                <div className="text-sm text-gray-600 font-medium">Avg Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-baby-pink">8+</div>
                <div className="text-sm text-gray-600 font-medium">Years Expertise</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Taiba Mahmood - Empowering Women Entrepreneurs" 
                className="rounded-3xl shadow-2xl w-full h-[700px] object-cover border-4 border-white"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl max-w-xs border border-accent-pink/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-nykaa-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <div>
                    <div className="font-bold text-charcoal">"Tripled my income!"</div>
                    <div className="text-sm text-gray-600">- Sarah, Life Coach</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 bg-baby-pink text-white p-6 rounded-3xl shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-deep-pink/10 rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent-pink/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-deep-pink/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
