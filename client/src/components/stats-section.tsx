import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Women Entrepreneurs",
    description: "Successfully coached to confidence"
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Average Revenue Growth",
    description: "Within first 12 months"
  },
  {
    icon: Award,
    number: "95%",
    label: "Success Rate",
    description: "Clients achieve their goals"
  },
  {
    icon: Clock,
    number: "8+",
    label: "Years Experience",
    description: "In sales psychology"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-nykaa-gradient text-white px-8 py-3 rounded-full text-sm font-bold mb-8 border border-accent-pink/30 shadow-lg">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-charcoal">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-700">
            Real numbers from real transformations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-soft-blush/40 to-baby-pink/20 border border-accent-pink/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="text-center p-6">
                <div className="w-16 h-16 bg-nykaa-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-bold mb-2 text-deep-pink">{stat.number}</div>
                <div className="text-lg font-semibold mb-2 text-charcoal">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}