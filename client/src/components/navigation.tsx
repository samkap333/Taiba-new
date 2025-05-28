import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenModal: () => void;
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-deep-pink font-serif">Taiba Mahmood</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-charcoal hover:text-deep-pink transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-charcoal hover:text-deep-pink transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-charcoal hover:text-deep-pink transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-charcoal hover:text-deep-pink transition-colors duration-200"
              >
                Testimonials
              </button>
              <Button 
                onClick={onOpenModal}
                className="bg-deep-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200 font-medium"
              >
                Book a Call
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-charcoal hover:text-deep-pink transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-charcoal hover:text-deep-pink transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-charcoal hover:text-deep-pink transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-charcoal hover:text-deep-pink transition-colors w-full text-left"
              >
                Testimonials
              </button>
              <Button 
                onClick={onOpenModal}
                className="w-full mt-2 bg-deep-pink text-white rounded-full hover:bg-pink-600"
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
