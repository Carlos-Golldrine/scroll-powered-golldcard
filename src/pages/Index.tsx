import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import LocationsSection from "@/components/LocationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <HeroSection />
      <AnimatedCounter />
      <BenefitsSection />
      <SocialProofSection />
      <LocationsSection />
      <HowItWorksSection />
      <OfferSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
