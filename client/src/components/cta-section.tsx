import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CTASectionProps {
  onOpenModal: () => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-baby-pink via-soft-blush to-off-white relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-deep-pink/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-pink/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-deep-pink/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-16 border border-deep-pink/10 shadow-2xl">
          <div className="inline-block bg-deep-pink/10 text-deep-pink px-8 py-3 rounded-full text-sm font-bold mb-8 border border-deep-pink/20">
            Limited Time Offer
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-charcoal leading-tight">
            Stop Struggling.<br/>
            Start <span className="text-deep-pink font-serif italic">Selling</span> with Confidence.
          </h2>
          
          <p className="text-2xl md:text-3xl mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Book your FREE strategy call today and discover the exact psychology-based system that's helped 500+ women entrepreneurs 3X their revenue.
          </p>
          
          <div className="space-y-8">
<Button 
  onClick={onOpenModal}
  size="lg"
  className="bg-deep-pink text-white text-sm sm:text-base md:text-xl font-semibold sm:font-bold px-4 sm:px-8 md:px-16 py-3 sm:py-5 md:py-6 rounded-full w-[90%] sm:w-auto mx-auto flex items-center justify-center shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
>
  Book My FREE Strategy Call Now
</Button>

            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">•</span>
                <span className="font-semibold">No Sales Pitch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">•</span>
                <span className="font-semibold">100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">•</span>
                <span className="font-semibold">Instant Value</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-soft-blush/40 to-baby-pink/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-deep-pink/10">
              <h3 className="text-2xl font-bold text-deep-pink mb-6">
                What You'll Get in Your FREE Session:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-charcoal">
                <div className="text-center">
                  <div className="w-12 h-12 bg-deep-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="font-semibold">Clear Sales Strategy</div>
                  <div className="text-sm text-gray-600">Personalized action plan</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="font-semibold">Mindset Breakthrough</div>
                  <div className="text-sm text-gray-600">Overcome sales blocks</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-baby-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="font-semibold">Revenue Growth Plan</div>
                  <div className="text-sm text-gray-600">Immediate implementation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
