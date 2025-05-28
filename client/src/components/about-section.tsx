import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-soft-blush/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative group">
              <img 
                src="https://www.canva.com/design/DAGou3IQqm4/fwor6zExhRdFxMVdVcPHig/view?utm_content=DAGou3IQqm4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcde4cb951d" 
                alt="Taiba Mahmood - Professional Business Coach" 
                className="rounded-3xl shadow-2xl w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-premium-gradient/20 rounded-3xl group-hover:bg-premium-gradient/10 transition-colors duration-500"></div>
              
              {/* Floating achievement badges */}
              <div className="absolute -top-6 -left-6 bg-yellow-300 p-6 rounded-2xl shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold text-charcoal">500+</div>
                  <div className="text-xs text-charcoal font-medium">Success Stories</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-premium-gradient rounded-full flex items-center justify-center">
                    <Trophy className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">8+ Years</div>
                    <div className="text-xs text-gray-600">Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-premium-gradient text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
                ✨ MEET YOUR TRANSFORMATION PARTNER
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-tight">
                Meet <span className="text-deep-pink font-serif italic">Taiba Mahmood</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                🎯 <strong>The Psychology Behind Sales Success:</strong> With 8+ years of experience in sales psychology, 
                Taiba has cracked the code on why some entrepreneurs struggle while others thrive. Her revolutionary 
                approach has transformed 500+ women entrepreneurs globally.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                🚀 <strong>Proven Track Record:</strong> Her clients don't just learn to sell—they learn to sell 
                authentically and confidently. The result? 95% of her clients achieve 3-5x revenue growth within 
                their first year.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                💎 <strong>Unique Methodology:</strong> Taiba's psychology-based selling strategies eliminate the 
                "icky" feeling from sales conversations, turning them into authentic connections that lead to 
                natural conversions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <Card className="bg-premium-gradient text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="text-center p-8">
                  <GraduationCap className="text-3xl mb-4 mx-auto" />
                  <div className="font-bold text-lg mb-2">Psychology Expert</div>
                  <div className="text-sm opacity-90">Certified Sales Psychology Specialist</div>
                </CardContent>
              </Card>
              
              <Card className="bg-yellow-300 text-charcoal border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="text-center p-8">
                  <Trophy className="text-3xl mb-4 mx-auto" />
                  <div className="font-bold text-lg mb-2">95% Success Rate</div>
                  <div className="text-sm">Guaranteed Results</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
