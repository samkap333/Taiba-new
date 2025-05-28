import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Briefcase, Rocket } from "lucide-react";

interface TargetAudienceSectionProps {
  onOpenModal: () => void;
}

const audiences = [
  {
    icon: Building2,
    title: "Corporate Teams",
    subtitle: "Sales Training for Companies",
    description: "Transform your entire sales team with proven methodologies. Perfect for companies wanting to boost revenue and improve team performance.",
    benefits: ["Team workshops", "Custom training programs", "Performance tracking"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    subtitle: "Scale Your Business",
    description: "Master sales leadership and build systems that work without you. Ideal for business owners ready to scale beyond personal selling.",
    benefits: ["Sales systems", "Team leadership", "Scalable processes"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Users,
    title: "Entrepreneurs",
    subtitle: "Launch with Confidence",
    description: "Perfect for coaches, consultants, and service providers who want to sell authentically and build sustainable revenue streams.",
    benefits: ["Authentic selling", "Confidence building", "Revenue growth"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    icon: Rocket,
    title: "Sales Beginners",
    subtitle: "Start Your Journey",
    description: "New to sales? Learn foundational skills and build confidence from day one. No experience required - just willingness to grow.",
    benefits: ["Foundation building", "Skill development", "Confidence boost"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

export default function TargetAudienceSection({ onOpenModal }: TargetAudienceSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-abby-pink/10 to-soft-blush/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Who Can Benefit from <span className="text-deep-pink font-serif italic">Our Programs?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're starting your sales journey or leading a team, we have the right solution for your growth stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 group overflow-hidden"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={audience.image} 
                  alt={`${audience.title} illustration`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-pink/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <audience.icon className="text-white text-2xl" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-1 group-hover:text-deep-pink transition-colors duration-300">
                  {audience.title}
                </h3>
                <p className="text-sm text-deep-pink font-semibold mb-3">
                  {audience.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {audience.description}
                </p>
                
                <ul className="space-y-1 mb-4">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-deep-pink rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={onOpenModal}
                  size="sm"
                  className="w-full bg-deep-pink text-white rounded-full hover:bg-pink-600 transition-colors duration-200 text-xs font-semibold"
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Not Sure Which Program is Right for You?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free clarity call and we'll help you identify the perfect path based on your current situation and goals.
            </p>
            <Button 
              onClick={onOpenModal}
              className="bg-deep-pink text-white px-10 py-4 rounded-full hover:bg-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Find My Perfect Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}