import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AnimatedHeroQuestions from "@/components/animated-hero-questions";
import PainPointsSection from "@/components/pain-points-section";
import AboutSection from "@/components/about-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import TargetAudienceSection from "@/components/target-audience-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import ClarityCallModal from "@/components/clarity-call-modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation onOpenModal={() => setIsModalOpen(true)} />
      <HeroSection onOpenModal={() => setIsModalOpen(true)} />
      <AnimatedHeroQuestions onOpenModal={() => setIsModalOpen(true)} />
      <PainPointsSection onOpenModal={() => setIsModalOpen(true)} />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <TargetAudienceSection onOpenModal={() => setIsModalOpen(true)} />
      <TestimonialsSection />
      <CTASection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      <ClarityCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
