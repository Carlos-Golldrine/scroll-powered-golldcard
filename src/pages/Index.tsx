import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <HeroSection />
      <AnimatedCounter />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <OfferSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
