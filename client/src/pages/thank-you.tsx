import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Book, Video } from "lucide-react";
import { useLocation } from "wouter";

export default function ThankYou() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blush/30 to-abby-pink/20 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Check className="text-white text-2xl" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-serif">
          Thanks! We'll get back to you soon.
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Meanwhile, enjoy these free resources to help you on your entrepreneurial journey.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-soft-blush/20 border-none hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Book className="text-deep-pink text-2xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Free Sales Guide</h3>
              <p className="text-sm text-gray-600">
                Download our comprehensive guide to confident selling
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-soft-blush/20 border-none hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Video className="text-deep-pink text-2xl mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Masterclass Video</h3>
              <p className="text-sm text-gray-600">
                Watch our exclusive objection handling masterclass
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Button 
          onClick={() => navigate("/")}
          className="bg-deep-pink text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
