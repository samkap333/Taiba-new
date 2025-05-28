import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Shield, Edit, Users, Check } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "1-on-1 Sales Coaching",
    description: "Personalized coaching sessions to master your unique sales style and overcome specific challenges.",
    image: "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Weekly 1-hour sessions",
      "Customized action plans",
      "24/7 support access"
    ]
  },
  {
    icon: Shield,
    title: "Objection Handling Mastery",
    description: "Master the art of turning objections into opportunities with proven psychological techniques.",
    image: "https://images.pexels.com/photos/7710088/pexels-photo-7710088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Common objection scripts",
      "Psychology-based responses",
      "Practice scenarios"
    ]
  },
  {
    icon: Edit,
    title: "Sales Copy + Script Audit",
    description: "Get your sales materials professionally reviewed and optimized for maximum conversion.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Detailed copy analysis",
      "Conversion optimization",
      "Rewritten versions"
    ]
  },
  {
    icon: Users,
    title: "Group Coaching Programs",
    description: "Join like-minded entrepreneurs in intensive group coaching sessions and masterclasses.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    features: [
      "Monthly group calls",
      "Peer networking",
      "Resource library"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-abby-pink/10 to-soft-blush/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Transform Your <span className="text-deep-pink font-serif italic">Sales Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of services designed to elevate your sales confidence and business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="text-deep-pink mr-2 h-4 w-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
